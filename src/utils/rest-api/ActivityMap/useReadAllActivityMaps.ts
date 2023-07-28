import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '../axios';

import { AxiosRestErrorResponse } from '@/types/global';
import { IPropertiesId } from '@/types/map';

export type ActivityMapsResponse = GeoJSON.FeatureCollection<
  GeoJSON.Geometry,
  IPropertiesId
>;

export interface ActivityMapsRequest {
  activityYearId: string | undefined | null;
}

export const ReadOneRestActivityPlan = async ({
  activityYearId,
}: ActivityMapsRequest) => {
  try {
    const response = await axiosInstance.get(
      `/landing-page/artist-reports/school-for-maps/${activityYearId}`
    );

    return response.data;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

export const useReadAllActivityMaps = ({
  variable,
  onError,
  onSuccess,
}: {
  variable: ActivityMapsRequest;
  onSuccess?: () => void;
  onError?: (error: AxiosRestErrorResponse) => unknown;
}) => {
  const { activityYearId } = variable;

  return useQuery<ActivityMapsResponse, AxiosRestErrorResponse>({
    queryFn: async () => {
      const data = await ReadOneRestActivityPlan({ activityYearId });
      return data;
    },
    onError: onError,
    onSuccess: onSuccess,
    queryKey: ['activityMaps', activityYearId],
    keepPreviousData: true,
  });
};
