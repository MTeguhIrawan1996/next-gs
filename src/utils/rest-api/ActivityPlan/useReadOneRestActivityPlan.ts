import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '../axios';

import { ApiResponse, AxiosRestErrorResponse } from '@/types/global';

export interface ActivityPlanReportRest {
  id: string;
  order: number;
  material: string;
  studentAbsenceRecap: {
    present: number;
    studentCount: number;
  };
}

export type ActivityPlanReportRestResponse =
  ApiResponse<ActivityPlanReportRest>;

export interface ActivityPlanReportRestRequest {
  id: string;
  year: string;
  page: string;
  limit: string;
}

export const ReadOneRestActivityPlan = async ({
  id,
  limit,
  page,
  year,
}: ActivityPlanReportRestRequest) => {
  try {
    const response = await axiosInstance.get(
      `/landing-page/artist-reports/school-for-maps/${year}/${id}/reports?page=${page}&limit=${limit}`
    );

    return response.data;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

export const useReadOneRestActivityPlan = ({
  variable,
  onError,
  onSuccess,
}: {
  variable: ActivityPlanReportRestRequest;
  onSuccess?: () => void;
  onError?: (error: AxiosRestErrorResponse) => unknown;
}) => {
  const { id, limit, page, year } = variable;

  return useQuery<ActivityPlanReportRestResponse, AxiosRestErrorResponse>({
    queryFn: async () => {
      const data = await ReadOneRestActivityPlan({ id, limit, page, year });
      return data;
    },
    onError: onError,
    onSuccess: onSuccess,
    queryKey: ['activityPlan', id, page],
    keepPreviousData: true,
  });
};
