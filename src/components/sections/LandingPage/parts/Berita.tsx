import { ApolloError, useQuery } from '@apollo/client';
import { Flex } from '@mantine/core';
import * as React from 'react';

import {
  CardImage,
  CardImageSkeleton,
  LandingPageSectionWrapper,
} from '@/components/elements';

import {
  Articles,
  ArticlesRequest,
  ArticlesResponse,
  READ_ALL_ARTICLES,
} from '@/graphql/query/readAllArticles';

const Berita = () => {
  const { data: articlesData, loading: articlesLoading } = useQuery<
    ArticlesResponse,
    ArticlesRequest
  >(READ_ALL_ARTICLES, {
    variables: {
      limit: 3,
      page: 1,
      orderBy: 'publishedAt',
      orderDir: 'desc',
      search: null,
      createdById: null,
      dinasId: null,
    },
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-first',
  });

  const renderArticles = React.useCallback((value: Articles, index: number) => {
    const { title, publishedAt, featureImage, slug } = value;
    return (
      <CardImage
        enableDate
        key={index}
        label={title}
        labelDate={publishedAt}
        imageProps={featureImage}
        href={`/berita/${slug}`}
      />
    );
  }, []);

  const articlesItem =
    articlesData?.landingPageArticles.data.map(renderArticles);

  return (
    <LandingPageSectionWrapper title="Berita" href="/berita">
      <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
        {articlesLoading ? <CardImageSkeleton /> : articlesItem}
      </Flex>
    </LandingPageSectionWrapper>
  );
};

export default Berita;
