import { Flex, SelectProps } from '@mantine/core';
import * as React from 'react';

import landingPageStyle from '@/styles/LandingPage';

import SelectInput from './SelectInput';

interface IMultipleSelectProps {
  MultipleSelectProps: SelectProps[];
}

const MultipleSelect: React.FC<IMultipleSelectProps> = ({
  MultipleSelectProps,
}) => {
  const { classes } = landingPageStyle();
  const renderSelectItem = React.useCallback(
    (value: SelectProps, index: number) => {
      return <SelectInput {...value} sx={{ flex: 1 }} key={index} />;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [MultipleSelectProps]
  );

  const selectItems = MultipleSelectProps.map(renderSelectItem);

  return (
    <Flex w="100%" gap="md" className={classes.rowToColumn}>
      {selectItems}
    </Flex>
  );
};

export default React.memo(MultipleSelect);
