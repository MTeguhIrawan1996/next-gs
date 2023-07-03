import { gql } from '@apollo/client';

import { IFilterGlobalRequest } from '@/types/global';

export const READ_ALL_ACTIVE_DINASES = gql`
  query ReadAllActiveDinases(
    $activityId: String!
    $page: Float
    $limit: Float
    $search: String
    $orderBy: String
    $orderDir: String
    $level: String
  ) {
    activity(id: $activityId) {
      id
      dinases(
        findAllDinasInput: {
          page: $page
          limit: $limit
          search: $search
          orderBy: $orderBy
          orderDir: $orderDir
          level: $level
        }
      ) {
        data {
          id
          name
        }
      }
    }
  }
`;

export interface IDinases {
  id: string;
  name: string;
}

export interface DinasesResponse {
  activity: {
    id: string;
    dinases: {
      data: IDinases[];
    };
  };
}

export interface DinasesRequest extends IFilterGlobalRequest {
  activityId: string;
  level: string | null;
}
