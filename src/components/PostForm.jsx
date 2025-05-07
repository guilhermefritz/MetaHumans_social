import { useState } from "react";
import "../styles/App.css";

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cria o objeto post já com todas as propriedades
    const newPost = {
      id: Date.now(),
      title, // Título
      content, // Conteúdo
      timestamp: new Date().toLocaleString(), // Timestamp aqui!
      likes: 0, // Curtidas iniciais
      comments: [], // Comentários iniciais
    };

    onAddPost(newPost);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Conteúdo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Criar Post</button>
    </form>
  );
};

export default PostForm;
