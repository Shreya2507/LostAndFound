import React from 'react'
import '../App.css';
import Try from '../Components/Try';
import Glass from '../Components/Glass';
import './Home.css';
import lossImage from '../Assets/loss.png';
import foundImage from '../Assets/found.png';
import findImage from '../Assets/find.png';


function Profile() {
  return (
    <div>
<Try />

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
    </div>
  )
}

export default Profile
