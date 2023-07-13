import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ActivityYearStore {
  activityYearId: string | undefined | null;
  setActivityYear: (activityYearId: string | undefined | null) => void;
}

export const useActivityYearStore = create<ActivityYearStore>()(
  persist(
    (set) => ({
      activityYearId: '2023',
      setActivityYear: (activityYearId) => set({ activityYearId }),
    }),
    {
      name: 'filterYear-storage',
    }
  )
);
