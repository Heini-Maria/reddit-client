import { getDiyPosts } from '../../Components/Reddit';
import Post from '../Post/Post';
import { useState } from 'react';

const Feed = ({posts}) => {
    const [activePost, setActivePost] = useState(false);

    return (
        <section className='feed'>
           {
            (posts != null) ? posts.map((post, index) => <Post key={index} post={post.data} permalink={post.data.permalink} setActivePost={setActivePost}/>) : ''
         
           } 
        </section>
    )
}
export default Feed;