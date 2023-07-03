import * as React from 'react';

import { getGoogleDriveThumbnailUrl } from '@/utils/helper/formatGDriveUrl';
import { googleDriveUrlRegex } from '@/utils/helper/regex';

interface Iprops {
  link: string;
}

const GDriveThumbnailFull: React.FC<Iprops> = ({ link }) => {
  const thumbnailUrlCallback = React.useCallback((links: string) => {
    return getGoogleDriveThumbnailUrl(links);
  }, []);

  const thumbnailUrl = thumbnailUrlCallback(link);

  return googleDriveUrlRegex.test(link) ? (
    <iframe
      width="100%"
      height="100%"
      src={thumbnailUrl}
      allowFullScreen
      style={{
        borderWidth: 0,
      }}
      loading="lazy"
      allow="autoplay; encrypted-media"
      sandbox="allow-forms allow-scripts allow-same-origin"
    />
  ) : null;
};

export default React.memo(GDriveThumbnailFull);
