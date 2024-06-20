import React, { useRef, useEffect } from 'react';
import './Try.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Try() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      elementsRef.current.forEach((element) => {
        if (element) {
          let x = (window.innerWidth / 2 - e.pageX) / 20;
          let y = (window.innerHeight / 2 - e.pageY) / 20;
          element.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const lotties = [
    { className: 'mobile', src: 'https://lottie.host/d2bef094-776e-4001-93da-2da36cff0c8b/mhF72hsKQA.lottie' },
    { className: 'mobile1', src: 'https://lottie.host/d2bef094-776e-4001-93da-2da36cff0c8b/mhF72hsKQA.lottie' },
    { className: 'Wallet', src: 'https://lottie.host/709f1508-198f-4e20-a728-e1115a28ccbc/tmxBAximbu.lottie' },
    { className: 'Wallet1', src: 'https://lottie.host/709f1508-198f-4e20-a728-e1115a28ccbc/tmxBAximbu.lottie' },
    { className: 'keys', src: 'https://lottie.host/4a0c14a6-8acc-4744-a252-9fda7183a804/8FdFD4Q086.lottie' },
    { className: 'bottle', src: 'https://lottie.host/c5aeff09-2aa5-4516-9fff-6116af34c214/SBXf2dIYfB.lottie' },
    { className: 'bottle1', src: 'https://lottie.host/c5aeff09-2aa5-4516-9fff-6116af34c214/SBXf2dIYfB.lottie' },
    { className: 'laptop', src: 'https://lottie.host/3ab6c705-e653-4715-b43b-ee90a864293a/n7lPQTrQSa.lottie' },
    { className: 'headphone', src: 'https://lottie.host/bf57dcd2-7226-4497-807c-f5d2acbda3e1/jm3V5n20Su.lottie' },
    { className: 'headphone1', src: 'https://lottie.host/a82d4a60-a5cd-418b-bb96-3b42b74226e3/micZR24hYJ.lottie' },
    { className: 'Bag', src: 'https://lottie.host/babf9574-9447-4298-8e45-6d6904ef6601/KvFBBVyk43.lottie' },
    { className: 'watch', src: 'https://lottie.host/d2350561-d674-400e-921d-ddf28fa867db/V2XopOTCeB.lottie' },
    { className: 'cloth', src: 'https://lottie.host/ee3089dd-2a20-4c14-b106-871670e8a418/5Bl80ehD1N.lottie' },
    { className: 'pen', src: 'https://lottie.host/26899507-0eb4-4999-80fe-fabe199d2d24/vlvwV7Krke.lottie' },
    { className: 'pen1', src: 'https://lottie.host/26899507-0eb4-4999-80fe-fabe199d2d24/vlvwV7Krke.lottie' },
    { className: 'pen2', src: 'https://lottie.host/26899507-0eb4-4999-80fe-fabe199d2d24/vlvwV7Krke.lottie' },
    { className: 'pendrive', src: 'https://lottie.host/aa343f22-d50d-42f5-8ee0-d566706c3a33/ccWGqN7KlP.lottie' },
    { className: 'pendrive1', src: 'https://lottie.host/aa343f22-d50d-42f5-8ee0-d566706c3a33/ccWGqN7KlP.lottie' },
  ];

  return (
    <div className='Homepagetry'>
      <h1 className='title'>LOST & FOUND</h1>
      {lotties.map((lottie, index) => (
        <DotLottieReact
          key={index}
          className={lottie.className}
          src={lottie.src}
          loop
          autoplay
          ref={(el) => (elementsRef.current[index] = el)}
        />
      ))}
    </div>
  );
}

export default Try;
