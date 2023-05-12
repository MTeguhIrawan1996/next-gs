import { createStyles, em, getBreakpointValue } from '@mantine/core';

const landingPageStyle = createStyles((theme) => ({
  container: {
    padding: '40px 20px 40px 20px',
    position: 'relative',
    [theme.fn.largerThan('md')]: {
      padding: '140px 80px 0px 80px',
    },
  },
  bottomContainer: {
    padding: '40px 40px 40px 40px',
    position: 'relative',
    [`@media (min-width: ${em(getBreakpointValue(theme.breakpoints.md))})`]: {
      padding: '140px 80px 200px 80px',
    },
  },
  bannerContainer: {
    padding: '40px 40px 0px 40px',
    position: 'relative',
  },
  bannerBox: {
    width: '100%',
    height: '460px',
    position: 'relative',
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    zIndex: 1,
    cursor: 'pointer',
  },
  infoWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '56px',
    flexDirection: 'column',
    [theme.fn.largerThan('md')]: {
      flexDirection: 'row',
    },
  },
  primaryContentWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '32px',
    paddingTop: '60px',
    flex: 1,
  },
  secondaryContentWrapper: {
    flexDirection: 'column',
    gap: theme.spacing.xl,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    paddingBottom: '40px',
    width: '100%',
    [theme.fn.largerThan('xs')]: {
      padding: '0 60px 40px 60px',
    },
    [theme.fn.largerThan('md')]: {
      padding: '0 0 40px 0',
      flex: 1,
    },
  },
  primaryRatio: {
    height: '140px',
    width: '140px',
    [theme.fn.largerThan('sm')]: {
      height: '240px',
      width: '240px',
    },
  },
  secondaryRatio: {
    height: '140px',
    width: '190px',
    [theme.fn.largerThan('sm')]: {
      height: '240px',
      width: '330px',
    },
  },
  primaryCardWrapper: {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  secondaryCardWrapper: {
    overflow: 'hidden',
    position: 'absolute',
    right: -5,
    bottom: 0,
    backgroundColor: 'transparent',
    transform: 'translateY(30%)',
    zIndex: 1,
    [theme.fn.largerThan('xs')]: {
      right: 30,
      transform: 'translateY(40%)',
    },
    [theme.fn.largerThan('sm')]: {
      right: 10,
    },
    [theme.fn.largerThan('md')]: {
      right: 50,
    },
  },
  textBox: {
    width: '100%',
    [theme.fn.largerThan('sm')]: {
      width: '80%',
    },
  },
  paragrafBox: {
    width: '100%',
    [theme.fn.largerThan('sm')]: {
      width: '80%',
    },
    [theme.fn.largerThan('md')]: {
      width: '60%',
    },
  },
  colorSpan: {
    color: theme.colors.brand[6],
  },
  primaryText: {
    fontWeight: 700,
    fontSize: '32px',
    [theme.fn.largerThan('sm')]: {
      fontWeight: 700,
      fontSize: '56px',
    },
  },
  secondaryText: {
    fontWeight: 300,
    fontSize: '16px',
    [theme.fn.largerThan('sm')]: {
      fontWeight: 300,
      fontSize: '18px',
    },
  },
}));

export default landingPageStyle;
