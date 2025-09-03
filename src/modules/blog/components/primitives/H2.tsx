import React from 'react';

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

const H2: React.FC<H2Props> = ({ children, className = "" }) => (
  <h2 className={`text-2xl md:text-3xl font-semibold mt-6 mb-4 ${className}`}>{children}</h2>
);

export default H2;
