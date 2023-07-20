import { Box, Stack } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

import landingPageStyle from '@/styles/LandingPage';

import BannerImg from '../../../../../public/assets/banner.webp';

const Banner = () => {
  const router = useRouter();
  const { classes } = landingPageStyle();

  return (
    <Stack className={classes.bannerContainer} align="center" w="100%">
      <Box
        className={classes.bannerBox}
        onClick={() => router.push('/peta-kegiatan')}
      >
        <Image
          src={BannerImg}
          alt="Banner"
          quality={100}
          priority
          placeholder="blur"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'fill',
            backgroundPosition: 'center',
          }}
        />
      </Box>
    </Stack>
  );
};

export default Banner;
