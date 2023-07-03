import { AppShell, Box } from '@mantine/core';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { Breadcrumb, Footer } from '@/components/elements';

import layoutStyle from '@/styles/Layout';
import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import Navbar from './Nav';

type LayoutProps = {
  children: React.ReactNode;
  page?: string;
};

const LandingPageLayout = ({ children, page }: LayoutProps) => {
  const { classes } = layoutStyle();
  const [breadcrumbs] = useBreadcrumbs((state) => [state.breadcrumbs], shallow);

  const blackList = ['map'];
  const isExcept = blackList.includes(page ?? '');

  return (
    <AppShell
      header={<Navbar />}
      footer={isExcept ? undefined : <Footer />}
      padding={isExcept ? 0 : 'xs'}
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
