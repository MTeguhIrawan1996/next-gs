import { gql } from '@apollo/client';

import { IFilterGlobalRequest, MResponse } from '@/types/global';

export const READ_ONE_LANDINGPAGE_ACTIVITY_PLAN = gql`
  query ReadOneLandingPageActivityPlan(
    $id: String!
    $page: Float
    $limit: Float
    $search: String
    $orderBy: String
    $orderDir: String
    $isHaveReport: Boolean
  ) {
    landingPageArtistReport(id: $id) {
      id
      activityPlans(
        findAllActivityPlanInput: {
          page: $page
          limit: $limit
          search: $search
          orderBy: $orderBy
          orderDir: $orderDir
          isHaveReport: $isHaveReport
        }
      ) {
        data {
          id
          order
          report {
            material
            studentAbsenceRecap {
              present
              studentCount
            }
          }
        }
        meta {
          currentPage
          totalPage
          totalData
          totalAllData
        }
      }
    }
  }
`;

export interface ActivityPlanReport {
  id: string;
  order: number;
  report: {
    material: string;
    studentAbsenceRecap: {
      present: number;
      studentCount: number;
    };
  };
}

export interface ActivityPlanReportResponse {
  landingPageArtistReport: {
    id: string;
    activityPlans: MResponse<ActivityPlanReport>;
  };
}

export interface ActivityPlanReportRequest extends IFilterGlobalRequest {
  id: string;
  isHaveReport: boolean;
}
