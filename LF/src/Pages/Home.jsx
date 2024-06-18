import React from 'react';
import Glass from '../Components/Glass';
import './Home.css';
import lossImage from '../Assets/loss.png';
import foundImage from '../Assets/found.png';
import findImage from '../Assets/find.png';

function Home() {
  return (
    <>
      <div className="homepage">
        <div className="title1">
          <span>L</span>
          <span>O</span>
          <span>S</span>
          <span>T</span>
          <span>&</span>
          <span>F</span>
          <span>O</span>
          <span>U</span>
          <span>N</span>
          <span>D</span>
        </div>
      </div>
      <div className="home">
        <Glass
          title="Report a Lost Item"
          subtitle="Report"
          imageSrc={lossImage}
          to="/Report"
        />
        <Glass
          title="Found an Item"
          subtitle="Report"
          imageSrc={foundImage}
          to="/Founditm"
        />
        <Glass
          title="Find Your Lost Item"
          subtitle="Browse"
          imageSrc={findImage}
          to="/Lostitm"
        />
      </div>
    </>
  );
}

export default Home;
