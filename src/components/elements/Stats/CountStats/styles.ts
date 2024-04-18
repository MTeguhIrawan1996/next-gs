import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  // grid container of 3 card
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: `calc(${theme.spacing.xl} * 2))`,
    height: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
  titleLabel: {
    fontSize: `calc(${theme.fontSizes.md} * 2))`,
    fontWeight: 600,
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xl,
    padding: theme.spacing.lg,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.shadows.sm,
    transition: 'box-shadow 200ms ease',
    '&:hover': {
      boxShadow: theme.shadows.md,
      backgroundColor: theme.colors.brand[5],
      cursor: 'pointer',
      color: 'white !important',
    },
  },
}));
