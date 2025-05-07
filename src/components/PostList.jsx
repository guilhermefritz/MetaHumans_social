const PostList = ({ posts, onLike }) => {
  return (
    <div className="post-list">
      <h2>Últimos Posts</h2>
      {posts.length === 0 ? (
        <p>Nenhum post ainda.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>{post.date}</small>
            <div style={{ marginTop: "0.5rem" }}>
              <button onClick={() => onLike(index)}>Curtir</button>
              <span style={{ marginLeft: "0.5rem" }}>
                👍 {post.likes} {post.likes === 1 ? "curtida" : "curtidas"}
              </span>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <strong>Comentários: </strong>
              {post.comments ? post.comments.length : 0}
            </div>
            <div className="comment-list">
              {post.comments && post.comments.length > 0 ? (
                post.comments.map((comment, idx) => (
                  <div key={idx} className="comment-item">
                    <p>{comment}</p>
                  </div>
                ))
              ) : (
                <p>Nenhum comentário ainda.</p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
