import Link from 'next/link';
import * as React from 'react';

import layoutStyle from '@/styles/Layout';

type IActiveProps = {
  title: string;
  link: string;
};

type ILinkNavProps = {
  href: string;
  text: string;
  activeLink?: IActiveProps;
  brandLink?: boolean;
};

const InternalLink = ({ href, text, activeLink, brandLink }: ILinkNavProps) => {
  const { classes, cx } = layoutStyle();

  return (
    <Link
      href={href}
      className={cx(
        classes.link,
        {
          [classes.linkActive]: activeLink?.link === href,
        },
        { [classes.propsInternalLink]: brandLink }
      )}
    >
      {text}
    </Link>
  );
};

export default React.memo(InternalLink);
