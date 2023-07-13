import { Box, Stack, Text, TypographyStylesProvider } from '@mantine/core';
import * as React from 'react';

import { KeyValuePairs, ModalActionWrapper } from '@/components/elements';

import landingPageStyle from '@/styles/LandingPage';
import { dateFromat } from '@/utils/helper/dateFormat';
import { DetailActivityPlanReportRestResponse } from '@/utils/rest-api/ActivityPlan/useReadOneRestDetailActivityPlan';

interface IModalDetailPelaporanProps {
  data?: DetailActivityPlanReportRestResponse;
  order?: number;
  isOpen: boolean;
  onCloseModal: () => void;
}

const ModalDetailPelaporanKegiatan: React.FC<IModalDetailPelaporanProps> = ({
  isOpen,
  onCloseModal,
  data,
  order,
}) => {
  const { classes } = landingPageStyle();

  const renderStudentsName = React.useCallback((value: string) => {
    return value;
  }, []);

  const studentNameItem =
    data?.data?.studentPresentNames?.map(renderStudentsName);

  return (
    <ModalActionWrapper isOpen={isOpen} onCloseModal={onCloseModal}>
      <Stack w="100%" spacing="md" px="xs">
        <Text fw={700} fz={22}>
          {`Pertemuan ${order ?? '-'} `}
        </Text>
        <Box w="100%">
          <KeyValuePairs
            verticalSpacing={8}
            classNameKey={classes.keySectionDetailPlan}
            classNameValue={classes.valueSectionDetailPlan}
            data={[
              {
                key: 'Tanggal Kegiatan',
                value: dateFromat(data?.data?.activityDate, 'dddd, LL'),
              },
              {
                key: 'Materi',
                value: data?.data?.material ?? '-',
              },
              {
                key: 'Tujuan Pembelajaran',
                value: (
                  <TypographyStylesProvider>
                    <Box
                      fw={400}
                      fz={12}
                      dangerouslySetInnerHTML={{
                        __html: `${data?.data?.goals ?? ''}`,
                      }}
                    />
                  </TypographyStylesProvider>
                ),
              },
              {
                key: 'Absensi',
                value: !studentNameItem?.length
                  ? '-'
                  : studentNameItem?.join(', '),
              },
            ]}
          />
        </Box>
      </Stack>
    </ModalActionWrapper>
  );
};

export default ModalDetailPelaporanKegiatan;
