import user from '../../Assets/images/user.png'
import arrowup from '../../Assets/images/arrowup.png';
import arrowdown from '../../Assets/images/arrowdown.png';
import commentSlice from './CommentSlice';
import { useSelector } from 'react-redux';

const Comment = ({comment}) => {
   
   console.log(comment)

    return (
        <section className='comment'>
            <div className='comment-header'>
            <img className='profile-pic' src='#' />
            <p>{comment.author} {comment.created_utc} ago</p>
            </div>
            <p>{comment.body}</p>
            <span className='voting'>
                    <img className='post-icon' src={arrowup}/>
                    <p>{comment.score}</p>
                    <img className='post-icon' src={arrowdown}/>
            </span>
        </section>
    )
}
export default Comment;