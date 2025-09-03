import React from 'react';

interface H3Props {
  children: React.ReactNode;
  className?: string;
}

const H3: React.FC<H3Props> = ({ children, className = "" }) => (
  <h3 className={`text-lg md:text-xl font-medium mt-5 mb-3 ${className}`}>{children}</h3>
);

export default H3;
