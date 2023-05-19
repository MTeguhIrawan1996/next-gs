import { Box, Container, Flex, Text, Title } from '@mantine/core';

const Header = () => {
  return (
    <Box w="100%" px="xl" className="innerYPaddings">
      <Container size="xl" className="paddings">
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
      </Container>
    </Box>
  );
};

export default Header;
