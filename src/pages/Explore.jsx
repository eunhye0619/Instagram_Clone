import React from 'react';
import '../styles/Explore.css';

import post1 from '../assets/post1.png';
import post2 from '../assets/post2.png';
import post3 from '../assets/post3.png';
import post4 from '../assets/post4.png';
import post5 from '../assets/post5.png';
import post6 from '../assets/post6.png';
import post7 from '../assets/post7.png';
import post8 from '../assets/post8.png';
import post9 from '../assets/post9.png';
import post10 from '../assets/post10.jpg';
import post11 from '../assets/post11.jpg';
import post12 from '../assets/post12.jpg';
import post13 from '../assets/post13.jpg';
import post14 from '../assets/post14.jpg';
import post15 from '../assets/post15.jpg';
import post16 from '../assets/post16.jpg';
import post17 from '../assets/post17.jpg';
import post18 from '../assets/post18.jpg';
import post19 from '../assets/post19.jpg';
import post20 from '../assets/post20.jpg';

function Explore() {
  const images = 
    [
      post1,
      post2,
      post3,
      post4,
      post5,
      post6,
      post7,
      post8,
      post9,
      post10,
      post11,
      post12,
      post13,
      post14,
      post15,
      post16,
      post17,
      post18,
      post19,
      post20,
      post1,
      post2,
      post3,
      post4,
      post5,
      post6,
      post7,
      post8,
      post9,
      post10,
      post11,
      post12,
      post13,
      post14,
      post15,
      post16,
      post17,
      post18,
      post19,
      post20];

  return (
    <div className="explore">
      {images.map((img, idx) => (
        <div className="explore-item" key={idx}>
          <img src={img} alt={`explore-${idx}`} />
        </div>
      ))}
    </div>
  );
}

export default Explore;
