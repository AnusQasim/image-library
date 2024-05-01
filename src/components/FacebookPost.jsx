// FacebookPost.js
import React, { useState } from "react";
import ReactFbImageGrid from "react-fb-image-grid";
// import "./App.css";

import {
  FaThumbsUp,
  FaHeart,
  FaLaugh,
  FaSadCry,
  FaAngry,
} from "react-icons/fa";

const FacebookPost = ({ title, date, images, profilePic, username }) => {
  const [showEmojis, setShowEmojis] = useState(false);

  const toggleEmojis = () => {
    setShowEmojis(!showEmojis);
  };

  return (
    <div className="facebook-post">
      <div className="post-header">
        <img src={profilePic} alt={`${username}'s profile`} />
        <div className="post-info">
          <h3>{username}</h3>
          <p>{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
      <p className="post-text">{title}</p>
      {images.length > 0 && <ReactFbImageGrid images={images} />}
      <div className="post-footer">
        <button className="like-button" onClick={toggleEmojis}>
          Like
        </button>
        {showEmojis && (
          <div className="emoji-menu">
            <FaThumbsUp />
            <FaHeart />
            <FaLaugh />
            <FaSadCry />
            <FaAngry />
          </div>
        )}
      </div>
    </div>
  );
};

export default FacebookPost;
