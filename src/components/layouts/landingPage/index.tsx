import { AppShell, Box } from '@mantine/core';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { Breadcrumb, Footer } from '@/components/elements';

import layoutStyle from '@/styles/Layout';
import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import Navbar from './Nav';

type LayoutProps = {
  children: React.ReactNode;
};

const LandingPageLayout = ({ children }: LayoutProps) => {
  const { classes } = layoutStyle();
  const [breadcrumbs] = useBreadcrumbs((state) => [state.breadcrumbs], shallow);

  return (
    <AppShell
      header={<Navbar />}
      footer={<Footer />}
      py="xl"
      className={classes.rootContainer}
    >
      <Box px={16} py={8} sx={{ zIndex: 1 }} pos="absolute">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </Box>
      {children}
    </AppShell>
  );
};

export default LandingPageLayout;
