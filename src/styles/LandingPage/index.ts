import { createStyles } from '@mantine/core';

const landingPageStyle = createStyles((theme) => ({
  container: {
    padding: '40px 20px 40px 20px',
    position: 'relative',
    [theme.fn.largerThan('md')]: {
      padding: '140px 80px 0px 80px',
    },
  },
  bottomContainer: {
    padding: '5px 10px 5px 10px',
    position: 'relative',
    [theme.fn.largerThan('xs')]: {
      padding: '10px 20px 90px 20px',
    },
    [theme.fn.largerThan('sm')]: {
      padding: '30px 70px 160px 70px',
    },
    [theme.fn.largerThan('md')]: {
      padding: '50px 50px 180px 50px',
    },
    [theme.fn.largerThan('lg')]: {
      padding: '110px 50px 200px 50px',
    },
    [theme.fn.largerThan('xl')]: {
      padding: '140px 80px 200px 80px',
    },
  },
  bannerContainer: {
    padding: '20px 5px 0px 5px',
    position: 'relative',
  },
  bannerBox: {
    width: '100%',
    height: '184px',
    position: 'relative',
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    zIndex: 1,
    cursor: 'pointer',
    [theme.fn.largerThan('xs')]: {
      height: '240px',
    },
    [theme.fn.largerThan('sm')]: {
      height: '260px',
    },
    [theme.fn.largerThan('md')]: {
      height: '340px',
    },
    [theme.fn.largerThan('lg')]: {
      height: '460px',
    },
    [theme.fn.largerThan('xl')]: {
      height: '620px',
    },
  },
  infoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: '56px',
    flexDirection: 'column',
    width: '100%',
    [theme.fn.largerThan('lg')]: {
      flexDirection: 'row',
    },
    [theme.fn.largerThan('xl')]: {
      maxWidth: '1288px',
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
    width: '312px',
    [theme.fn.largerThan('xs')]: {
      width: '100%',
      padding: '0 10px 40px 20px',
    },
    [theme.fn.largerThan('sm')]: {
      width: '100%',
      padding: '0 30px 40px 60px',
    },
    [theme.fn.largerThan('md')]: {
      padding: '0 30px 40px 60px',
      width: '70%',
    },
    [theme.fn.largerThan('lg')]: {
      padding: '0 0 40px 0',
      flex: 1,
    },
  },
  primaryRatio: {
    height: '140px',
    width: '140px',
    [theme.fn.largerThan('xs')]: {
      height: '240px',
      width: '240px',
    },
  },
  secondaryRatio: {
    height: '140px',
    width: '190px',

    [theme.fn.largerThan('xs')]: {
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
      right: 5,
      transform: 'translateY(40%)',
    },
    [theme.fn.largerThan('sm')]: {
      right: 10,
    },
    [theme.fn.largerThan('md')]: {
      right: -10,
    },
    [theme.fn.largerThan('lg')]: {
      right: 10,
    },
    [theme.fn.largerThan('xl')]: {
      right: 80,
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
    fontSize: '30px',
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
  buttonBox: {
    gap: theme.spacing.md,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    zIndex: 1,
    width: '100%',
    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    [theme.fn.largerThan('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  },
  buttonStyle: {
    width: '100%',
    [theme.fn.largerThan('md')]: {
      width: 'auto',
    },
  },

  // Detail Siswa Berprestasi Page
  rowToColumn: {
    flexDirection: 'column',
    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
    },
  },
  detailSiswaDinamisFlexPrimary: {
    borderRadius: 8,
    overflow: 'hidden',
    height: 240,
    position: 'relative',
    width: 240,
    [theme.fn.largerThan('lg')]: {
      flex: 2.5,
    },
  },

  // KEY VALUE PAIR

  keyDefaultSectionPrimary: {
    flex: 6,
    [theme.fn.largerThan('lg')]: {
      flex: 2,
    },
  },
  valueDefaultSectionPrimary: {
    flex: 6,
    [theme.fn.largerThan('lg')]: {
      flex: 10,
    },
  },
  keySectionPrimary: {
    flex: 6,
    [theme.fn.largerThan('lg')]: {
      flex: 3,
    },
  },
  valueSectionPrimary: {
    flex: 6,
    [theme.fn.largerThan('lg')]: {
      flex: 9,
    },
  },
}));

export default landingPageStyle;
