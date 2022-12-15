import Feed from '../Feed/Feed';
import { useEffect, useState } from 'react';

const Crafts =() => {
    const [posts, setPosts] = useState([]);
    const [subreddit, setSubreddit] = useState('crafts');
    
    
    useEffect(() => {
      fetch(`https://www.reddit.com/r/${subreddit}.json`).then(res => {
          if (res.status != 200) {
            console.log('ErrooooR');
            return;
          }
          res.json().then(data => {
            if (data != null) {
              const posts = data.data.children;
              setPosts(posts.filter( post => {
                if (post.data.post_hint == 'image') return true;
                return false;
            
            })); 
            }
          })
        })
      }, [subreddit]);
      console.log(posts);

    return (
        <section className='crafts'>
            <Feed posts={posts} />
        </section>
    )
}
export default Crafts;
