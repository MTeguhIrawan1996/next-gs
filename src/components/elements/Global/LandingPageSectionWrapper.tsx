import { Group, Stack, Title } from '@mantine/core';
import * as React from 'react';

import InnerWrapper from './InnerWrapper';
import InternalLink from '../ui/InternalLink';

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
  return (
    <InnerWrapper>
      <Stack spacing="lg">
        <Group spacing="xs">
          <Title order={3} fz={{ base: 16, xs: 24 }} fw={700} color="dark.6">
            {title}
          </Title>
          <InternalLink text="Lihat Semua" href={href} brandLink />
        </Group>
        {children}
      </Stack>
    </InnerWrapper>
  );
};

export default LandingPageSectionWrapper;
