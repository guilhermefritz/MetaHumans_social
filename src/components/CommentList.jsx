const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.length === 0 ? (
        <p>Nenhum comentário ainda.</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p>{comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
