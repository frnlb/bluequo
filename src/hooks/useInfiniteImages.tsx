import { useQuery, useMutation  } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_IMAGES, LIKE_IMAGE  } from "@/lib/graphql/queries";

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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { loading, error, data, fetchMore } = useQuery(GET_IMAGES, {
    variables: { first: imagesPerPage, title: searchTerm },
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
        title: searchTerm,
      },
    }).then((fetchMoreResult) => {
      const newImages = fetchMoreResult.data.images.edges.map((edge: ImageEdge) => edge.node);
      setImages([...images, ...newImages]);
    });
  };

  const search = (term: string) => {
    setSearchTerm(term);
    setImages([]);
  };

  // handleLike functionality
  const [likeImage] = useMutation(LIKE_IMAGE);

  const handleLike = async (imageId: string) => {
    try {
      const { data } = await likeImage({
        variables: { input: { imageId } },
        update: (cache, { data: likeData }) => {
          const likedImage = likeData.likeImage.image;
          cache.modify({
            id: cache.identify(likedImage),
            fields: {
              liked: () => likedImage.liked,
              likesCount: () => likedImage.likesCount,
            },
          });
        },
      });
      const updatedImage = data.likeImage.image;
      setImages(images.map(img => 
        img.id === imageId ? { ...img, liked: updatedImage.liked, likesCount: updatedImage.likesCount } : img
      ));
  
      return updatedImage.likesCount;
    } catch (error) {
      console.error("Error liking image:", error);
      return null;
    }
  };

  return { 
    loading, 
    error, 
    images, 
    loadMore, 
    search,
    hasNextPage: data?.images?.pageInfo?.hasNextPage,
    handleLike
  };
}
