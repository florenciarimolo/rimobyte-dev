import React from 'react';

interface SearchIconProps {
  className?: string;
  strokeWidth?: number;
}

const SearchIcon: React.FC<SearchIconProps> = ({ className = "w-6 h-6", strokeWidth = 1.5 }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
};

export default SearchIcon;
