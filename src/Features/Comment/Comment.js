import user from '../../Assets/images/user.png'
import arrowup from '../../Assets/images/arrowup.png';
import arrowdown from '../../Assets/images/arrowdown.png';
import commentSlice from './CommentSlice';
import { useSelector } from 'react-redux';

const Comment = () => {
    const comment = useSelector((state) => state.comment.value);
    return (
        <section className='comment'>
            <div className='comment-header'>
            <img className='profile-pic' src={comment.profileimg} />
            <p>{comment.userName} {comment.time} ago</p>
            </div>
            <p>{comment.comment}</p>
            <span className='voting'>
                    <img className='post-icon' src={arrowup}/>
                    <p>{comment.voting}</p>
                    <img className='post-icon' src={arrowdown}/>
            </span>
        </section>
    )
}
export default Comment;