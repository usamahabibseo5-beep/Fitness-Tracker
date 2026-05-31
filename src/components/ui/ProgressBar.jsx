import React from 'react';

const ProgressBar = ({ value, max = 100, color = '#4f46e5' }) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="progress-bar">
      <div 
        className="progress-fill"
        style={{ 
          width: `${Math.min(percentage, 100)}%`,
          backgroundColor: color
        }}
      />
    </div>
  );
};

export default ProgressBar;