import { Box, Container } from '@mantine/core';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IInnerWrapperProps {
  children: React.ReactNode;
}

const InnerWrapper: React.FC<IInnerWrapperProps> = ({ children }) => {
  return (
    <Box w="100%" px="md" className="innerYPaddings" pos="relative">
      <Container size="xl" className="paddings">
        {children}
      </Container>
    </Box>
  );
};

export default InnerWrapper;
