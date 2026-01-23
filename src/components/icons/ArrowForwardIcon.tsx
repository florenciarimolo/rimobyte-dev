import React from 'react';

interface ArrowForwardIconProps {
  className?: string;
  strokeWidth?: number;
}

const ArrowForwardIcon: React.FC<ArrowForwardIconProps> = ({ className = "w-6 h-6", strokeWidth = 1.5 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={strokeWidth} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
    </svg>
  );
};

export default ArrowForwardIcon;
