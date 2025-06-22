import React from 'react';
import '../styles/Home.css'; // 필요한 스타일

function StoryBar({ stories }) {
  return (
    <div className="story-bar">
      {stories.map((story, i) => (
        <div className="story" key={i}>
          <img
            src={story.img}
            alt={`story-${i}`}
            className="story-img"
          />
          <p className="story-name">{story.name}</p>
        </div>
      ))}
    </div>
  );
}

export default StoryBar;
