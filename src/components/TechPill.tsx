import React from 'react';
import { techConfig } from './techConfig';

interface TechPillProps {
  tech: string;
}

const TechPill: React.FC<TechPillProps> = ({ tech }) => {
  const config = techConfig[tech] || techConfig.default;
  
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium text-white rounded-full transition-all duration-200 hover:scale-105 ${config.gradient}`}
      style={config.backgroundColor && !config.gradient.includes('gradient') ? { backgroundColor: config.backgroundColor } : undefined}
    >
      {config.icon && (
        <span className="mr-1.5 flex-shrink-0 w-3.5 h-3.5" dangerouslySetInnerHTML={{ __html: config.icon }} />
      )}
      {tech}
    </span>
  );
};

export default TechPill;
