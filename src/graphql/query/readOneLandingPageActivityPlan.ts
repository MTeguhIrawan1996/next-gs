import { ApolloError, gql, useQuery } from '@apollo/client';

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
            id
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
    id: string;
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

export const useReadOneLandingPageActivityPlan = (
  req: ActivityPlanReportRequest
) => {
  const { data: activityPlanData, loading: activityPlanloading } = useQuery<
    ActivityPlanReportResponse,
    ActivityPlanReportRequest
  >(READ_ONE_LANDINGPAGE_ACTIVITY_PLAN, {
    variables: req,
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  return {
    activityPlanData,
    activityPlanloading,
  };
};
