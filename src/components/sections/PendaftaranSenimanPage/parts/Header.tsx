import { Box, Container, Flex, Title } from '@mantine/core';

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
              Rekapitulasi Pendaftaran
              <span className="primarySpan"> Seniman</span> Terkini
            </Title>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
