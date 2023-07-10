import { Icon } from '@iconify/react';
import { Button, Modal } from '@mantine/core';
import * as React from 'react';

interface IModalActionWrapperProps {
  isOpen: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
}

const ModalActionWrapper: React.FC<IModalActionWrapperProps> = ({
  onCloseModal,
  isOpen,
  children,
}) => {
  return (
    <Modal.Root opened={isOpen} onClose={onCloseModal} size="xl" radius="lg">
      <Modal.Overlay />
      <Modal.Content px="none">
        <Modal.Header>
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
              onCloseModal();
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
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalActionWrapper;
