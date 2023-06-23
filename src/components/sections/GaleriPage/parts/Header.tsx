import { Box, Flex, Text, Title } from '@mantine/core';

import { InnerWrapper } from '@/components/elements';

const Header = () => {
  return (
    <InnerWrapper>
      <Flex align="center" justify="center">
        <Box className="textBox">
          <Title
            order={1}
            color="dark.6"
            className="primaryTitle"
            align="center"
          >
            Rekapitulasi Pendaftaran{' '}
            <Text span className="primarySpan" inherit>
              Seniman
            </Text>{' '}
            Terkini
          </Title>
        </Box>
      </Flex>
    </InnerWrapper>
  );
};

export default Header;
