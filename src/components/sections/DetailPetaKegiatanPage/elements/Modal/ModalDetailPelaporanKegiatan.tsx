import { Box, Stack, Text } from '@mantine/core';
import * as React from 'react';

import { KeyValuePairs, ModalActionWrapper } from '@/components/elements';

import { DetailActivityPlanResponse } from '@/graphql/query/readOneActivityPlan';
import landingPageStyle from '@/styles/LandingPage';
import { dateFromat } from '@/utils/helper/dateFormat';

interface IModalDetailPelaporanProps {
  data?: DetailActivityPlanResponse;
  isOpen: boolean;
  onCloseModal: () => void;
}

interface IStudentsName {
  id: string;
  student: {
    name: string;
  };
}

const ModalDetailPelaporanKegiatan: React.FC<IModalDetailPelaporanProps> = ({
  isOpen,
  onCloseModal,
  data,
}) => {
  const { classes } = landingPageStyle();

  const renderStudentsName = React.useCallback((value: IStudentsName) => {
    return value.student.name;
  }, []);

  const studentNameItem =
    data?.landingPageActivityPlan.report.studentAbsences.data.map(
      renderStudentsName
    );

  return (
    <ModalActionWrapper isOpen={isOpen} onCloseModal={onCloseModal}>
      <Stack w="100%" spacing="md" px="xs">
        <Text fw={700} fz={22}>
          {`Pertemuan ${data?.landingPageActivityPlan.order ?? '-'}`}
        </Text>
        <Box w="100%">
          <KeyValuePairs
            verticalSpacing={8}
            classNameKey={classes.keySectionDetailPlan}
            classNameValue={classes.valueSectionDetailPlan}
            data={[
              {
                key: 'Tanggal Kegiatan',
                value: dateFromat(
                  data?.landingPageActivityPlan.report.activityDate,
                  'dddd, LL'
                ),
              },
              {
                key: 'Materi',
                value: data?.landingPageActivityPlan.report.material ?? '-',
              },
              {
                key: 'Tujuan Pembelajaran',
                value: data?.landingPageActivityPlan.goals ?? '-',
              },
              {
                key: 'Absensi',
                value: studentNameItem?.join(', ') ?? '-',
              },
            ]}
          />
        </Box>
      </Stack>
    </ModalActionWrapper>
  );
};

export default ModalDetailPelaporanKegiatan;
