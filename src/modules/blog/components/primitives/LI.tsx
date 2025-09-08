import React from 'react';

interface LIProps {
  children: React.ReactNode;
  className?: string;
}

const LI: React.FC<LIProps> = ({ children, className = '' }) => {
  return <li className={`mb-2 max-sm:text-sm sm:text-base ${className}`}>{children}</li>;
};

export default LI;