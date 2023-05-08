import React from "react";
import { useDispatch } from "react-redux";
import commentsicon from "../../Assets/Images/commentsicon.png";
import close from "../../Assets/Images/close.png";
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
          <img
            className="comments-icon"
            src={commentsicon}
            alt="comments icon"
          />
          <h2>{comments.length} Comments</h2>
        </article>
        <aside className="top-bar-item">
          <button type="button" onClick={handleClick}>
            <img className="close-icon" src={close} alt="close" />
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
