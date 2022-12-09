import hedgehog from '../../Assets/images/hedgehog.png';
import ring from '../../Assets/images/ring.png';
import arrowup from '../../Assets/images/arrowup.png';
import arrowdown from '../../Assets/images/arrowdown.png';
import comments from '../../Assets/images/comments.png';


const Post = () => {
    return (
        <section classname='post'>
            <article>
                <p>1 hour ago by Me</p>
                <h2>Needle felted hedgehog</h2>
                <img src={hedgehog}/>
            </article>
            <aside>
                <span>
                    <img src={arrowup}/>150<img src={arrowdown}/>
                </span>
                <button>
                    <img src={comments}/> 15
                </button>
                <a>See on Reddit</a>
            </aside>
        </section>
    )
}
export default Post;