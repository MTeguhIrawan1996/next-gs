import { Box, Button, Center, Flex, Text, Title } from '@mantine/core';
import Link from 'next/link';

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
        <Center className={classes.textBox}>
          <Flex direction="row" gap="xl">
            <Link
              href={`${process.env.NEXT_PUBLIC_URL}/doc/Juknis_GSMS.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                radius="lg"
                variant="light"
                color="brand.6"
                fz={14}
                fw={400}
              >
                Unduh Juknis
              </Button>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_URL}/doc/Pengumuman_Penetapan_Seniman_GSMS.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                radius="lg"
                variant="light"
                color="brand.6"
                fz={14}
                fw={400}
              >
                Unduh Pengumuman Penetapan Seniman
              </Button>
            </Link>
          </Flex>
        </Center>
      </Flex>
    </InnerWrapper>
  );
};

export default Hero;
