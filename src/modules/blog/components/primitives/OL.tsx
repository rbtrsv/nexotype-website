import React from 'react';

interface OLProps {
  children: React.ReactNode;
  className?: string;
}

const OL: React.FC<OLProps> = ({ children, className = '' }) => {
  return <ol className={`list-decimal pl-5 mb-4 marker:text-zinc-400 dark:marker:text-zinc-500 max-sm:text-sm sm:text-base ${className}`}>{children}</ol>;
};

export default OL;