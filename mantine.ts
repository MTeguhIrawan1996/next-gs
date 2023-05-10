import { MantineProviderProps } from '@mantine/core';

export const theme: MantineProviderProps['theme'] = {
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  fontSizes: {
    xs: '16px',
    sm: '18px',
    md: '20px',
    lg: '23px',
  },
  headings: {
    // properties for all headings
    fontWeight: 400,

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: '46px' },
      h2: { fontSize: '41px' },
      h3: { fontSize: '34px' },
      h4: { fontSize: '32px' },
      h5: { fontSize: '28px' },
      h6: { fontSize: '25px' },
    },
  },
};
