import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import Comments from '../Comments/Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { utcToString } from '../../Utils/util';
import { setComments, toggleShowingComments } from '../Feed/FeedSlice';

function Post(props) {
  const dispatch = useDispatch();
  const index = props.id;
  const permalink = props.post.data.permalink;
  const comments = props.post.comments;
  const getPostComments = async (permalink) => {
    try {
      await fetch(`https://www.reddit.com/${permalink}.json`)
        .then((res) => res.json())
        .then((jsonResponse) => {
          const comments = jsonResponse[1].data.children.map(
            (comment) => comment.data
          );
          dispatch(setComments({ index, comments }));
        });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchComments = (index, permalink) => async () => {
    try {
      await getPostComments(permalink);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = async () => {
    if (props.post.comments.length < 1) {
      dispatch(fetchComments(index, permalink));
    }
    dispatch(toggleShowingComments(index));
  };
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, ease: 'easeInOut', duration: 0.5 }}
      viewport={{ once: true }}
      className="container grid grid-rows-3 shadow-md bg-white py-4 px-6 mt-3 rounded-md"
    >
      <article className="tile row-span-3 container grid grid-rows-12">
        <div className="tile row-span-1">
          <p className="text-text text-xl font-bold font-patrick my-4">
            {utcToString(props.post.data.created_utc)} ago by{' '}
            {props.post.data.author}
          </p>
          <h2 className="text-text text-2xl font-actor font-bold">
            {props.post.data.title}
          </h2>
        </div>
        <img
          className="tile row-span-11 place-self-stretch self-start my-2"
          src={props.post.data.url}
          alt="post visual"
        />
      </article>
      <aside className="tile col-span-full row-span-1 grid grid-cols-3">
        <div className="tile col-span-2 flex">
          <span className="tile col-span-3 flex items-center">
            <FontAwesomeIcon className="" icon={faArrowUp} />
            <p className="mx-1 text-text font-bold">{props.post.data.ups}</p>
            <FontAwesomeIcon className="" icon={faArrowDown} />
          </span>
          <button
            className="tile col-span-1 flex items-center ml-6 hover:translate-y-0.5"
            onClick={handleClick}
            type="button"
          >
            <FontAwesomeIcon className="mr-1" icon={faComment} />
            <p className="text-text font-bold">
              {props.post.data.num_comments}
            </p>
          </button>
        </div>
        <a
          href={`https://www.reddit.com/${permalink}`}
          target="_blank"
          rel="noreferrer"
          className="tile col-start-3 text-text underline"
        >
          Check on Reddit
        </a>
        {props.post.showingComments ? (
          <Comments comments={comments} index={index} post={props.post.data} />
        ) : null}
      </aside>
    </motion.section>
  );
}

export default Post;
