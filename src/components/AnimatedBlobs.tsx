import React from 'react';

const AnimatedBlobs: React.FC = () => {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {/* Floating Dots - Top Section */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60 dark:opacity-40"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-60 dark:opacity-40"></div>
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50 dark:opacity-30" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-32 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60 dark:opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-80 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-50 dark:opacity-30" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Floating Dots - Middle Section */}
      <div className="absolute top-1/2 left-16 w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse opacity-60 dark:opacity-40" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 right-24 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60 dark:opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-50 dark:opacity-30" style={{ animationDuration: '4s', animationDelay: '0.8s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse opacity-60 dark:opacity-40" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-50 dark:opacity-30" style={{ animationDelay: '1.2s' }}></div>
      
      {/* Floating Dots - Bottom Section */}
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50 dark:opacity-30" style={{ animationDuration: '3.5s' }}></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60 dark:opacity-40" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute bottom-60 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-60 dark:opacity-40" style={{ animationDelay: '0.7s' }}></div>
      <div className="absolute bottom-32 right-1/3 w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse opacity-50 dark:opacity-30" style={{ animationDelay: '2.2s' }}></div>
      <div className="absolute bottom-80 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60 dark:opacity-40" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Floating Dots - Center Area */}
      <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-50 dark:opacity-30" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute top-2/3 right-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-60 dark:opacity-40" style={{ animationDelay: '1.7s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50 dark:opacity-30" style={{ animationDuration: '5s', animationDelay: '0.9s' }}></div>
    </div>
  );
};

export default AnimatedBlobs;
