import commentsicon from '../../Assets/images/commentsicon.png';
import close from '../../Assets/images/close.png';
import Comment from '../Comment/Comment.js';
import { useDispatch } from 'react-redux';
import { toggleShowingComments } from '../Feed/FeedSlice';


const Comments = ({ comments, index }) => {
    const dispatch = useDispatch();
 
    const handleClick = async () => {
        dispatch(toggleShowingComments(index))
      };

    
console.log(comments);

    return (
    <section className='comments'>
        <div className='comments-top-bar'>
            <article className='top-bar-item'>
                <img className='comments-icon'src={commentsicon}/>
                <h2>{comments.length} Comments</h2>
            </article>
            <aside className='top-bar-item'>
                <button onClick = {handleClick}>
                    <img className='close-icon' src={close} />
                </button>
            </aside>
        </div>
            {
    
            comments.map((comment, index) => <Comment key={index} index={index} comment={comment} /> )
            }    
    </section>    
    )
}

export default Comments;