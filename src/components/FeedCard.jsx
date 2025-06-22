import React, { useState } from 'react';
import '../styles/Home.css'; // 필요한 스타일 가져오기

function FeedCard({ username, profileImg, postImg, caption }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(128);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => prev + (liked ? -1 : 1));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="feed">
      <div className="feed-header">
        <img src={profileImg} alt="profile" className="feed-profile" />
        <span className="feed-username">{username}</span>
        <span className="feed-time">· 1일</span>
      </div>

      <div className="feed-image">
        <img src={postImg} alt="feed" />
      </div>

      <div className="feed-actions">
        <button onClick={handleLike} className="like-btn">
          {liked ? '❤️' : '🤍'} {likeCount} likes
        </button>
      </div>

      <div className="feed-caption">
        <strong>{username}</strong> {caption}
      </div>

      <div className="feed-comments">
        {comments.map((c, i) => (
          <p key={i}><strong>user</strong> {c}</p>
        ))}
      </div>

      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">게시</button>
      </form>
    </div>
  );
}

export default FeedCard;
