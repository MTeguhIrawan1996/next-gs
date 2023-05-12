import { Box, Flex, Group, Stack, Text } from '@mantine/core';

import layoutStyle from '@/styles/Layout';

import IconEmail from '../../../../public/IconEmail.svg';
import IconTel from '../../../../public/IconTel.svg';
import SosialIcon1 from '../../../../public/sosialmedia1.svg';
import SosialIcon2 from '../../../../public/sosialmedia2.svg';
import TutwuriLogo from '../../../../public/tutwuri.svg';

const Footer = () => {
  const { classes } = layoutStyle();

  return (
    <Box className={classes.footerConatiner}>
      <Flex className={classes.footer}>
        <Flex w="100%" justify="center" align="center">
          <Flex
            sx={{
              flex: 2,
              justifyContent: 'center',
              padding: '2rem 1rem 2rem 1rem',
            }}
          >
            <Flex
              w="100%"
              pl="xl"
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem',
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <TutwuriLogo />
                </Box>
                <Box>
                  <Text fw={400} fz={16} color="#5C5F66">
                    Kementerian Pendidikan, Kebudayaan Riset, dan Teknologi
                  </Text>
                </Box>
              </Box>
              <Box sx={{ flex: 2, borderLeft: '2px solid #C1C2C5' }} pl="lg">
                <Box w="80%">
                  <Text fw={300} fz={16} color="#5C5F66">
                    Sekretariat Direktorat Jendral KebudayaanKementerian
                    Pendidikan, Kebudayaan, Riset dan Teknologi Komplek
                    Kemdikbudristek{' '}
                    <Text>Jl. Jenderal Sudirman Senayan Jakarta 10270</Text>
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex
            sx={{
              flex: 0.95,
              background:
                'linear-gradient(180deg, #228BE6 -54.95%, #9775FA 100%)',
            }}
            py="xl"
            px="lg"
            gap="xl"
            direction="column"
          >
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
                <Text fw={400} fz={14} color="gray.0">
                  gsms@kemdikbud.go.id
                </Text>
              </Group>
              <Group spacing="sm" align="center">
                <IconEmail />
                <Text fw={400} fz={14} color="gray.0">
                  gsms.dikes@gmail.com
                </Text>
              </Group>

              <Group spacing="sm">
                <Group spacing="sm">
                  <IconTel />
                  <Text fw={400} fz={14} color="gray.0">
                    (021) 5725549
                  </Text>
                </Group>
                <Text fw={400} fz={14} color="gray.0">
                  (021) 5725549
                </Text>
              </Group>
            </Stack>
          </Flex>
        </Flex>
        <Stack py="6px" w="100%">
          <Text
            fw={500}
            fz={12}
            color="#5C5F66"
            component="span"
            align="center"
          >
            © Hak Cipta Direktorat Kesenian, Direktorat Jenderal Kebudayaan,
            Kementerian Pendidikan, Kebudayaan, Riset Dan Teknologi Republik
            Indonesia.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
