import { gql } from '@apollo/client';

import { IFilterGlobalRequest } from '@/types/global';

export const READ_ALL_REGENCIES = gql`
  query ReadAllRegencies(
    $page: Float
    $limit: Float
    $search: String
    $orderBy: String
    $orderDir: String
    $provinceId: String
  ) {
    regencies(
      findAllRegencyInput: {
        page: $page
        limit: $limit
        search: $search
        orderBy: $orderBy
        orderDir: $orderDir
        provinceId: $provinceId
      }
    ) {
      data {
        id
        name
      }
    }
  }
`;

export interface IRegencies {
  id: string;
  name: string;
}

export interface RegenciesResponse {
  regencies: {
    data: IRegencies[];
  };
}

export interface RegenciesRequest extends IFilterGlobalRequest {
  provinceId: string | null;
}
