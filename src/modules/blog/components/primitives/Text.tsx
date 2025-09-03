import React from 'react';

interface TextProps extends React.HTMLProps<HTMLParagraphElement> {}

const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <p className="my-4 font-normal max-sm:text-sm sm:text-base leading-relaxed dark:text-white text-black" {...props}>
    {children}
  </p>
);

export default Text;