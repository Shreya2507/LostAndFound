import React from 'react';
import './glass.css';

function Glass({ title, subtitle, imageSrc }) {
  return (
    <div className="cardContainer">
      <div className="card">
        <p className="city">{title}</p>
        <p className="weather">{subtitle}</p>
        <img
          width="100"
          height="100"
          src={imageSrc}
          alt=""
        />
      </div>
    </div>
  );
}

export default Glass;
