/* eslint-disable unused-imports/no-unused-vars */
import { Box, createStyles } from '@mantine/core';
import { DataTable, DataTableProps } from 'mantine-datatable';
import * as React from 'react';

import EmptyTableState from '../Display/EmptyTableState';

interface EmptyTableStateProps {
  title?: string;
  message?: string;
}

interface IGlobalDefaultTableProps<T> {
  tableProps: DataTableProps<T>;
  emptyTableStateProps?: EmptyTableStateProps;
}

const useStyles = createStyles((theme) => ({
  table: {
    border: `1px solid #FFFF`,
    borderRadius: theme.radius.lg,
  },
}));

export default function GlobalDefaultTable<T>({
  tableProps,
  emptyTableStateProps,
}: IGlobalDefaultTableProps<T>) {
  const {
    fetching,
    minHeight,
    noRecordsText,
    defaultColumnRender,
    highlightOnHover,
    noRecordsIcon,
    emptyState,
    ...rest
  } = tableProps;
  const { classes } = useStyles();

  return (
    <Box w="100%" sx={{ zIndex: 1 }}>
      <DataTable
        styles={{
          header: {
            textTransform: 'uppercase',
          },
        }}
        className={classes.table}
        fontSize={12}
        horizontalSpacing="xl"
        verticalSpacing="sm"
        verticalAlignment="center"
        borderColor="#4C6EF5"
        highlightOnHover={true}
        rowBorderColor="#b197fc"
        minHeight={
          tableProps.records && tableProps.records?.length < 1 ? 0 : 280
        }
        fetching={fetching}
        defaultColumnRender={(row, _, accessor) => {
          const data = row[accessor as keyof typeof row];
          return data ? data : '-';
        }}
        noRecordsIcon={<></>}
        noRecordsText=""
        {...rest}
      />
      {tableProps.records && tableProps.records?.length < 1 ? (
        <EmptyTableState {...emptyTableStateProps} />
      ) : null}
    </Box>
  );
}
