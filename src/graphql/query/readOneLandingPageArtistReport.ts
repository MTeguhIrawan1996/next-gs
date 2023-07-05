import { gql } from '@apollo/client';

import { IFile } from '@/types/global';

export const READ_ONE_LANDINGPAGE_ARTIST_REPORT = gql`
  query ReadOneLandingPageArtistReport($id: String!) {
    landingPageArtistReport(id: $id) {
      id
      form {
        commonIdentity {
          name
          photo {
            id
            path
            filename
            mime
            originalFilename
            url
          }
          province {
            name
          }
          regency {
            name
          }
        }
        goalExpectation {
          artExpertise
          artDesc
        }
        recommendation {
          assistant {
            name
          }
          school {
            name
            stage {
              abbr
            }
            province {
              name
            }
            regency {
              name
            }
            longitude
            latitude
            streetAddress
          }
        }
        dinas {
          name
        }
      }
    }
  }
`;

export interface ArtistReportOne {
  id: string;
  form: {
    commonIdentity: {
      name: string;
      photo: IFile;
      province: {
        name: string;
      };
      regency: {
        name: string;
      };
    };
    goalExpectation: {
      artExpertise: string;
    };
    recommendation: {
      assistant: {
        name: string;
      };
      school: {
        name: string;
        stage: {
          abbr: string;
        };
        province: {
          name: string;
        };
        regency: {
          name: string;
        };
        longitude: number;
        latitude: number;
        streetAddress: string;
      };
    };
    dinas: {
      name: string;
    };
  };
}

export interface ArtistReportOneResponse {
  landingPageArtistReport: ArtistReportOne;
}

export interface ArtistReportOneRequest {
  id: string;
}
