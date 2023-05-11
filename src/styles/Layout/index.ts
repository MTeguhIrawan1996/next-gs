import { createStyles } from '@mantine/core';

const layoutStyle = createStyles((theme) => ({
  rootContainer: {
    position: 'relative',
    overflow: 'hidden',
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
  footerConatiner: {
    padding: '200px 0 0 0',
    maxWidth: '100%',
    position: 'relative',
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'radial-gradient(100% 100% at 50% 0%, #FFFFFF 0%, #F8F9FA 100%);',
    borderRadius: '2rem 2rem 0rem 0rem',
    overflow: 'hidden',
    // paddingTop: theme.spacing.lg,
  },
}));

export default layoutStyle;
