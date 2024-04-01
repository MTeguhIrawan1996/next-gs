import { ApolloError, gql, useQuery } from '@apollo/client';

import { IFile, MResponse } from '@/types/global';

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
        photo {
          id
          path
          filename
          url
          originalFilename
          mime
        }
      }
    }
  }
`;

export interface AchievingStudents {
  id: string;
  name: string;
  activityYear: number;
  achievement: string;
  photo: IFile | null;
}

export interface AchievingStudentsResponse {
  landingPageHighAchievingStudents: MResponse<AchievingStudents>;
}

export interface AchievingStudentsRequest {
  page: number;
  limit: number;
  search: string | null;
  orderBy: string | null;
  orderDir: string | null;
}

export const useReadAllAchievingStudents = (req: AchievingStudentsRequest) => {
  const { data: AchievingData, loading: AchievingLoading } = useQuery<
    AchievingStudentsResponse,
    AchievingStudentsRequest
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
