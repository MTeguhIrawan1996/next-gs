import { ApolloError, gql, useLazyQuery } from '@apollo/client';

import { IFile } from '@/types/global';

export const READ_ONE_ACHIEVING_STUNDENT = gql`
  query ReadOneLandingPageHightAchievingStudent($id: String!) {
    landingPageHighAchievingStudent(id: $id) {
      id
      nisn
      name
      activityYear
      gsmsSchool
      school
      achievement
      photo {
        id
        path
        filename
        url
        originalFilename
        mime
      }
      achievementPhotos {
        id
        path
        filename
        url
        originalFilename
        mime
      }
    }
  }
`;

export interface AchievingStudent {
  id: string;
  nisn: string;
  name: string;
  activityYear: number;
  gsmsSchool: string;
  school: string;
  achievement: string;
  photo: IFile;
  achievementPhotos: IFile[];
}

export interface AchievingStudentResponse {
  landingPageHighAchievingStudent: AchievingStudent;
}

export interface AchievingStudentRequest {
  id: string;
}

export const useReadOneAchievingStudent = () => {
  const [
    getStudent,
    { data: AchievingStudentData, loading: AchievingStudentLoading },
  ] = useLazyQuery<AchievingStudentResponse, AchievingStudentRequest>(
    READ_ONE_ACHIEVING_STUNDENT,
    {
      onError: (err: ApolloError) => {
        return err;
      },
      fetchPolicy: 'cache-first',
    }
  );

  return {
    getStudent,
    AchievingStudentData,
    AchievingStudentLoading,
  };
};
