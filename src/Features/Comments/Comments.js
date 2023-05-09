import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faXmark } from '@fortawesome/free-solid-svg-icons'
import Comment from "../Comment/Comment";
import { toggleShowingComments } from "../Feed/FeedSlice";

function Comments({ comments, index }) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    dispatch(toggleShowingComments(index));
  };

  return (
    <section className="comments">
      <div className="comments-top-bar">
        <article className="top-bar-item">
          <FontAwesomeIcon className="icon" icon={faComment} />
          <h2>{comments.length} Comments</h2>
        </article>
        <aside className="top-bar-item">
          <button type="button" onClick={handleClick}>
            <FontAwesomeIcon className="icon" icon={faXmark} />
          </button>
        </aside>
      </div>
      {comments.map((comment, index) => (
        <Comment key={index} index={index} comment={comment} />
      ))}
    </section>
  );
}

export default Comments;
