import React from 'react';
import Link from 'next/link';

interface LinkComponentProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ href, children, className }) => {
  // For external links (like Amazon), use regular <a> tag with target="_blank"
  if (href.startsWith('http')) {
    return (
      <a 
        href={href} 
        className={className || "text-blue-500 hover:underline"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  // For internal links, use Next.js Link
  return (
    <Link href={href} className={className || "text-blue-500 hover:underline"}>
      {children}
    </Link>
  );
};

export default LinkComponent;
