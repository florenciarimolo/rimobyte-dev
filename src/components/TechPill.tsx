import React from 'react';
import { techConfig } from './techConfig';

interface TechPillProps {
  tech: string;
}

const TechPill: React.FC<TechPillProps> = ({ tech }) => {
  const config = techConfig[tech] || techConfig.default;
  const showText = !config.hideText;
  
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium text-white rounded-full transition-all duration-200 hover:scale-105 ${config.gradient}`}
      style={config.backgroundColor && !config.gradient.includes('gradient') ? { backgroundColor: config.backgroundColor } : undefined}
      role="img"
      aria-label={tech}
      title={tech}
    >
      {config.icon && (
        <span 
          className={`flex-shrink-0 ${config.hideText ? 'h-3.5' : 'w-3.5 h-3.5'} ${showText ? 'mr-1.5' : ''}`} 
          style={config.hideText ? { width: 'auto', minWidth: '5.5rem', display: 'inline-flex', alignItems: 'center' } : undefined}
          dangerouslySetInnerHTML={{ __html: config.icon }}
          aria-hidden="true"
        />
      )}
      {showText && <span>{tech}</span>}
    </span>
  );
};

export default TechPill;
