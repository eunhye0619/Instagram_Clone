import React from 'react';
import '../styles/Profile.css';

import post10 from '../assets/post10.jpg';
import post11 from '../assets/post11.jpg';
import post12 from '../assets/post12.jpg';
import post13 from '../assets/post13.jpg';
import post14 from '../assets/post14.jpg';
import post15 from '../assets/post15.jpg';
import profile from '../assets/profile.jpg';

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          className="profile-image"
          src={profile}
          alt="프로필"
        />
        <div className="profile-info">
          <div className="profile-username-section">
            <h2>justhye_log</h2>
            <button>프로필 편집</button>
            <button>보관된 스토리 보기</button>
          </div>
          <div className="profile-stats">
            <span><strong>게시물</strong> 36</span>
            <span><strong>팔로워</strong> 16</span>
            <span><strong>팔로우</strong> 16</span>
          </div>
          <div className="profile-hashtags">
            <span>#갓생 #내일부터</span>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="profile-posts">
        <img src={post10} alt="post1" />
        <img src={post11} alt="post2" />
        <img src={post12} alt="post3" />
        <img src={post13} alt="post4" />
        <img src={post14} alt="post5" />
        <img src={post15} alt="post6" />
      </div>
    </div>
  );
}

export default Profile;
