import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { DetailBeritaPage } from '@/components';
import LandingPageLayout from '@/components/layouts/landingPage';

import { client } from '@/graphql/apollo-client';
import {
  ArticleRequest,
  ArticleResponse,
  READ_ONE_ARTICLE,
} from '@/graphql/query/readOneArticle';

const DetailBerita = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <DetailBeritaPage data={data} />;
};

export default DetailBerita;

DetailBerita.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export const getServerSideProps: GetServerSideProps<{
  data: ArticleResponse;
}> = async (context) => {
  const slug = context.params?.slug;

  try {
    const { data } = await client.query<ArticleResponse, ArticleRequest>({
      query: READ_ONE_ARTICLE,
      variables: {
        slug: slug as string,
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
