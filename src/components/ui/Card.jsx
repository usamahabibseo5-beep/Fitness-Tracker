import React from 'react';

const Card = ({ title, value, icon, color, children, className = '' }) => {
  return (
    <div className={`card ${className}`} style={{ '--card-color': color }}>
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-value">{value}</div>
        {children}
      </div>
    </div>
  );
};

export default Card;