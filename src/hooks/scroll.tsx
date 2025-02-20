import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_IMAGES } from "@/lib/graphql/queries";

interface ImageEdge {
    node: {
      author: string;
      createdAt: string;
      id: string;
      liked: boolean;
      likesCount: number;
      picture: string;
      price: number;
      title: string;
      updatedAt: string;
    };
  }
  

interface Image {
  author: string;
  createdAt: string;
  id: string;
  liked: boolean;
  likesCount: number;
  picture: string;
  price: number;
  title: string;
  updatedAt: string;
}

export function useInfiniteImages(imagesPerPage: number = 10) {
  const [images, setImages] = useState<Image[]>([]);
  const { loading, error, data, fetchMore } = useQuery(GET_IMAGES, {
    variables: { first: imagesPerPage },
  });

  useEffect(() => {
    if (data?.images?.edges) {
      setImages(data.images.edges.map((edge: ImageEdge) => edge.node));
    }
  }, [data]);

  const loadMore = () => {
    fetchMore({
      variables: {
        after: data.images.pageInfo.endCursor,
      },
    }).then((fetchMoreResult) => {
      const newImages = fetchMoreResult.data.images.edges.map((edge: ImageEdge) => edge.node);
      setImages([...images, ...newImages]);
    });
  };

  return { loading, error, images, loadMore, hasNextPage: data?.images?.pageInfo?.hasNextPage };
}
