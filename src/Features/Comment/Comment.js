import arrowup from '../../Assets/images/arrowup.png';
import arrowdown from '../../Assets/images/arrowdown.png';
import { utcToString } from '../../Assets/util';

const Comment = ({comment}) => {
   
    return (
        <section className='comment'>
            <div className='comment-header'>
            <p>{comment.author} {utcToString(comment.created_utc)} ago</p>
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