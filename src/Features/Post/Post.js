import hedgehog from '../../Assets/images/hedgehog.png';
import arrowup from '../../Assets/images/arrowup.png';
import arrowdown from '../../Assets/images/arrowdown.png';
import commentsicon from '../../Assets/images/commentsicon.png';
import Comments from '../Comments/Comments.js';
import { useSelector, useDispatch } from 'react-redux';
import { showComments } from '../Comments/CommentsSlice'; 
import { postSlice } from '../Post/PostSlice';
import { utcToString } from '../../Assets/util';
import { getPostComments } from '../../Components/Reddit';
import { useEffect, useState } from 'react';


const Post  = ({ permalink, post, setActivePost}) =>{
    const showedComments = useSelector((state) => state.comments.value);
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
 
    useEffect(() => {

        async function fetchData() {
            setComments([]); //clear replies from screen
            setIsLoading(true); //notify Replies that we are awaiting replies
            const comments= await getPostComments(permalink);
            setIsLoading(false); //notify Replies that replies have been fetched
            setComments(comments);
        }
        fetchData();
    }, []);

    
        return (
        <section className='post' >
            <article>
                <div className='post-texts'>
                <p>{utcToString(post.created_utc)} ago by {post.author}</p>
                <h2>{post.title}</h2>
                </div>
                <img className='post-img' src={post.url}/>
            </article>
            <aside className='post-aside'>
                <span className='voting'>
                    <img className='post-icon' src={arrowup}/>
                    <p>{post.ups}</p>
                    <img className='post-icon' src={arrowdown}/>
                </span>
              
                <button 
                className='comments-button'
                onClick = {() => {
                    dispatch(showComments({value: true}));
                    }}>
                <img className='comments-icon' src={commentsicon}/>
                <p>{post.num_comments}</p>
                </button>
                <a href={permalink} target='_blank'>Check on Reddit</a>
            </aside>
            { showedComments.value == true ? <Comments permalink={permalink} post={post} comments={comments} /> : null }
        </section>
    )
}

export default Post;