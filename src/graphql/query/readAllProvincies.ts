import { gql } from '@apollo/client';

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
