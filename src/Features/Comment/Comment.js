import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { utcToString } from "../../Utils/util";

function Comment({ comment }) {
  return (
    <section className="comment">
      <div className="comment-header">
        <p>
          {comment.author}
          {utcToString(comment.created_utc)}
          ago
        </p>
      </div>
      <p>{comment.body}</p>
      <span className="voting">
        <FontAwesomeIcon className="icon" icon={faArrowUp} />
        <p>{comment.score}</p>
        <FontAwesomeIcon className="icon" icon={faArrowDown} />
      </span>
    </section>
  );
}
export default Comment;
