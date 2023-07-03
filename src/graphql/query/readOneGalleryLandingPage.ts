import { gql } from '@apollo/client';

import { IFile } from '@/types/global';

export const READ_ONE_GALLERY_LANDINGPAGE = gql`
  query ReadOneGalleryLandingPage($id: String!) {
    landingPageActivityReportAttachment(id: $id) {
      id
      activityReport {
        material
        activityPlan {
          artistReport {
            form {
              commonIdentity {
                name
              }
              dinas {
                name
              }
              recommendation {
                school {
                  name
                }
                assistant {
                  name
                }
              }
            }
          }
        }
      }
      photo {
        id
        path
        filename
        url
        originalFilename
        mime
      }
      videoLink
    }
  }
`;

export interface GalleryOne {
  id: string;
  activityReport: {
    material: string;
    activityPlan: {
      artistReport: {
        form: {
          commonIdentity: {
            name: string;
          };
          dinas: {
            name: string;
          };
          recommendation: {
            school: {
              name: string;
            };
            assistant: {
              name: string;
            };
          };
        };
      };
    };
  };
  photo: IFile | null;
  videoLink: string | null;
}

export interface GalleryOneResponse {
  landingPageActivityReportAttachment: GalleryOne;
}

export interface GalleryOneRequest {
  id: string;
}
