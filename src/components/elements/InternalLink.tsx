import Link from 'next/link';
import * as React from 'react';

import layoutStyle from '@/styles/Layout';

type ILinkNavProps = {
  href: string;
  text: string;
};

const InternalLink = ({ href, text }: ILinkNavProps) => {
  const { classes, cx } = layoutStyle();

  const [active, setActive] = React.useState<string>('/');

  return (
    <Link
      href={href}
      className={cx(classes.link, {
        [classes.linkActive]: active === href,
      })}
      onClick={() => {
        setActive(href);
      }}
    >
      {text}
    </Link>
  );
};

export default InternalLink;
