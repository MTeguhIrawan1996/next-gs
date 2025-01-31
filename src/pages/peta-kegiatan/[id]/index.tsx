import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import LandingPageLayout from '@/components/layouts/landingPage';
import DetailPetaKegiatanPage from '@/components/sections/DetailPetaKegiatanPage';

import { ArtistReportOneResponse } from '@/graphql/query/readOneLandingPageArtistReport';
import { axiosInstance } from '@/utils/rest-api/axios';

const DetailPetaKegiatan = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  return (
    <DetailPetaKegiatanPage
      data={data}
      breadcrumbData={[
        { label: 'Peta Kegiatan', path: '/peta-kegiatan' },
        { label: 'Detail Peta Kegiatan', path: router.asPath },
      ]}
    />
  );
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
