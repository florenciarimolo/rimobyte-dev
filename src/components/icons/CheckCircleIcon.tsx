import React from 'react';

interface CheckCircleIconProps {
  className?: string;
  strokeWidth?: number;
}

const CheckCircleIcon: React.FC<CheckCircleIconProps> = ({ className = "w-6 h-6", strokeWidth = 1.5 }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 18H18a2.25 2.25 0 002.25-2.25V9.75A2.25 2.25 0 0018 7.5h-1.5m-9 3.75V18a2.25 2.25 0 002.25 2.25h6A2.25 2.25 0 0018 18V9.75a2.25 2.25 0 00-2.25-2.25h-6A2.25 2.25 0 007.5 9.75v.75m0 0H4.5m3 0h3m-3 0v-1.5m0 1.5v-1.5m3 1.5H7.5m0 0v-1.5m0 1.5H4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
    </svg>
  );
};

export default CheckCircleIcon;
