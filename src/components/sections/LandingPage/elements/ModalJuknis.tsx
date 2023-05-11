import { Button, Flex, Modal } from '@mantine/core';
import * as React from 'react';

interface IModalJuknisProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const ModalJuknis: React.FC<IModalJuknisProps> = ({ isOpen, onCloseModal }) => {
  return (
    <Modal.Root opened={isOpen} onClose={onCloseModal} size="70%" h="100%">
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Body>
          <Flex direction="column" gap="md">
            <iframe
              src={`${process.env.NEXT_PUBLIC_URL}Juknis_PDF.pdf`}
              width="100%"
              height="480"
            />
            <Flex w="100%" justify="flex-end" align="flex-end">
              <Flex justify="center" align="center" gap="md">
                <Button
                  fw={400}
                  fz={14}
                  variant="filled"
                  radius="md"
                  onClick={onCloseModal}
                >
                  Tutup
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalJuknis;
