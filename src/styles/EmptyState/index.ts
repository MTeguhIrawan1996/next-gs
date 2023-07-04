import { createStyles } from '@mantine/core';

const globalStyle = createStyles((theme) => ({
  imageBox: {
    position: 'relative',
    height: '220px',
    width: '320px',
    [theme.fn.largerThan('xs')]: {
      height: '320px',
      width: '420px',
    },
  },
  heading4: {
    fontWeight: 700,
    fontSize: 18,
    color: theme.colors.dark[6],
    [theme.fn.smallerThan('xs')]: {
      fontSize: 16,
    },
  },
}));

export default globalStyle;
