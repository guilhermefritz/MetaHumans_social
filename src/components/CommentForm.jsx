import { useState } from "react";
import "../styles/CommentForm.css"; // Importa o CSS corretamente

const CommentForm = ({ postIndex, onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(postIndex, comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        className="comment-input"
        placeholder="Adicionar um comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" className="comment-button">
        Comentar
      </button>
    </form>
  );
};

export default CommentForm;
