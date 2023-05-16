import { Box, Button, Flex, Paper, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import landingPageStyle from '@/styles/LandingPage';

import Img1 from '../../../../../public/assets/imformationImg1.jpeg';
import Img2 from '../../../../../public/assets/imformationImg2.jpeg';
import Img3 from '../../../../../public/assets/imformationImg3.jpeg';

interface IInformationProps {
  targetRef: React.MutableRefObject<HTMLDivElement>;
}

const Information: React.FC<IInformationProps> = ({ targetRef }) => {
  const { classes, cx } = landingPageStyle();

  return (
    <Stack className={classes.bottomContainer} ref={targetRef} align="center">
      <Flex className={classes.infoWrapper}>
        <Flex className={classes.primaryContentWrapper}>
          <Box>
            <Title order={3} fz={{ base: 24, xs: 34 }} color="dark.6">
              Membantu dalam membentuk perjalanan pendidikan mereka, tunggu apa
              lagi?
            </Title>
          </Box>
          <Text color="dark.3" fz={{ base: 18, sm: 22 }} fw={300}>
            Daftar sekarang untuk menjadi partisipan program GSMS dan mulailah
            membuat perbedaan hari ini!
          </Text>
          <Flex className={classes.buttonBox}>
            <Link
              href={`${process.env.NEXT_PUBLIC_URL}/doc/Juknis_GSMS.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.buttonStyle}
            >
              <Button
                radius="lg"
                variant="light"
                size="md"
                color="brand.6"
                fw={400}
                fz={16}
                w="100%"
              >
                Unduh Juknis
              </Button>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_URL}/doc/Panduan_GSMS.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.buttonStyle}
            >
              <Button
                radius="lg"
                variant="light"
                size="md"
                color="brand.6"
                fw={400}
                fz={16}
                w="100%"
              >
                Unduh Panduan Pendaftaran
              </Button>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register`}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.buttonStyle}
            >
              <Button
                radius="lg"
                size="md"
                fw={400}
                fz={16}
                color="brand.6"
                w="100%"
              >
                Daftar sekarang
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Flex className={classes.secondaryContentWrapper}>
          <Flex
            gap="3rem"
            justify="flex-start"
            align="flex-start"
            w="100%"
            sx={{ position: 'relative' }}
          >
            <Paper
              shadow="xl"
              radius="lg"
              className={cx(classes.primaryCardWrapper, classes.primaryRatio)}
            >
              <Image
                src={Img2}
                alt="img-1"
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
            </Paper>
            <Paper
              shadow="xl"
              radius="lg"
              className={cx(classes.secondaryCardWrapper, classes.primaryRatio)}
            >
              <Image
                src={Img3}
                alt="img-3"
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
            </Paper>
          </Flex>
          <Paper
            shadow="xl"
            radius="lg"
            className={cx(classes.primaryCardWrapper, classes.secondaryRatio)}
          >
            <Image
              src={Img1}
              alt="img-2"
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
          </Paper>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Information;
