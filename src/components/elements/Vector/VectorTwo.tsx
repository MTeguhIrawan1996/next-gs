import { Box } from '@mantine/core';

import Vector2 from '../../../../public/vector2.svg';

const VectorTwo = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: -10,
        transform: 'translateY(20%)',
        zIndex: 0,
      }}
    >
      <Vector2 />
    </Box>
  );
};

export default VectorTwo;
