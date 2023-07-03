import { gql } from '@apollo/client';

import { IFile, IFilterGlobalRequest, MResponse } from '@/types/global';

export const READ_ALL_GALLERY_LANDINGPAGE = gql`
  query ReadAllGalleryLandingPage(
    $page: Float
    $limit: Float
    $search: String
    $orderBy: String
    $orderDir: String
    $schoolId: String
    $dinasId: String
    $type: String
  ) {
    landingPageActivityReportAttachments(
      findAllActivityReportAttachmentInput: {
        page: $page
        limit: $limit
        search: $search
        orderBy: $orderBy
        orderDir: $orderDir
        schoolId: $schoolId
        dinasId: $dinasId
        type: $type
      }
    ) {
      meta {
        currentPage
        totalPage
        totalData
        totalAllData
      }
      data {
        id
        photo {
          id
          path
          filename
          url
          originalFilename
          mime
        }
        videoLink
        activityReport {
          activityPlan {
            artistReport {
              form {
                recommendation {
                  school {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export interface IGallery {
  id: string;
  photo: IFile | null;
  videoLink: string | null;
  activityReport: {
    activityPlan: {
      artistReport: {
        form: {
          recommendation: {
            school: {
              name: string;
            };
          };
        };
      };
    };
  };
}

export interface GalleryResponse {
  landingPageActivityReportAttachments: MResponse<IGallery>;
}

export interface GalleryRequest extends IFilterGlobalRequest {
  schoolId: string | null;
  dinasId: string | null;
  type: string | null;
}
