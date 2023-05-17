import { Box } from '@mantine/core';

import Vector3 from '../../../../public/vector3.svg';

const VectorThree = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: -10,
        transform: 'translateY(60%)',
        zIndex: 0,
      }}
    >
      <Vector3 />
    </Box>
  );
};

export default VectorThree;
