import React from 'react';
import Glass from '../Components/Glass';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Glass 
        title="Report a Lost Item"
        subtitle="Report"
        imageSrc="path/to/lost-item-image.png"
      />
      <Glass 
        title="Found an Item"
        subtitle="Report"
        imageSrc="path/to/found-item-image.png"
      />
      <Glass 
        title="Find Your Lost Item"
        subtitle="Browse"
        imageSrc="path/to/view-lost-items-image.png"
      />
    </div>
  );
}

export default Home;
