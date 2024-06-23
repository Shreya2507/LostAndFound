import React, { useRef, useEffect, useCallback } from 'react';
import './Try.css';

import animation1 from '../Assets/1.gif';
import animation2 from '../Assets/2.gif';
import animation3 from '../Assets/3.gif';
import animation4 from '../Assets/4.gif';

const LottieComponent = ({ className, animationData, index, elementsRef }) => {
  const handleMouseMove = useCallback((e) => {
    const element = elementsRef.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 10;
      const y = (e.clientY - rect.top - rect.height / 2) / 10;
      element.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [index, elementsRef]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className={className} ref={(el) => (elementsRef.current[index] = el)}>
      <img src={animationData} alt={`Animation ${index}`} />
    </div>
  );
};

const Try = () => {
  const elementsRef = useRef([]);

  const lotties = [
    { className: 'animation1', animationData: animation1 },
    { className: 'animation2', animationData: animation2 },
    { className: 'animation3', animationData: animation3 },
    { className: 'animation4', animationData: animation4 },
  ];

  return (
    <div className='Homepagetry'>
      <h1 className='title'>LOST & FOUND</h1>
      {lotties.map((lottie, index) => (
        <LottieComponent
          key={index}
          className={lottie.className}
          animationData={lottie.animationData}
          index={index}
          elementsRef={elementsRef}
        />
      ))}
    </div>
  );
};

export default Try;
