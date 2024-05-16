import { ApolloError, gql, useQuery } from '@apollo/client';

import { StatsResponse } from './types';

export const COUNT_SUMMARY = gql`
  query landingPageCountSummary(
    $year: Int!
    $provinceId: String
    $regencyId: String
  ) {
    landingPageCountSummary(
      landingPageCountSummaryInput: {
        year: $year
        provinceId: $provinceId
        regencyId: $regencyId
      }
    ) {
      title
      stats {
        legend
        color
        data
      }
    }
  }
`;

export interface Response {
  landingPageCountSummary: StatsResponse[];
}

export interface Request {
  year: number;
  provinceId?: string;
  regencyId?: string;
}

export const useReadStatsCountSummary = (req: Request) => {
  const { data: statsCountSummary, loading: statsCountSummaryLoading } =
    useQuery<Response, Request>(COUNT_SUMMARY, {
      variables: req,
      onError: (err: ApolloError) => {
        return err;
      },
      fetchPolicy: 'cache-first',
    });

  return {
    statsCountSummary,
    statsCountSummaryLoading,
  };
};
