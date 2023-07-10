import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { utcToString } from '../../Utils/util';

function Comment({ comment }) {
  return (
    <section className="p-2">
      <p className="text-text font-patrick font-semibold text-md mb-1">
        {comment.author}
        {utcToString(comment.created_utc)} ago
      </p>
      <p className="text-text- text-md font-actor">{comment.body}</p>
      <span className="flex items-center">
        <FontAwesomeIcon className="mr-1" icon={faArrowUp} />
        <p>{comment.score}</p>
        <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
      </span>
    </section>
  );
}
export default Comment;
