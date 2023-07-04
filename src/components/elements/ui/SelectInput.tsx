import { Select, SelectProps } from '@mantine/core';
import * as React from 'react';

const SelectInput: React.FC<
  SelectProps & React.RefAttributes<HTMLInputElement>
> = (props) => {
  const { data, label, placeholder, ...rest } = props;

  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
      radius="xl"
      nothingFound="Data tidak ada"
      {...rest}
    />
  );
};

export default React.memo(SelectInput);
