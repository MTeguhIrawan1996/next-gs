import * as React from 'react';

import { axiosInstance } from '../axios';

import { ApiResponse } from '@/types/global';

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

export const useReadOneRestActivityPlan = (
  req: ActivityPlanReportRestRequest
) => {
  const [dataActivityPlan, setDataActivityPlan] = React.useState<
    ActivityPlanReportRestResponse | undefined
  >(undefined);
  const [loadingActivityPlan, setLoadingActivityPlan] =
    React.useState<boolean>(false);

  const fetchData = async () => {
    setLoadingActivityPlan(true);
    try {
      const res = await axiosInstance.get(
        `/landing-page/artist-reports/school-for-maps/2023/3cd743c2-df2b-4835-b62b-5b51b861f13a/reports?page=1&limit=10`
      );

      setDataActivityPlan(res.data);
      setLoadingActivityPlan(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [req.page]);

  return {
    dataActivityPlan,
    loadingActivityPlan,
  };
};
