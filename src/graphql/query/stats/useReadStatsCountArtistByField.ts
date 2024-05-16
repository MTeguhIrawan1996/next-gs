import { ApolloError, gql, useQuery } from '@apollo/client';

import { StatsResponse } from './types';

export const COUNT_ARTIST_BY_FIELD = gql`
  query LandingPageCountArtistByFields(
    $year: Int!
    $provinceId: String
    $regencyId: String
  ) {
    landingPageCountArtistByFields(
      landingPageCountArtistByFieldsInput: {
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
  landingPageCountArtistByFields: StatsResponse;
}

export interface Request {
  year: number;
  provinceId?: string;
  regencyId?: string;
}

export const useReadStatsCountArtistByField = (req: Request) => {
  const { data: statsCountArtist, loading: statsCountArtistLoading } = useQuery<
    Response,
    Request
  >(COUNT_ARTIST_BY_FIELD, {
    variables: req,
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  return {
    statsCountArtist,
    statsCountArtistLoading,
  };
};
