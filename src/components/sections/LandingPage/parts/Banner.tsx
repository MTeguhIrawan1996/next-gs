import { Box, Stack } from '@mantine/core';
import Image from 'next/image';

import landingPageStyle from '@/styles/LandingPage';

import BannerSample from '../../../../../public/assets/bannersample.png';

interface IBannerProps {
  scrollIntoView: () => void;
}

const Banner: React.FC<IBannerProps> = ({ scrollIntoView }) => {
  const { classes } = landingPageStyle();

  return (
    <Stack className={classes.bannerContainer}>
      <Box className={classes.bannerBox} onClick={() => scrollIntoView()}>
        <Image
          src={BannerSample}
          alt="Banner"
          quality={100}
          priority
          placeholder="blur"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Box>
    </Stack>
  );
};

export default Banner;
