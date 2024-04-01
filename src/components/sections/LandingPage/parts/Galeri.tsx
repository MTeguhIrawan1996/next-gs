import { Flex } from '@mantine/core';
import * as React from 'react';

import {
  CardImage,
  CardImageSkeleton,
  EmptyTableState,
  LandingPageSectionWrapper,
} from '@/components/elements';

import {
  IGallery,
  useReadAllGalleryLandingPage,
} from '@/graphql/query/readAllGalleryLandingPage';

import { IFile } from '@/types/global';

const Galeri = () => {
  const { galleryData, galleryLoading } = useReadAllGalleryLandingPage({
    limit: 3,
    page: null,
    orderBy: 'checkedAt',
    orderDir: 'desc',
    search: null,
    dinasId: null,
    schoolId: null,
    type: null,
  });

  const renderGallery = React.useCallback((value: IGallery, index: number) => {
    const { activityReport, id, photo, videoLink } = value;
    const label =
      activityReport.activityPlan.artistReport.form.recommendation.school.name;
    const activityYear = new Date(activityReport.activityDate).getFullYear();

    return (
      <CardImage
        key={index}
        label={label}
        imageProps={photo as IFile}
        videoLink={videoLink as string}
        href={`/galeri/${id}`}
        activityYear={activityYear}
      />
    );
  }, []);

  const galleryItem =
    galleryData?.landingPageActivityReportAttachments.data.map(renderGallery);

  return (
    <LandingPageSectionWrapper title="Galeri" href="/galeri">
      <Flex w="90%" mx="auto" gap="lg" justify="center" wrap="wrap">
        {!galleryItem?.length && !galleryLoading ? (
          <EmptyTableState />
        ) : (
          galleryItem
        )}
        {galleryLoading ? <CardImageSkeleton /> : null}
      </Flex>
    </LandingPageSectionWrapper>
  );
};

export default Galeri;
