import commentsicon from '../../Assets/images/commentsicon.png';
import close from '../../Assets/images/close.png';
import Comment from '../Comment/Comment.js';
import { hideComments } from '../Comments/CommentsSlice';
import { useDispatch } from 'react-redux';
import commentsSlice from './CommentsSlice';


const Comments = () => {
    const dispatch = useDispatch();
    return (
    <section className='comments'>
        <div className='comments-top-bar'>
            <article className='top-bar-item'>
                <img className='comments-icon'src={commentsicon}/>
                <h2>15 Comments</h2>
            </article>
            <aside className='top-bar-item'>
                <button onClick = {() => {
                dispatch(hideComments({value: false}));
                }}>
                    <img className='close-icon' src={close} />
                </button>
            </aside>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </section>    
    )
}
export default Comments;