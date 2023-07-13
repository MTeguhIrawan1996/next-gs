import { AxiosError } from 'axios';

export type DinasLevel = 'province' | 'regency';

export interface IFile {
  id: string;
  path: string;
  filename: string;
  url: string;
  originalFilename: string;
  mime: string;
}

export interface IFilterGlobalRequest {
  page: number | null;
  limit: number | null;
  search: string | null;
  orderBy: string | null;
  orderDir: string | null;
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

export interface ApiResponse<T> {
  data: T[];
  meta: IMeta;
}

export interface ErrorValidationMessage {
  field: string;
  message: string;
}

export interface RestErrorResponse {
  statusCode: number;
  message: ErrorValidationMessage[] | string;
  error: string;
}

export type AxiosRestErrorResponse = AxiosError<RestErrorResponse>;
