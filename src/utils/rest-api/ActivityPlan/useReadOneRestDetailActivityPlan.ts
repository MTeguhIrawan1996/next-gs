import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '../axios';

import { AxiosRestErrorResponse } from '@/types/global';

export interface DetailActivityPlanReportRest {
  id: string;
  order?: number;
  goals: string;
  material: string;
  activityDate?: string;
  studentPresentNames: string[];
}

export interface DetailActivityPlanReportRestResponse {
  data: DetailActivityPlanReportRest;
}

export interface DetailActivityPlanReportRestRequest {
  idActivityPlan: string;
  idRow: string;
  year: string;
}

export const ReadOneRestDetailActivityPlan = async ({
  idActivityPlan,
  idRow,
  year,
}: DetailActivityPlanReportRestRequest) => {
  try {
    const response = await axiosInstance.get(
      `/landing-page/artist-reports/school-for-maps/${year}/${idActivityPlan}/reports/${idRow}`
    );

    return response.data;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

export const useReadOneRestDetailActivityPlan = ({
  variable,
  onError,
  onSuccess,
}: {
  variable: DetailActivityPlanReportRestRequest;
  onSuccess?: () => void;
  onError?: (error: AxiosRestErrorResponse) => unknown;
}) => {
  const { idActivityPlan, idRow, year } = variable;

  return useQuery<DetailActivityPlanReportRestResponse, AxiosRestErrorResponse>(
    {
      queryFn: async () => {
        const data = await ReadOneRestDetailActivityPlan({
          idActivityPlan,
          idRow,
          year,
        });
        return data;
      },
      onError: onError,
      onSuccess: onSuccess,
      queryKey: ['detailActivityPlan', idRow],
      enabled: !!idRow,
    }
  );
};
