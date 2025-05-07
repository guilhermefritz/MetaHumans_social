// src/components/Post.jsx
import React, { useState } from "react";

function Post({ postContent, postId }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <p>{postContent}</p>
      <button onClick={handleLike}>Curtir</button>
      <p>{likes} Likes</p>
    </div>
  );
}

export default Post;
