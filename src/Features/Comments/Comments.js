import comments from '../../Assets/images/comments.png';
import close from '../../Assets/images/close.png';
import Comment from '../Comment/Comment.js';


const Comments = () => {
    return (
    <section className='comments'>
        <div className='comments-top-bar'>
            <article className='top-bar-item'>
                <img className='comments-icon'src={comments}/>
                <h2>15 Comments</h2>
            </article>
            <aside className='top-bar-item'>
                <button>
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