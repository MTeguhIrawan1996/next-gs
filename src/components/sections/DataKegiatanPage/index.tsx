import * as React from 'react';

import {
  RootWrapper,
  TitleContent,
  VectorOne,
  VectorThree,
  VectorTwo,
} from '@/components/elements';

import { DataKegiatanBook } from './parts';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDataKegiatanPageProps {}

// eslint-disable-next-line unused-imports/no-unused-vars
const DataKegiatanPage: React.FC<IDataKegiatanPageProps> = (props) => {
  return (
    <RootWrapper>
      <VectorOne />
      <TitleContent label="Data Kegiatan" />
      <VectorTwo />
      <DataKegiatanBook />
      <VectorThree />
    </RootWrapper>
  );
};

export default DataKegiatanPage;
