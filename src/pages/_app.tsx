import { ApolloProvider } from '@apollo/client';
import type { ColorScheme } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from 'mantine';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RealViewportProvider } from 'next-real-viewport';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import '../styles/globals.css';

import { client } from '@/graphql/apollo-client';
import useScrollRestoration from '@/utils/hooks/detect-route/useScrollRestoration';
import useTheme from '@/utils/hooks/useTheme';

import type { DeepPartial } from '@/types/util';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout | any;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useScrollRestoration();
  const { state } = useTheme();

  const getLayout = Component.getLayout ?? ((page) => page);

  const title = 'Gerakan Seniman Masuk Sekolah (GSMS)';
  const description =
    'Program yang dijalankan Direktorat Pengembangan dan Pemanfaatan Kebudayaan Direktorat Jenderal Kebudayaan Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi dalam bentuk program seniman memberikan pembelajaran kesenian pada kegiatan ekstrakurikuler di Sekolah.';
  const url = `${process.env.NEXT_PUBLIC_URL}`;

  return getLayout(
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/meta-tag-img.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/meta-tag-img.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ApolloProvider client={client}>
        <RealViewportProvider>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              ...theme,
              colorScheme: state.value as DeepPartial<ColorScheme>,
            }}
          >
            <Notifications position="top-right" notificationMaxHeight={400} />
            <Component {...pageProps} />
            <GoogleAnalytics trackPageViews />
          </MantineProvider>
        </RealViewportProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
