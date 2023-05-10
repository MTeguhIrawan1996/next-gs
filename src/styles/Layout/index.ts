import { createStyles } from '@mantine/core';

const layoutStyle = createStyles((theme) => ({
  rootContainer: {
    position: 'relative',
    background: ' linear-gradient(180deg, #FFFFFF 0%, #F2F9FF 100%)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '0px',
    paddingRight: theme.spacing.xl,
    paddingLeft: '2rem',
  },
}));

export default layoutStyle;
