import { Box, Flex, Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import layoutStyle from '@/styles/Layout';

import IconEmail from '../../../../public/IconEmail.svg';
import IconTel from '../../../../public/IconTel.svg';
import SosialIcon1 from '../../../../public/sosialmedia1.svg';
import SosialIcon2 from '../../../../public/sosialmedia2.svg';
import TutwuriLogo from '../../../../public/tutwuriimg.png';

const Footer = () => {
  const { classes } = layoutStyle();

  return (
    <Box className={classes.footerConatiner}>
      <Flex className={classes.footer}>
        <Flex className={classes.footerWrapper}>
          <Flex className={classes.firstContent}>
            <Flex className={classes.addressWrapper}>
              <Box className={classes.footerLogoContent}>
                <Box h="56px" w="110px" sx={{ position: 'relative' }}>
                  <Image
                    src={TutwuriLogo}
                    alt="Tut-wuri"
                    quality={100}
                    priority
                    placeholder="blur"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'contain',
                      backgroundPosition: 'center',
                    }}
                  />
                </Box>
                <Box>
                  <Text fw={400} fz={16} color="#5C5F66">
                    Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
                  </Text>
                </Box>
              </Box>
              <Box className={classes.footerAddressContent}>
                <Box w={{ base: '100%', xs: '90%' }}>
                  <Text fw={300} fz={16} color="#5C5F66">
                    Direktorat Pengembangan dan Pemanfaatan Kebudayaan,
                    Direktorat Jenderal Kebudayaan, Kementerian Pendidikan,
                    Kebudayaan, Riset, dan Teknologi. Gd. E Lt. 9, Komplek
                    Kemdikbudristek, Jl. Jenderal Sudirman, Senayan, Jakarta,
                    10270.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex className={classes.secondContent}>
            <Stack spacing="sm">
              <Text fw={400} fz={14} color="gray.0">
                Ikuti sosial media kami untuk berita terbaru
              </Text>
              <Flex justify="flex-start" gap="xl" align="center">
                <SosialIcon1 />
                <SosialIcon2 />
              </Flex>
            </Stack>
            <Stack spacing="xs">
              <Group spacing="sm" align="center">
                <IconEmail />
                <Link href="mailto:gsms.ditppk@gmail.com">
                  <Text fw={400} fz={14} color="gray.0">
                    gsms.ditppk@gmail.com
                  </Text>
                </Link>
              </Group>
              <Group spacing="sm">
                <Group spacing="sm">
                  <IconTel />
                  <Link href="tel:0215725549">
                    <Text fw={400} fz={14} color="gray.0">
                      (021) 5725549
                    </Text>
                  </Link>
                </Group>
              </Group>
            </Stack>
          </Flex>
        </Flex>
        <Stack py="6px" w="100%" px={{ base: '2rem', xs: '4rem' }}>
          <Text
            fw={500}
            fz={{ base: 8, sm: 12 }}
            color="#5C5F66"
            component="span"
            align="center"
          >
            © Hak Cipta Direktorat Jenderal Kebudayaan, Kementerian Pendidikan,
            Kebudayaan, Riset, dan Teknologi.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
