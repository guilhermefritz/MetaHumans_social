import React from "react";
import "../styles/PostCard.css"; // ou "../styles/PostCard.css" conforme sua estrutura

const PostCard = ({ post, onLike }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <div className="likes">
        <button onClick={onLike}>Curtir 👍</button>
        <span>
          {post.likes} curtida{post.likes === 1 ? "" : "s"}
        </span>
      </div>

      {/* Aqui o timestamp deve aparecer */}
      <span className="timestamp">{post.timestamp}</span>
    </div>
  );
};

export default PostCard;
