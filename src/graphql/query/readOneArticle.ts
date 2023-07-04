import { gql } from '@apollo/client';

import { IFile } from '@/types/global';

export const READ_ONE_ARTICLE = gql`
  query ReadOneArticle($slug: String!) {
    landingPageArticle(slug: $slug) {
      id
      title
      content
      featureImage {
        id
        path
        filename
        url
        originalFilename
        mime
      }
      documents {
        id
        path
        filename
        url
        originalFilename
        mime
      }
      dinas {
        id
        name
      }
      publishedAt
    }
  }
`;

export interface Article {
  id: string;
  title: string;
  content: string;
  featureImage: IFile;
  documents: IFile[];
  dinas: {
    id: string;
    name: string;
  };
  publishedAt: string;
}

export interface ArticleResponse {
  landingPageArticle: Article;
}

export interface ArticleRequest {
  slug: string;
}
