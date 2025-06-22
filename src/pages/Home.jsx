import React from 'react';
import '../styles/Home.css';
import userImg from '../assets/User.png';
import user2Img from '../assets/user2.png';
import user3Img from '../assets/user3.png';
import user4Img from '../assets/profile.jpg';
import post1Img from '../assets/post1.png';
import post2Img from '../assets/post2.png';

import StoryBar from '../components/StoryBar';
import FeedCard from '../components/FeedCard';

function Home() {
  const stories = [
    { name: 'justhye_log', img: user4Img },
    { name: 'hannah', img: user2Img },
    { name: 'minji', img: user3Img },
    { name: 'eunhye', img: userImg },
    { name: 'ryu', img: userImg  },
    { name: 'kyle', img: userImg  },
    { name: 'skelf', img: userImg },
    { name: 'mike', img: userImg  },
  ];

  const feedData = [
    {
      username: 'all.about.20s',
      profileImg: userImg,
      postImg: post1Img,
      caption: '일본 n회차가 알려주는 여행 갈 때 마다...',
    },
    {
      username: 'foodlover',
      profileImg: user2Img,
      postImg: post2Img,
      caption: '오늘 점심엔 우동 한그릇!',
    },
  ];

  return (
    <div className="home">
      {/* 스토리 영역 */}
      <StoryBar stories={stories} />

      {/* 피드 카드 목록 */}
      {feedData.map((feed, i) => (
        <FeedCard
          key={i}
          username={feed.username}
          profileImg={feed.profileImg}
          postImg={feed.postImg}
          caption={feed.caption}
        />
      ))}
    </div>
  );
}

export default Home;
