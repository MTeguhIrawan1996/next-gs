import { Box, Button, Center, Stack, Title } from '@mantine/core';
import Link from 'next/link';
import * as React from 'react';

import landingPageStyle from '@/styles/LandingPage';

import InnerWrapper from './InnerWrapper';

interface IAppProps {
  children: React.ReactNode;
  title: string;
  href: string;
}

const LandingPageSectionWrapper: React.FC<IAppProps> = ({
  children,
  title,
  href,
}) => {
  const { classes } = landingPageStyle();

  return (
    <InnerWrapper>
      <Stack spacing="lg" align="center">
        <Box className={classes.textBox}>
          <Title
            order={1}
            color="dark.6"
            className={classes.primaryText}
            align="center"
          >
            {title}
          </Title>
        </Box>
        {children}
        <Center className={classes.textBox}>
          <Link href={href}>
            <Button variant="light" color="brand.6" fz={14} fw={400}>
              Lihat semua
            </Button>
          </Link>
        </Center>
      </Stack>
    </InnerWrapper>
  );
};

export default LandingPageSectionWrapper;
