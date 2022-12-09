import user from '../../Assets/images/user.png'
import arrowup from '../../Assets/images/arrowup.png';
import arrowdown from '../../Assets/images/arrowdown.png';

const Comment = () => {
    return (
        <section className='comment'>
            <div className='comment-header'>
            <img className='profile-pic' src={user} />
            <p>UserName 29min ago</p>
            </div>
            <p>This is my comment</p>
            <span className='voting'>
                    <img className='post-icon' src={arrowup}/>
                    <p>150</p>
                    <img className='post-icon' src={arrowdown}/>
            </span>
        </section>
    )
}
export default Comment;