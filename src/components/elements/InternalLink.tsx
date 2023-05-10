import { Text } from '@mantine/core';
import Link from 'next/link';
import * as React from 'react';

type ILinkNavProps = {
  href: string;
  text: string;
  color?: string;
};

const InternalLink = ({ href, text, color }: ILinkNavProps) => {
  return (
    <Link href={href}>
      <Text fz="12px" fw={400} color={color}>
        {text}
      </Text>
    </Link>
  );
};

export default InternalLink;
