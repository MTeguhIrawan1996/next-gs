import { MantineProviderProps } from '@mantine/core';

export const theme: MantineProviderProps['theme'] = {
  fontFamily: 'Inter, sans-serif',
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  fontSizes: {
    xs: '16px',
    sm: '18px',
    md: '20px',
    lg: '23px',
  },
  headings: {
    // properties for all headings\
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: '46px' },
      h2: { fontSize: '41px' },
      h3: { fontSize: '34px' },
      h4: { fontSize: '32px' },
      h5: { fontSize: '28px' },
      h6: { fontSize: '24px' },
    },
  },

  colors: {
    brand: [
      '#F3F0FF',
      '#E5DBFF',
      '#D0BFFF',
      '#B197FC',
      '#9775FA',
      '#845EF7',
      '#7950F2',
      '#7048E8',
      '#6741D9',
      '#5F3DC4',
    ],
  },
  primaryColor: 'brand',
};
