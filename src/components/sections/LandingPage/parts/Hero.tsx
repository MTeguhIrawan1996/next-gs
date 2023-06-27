import { Box, Flex, Text, Title } from '@mantine/core';

import { InnerWrapper } from '@/components/elements';

import landingPageStyle from '@/styles/LandingPage';

const Hero = () => {
  const { classes } = landingPageStyle();
  return (
    <InnerWrapper>
      <Flex direction="column" gap="24px" justify="center" align="center">
        <Box className={classes.textBox}>
          <Title
            order={1}
            color="dark.6"
            className={classes.primaryText}
            align="center"
          >
            Program seniman memberikan{' '}
            <span className={classes.colorSpan}>pembelajaran</span> kesenian di
            sekolah
          </Title>
        </Box>
        <Box className={classes.paragrafBox}>
          <Text color="dark.3" align="center" className={classes.secondaryText}>
            Gerakan Seniman Masuk Sekolah (GSMS) adalah program yang dijalankan
            Direktorat Pengembangan dan Pemanfaatan Kebudayaan Direktorat
            Jenderal Kebudayaan Kementerian Pendidikan, Kebudayaan, Riset dan
            Teknologi dalam bentuk program seniman memberikan pembelajaran
            kesenian pada kegiatan ekstrakurikuler di Sekolah.
          </Text>
        </Box>
      </Flex>
    </InnerWrapper>
  );
};

export default Hero;
