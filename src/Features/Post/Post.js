import hedgehog from '../../Assets/images/hedgehog.png';
import arrowup from '../../Assets/images/arrowup.png';
import arrowdown from '../../Assets/images/arrowdown.png';
import commentsicon from '../../Assets/images/commentsicon.png';
import Comments from '../Comments/Comments.js';
import { useSelector, useDispatch } from 'react-redux';
import { utcToString } from '../../Assets/util';
import { useEffect, useState } from 'react';
import { setComments, toggleShowingComments} from '../Feed/FeedSlice';


const Post  = (props) =>{
    const dispatch = useDispatch();
    const index = props.id;
    const permalink = props.post.data.permalink;
    const comments = props.post.comments;

    const getPostComments = async (permalink) => {
        try {
          await fetch(`https://www.reddit.com/${permalink}.json`)
            .then((response) => response.json())
            .then(jsonResponse => {
              console.log("comments", jsonResponse[1].data.children.map((comment) => comment.data))
              const comments = jsonResponse[1].data.children.map((comment) => comment.data)
              dispatch(setComments({ index, comments }))
            })
        } catch (error) {
          console.log(error)
        }
      };
      const fetchComments = (index, permalink) => async (dispatch) => {
        try {
          await getPostComments(permalink);
        } catch (error) {
          console.log(error);
        }
      }
    
      const onToggleComments = async () => {
        console.log(index, permalink)
        if (props.post.comments.length < 1) {
          dispatch(fetchComments(index, permalink));
        }
        dispatch(toggleShowingComments(index))
      };    
        return (
        <section className='post' >
            <article>
                <div className='post-texts'>
                <p>{utcToString(props.post.data.created_utc)} ago by {props.post.data.author}</p>
                <h2>{props.post.data.title}</h2>
                </div>
                <img className='post-img' src={props.post.data.url}/>
            </article>
            <aside className='post-aside'>
                <span className='voting'>
                    <img className='post-icon' src={arrowup}/>
                    <p>{props.post.data.ups}</p>
                    <img className='post-icon' src={arrowdown}/>
                </span>
              
                <button 
                className='comments-button'
                onClick = {onToggleComments}>
                <img className='comments-icon' src={commentsicon}/>
                <p>{props.post.data.num_comments}</p>
                </button>
                <a href={`https://www.reddit.com/${permalink}`} target='_blank'>Check on Reddit</a>
            </aside>
            { props.post.showingComments ?  <Comments comments={comments} index={index} post={props.post.data} /> : null }
        </section>
    )
}

export default Post;