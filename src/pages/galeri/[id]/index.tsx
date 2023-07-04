import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import * as React from 'react';

import { DetailGalleryPage } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { client } from '@/graphql/apollo-client';
import {
  GalleryOneRequest,
  GalleryOneResponse,
  READ_ONE_GALLERY_LANDINGPAGE,
} from '@/graphql/query/readOneGalleryLandingPage';

const DetailGallery = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <DetailGalleryPage data={data} />;
};

export default DetailGallery;

DetailGallery.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export const getServerSideProps: GetServerSideProps<{
  data: GalleryOneResponse;
}> = async (context) => {
  const id = context.params?.id;

  try {
    const { data } = await client.query<GalleryOneResponse, GalleryOneRequest>({
      query: READ_ONE_GALLERY_LANDINGPAGE,
      variables: {
        id: id as string,
      },
      fetchPolicy: 'no-cache',
    });

    return {
      props: { data },
    };
  } catch (error) {
    return { notFound: true };
  }
};
