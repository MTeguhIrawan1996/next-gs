import { Box, Container, Flex } from '@mantine/core';
import * as React from 'react';

import ModalTable from '../elements/ModalTable';
import Table from '../elements/Table';

const Content = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onActionModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box w="100%" px="xl" className="innerYPaddings">
      <Container size="xl" className="paddings" mb={120}>
        <Flex align="center" justify="center">
          <Table onActionModal={onActionModal} />
          <ModalTable isOpen={isOpen} onActionModal={onActionModal} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Content;
