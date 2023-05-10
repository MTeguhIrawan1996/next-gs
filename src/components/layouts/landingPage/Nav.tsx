import { Button, Flex, Group, Header } from '@mantine/core';

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
    link: '/',
  },
  {
    title: 'Galeri Pelaporan',
    link: '/',
  },
  {
    title: 'Siswa Berprestasi',
    link: '/auth',
  },
];
const Navbar = () => {
  const { classes } = layoutStyle();

  const items = Links.map((link, i) => (
    <InternalLink href={link.link} text={link.title} key={i} color="dark.6" />
  ));
  return (
    <Header height={80} className={classes.header}>
      <GsmsIcon />
      <Flex gap="80px" justify="flex-end" align="center">
        <Group spacing={40}>{items}</Group>
        <Flex gap="md" justify="center" align="center">
          <Button radius="lg" variant="outline" color="blue.6" fz={14} fw={400}>
            Masuk
          </Button>
          <Button radius="lg" color="blue.6" fw={400} fz={14}>
            Daftar sekarng
          </Button>
        </Flex>
      </Flex>
    </Header>
  );
};

export default Navbar;
