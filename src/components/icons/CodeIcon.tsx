import React from 'react';

interface CodeIconProps {
  className?: string;
  strokeWidth?: number;
}

const CodeIcon: React.FC<CodeIconProps> = ({ className = "w-6 h-6", strokeWidth = 1.5 }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
};

export default CodeIcon;
