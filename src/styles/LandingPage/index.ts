import { createStyles, em, getBreakpointValue } from '@mantine/core';

const landingPageStyle = createStyles((theme) => ({
  container: {
    padding: '40px 40px 40px 40px',
    position: 'relative',
    [`@media (min-width: ${em(getBreakpointValue(theme.breakpoints.md))})`]: {
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
    flex: 1,
    paddingBottom: '40px',
  },
  primaryCardWrapper: {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  secondaryCardWrapper: {
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    transform: 'translateX(-15%) translateY(-100%)',
    zIndex: 1,
  },
  colorSpan: {
    color: theme.colors.brand[6],
  },
}));

export default landingPageStyle;
