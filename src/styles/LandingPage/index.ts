import { createStyles, em, getBreakpointValue } from '@mantine/core';

const landingPageStyle = createStyles((theme) => ({
  container: {
    padding: '40px 40px 40px 40px',
    position: 'relative',
    [`@media (min-width: ${em(getBreakpointValue(theme.breakpoints.md))})`]: {
      padding: '140px 80px 0px 80px',
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
}));

export default landingPageStyle;
