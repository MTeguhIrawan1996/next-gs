import { Button, Flex, Header } from '@mantine/core';
import Link from 'next/link';

import layoutStyle from '@/styles/Layout';

import GsmsIcon from '../../../../public/gsms.svg';

// const Links = [
//   {
//     title: 'Beranda',
//     link: '/',
//   },
//   {
//     title: 'Seniman',
//     link: '/',
//   },
//   {
//     title: 'Galeri Pelaporan',
//     link: '/',
//   },
//   {
//     title: 'Siswa Berprestasi',
//     link: '/auth',
//   },
// ];
const Navbar = () => {
  const { classes } = layoutStyle();

  // const items = Links.map((link, i) => (
  //   <InternalLink href={link.link} text={link.title} key={i} color="dark.6" />
  // ));

  return (
    <Header height={80} className={classes.header}>
      <GsmsIcon />
      <Flex gap="80px" justify="flex-end" align="center">
        {/* <Group spacing={40}>{items}</Group> */}
        <Flex gap="md" justify="center" align="center">
          <Link
            href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}auth/login`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              radius="lg"
              variant="outline"
              color="blue.6"
              fz={14}
              fw={400}
            >
              Masuk
            </Button>
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}auth/register`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button radius="lg" color="blue.6" fw={400} fz={14}>
              Daftar sekarang
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Header>
  );
};

export default Navbar;
