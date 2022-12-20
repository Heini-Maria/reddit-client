import arrowup from '../../Assets/Images/arrowup.png';
import arrowdown from '../../Assets/Images/arrowdown.png';
import { utcToString } from '../../Utils/util';

const Comment = ({comment}) => {
   
    return (
        <section className='comment'>
            <div className='comment-header'>
            <p>{comment.author} {utcToString(comment.created_utc)} ago</p>
            </div>
            <p>{comment.body}</p>
            <span className='voting'>
                    <img className='post-icon' src={arrowup} alt='arrow up'/>
                    <p>{comment.score}</p>
                    <img className='post-icon' src={arrowdown} alt='arrow down'/>
            </span>
        </section>
    )
}
export default Comment;