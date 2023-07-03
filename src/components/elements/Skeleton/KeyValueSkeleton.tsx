import { Box, Flex, Skeleton, Stack } from '@mantine/core';

import landingPageStyle from '@/styles/LandingPage';

const KeyValueSkeleton = () => {
  const { classes } = landingPageStyle();

  return (
    <Stack>
      <Flex gap="xl">
        <Box className={classes.keyDefaultSectionPrimary}>
          <Skeleton height={20} width={120} radius="xl" />
        </Box>
        <Box className={classes.valueDefaultSectionPrimary}>
          <Skeleton height={20} width={220} radius="xl" />
        </Box>
      </Flex>
      <Flex gap="xl">
        <Box className={classes.keyDefaultSectionPrimary}>
          <Skeleton height={20} width={120} radius="xl" />
        </Box>
        <Box className={classes.valueDefaultSectionPrimary}>
          <Skeleton height={20} width={220} radius="xl" />
        </Box>
      </Flex>
      <Flex gap="xl">
        <Box className={classes.keyDefaultSectionPrimary}>
          <Skeleton height={20} width={120} radius="xl" />
        </Box>
        <Box className={classes.valueDefaultSectionPrimary}>
          <Skeleton height={20} width={220} radius="xl" />
        </Box>
      </Flex>
      <Flex gap="xl">
        <Box className={classes.keyDefaultSectionPrimary}>
          <Skeleton height={20} width={120} radius="xl" />
        </Box>
        <Box className={classes.valueDefaultSectionPrimary}>
          <Skeleton height={20} width={220} radius="xl" />
        </Box>
      </Flex>
      <Flex gap="xl">
        <Box className={classes.keyDefaultSectionPrimary}>
          <Skeleton height={20} width={120} radius="xl" />
        </Box>
        <Box className={classes.valueDefaultSectionPrimary}>
          <Skeleton height={20} width={220} radius="xl" />
        </Box>
      </Flex>
    </Stack>
  );
};

export default KeyValueSkeleton;
