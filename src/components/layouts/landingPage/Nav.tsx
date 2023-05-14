import {
  Box,
  Burger,
  Button,
  Flex,
  Group,
  Header,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import InternalLink from '@/components/elements/InternalLink';

import layoutStyle from '@/styles/Layout';

import GsmsIcon from '../../../../public/gsms.svg';

const Links = [
  {
    title: 'Beranda',
    link: '/',
  },
  {
    title: 'Peta Kegiatan',
    link: '/peta-kegiatan',
  },
  {
    title: 'Galeri',
    link: '/galeri',
  },
  {
    title: 'Siswa Berprestasi',
    link: '/siswa-berprestasi',
  },
  {
    title: 'Berita',
    link: '/berita',
  },
];
const Navbar = () => {
  const router = useRouter();
  const { classes } = layoutStyle();
  const [opened, { toggle }] = useDisclosure(false);
  const smallScreen = useMediaQuery('(min-width: 62em)');

  const activeLink = React.useMemo(() => {
    const path = router.pathname;
    const link = Links.find((menu) => menu.link === path);
    return link;
  }, [router.pathname]);

  const items = Links.map((link, i) => (
    <InternalLink
      href={link.link}
      text={link.title}
      key={i}
      activeLink={activeLink}
    />
  ));

  return (
    <Header height={80} className={classes.header}>
      <Box>
        <GsmsIcon />
      </Box>
      <Flex gap="80px" justify="flex-end" align="center">
        <Group spacing={40} className={classes.links}>
          {items}
        </Group>
        <Flex gap="md" justify="center" align="center">
          <Flex
            gap="md"
            justify="center"
            align="center"
            className={classes.buttonBox}
          >
            {smallScreen && (
              <Link
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/login`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  radius="lg"
                  variant="outline"
                  color="violet.6"
                  fz={14}
                  fw={400}
                >
                  Masuk
                </Button>
              </Link>
            )}
            <Link
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button radius="lg" fw={400} fz={14} color="violet.6">
                Daftar sekarang
              </Button>
            </Link>
          </Flex>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Flex>
      </Flex>
      <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
          <>
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <Flex
                gap="md"
                justify="flex-start"
                align="center"
                p="sm"
                className={classes.buttonBoxDropdown}
              >
                {smallScreen && (
                  <Link
                    href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/login`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      radius="lg"
                      variant="outline"
                      color="violet.6"
                      fz={14}
                      fw={400}
                    >
                      Masuk
                    </Button>
                  </Link>
                )}
                <Link
                  href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button radius="lg" fw={400} fz={14} color="violet.6">
                    Daftar sekarang
                  </Button>
                </Link>
              </Flex>
            </Paper>
          </>
        )}
      </Transition>
    </Header>
  );
};

export default Navbar;
