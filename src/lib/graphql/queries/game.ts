import { gql } from "@apollo/client";

export const GET_WORD_CATEGORIES = gql`
  query getWordCategories {
    rooms_word_categories {
      type
    }
  }
`;
