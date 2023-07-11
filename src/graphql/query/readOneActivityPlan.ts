import { ApolloError, gql, useLazyQuery } from '@apollo/client';

export const READ_ONE_ACTIVITY_PLAN = gql`
  query ReadOneDetailActivityPlan($id: String!) {
    landingPageActivityPlan(id: $id) {
      id
      order
      report {
        id
        activityDate
        material
        studentAbsences(findAllStudentAbsenceInput: { isPresent: true }) {
          data {
            id
            student {
              name
            }
          }
        }
      }
      goals
    }
  }
`;

export interface DetailActivityPlan {
  id: string;
  order: number;
  report: {
    id: string;
    activityDate: string;
    material: string;
    studentAbsences: {
      data: {
        id: string;
        student: {
          name: string;
        };
      }[];
    };
  };
  goals: string;
}

export interface DetailActivityPlanResponse {
  landingPageActivityPlan: DetailActivityPlan;
}

export interface DetailActivityPlanRequest {
  id: string;
}

export const useReadOneActivityPlan = () => {
  const [getDetailActivityPlan, { data: detailActivityPlanData }] =
    useLazyQuery<DetailActivityPlanResponse, DetailActivityPlanRequest>(
      READ_ONE_ACTIVITY_PLAN,
      {
        onError: (err: ApolloError) => {
          return err;
        },
        fetchPolicy: 'cache-first',
      }
    );

  return {
    getDetailActivityPlan,
    detailActivityPlanData,
  };
};
