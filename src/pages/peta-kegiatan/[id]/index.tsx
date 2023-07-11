import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import LandingPageLayout from '@/components/layouts/landingPage';
import DetailPetaKegiatanPage from '@/components/sections/DetailPetaKegiatanPage';

import { ArtistReportOneResponse } from '@/graphql/query/readOneLandingPageArtistReport';
import { axiosInstance } from '@/utils/rest-api/axios';

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
  const year = context.query.year;

  try {
    // const { data } = await client.query<
    //   ArtistReportOneResponse,
    //   ArtistReportOneRequest
    // >({
    //   query: READ_ONE_LANDINGPAGE_ARTIST_REPORT,
    //   variables: {
    //     id: id as string,
    //   },
    //   fetchPolicy: 'no-cache',
    // });
    const res = await axiosInstance.get(
      `/landing-page/artist-reports/school-for-maps/${year}/${id}`
    );
    const data = await res.data;

    return {
      props: { data },
    };
  } catch (error) {
    return { notFound: true };
  }
};
