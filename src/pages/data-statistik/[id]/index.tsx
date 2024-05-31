import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import LandingPageLayout from '@/components/layouts/landingPage';
import DetailPetaKegiatanPage from '@/components/sections/DetailPetaKegiatanPage';

import { ArtistReportOneResponse } from '@/graphql/query/readOneLandingPageArtistReport';
import { axiosInstance } from '@/utils/rest-api/axios';

const DetailDataKegiatan = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  return (
    <DetailPetaKegiatanPage
      data={data}
      breadcrumbData={[
        { label: 'Data Kegiatan', path: '/data-statistik' },
        { label: 'Detail Data Kegiatan', path: router.asPath },
      ]}
    />
  );
};

export default DetailDataKegiatan;

DetailDataKegiatan.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export const getServerSideProps: GetServerSideProps<{
  data: ArtistReportOneResponse;
}> = async (context) => {
  const id = context.params?.id;
  const year = context.query.year;

  try {
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
