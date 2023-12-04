import React, { useEffect, useState } from 'react';

const CommentsSection = ({ _id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the given survey ID
    fetch(`http://localhost:4200/survey/comments/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [_id]);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            {comment.handleAddComment.comments}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default CommentsSection;
