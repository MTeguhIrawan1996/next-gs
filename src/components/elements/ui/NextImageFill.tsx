import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

import { rgbDataURL } from '@/utils/helper/imagePlaceholder';

interface INextImageFillProps {
  src: string | StaticImageData;
  alt: string;
}

const NextImageFill: React.FC<INextImageFillProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      quality={100}
      alt={alt}
      fill
      style={{
        backgroundPosition: 'center',
      }}
      placeholder="blur"
      blurDataURL={rgbDataURL(234, 233, 238)}
      sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
    />
  );
};

export default NextImageFill;
