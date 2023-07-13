import {
  Box,
  Flex,
  MantineNumberSize,
  Stack,
  Text,
  TextProps,
} from '@mantine/core';
import React from 'react';

import landingPageStyle from '@/styles/LandingPage';

interface Props {
  fetching?: boolean;
  verticalSpacing?: MantineNumberSize;
  justify?: 'each-left' | 'tight' | 'apart' | 'each-left' | 'each-right';
  data: {
    key: string;
    value?: string | React.ReactNode | number;
  }[];
  keyTextProps?: TextProps;
  valueTextProps?: TextProps;
  classNameKey?: string;
  classNameValue?: string;
}
const KeyValuePairs: React.FC<Props> = (props) => {
  const { classes } = landingPageStyle();
  return (
    <Stack spacing={props.verticalSpacing ?? 6}>
      {props.data.map((v, index) => {
        if (props.justify === 'tight') {
          return (
            <Text key={index}>
              <Text span fw={300} c="dark.4" {...props.keyTextProps}>
                {v.key}
              </Text>{' '}
              :{' '}
              <Text span c="dark.6" {...props.valueTextProps}>
                {v.value ?? '-'}
              </Text>
            </Text>
          );
        }
        return (
          <Flex key={index}>
            <Box
              className={props.classNameKey ?? classes.keyDefaultSectionPrimary}
            >
              <Text fz={12} fw={300} c="dark.4" {...props.keyTextProps}>
                {v.key}
              </Text>
            </Box>
            <Box
              className={
                props.classNameValue ?? classes.valueDefaultSectionPrimary
              }
            >
              <Text fz={12} c="dark.6" fw={400} {...props.valueTextProps}>
                {v.value}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Stack>
  );
};

export default React.memo(KeyValuePairs);
