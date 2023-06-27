import { Icon } from '@iconify/react';
import { Button, Center, TextInput, TextInputProps } from '@mantine/core';
import * as React from 'react';

interface IAppProps extends TextInputProps {
  onSearch?: () => void;
}

const SearchBar: React.FC<IAppProps> = ({
  placeholder,
  value,
  onChange,
  onSearch,
}) => {
  return (
    <TextInput
      radius="xl"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && onSearch) {
          onSearch();
        }
      }}
      icon={
        <Center pl="xs">
          <Icon icon="tabler:search" fontSize={16} />
        </Center>
      }
      rightSection={
        <Button
          onClick={onSearch}
          fz={12}
          fw={400}
          sx={{
            borderRadius: '0px 100px 100px 0px',
            position: 'absolute',
            right: 0,
          }}
        >
          Cari
        </Button>
      }
      styles={(theme) => ({
        input: {
          backgroundColor: '#F2F3F9',
          '::placeholder': {
            fontWeight: 300,
            fontSize: 12,
          },
        },

        icon: {
          color: theme.colors.dark[6],
          paddingLeft: theme.spacing.sm,
          paddingRight: theme.spacing.sm,
        },
      })}
    />
  );
};

export default React.memo(SearchBar);
