import hedgehog from '../../Assets/images/hedgehog.png';
import ring from '../../Assets/images/ring.png';
import arrowup from '../../Assets/images/arrowup.png';
import arrowdown from '../../Assets/images/arrowdown.png';
import comments from '../../Assets/images/comments.png';




const Post = () => {

    return (
        <section className='post'>
            <article>
                <div className='post-texts'>
                <p>1 hour ago by Me</p>
                <h2>Needle felted hedgehog</h2>
                </div>
                <img className='post-img' src={hedgehog}/>
            </article>
            <aside className='post-aside'>
                <span className='voting'>
                    <img className='post-icon' src={arrowup}/>
                    <p>150</p>
                    <img className='post-icon' src={arrowdown}/>
                </span>
              
                <button 
                className='comments-button'>
                    <img className='comments-icon' src={comments} />
                    <p>15</p>
                </button>
                <a>Check on Reddit</a>
            </aside>
        </section>
    )
}
export default Post;