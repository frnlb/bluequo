import { gql } from "@apollo/client";

export const LIKE_IMAGE = gql`
  mutation LikeImage($input: LikeImageInput!) {
    likeImage(input: $input) {
      image {
        id
        liked
        likesCount
      }
    }
  }
`;

export const GET_IMAGES = gql`
  query GetImages($first: Int!, $after: String, $title: String) {
    images(first: $first, after: $after, title: $title) {
      edges {
        node {
          id
          title
          picture
          author
          liked
          likesCount
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;