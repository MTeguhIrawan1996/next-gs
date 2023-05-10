import { Box, Flex, Stack, Text, Title } from '@mantine/core';

import landingPageStyle from '@/styles/LandingPage';

const Hero = () => {
  const { classes } = landingPageStyle();
  return (
    <Stack className={classes.container}>
      <Flex direction="column" gap="24px" justify="center" align="center">
        <Box w="80%">
          <Title order={1} color="dark.6" fw={700} fz={56} align="center">
            Program seniman memberikan{' '}
            <span style={{ color: '#228BE6' }}>pembelajaran</span> kesenian di
            sekolah
          </Title>
        </Box>
        <Box w="60%">
          <Text color="dark.3" align="center" fz={18} fw={300}>
            Gerakan Seniman Masuk Sekolah (GSMS) adalah program yang dijalankan
            Direktorat Pengembangan dan Pemanfaatan Kebudayaan Direktorat
            Jenderal Kebudayaan Kementerian Pendidikan, Kebudayaan, Riset dan
            Teknologi dalam bentuk program seniman memberikan pembelajaran
            kesenian pada kegiatan ekstrakurikuler di Sekolah.
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default Hero;
