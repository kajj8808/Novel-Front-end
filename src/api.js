import { gql } from "@apollo/client";

export const getNovels = gql`
  {
    novels {
      _id
      creator
      title
      text
      createBy
      like
      disLike
      poster
    }
  }
`;
