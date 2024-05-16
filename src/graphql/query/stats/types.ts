interface Stat {
  legend: string;
  color: string;
  data: number;
}

export interface StatsResponse {
  title: string;
  stats: Stat[];
}
