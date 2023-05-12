import {
  Burger,
  Button,
  Flex,
  Group,
  Header,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

import InternalLink from '@/components/elements/InternalLink';

import layoutStyle from '@/styles/Layout';

import GsmsIcon from '../../../../public/gsms.svg';

const Links = [
  {
    title: 'Beranda',
    link: '/',
  },
  {
    title: 'Seniman',
    link: '/seniman',
  },
  {
    title: 'Galeri Pelaporan',
    link: '/galeri',
  },
  {
    title: 'Siswa Berprestasi',
    link: '/siswa',
  },
];
const Navbar = () => {
  const { classes } = layoutStyle();
  const [opened, { toggle }] = useDisclosure(false);

  const items = Links.map((link, i) => (
    <InternalLink href={link.link} text={link.title} key={i} />
  ));

  return (
    <Header height={80} className={classes.header}>
      <GsmsIcon />
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
