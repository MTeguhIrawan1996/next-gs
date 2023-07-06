import { gql } from '@apollo/client';

export const READ_ALL_FILTER_YEAR = gql`
  query ReadAllFilterYear {
    activityYears
  }
`;

export interface FilterYearResponse {
  activityYears: number[];
}
