import { ApolloError, gql, useQuery } from '@apollo/client';

import { MResponse } from '@/types/global';

export const READ_ALL_ACHIEVING_STUDENTS = gql`
  query ReadAllLandingPageHighAchievingStudents(
    $page: Float
    $limit: Float
    $search: String
    $orderBy: String
    $orderDir: String
  ) {
    landingPageHighAchievingStudents(
      findAllHighAchievingStudentInput: {
        page: $page
        limit: $limit
        search: $search
        orderBy: $orderBy
        orderDir: $orderDir
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
        activityYear
        achievement
      }
    }
  }
`;

export interface AchievingStundets {
  id: string;
  name: string;
  activityYear: number;
  achievement: string;
}

export interface AchievingStundetsResponse {
  landingPageHighAchievingStudents: MResponse<AchievingStundets>;
}

export interface AchievingStundetsRequest {
  page: number;
  limit: number;
  search: string | null;
  orderBy: string | null;
  orderDir: string | null;
}

export const useReadAllAchievingStudents = (req: AchievingStundetsRequest) => {
  const { data: AchievingData, loading: AchievingLoading } = useQuery<
    AchievingStundetsResponse,
    AchievingStundetsRequest
  >(READ_ALL_ACHIEVING_STUDENTS, {
    variables: req,
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  return {
    AchievingData,
    AchievingLoading,
  };
};
