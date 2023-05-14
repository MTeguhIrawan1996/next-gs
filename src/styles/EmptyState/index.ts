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
}));

export default globalStyle;
