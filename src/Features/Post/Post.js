import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import Comments from "../Comments/Comments";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { utcToString } from "../../Utils/util";
import { setComments, toggleShowingComments } from "../Feed/FeedSlice";

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
  }
  return (
    <motion.section 
      initial={{ opacity: 0,  x: 100}}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, ease: "easeInOut",  duration: 0.5}}
      viewport={{ once: true }}
      className="post">
      <article>
        <div className="post-texts">
          <p>
            {utcToString(props.post.data.created_utc)} ago by{" "}
            {props.post.data.author}
          </p>
          <h2>{props.post.data.title}</h2>
        </div>
        <img className="post-img" src={props.post.data.url} alt="post visual" />
      </article>
      <aside className="post-aside">
        <div>
          <span className="voting">
            <FontAwesomeIcon className="icon" icon={faArrowUp} />
            <p>{props.post.data.ups}</p>
            <FontAwesomeIcon className="icon" icon={faArrowDown} />
          </span>
          <button className="comments-button" onClick={handleClick} type="button">
            <FontAwesomeIcon className="icon" icon={faComment} />
            <p>{props.post.data.num_comments}</p>
          </button>
        </div>
        <a
          href={`https://www.reddit.com/${permalink}`}
          target="_blank"
          rel="noreferrer"
        >
          Check on Reddit
        </a>
      </aside>
      {props.post.showingComments ? (
        <Comments comments={comments} index={index} post={props.post.data} />
      ) : null}
    </motion.section>
  );
}

export default Post;
