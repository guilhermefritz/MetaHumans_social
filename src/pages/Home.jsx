import { useState } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import CommentForm from "../components/CommentForm";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // Adicionar um novo post
  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // Adicionar um comentário a um post específico
  const handleAddComment = (postIndex, newComment) => {
    const updatedPosts = [...posts];
    if (!updatedPosts[postIndex].comments) {
      updatedPosts[postIndex].comments = [];
    }
    updatedPosts[postIndex].comments.push(newComment);
    setPosts(updatedPosts);
  };

  return (
    <div className="home-page">
      {/* Formulário para adicionar posts */}
      <PostForm onAddPost={handleAddPost} />

      {/* Exibindo os posts com comentários */}
      <div className="feed">
        {posts.map((post, index) => (
          <div key={index} className="post-with-comments">
            <PostCard
              post={post}
              onLike={() => {
                const updatedPosts = [...posts];
                updatedPosts[index].likes += 1;
                setPosts(updatedPosts);
              }}
            />

            {/* Lista de comentários */}
            {post.comments && post.comments.length > 0 && (
              <ul className="comment-list">
                {post.comments.map((comment, i) => (
                  <li key={i} className="comment-item">
                    {comment}
                  </li>
                ))}
              </ul>
            )}

            {/* Formulário para adicionar novo comentário */}
            <CommentForm postIndex={index} onAddComment={handleAddComment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
