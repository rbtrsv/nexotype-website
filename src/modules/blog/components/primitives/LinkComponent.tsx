import React from 'react';
import Link from 'next/link';

interface LinkComponentProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ href, children, className }) => (
  <Link href={href} className={className || "text-blue-500 hover:underline"}>
    {children}
  </Link>
);

export default LinkComponent;
