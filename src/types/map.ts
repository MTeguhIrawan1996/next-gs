export interface IMapInfo {
  properties: {
    id: string;
    school: string;
    activity: string;
    artist: string;
  };
}

export interface IPropertiesId {
  id: string;
}

export interface IMapFeature {
  feature: IMapInfo;
  x: number;
  y: number;
  lat: number;
  lng: number;
}
