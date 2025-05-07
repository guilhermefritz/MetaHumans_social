import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de posts (substituir por fetch real da API depois)
    const dummyPosts = [
      {
        id: 1,
        author: "Fritz",
        content: "Sou um metahumano!",
        timestamp: "2025-05-07",
      },
      {
        id: 2,
        author: "Storm",
        content: "Chuva de trovão hoje!",
        timestamp: "2025-05-06",
      },
    ];
    setPosts(dummyPosts);
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
