import { Box, Button, Flex, Paper, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import landingPageStyle from '@/styles/LandingPage';

import ModalJuknis from '../elements/ModalJuknis';
import Img1 from '../../../../../public/assets/imformationImg1.jpeg';
import Img2 from '../../../../../public/assets/imformationImg2.jpeg';
import Img3 from '../../../../../public/assets/imformationImg3.jpeg';

interface IInformationProps {
  targetRef: React.MutableRefObject<HTMLDivElement>;
}

const Information: React.FC<IInformationProps> = ({ targetRef }) => {
  const { classes } = landingPageStyle();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onOpenModal = async () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Stack className={classes.bottomContainer} ref={targetRef}>
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
          <Flex gap="md" justify="center" align="center" sx={{ zIndex: 1 }}>
            <Button
              radius="lg"
              variant="light"
              size="md"
              color="brand.6"
              fw={400}
              fz={16}
              onClick={() => onOpenModal()}
            >
              Unduh Juknis
            </Button>
            <Link
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button radius="lg" size="md" fw={400} fz={16} color="brand.6">
                Daftar sekarang
              </Button>
            </Link>

            <ModalJuknis onCloseModal={onOpenModal} isOpen={isOpen} />
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
