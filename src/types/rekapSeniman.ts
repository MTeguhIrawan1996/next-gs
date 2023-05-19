import { DinasLevel, IMeta } from './global';

export interface IProvinceOrRegency {
  id: string;
  name: string;
}

// GET RECAPS SUBMISSION

export interface RecapsSenimanData {
  dinas: {
    id: string;
    name: string;
    level: DinasLevel;
  };
  province: IProvinceOrRegency;
  regency: IProvinceOrRegency | null;
  artistCount: number;
}

export interface GetRecapsSenimanRes {
  landingPageSubmissionFormRecaps: {
    meta: IMeta;
    data: RecapsSenimanData[];
  };
}

export interface RecapsSenimanVariable {
  findAllInput: {
    page: number | null;
    limit: number | null;
    search: string | null;
    orderBy: string | null;
    orderDir: string | null;
    activityId: string;
  };
}

// READ SUBBMISION

export interface RecapsSenimanData {
  id: string;
  commonIdentity: {
    name: string;
    email: string;
  };
  submittedAt: Date;
  createdAt: Date;
}

export interface GetRecapSenimanRes {
  landingPageDinas: {
    id: string;
    name: string;
    activityForms: {
      meta: IMeta;
      data: RecapsSenimanData[];
    };
  };
}

export interface RecapSenimanVariable {
  id: string;
  findAllDinasActivityFormsInput: {
    page: number | null;
    limit: number | null;
    search: string | null;
    orderBy: string | null;
    orderDir: string | null;
    activityId: string;
  };
}
