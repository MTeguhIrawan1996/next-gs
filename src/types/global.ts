export type DinasLevel = 'province' | 'regency';

export interface IPhotos {
  id: string;
  path: string;
  filename: string;
  url: string;
  originalFilename: string;
  mime: string;
}

export interface IMeta {
  currentPage: number | null;
  totalPage: number | null;
  totalData: number | null;
  totalAllData: number | null;
}

export interface MResponse<T> {
  meta: IMeta;
  data: T[];
}
