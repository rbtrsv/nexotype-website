import React from 'react';

interface ULProps {
  children: React.ReactNode;
  className?: string;
}

const UL: React.FC<ULProps> = ({ children, className = '' }) => {
  return <ul className={`list-disc pl-5 my-4 marker:text-zinc-400 dark:marker:text-zinc-500 ${className}`}>{children}</ul>;
};

export default UL;