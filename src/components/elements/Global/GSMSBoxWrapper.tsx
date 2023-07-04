import { Icon } from '@iconify/react';
import { Button, Paper, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import * as React from 'react';

interface IGSMSBoxWrapperProps {
  children: React.ReactNode;
  enableBack?: boolean;
}

const GSMSBoxWrapper: React.FC<IGSMSBoxWrapperProps> = ({
  children,
  enableBack,
}) => {
  const Router = useRouter();
  return (
    <Paper shadow="xs" p="sm" bg="#FFFF" radius="lg">
      <Stack justify="center" align="flex-start" spacing="xs">
        {enableBack ? (
          <Button
            leftIcon={
              <Icon icon="tabler:chevron-left" style={{ fontSize: '12px' }} />
            }
            variant="subtle"
            size="xs"
            color="dark"
            compact
            fz="xs"
            fw={400}
            onClick={() => {
              Router.back();
            }}
            styles={() => ({
              root: {
                border: 0,
                paddingLeft: 8,
                paddingRight: 8,
              },
              leftIcon: {
                marginRight: 8,
              },
            })}
          >
            Kembali
          </Button>
        ) : null}
        {children}
      </Stack>
    </Paper>
  );
};

export default GSMSBoxWrapper;
