export interface IMapInfo {
  // geometry: {
  //   coordinates: number[];
  // };
  properties: {
    id: string;
    school: string;
    activity: string;
    artist: string;
  };
}

export interface IMapFeature {
  feature: IMapInfo;
  x: number;
  y: number;
  lat: number;
  lng: number;
}
