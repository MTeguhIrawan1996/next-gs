import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '../axios';

import { ApiResponse, RestErrorResponse } from '@/types/global';

export interface ActivityData {
  id: string;
  school: {
    name: string;
    provinceName: string;
    regencyName: string;
  };
  artist: {
    name: string;
  };
  activity: {
    year: number;
  };
}

export type ActivityDataResponse = ApiResponse<ActivityData>;

export interface ActivityDataRequest {
  year: string | undefined | null;
  page: number;
  limit: number;
  orderBy: string | null;
  provinceId: string | null;
  regencyId: string | null;
  search: string | null;
}

export const ReadOneRestActivityPlan = async ({
  limit,
  page,
  year,
  orderBy,
  provinceId,
  regencyId,
  search,
}: ActivityDataRequest) => {
  try {
    const response = await axiosInstance.get(
      `/landing-page/artist-reports/activity-datas/${year}`,
      {
        params: {
          limit,
          page: page,
          orderBy: orderBy ?? null,
          provinceId: provinceId ?? null,
          regencyId: regencyId ?? null,
          search: search ?? null,
        },
      }
    );

    return response.data;
  } catch (err: any) {
    return Promise.reject(err.response.data);
  }
};

export const useReadAllActivitesData = ({
  variable,
  onError,
  onSuccess,
}: {
  variable: ActivityDataRequest;
  onSuccess?: () => void;
  onError?: (error: RestErrorResponse) => unknown;
}) => {
  const { limit, page, year, orderBy, provinceId, regencyId, search } =
    variable;

  return useQuery<ActivityDataResponse, RestErrorResponse>({
    queryFn: async () => {
      const data = await ReadOneRestActivityPlan({
        limit,
        page,
        year,
        orderBy,
        provinceId,
        regencyId,
        search,
      });
      return data;
    },
    onError: onError,
    onSuccess: onSuccess,
    queryKey: ['activitiesData', { year, page, provinceId, regencyId, search }],
    keepPreviousData: true,
  });
};
