import { Flex } from '@mantine/core';
import * as React from 'react';

import {
  CardImage,
  CardImageSkeleton,
  EmptyTableState,
  LandingPageSectionWrapper,
} from '@/components/elements';

import { Articles, useReadAllArticles } from '@/graphql/query/readAllArticles';

const Berita = () => {
  const { articlesData, articlesLoading } = useReadAllArticles({
    limit: 3,
    page: 1,
    orderBy: 'publishedAt',
    orderDir: 'desc',
    search: null,
    createdById: null,
    dinasId: null,
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
        enableActivityYear={false}
      />
    );
  }, []);

  const articlesItem =
    articlesData?.landingPageArticles.data.map(renderArticles);

  return (
    <LandingPageSectionWrapper title="Berita" href="/berita">
      <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
        {!articlesItem?.length && !articlesLoading ? (
          <EmptyTableState />
        ) : (
          articlesItem
        )}
        {articlesLoading ? <CardImageSkeleton /> : null}
      </Flex>
    </LandingPageSectionWrapper>
  );
};

export default Berita;
