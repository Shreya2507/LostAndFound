import React from 'react';
import { Link } from 'react-router-dom';
import './GlassCard.css';

function Glass({ title, subtitle, imageSrc, to }) {
  return (
    <div className="cardContainer">
      <Link to={to} className="cardLink">
        <div className="card">
          <p className="city">{title}</p>
          <p className="weather">{subtitle}</p>
          <img
            width="100"
            height="100"
            src={imageSrc}
            alt={title}
          />
        </div>
      </Link>
    </div>
  );
}

export default Glass;
