import { ApolloError, useLazyQuery } from '@apollo/client';
import { Box, Container, Flex } from '@mantine/core';
import * as React from 'react';

import { READ_SUBMISSION } from '@/graphql/query/rekapSeniman';

import ModalTable from '../elements/ModalTable';
import Table from '../elements/Table';

import { GetRecapSenimanRes, RecapSenimanVariable } from '@/types/rekapSeniman';

const Content = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [getRecapSeniman, { data, loading }] = useLazyQuery<
    GetRecapSenimanRes,
    RecapSenimanVariable
  >(READ_SUBMISSION, {
    onError: (err: ApolloError) => {
      return err;
    },
    fetchPolicy: 'cache-and-network',
  });

  const onOpenModal = async (id: string) => {
    setIsOpen((prev) => !prev);
    await getRecapSeniman({
      variables: {
        id: id,
        findAllDinasActivityFormsInput: {
          page: 1,
          limit: 10,
          search: null,
          orderBy: 'createdAt',
          orderDir: 'desc',
          activityId: `${process.env.NEXT_PUBLIC_ACTIVITY_ID}`,
        },
      },
    });
  };
  const onCloseModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box w="100%" px="md" className="innerYPaddings">
      <Container size="xl" className="paddings" mb={120}>
        <Flex align="center" justify="center">
          <Table onOpenModal={onOpenModal} />
          <ModalTable
            isOpen={isOpen}
            onCloseModal={onCloseModal}
            data={data}
            loading={loading}
            getRecapSeniman={getRecapSeniman}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Content;
