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
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import { InternalLink } from '@/components/elements';

import layoutStyle from '@/styles/Layout';

import GsmsLogo from '../../../../public/logo-gsms.png';

type LinksProps = {
  title: string;
  link: string;
};

const Links: LinksProps[] = [
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

  const linkCallback = React.useCallback(
    (value: LinksProps, i: number) => {
      const { link, title } = value;
      return (
        <InternalLink
          href={link}
          text={title}
          key={i}
          activeLink={activeLink}
        />
      );
    },
    [activeLink]
  );

  const items = Links.map(linkCallback);

  return (
    <Header height={80} className={classes.header}>
      <Box h="55px" w="90px" sx={{ position: 'relative' }}>
        <Image
          src={GsmsLogo}
          alt="Logo-gsms"
          quality={100}
          priority
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            backgroundPosition: 'center',
          }}
        />
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
