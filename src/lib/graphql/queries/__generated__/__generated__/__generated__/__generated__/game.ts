import * as Types from "../../../../../globalTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetWordCategoriesQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetWordCategoriesQuery = {
  __typename?: "query_root";
  rooms_word_categories: Array<{
    __typename?: "rooms_word_categories";
    type: string;
  }>;
};

export const GetWordCategoriesDocument = gql`
  query getWordCategories {
    rooms_word_categories {
      type
    }
  }
`;

/**
 * __useGetWordCategoriesQuery__
 *
 * To run a query within a React component, call `useGetWordCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWordCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWordCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWordCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetWordCategoriesQuery,
    GetWordCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetWordCategoriesQuery,
    GetWordCategoriesQueryVariables
  >(GetWordCategoriesDocument, options);
}
export function useGetWordCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWordCategoriesQuery,
    GetWordCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetWordCategoriesQuery,
    GetWordCategoriesQueryVariables
  >(GetWordCategoriesDocument, options);
}
export type GetWordCategoriesQueryHookResult = ReturnType<
  typeof useGetWordCategoriesQuery
>;
export type GetWordCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetWordCategoriesLazyQuery
>;
export type GetWordCategoriesQueryResult = Apollo.QueryResult<
  GetWordCategoriesQuery,
  GetWordCategoriesQueryVariables
>;
