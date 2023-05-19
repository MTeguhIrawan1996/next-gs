import { gql } from '@apollo/client';

export const GET_RECAPS_SUBMISSIONS = gql`
  query SubmissionFormRecaps(
    $findAllInput: FindSubmissionActivityRecapsInput!
  ) {
    landingPageSubmissionFormRecaps(
      findSubmissionActivityRecapsInput: $findAllInput
    ) {
      data {
        dinas {
          id
          name
          level
        }
        province {
          id
          name
        }
        regency {
          id
          name
        }
        artistCount
      }
      meta {
        currentPage
        totalPage
        totalData
        totalAllData
      }
    }
  }
`;

export const READ_SUBMISSION = gql`
  query ReadLandingPageDinas(
    $id: String!
    $findAllDinasActivityFormsInput: FindAllDinasActivityFormsInput!
  ) {
    landingPageDinas(id: $id) {
      id
      name
      activityForms(
        findAllDinasActivityFormsInput: $findAllDinasActivityFormsInput
      ) {
        meta {
          currentPage
          totalPage
          totalData
          totalAllData
        }
        data {
          id
          commonIdentity {
            name
            email
          }
          createdAt
        }
      }
    }
  }
`;
