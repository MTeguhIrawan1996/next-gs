import { Box, Button, Flex, Paper, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';

import landingPageStyle from '@/styles/LandingPage';

import Img1 from '../../../../../public/assets/imformationImg1.jpeg';
import Img2 from '../../../../../public/assets/imformationImg2.jpeg';
import Img3 from '../../../../../public/assets/imformationImg3.jpeg';

const Information = () => {
  const { classes } = landingPageStyle();

  return (
    <Stack className={classes.container}>
      <Flex direction="row" justify="flex-start" gap="56px" align="flex-start">
        <Flex className={classes.primaryContentWrapper}>
          <Box>
            <Title order={3} color="dark.6">
              Membantu dalam membentuk perjalanan pendidikan mereka, tunggu apa
              lagi?
            </Title>
          </Box>
          <Text color="dark.3" fz={22} fw={300}>
            Daftar sekarang untuk menjadi partisipan program GSMS dan mulailah
            membuat perbedaan hari ini!
          </Text>
          <Flex gap="md" justify="center" align="center">
            <Button
              radius="lg"
              variant="light"
              color="blue"
              size="md"
              fw={400}
              fz={16}
            >
              Unduh Juknis
            </Button>
            <Button radius="lg" size="md" color="blue.6" fw={400} fz={16}>
              Daftar sekarng!
            </Button>
          </Flex>
        </Flex>
        <Flex className={classes.secondaryContentWrapper}>
          <Paper
            shadow="xl"
            radius="lg"
            h="240px"
            w="240px"
            className={classes.primaryCardWrapper}
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
            h="240px"
            w="335px"
            className={classes.primaryCardWrapper}
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
          <Paper
            shadow="xl"
            radius="lg"
            h="240px"
            w="240px"
            className={classes.secondaryCardWrapper}
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
      </Flex>
    </Stack>
  );
};

export default Information;
