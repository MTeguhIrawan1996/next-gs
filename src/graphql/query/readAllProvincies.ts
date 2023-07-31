import { ApolloError, gql, useQuery } from '@apollo/client';

import { IFilterGlobalRequest } from '@/types/global';

export const READ_ALL_PROVINCIES = gql`
  query ReadAllProvincies(
    $page: Float
    $limit: Float
    $search: String
    $orderBy: String
    $orderDir: String
  ) {
    provinces(
      findAllProvinceInput: {
        page: $page
        limit: $limit
        search: $search
        orderBy: $orderBy
        orderDir: $orderDir
      }
    ) {
      data {
        id
        name
      }
    }
  }
`;

export interface IProvincies {
  id: string;
  name: string;
}

export interface ProvincesResponse {
  provinces: {
    data: IProvincies[];
  };
}

export const useReadAllProvincies = (req: IFilterGlobalRequest) => {
  const { data: provinciesData, loading: provinciesLoading } = useQuery<
    ProvincesResponse,
    IFilterGlobalRequest
  >(READ_ALL_PROVINCIES, {
    variables: req,
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  return {
    provinciesData,
    provinciesLoading,
  };
};
