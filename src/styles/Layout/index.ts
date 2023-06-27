import { createStyles, rem } from '@mantine/core';

const HEADER_HEIGHT = rem(80);

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
  buttonBox: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  burger: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  buttonBoxDropdown: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
  link: {
    display: 'block',
    lineHeight: 1,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.dark[6],
    fontSize: '12px',
    fontWeight: 400,

    '&:hover': {
      fontWeight: 600,

      [theme.fn.smallerThan('md')]: {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },
    },
    [theme.fn.smallerThan('md')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
  propsInternalLink: {
    color: theme.colors.violet[6],
  },
  linkActive: {
    '&, &:hover': {
      color: theme.colors.violet[6],
      fontWeight: 600,
    },
  },
  footerConatiner: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: '2.5rem 2.5rem 0rem 0rem',
    overflow: 'hidden',
    background:
      'radial-gradient(100% 100% at 50% 0%, #FFFFFF 0%, #F8F9FA 100%);',
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  footerWrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.fn.largerThan('md')]: {
      flexDirection: 'row',
    },
  },
  addressWrapper: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    paddingLeft: 0,
    width: '100%',
    [theme.fn.largerThan('xs')]: {
      flexDirection: 'row',
      paddingLeft: theme.spacing.xl,
      gap: '1rem',
    },
  },
  firstContent: {
    flex: 2,
    justifyContent: 'center',
    padding: '2rem 1rem 2rem 1rem',
  },
  secondContent: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    gap: theme.spacing.xl,
    background: 'linear-gradient(180deg, #228BE6 -54.95%, #9775FA 100%)',
    padding: '1rem 1rem 1rem 1rem',
    [theme.fn.largerThan('xs')]: {
      flex: 0.95,
    },
    [theme.fn.largerThan('sm')]: {
      padding: '2rem 1rem 2rem 1rem',
    },
    [theme.fn.largerThan('md')]: {
      padding: '2rem 1rem 2rem 1rem',
    },
  },
  footerLogoContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
    padding: theme.spacing.md,
    [theme.fn.largerThan('xs')]: {
      flex: 1,
      padding: 0,
    },
  },
  footerAddressContent: {
    padding: theme.spacing.sm,
    [theme.fn.largerThan('xs')]: {
      borderLeft: '2px solid #C1C2C5',
      flex: 2,
      paddingLeft: theme.spacing.lg,
    },
  },
  breadcrumbStyle: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.colors.dark[1],
    fontSize: 12,
    fontWeight: 400,
    '&:hover': {
      color: theme.colors.violet[6],
      fontWeight: 600,
    },
  },
}));

export default layoutStyle;
