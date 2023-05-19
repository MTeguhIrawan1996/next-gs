import { AppShell } from '@mantine/core';

import { Footer } from '@/components';

import layoutStyle from '@/styles/Layout';

import Navbar from './Nav';

type LayoutProps = {
  children: React.ReactNode;
};

const PendaftaranSenimanLayout = ({ children }: LayoutProps) => {
  const { classes } = layoutStyle();
  return (
    <AppShell
      header={<Navbar />}
      footer={<Footer />}
      padding="xs"
      className={classes.rootContainer}
    >
      {children}
    </AppShell>
  );
};

export default PendaftaranSenimanLayout;
