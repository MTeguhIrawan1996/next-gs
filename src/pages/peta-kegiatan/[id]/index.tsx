import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import LandingPageLayout from '@/components/layouts/landingPage';
import DetailPetaKegiatanPage from '@/components/sections/DetailPetaKegiatanPage';

import { client } from '@/graphql/apollo-client';
import {
  ArtistReportOneRequest,
  ArtistReportOneResponse,
  READ_ONE_LANDINGPAGE_ARTIST_REPORT,
} from '@/graphql/query/readOneLandingPageArtistReport';

const DetailPetaKegiatan = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <DetailPetaKegiatanPage data={data} />;
};

export default DetailPetaKegiatan;

DetailPetaKegiatan.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export const getServerSideProps: GetServerSideProps<{
  data: ArtistReportOneResponse;
}> = async (context) => {
  const id = context.params?.id;

  try {
    const { data } = await client.query<
      ArtistReportOneResponse,
      ArtistReportOneRequest
    >({
      query: READ_ONE_LANDINGPAGE_ARTIST_REPORT,
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
