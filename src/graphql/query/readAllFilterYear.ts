import { ApolloError, gql, useQuery } from '@apollo/client';

export const READ_ALL_FILTER_YEAR = gql`
  query ReadAllFilterYear {
    activityYears
  }
`;

export interface FilterYearResponse {
  activityYears: number[];
}

export const useReadAllFilterYear = () => {
  const { data: filterYearData, loading: filterYearLoading } =
    useQuery<FilterYearResponse>(READ_ALL_FILTER_YEAR, {
      onError: (err: ApolloError) => {
        return err;
      },
      fetchPolicy: 'cache-first',
    });

  return {
    filterYearData,
    filterYearLoading,
  };
};
