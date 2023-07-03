import dynamic from 'next/dynamic';
import React from 'react';
import { ReactPlayerProps } from 'react-player/types/lib';

const _ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

interface Iprops {
  link: string;
}

const YoutubeThumbnailFull: React.FC<Iprops> = ({ link }) => {
  return (
    <ReactPlayer
      url={link}
      width="100%"
      height="100%"
      playing={false}
      controls
    />
  );
};

export default React.memo(YoutubeThumbnailFull);
