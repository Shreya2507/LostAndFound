import React from 'react';
import Glass from '../Components/Glass';
import './Home.css';
import lossImage from '../Assets/loss.png';
import foundImage from '../Assets/found.png';
import findImage from '../Assets/find.png';
import LF from '../Assets/LF.jpg';

function Home() {
  return (
<>
    <div className="homepage">

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
