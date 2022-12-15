import Feed from '../Feed/Feed';
import { useEffect, useState } from 'react';

const Sewing = () => {
const [posts, setPosts] = useState([]);
const [subreddit, setSubreddit] = useState('sewing');


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
    <section className="diy">
        <Feed posts={posts}/>
    </section>
)
}
export default Sewing;