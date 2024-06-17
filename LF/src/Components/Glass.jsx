import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import './glass.css';

function Glass({ title, subtitle, imageSrc, to }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    // Initialize VanillaTilt
    VanillaTilt.init(card, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });

    // Mousemove effect
    const handleMouseMove = (e) => {
      let x = e.pageX - (window.innerWidth / 2);
      let y = e.pageY - (window.innerHeight / 2);
      card.style.transform = `translate(${x / 40}px, ${y / 40}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cardContainer">
      <Link to={to} className="cardLink">
        <div ref={cardRef} className="card">
          <h1 className="content">{title}</h1>
          <h3 className="content">{subtitle}</h3>
          <img
            width="100"
            height="100"
            src={imageSrc}
            alt={title}
          />
          {/* Balls placed inside the card for z-index control */}
          <div className="ball ball1"></div>
          <div className="ball ball2"></div>
          <div className="ball ball3"></div>
        </div>
      </Link>
    </div>
  );
}

export default Glass;
