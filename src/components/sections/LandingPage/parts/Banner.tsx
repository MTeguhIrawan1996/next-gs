import { Box, Stack } from '@mantine/core';
import Image from 'next/image';

import landingPageStyle from '@/styles/LandingPage';

import BannerImg from '../../../../../public/assets/banner.webp';

interface IBannerProps {
  scrollIntoView: () => void;
}

const Banner: React.FC<IBannerProps> = ({ scrollIntoView }) => {
  const { classes } = landingPageStyle();

  return (
    <Stack className={classes.bannerContainer} align="center" w="100%">
      <Box className={classes.bannerBox} onClick={() => scrollIntoView()}>
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
