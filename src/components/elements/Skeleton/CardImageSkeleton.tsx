import { Skeleton } from '@mantine/core';

const CardImageSkeleton = () => {
  return (
    <>
      <Skeleton w={320} h={320} radius="lg" />
      <Skeleton w={320} h={320} radius="lg" />
      <Skeleton w={320} h={320} radius="lg" />
    </>
  );
};

export default CardImageSkeleton;
