import { Breadcrumbs as MantineBreadcrumbs, Text } from '@mantine/core';
import Link from 'next/link';
import * as React from 'react';

import layoutStyle from '@/styles/Layout';

type Breadcrumbs = {
  label: string;
  path: string;
};

interface IBreadcrumbProps {
  breadcrumbs: Breadcrumbs[];
}

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ breadcrumbs }) => {
  const { classes } = layoutStyle();

  const breadCrumbCallback = React.useCallback(
    (value: Breadcrumbs, index: number) => {
      const { label, path } = value;
      return (
        <Link href={path} key={label} prefetch={false}>
          <Text
            fw={index === breadcrumbs.length - 1 ? 600 : 400}
            className={classes.breadcrumbStyle}
          >
            {label}
          </Text>
        </Link>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [breadcrumbs]
  );

  const breadcrumbLinks = breadcrumbs.map(breadCrumbCallback);

  return (
    <MantineBreadcrumbs separator={<span> / </span>}>
      {breadcrumbLinks}
    </MantineBreadcrumbs>
  );
};

export default React.memo(Breadcrumb);
