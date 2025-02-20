import { gql } from "@apollo/client";
// export const GET_IMAGES = gql`
// query GetImages {
//   images {
//     edges {
//       node {
//         author
//         createdAt
//         id
//         liked
//         likesCount
//         picture
//         price
//         title
//         updatedAt
//       }
//       cursor
//     }
//     pageInfo {
//       hasNextPage
//       endCursor
//     }
//   }
// }
// `;

export const GET_IMAGES = gql`
  query GetImages($first: Int!, $after: String) {
    images(first: $first, after: $after) {
      edges {
        node {
          author
          createdAt
          id
          liked
          likesCount
          picture
          price
          title
          updatedAt
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