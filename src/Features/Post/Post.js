import hedgehog from '../../Assets/images/hedgehog.png';
import arrowup from '../../Assets/images/arrowup.png';
import arrowdown from '../../Assets/images/arrowdown.png';
import commentsicon from '../../Assets/images/commentsicon.png';
import Comments from '../Comments/Comments.js';
import { useSelector, useDispatch } from 'react-redux';
import { showComments } from '../Comments/CommentsSlice'; 
import { postSlice } from '../Post/PostSlice';



const Post  = () =>{
    const post = useSelector((state) => state.post.value);
    const comments = useSelector((state) => state.comments.value);
    const dispatch = useDispatch();
    
        return (
        <section className='post'>
            <article>
                <div className='post-texts'>
                <p>{post.time} by {post.userName}</p>
                <h2>{post.title}</h2>
                </div>
                <img className='post-img' src={post.image}/>
            </article>
            <aside className='post-aside'>
                <span className='voting'>
                    <img className='post-icon' src={arrowup}/>
                    <p>{post.voting}</p>
                    <img className='post-icon' src={arrowdown}/>
                </span>
              
                <button 
                className='comments-button'
                onClick ={() => {
                dispatch(showComments({value: true}));
                }}>
                <img className='comments-icon' src={commentsicon}/>
                <p>{post.comments}</p>
                </button>
                <a href={post.url} target='_blank'>Check on Reddit</a>
            </aside>
            { comments.value == true ? <Comments /> : null }
        </section>
    )
}

export default Post;