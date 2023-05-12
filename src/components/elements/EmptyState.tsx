import { Box, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';

import EmptyImg from '../../../public/assets/emptystate.png';
import Vector1 from '../../../public/vector1.svg';

const EmptyState = () => {
  return (
    <Flex
      h="100vh"
      justify="center"
      align="center"
      sx={{ position: 'relative' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translateY(-5%)',
        }}
      >
        <Vector1 />
      </Box>
      <Flex
        direction="column"
        justify="center"
        align="center"
        w="100%"
        gap="sm"
        py={8}
      >
        <Box
          sx={{
            position: 'relative',
            height: '320px',
            width: '420px',
          }}
        >
          <Image
            src={EmptyImg}
            quality={80}
            alt="Dokumen"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
              backgroundPosition: 'center',
            }}
            priority
            placeholder="blur"
          />
        </Box>
        <Title order={1} fz={26} fw={700} color="dark.6">
          Cooming Soon
        </Title>
        <Text fw={400} fz={14} color="dark.3" align="center">
          Terima kasih atas dukungan Anda, dan tunggu kabar selanjutnya dari
          kami!
        </Text>
      </Flex>
    </Flex>
  );
};

export default EmptyState;
