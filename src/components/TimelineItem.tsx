import React from 'react';
import TechPill from './TechPill';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  technologies?: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  description,
  technologies = [],
  isLast = false
}) => {
  return (
    <div className="relative flex items-start space-x-4 group">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-200 dark:border-gray-900 group-hover:scale-110 transition-transform duration-300" />
        {!isLast && (
          <div className="w-0.5 h-24 bg-gradient-to-b from-blue-500 to-purple-500 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
            {period}
          </span>
        </div>
        
        <h4 className="font-medium text-blue-400 mb-3">
          {subtitle}
        </h4>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <TechPill key={index} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
