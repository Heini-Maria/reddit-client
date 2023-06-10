import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faXmark } from '@fortawesome/free-solid-svg-icons';
import Comment from '../Comment/Comment';
import { toggleShowingComments } from '../Feed/FeedSlice';

function Comments({ comments, index }) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    dispatch(toggleShowingComments(index));
  };

  return (
    <section className="z-10 absolute bg-white h-[50%] w-[28vw] overflow-y-scroll overflow-x-hidden scroll-smooth">
      <div className="flex justify-between h-12 p-2 sticky top-0 bg-white shadow-md z-11 items-center">
        <article className="flex items-center">
          <FontAwesomeIcon className="mr-1" icon={faComment} />
          <h2 className="font-patrick font-semibold text-text text-base">
            {comments.length} Comments
          </h2>
        </article>
        <aside className="hover:translate-y-0.5">
          <button type="button" onClick={handleClick}>
            <FontAwesomeIcon className="h-5" icon={faXmark} />
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
