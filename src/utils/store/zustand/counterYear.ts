import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ActivityYearStore {
  activityYearId: string | undefined | null;
  activityDataYearId: string | undefined | null;
  setActivityYear: (activityYearId: string | undefined | null) => void;
  setActivityDataYear: (activityDataYearId: string | undefined | null) => void;
}

export const useActivityYearStore = create<ActivityYearStore>()(
  persist(
    (set) => ({
      activityYearId: '2023',
      activityDataYearId: '2023',
      setActivityYear: (activityYearId) => set({ activityYearId }),
      setActivityDataYear: (activityDataYearId) => set({ activityDataYearId }),
    }),
    {
      name: 'filterYear-storage',
    }
  )
);
