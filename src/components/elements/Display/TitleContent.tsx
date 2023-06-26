import { Box, Flex, Title } from '@mantine/core';
import * as React from 'react';

import { InnerWrapper } from '@/components/elements';

interface ITitleContentProps {
  label: string;
}

const TitleContent: React.FC<ITitleContentProps> = ({ label }) => {
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
            {label}
          </Title>
        </Box>
      </Flex>
    </InnerWrapper>
  );
};

export default TitleContent;
