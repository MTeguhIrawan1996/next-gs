import { gql } from '@apollo/client';

import { IPhotos } from '@/types/global';

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

export interface AchievingStundet {
  id: string;
  nisn: string;
  name: string;
  activityYear: number;
  gsmsSchool: string;
  school: string;
  achievement: string;
  photo: IPhotos;
  achievementPhotos: IPhotos[];
}

export interface AchievingStundetResponse {
  landingPageHighAchievingStudent: AchievingStundet;
}

export interface AchievingStundetRequest {
  id: string;
}
