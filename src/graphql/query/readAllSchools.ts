import { ApolloError, gql, useQuery } from '@apollo/client';

import { IFilterGlobalRequest } from '@/types/global';

export const READ_ALL_SCHOOLS = gql`
  query ReadAllSchools(
    $page: Float
    $limit: Float
    $search: String
    $orderBy: String
    $orderDir: String
    $stageId: String
    $provinceId: String
    $regencyId: String
  ) {
    landingPageSchools(
      findAllSchoolInput: {
        page: $page
        limit: $limit
        search: $search
        orderBy: $orderBy
        orderDir: $orderDir
        stageId: $stageId
        provinceId: $provinceId
        regencyId: $regencyId
      }
    ) {
      data {
        id
        name
      }
    }
  }
`;

export interface ISchools {
  id: string;
  name: string;
}

export interface SchoolsResponse {
  landingPageSchools: {
    data: ISchools[];
  };
}

export interface SchoolsRequest extends IFilterGlobalRequest {
  stageId: string | null;
  provinceId: string | null;
  regencyId: string | null;
}

export const useReadAllSchools = (req: SchoolsRequest) => {
  const { data: schoolsData, loading: schoolsLoading } = useQuery<
    SchoolsResponse,
    SchoolsRequest
  >(READ_ALL_SCHOOLS, {
    variables: req,
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  return {
    schoolsData,
    schoolsLoading,
  };
};
