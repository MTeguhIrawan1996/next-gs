import { ApolloError, gql, useQuery } from '@apollo/client';

import { MResponse } from '@/types/global';

export const READ_ALL_ACTIVITY = gql`
  query ReadAllActivities(
    $page: Float
    $limit: Float
    $search: String
    $orderBy: String
    $provinceId: String
    $haveGallery: Boolean
  ) {
    activities(
      findAllActivityInput: {
        page: $page
        limit: $limit
        search: $search
        orderBy: $orderBy
        provinceId: $provinceId
        haveGallery: $haveGallery
      }
    ) {
      meta {
        currentPage
        totalPage
        totalData
        totalAllData
      }
      data {
        id
        name
        year
        startRegistrationDate
        endRegistrationDate
        startDate
        endDate
        formulaterTotal
      }
    }
  }
`;

export interface IActivityData {
  id: string;
  name: string;
  year: number;
}

export interface ActivityResponse {
  activities: MResponse<IActivityData>;
}

interface VARIABLES {
  page?: number;
  limit?: number | null;
  search?: string | null;
  orderBy?: string;
  orderDir?: 'desc' | 'asc';
  haveGallery?: boolean;
  provinceId?: string;
}
export const useReadAllActivity = (req: VARIABLES) => {
  const { data: activityData, loading: activityLoading } = useQuery<
    ActivityResponse,
    VARIABLES
  >(READ_ALL_ACTIVITY, {
    variables: req,
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  return {
    activityData,
    activityLoading,
  };
};
