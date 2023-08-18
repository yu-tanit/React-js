import React from 'react';
import './Card.css';

const Card = ({ imageSrc, title, subTitle, description }) => {
  return (
    <div className="card">
      <div className="card-container">
      <img src={imageSrc} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          {subTitle && <h3 className="card-subtitle">{subTitle}</h3>}
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
