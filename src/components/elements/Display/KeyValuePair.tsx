import {
  ColSpan,
  Grid,
  MantineNumberSize,
  Stack,
  Text,
  TextProps,
} from '@mantine/core';
import React from 'react';

interface Props {
  fetching?: boolean;
  valueSpan?: ColSpan | undefined;
  horizontalSpacing?: MantineNumberSize;
  verticalSpacing?: MantineNumberSize;
  justify?: 'each-left' | 'tight' | 'apart' | 'each-left' | 'each-right';
  data: {
    key: string;
    value?: string;
  }[];
  keyTextProps?: TextProps;
  valueTextProps?: TextProps;
}
const KeyValuePairs: React.FC<Props> = (props) => {
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
          <Grid gutter={props.horizontalSpacing} key={index}>
            <Grid.Col span={props.valueSpan ?? 4}>
              <Text
                // className={typo.bodSm}
                fz={12}
                fw={300}
                c="dark.4"
                {...props.keyTextProps}
                align={
                  props.justify === 'each-right' || props.justify === 'apart'
                    ? 'right'
                    : 'left'
                }
              >
                {v.key}
              </Text>
            </Grid.Col>
            <Grid.Col span="auto">
              <Text
                // className={typo.bodSm}
                fz={12}
                c="dark.6"
                {...props.valueTextProps}
                align={props.justify === 'each-right' ? 'right' : 'left'}
              >
                {v.value}
              </Text>
            </Grid.Col>
          </Grid>
        );
      })}
    </Stack>
  );
};

export default KeyValuePairs;
