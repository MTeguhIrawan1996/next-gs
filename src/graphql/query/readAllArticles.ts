import { ApolloError, gql, useQuery } from '@apollo/client';

import { IFile, IFilterGlobalRequest, MResponse } from '@/types/global';

export const READ_ALL_ARTICLES = gql`
  query ReadALLArticles(
    $page: Float
    $limit: Float
    $search: String
    $orderBy: String
    $orderDir: String
    $createdById: String
    $dinasId: String
  ) {
    landingPageArticles(
      findAllArticleInput: {
        page: $page
        limit: $limit
        search: $search
        orderBy: $orderBy
        orderDir: $orderDir
        createdById: $createdById
        dinasId: $dinasId
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
        title
        slug
        publishedAt
        featureImage {
          id
          path
          filename
          url
          originalFilename
          mime
        }
      }
    }
  }
`;

export interface Articles {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  featureImage: IFile;
}

export interface ArticlesResponse {
  landingPageArticles: MResponse<Articles>;
}

export interface ArticlesRequest extends IFilterGlobalRequest {
  createdById: string | null;
  dinasId: string | null;
}

export const useReadAllArticles = (req: ArticlesRequest) => {
  const { data: articlesData, loading: articlesLoading } = useQuery<
    ArticlesResponse,
    ArticlesRequest
  >(READ_ALL_ARTICLES, {
    variables: req,
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  return {
    articlesData,
    articlesLoading,
  };
};
