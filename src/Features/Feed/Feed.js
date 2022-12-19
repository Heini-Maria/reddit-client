import Post from '../Post/Post';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setPosts, setIsloading } from './FeedSlice';


const Feed = ({subreddit}) => {
const dispatch = useDispatch();
const posts = useSelector((state) => state.feed.posts);
const searchText = useSelector((state) => state.search.searchText);
const isLoading = useSelector((state) => state.feed.isLoading);


console.log(searchText);

const generateFeed = () => {
  dispatch(setIsloading(true));
    fetch(`https://www.reddit.com/r/${subreddit}.json?limit=50`).then(res => {
      if(res.status!==200){
        console.log(`${res.status} error!`)
        return;
      }
      res.json().then(data => {
        if(data!==null){
          const posts = data.data.children
        .filter(post => {
            if (post.data.post_hint == 'image') return true;
            return false;
          })
          const detailedPosts = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,
            
          }));
          if (searchText == '') {
            dispatch(setPosts(detailedPosts));
            dispatch(setIsloading(false));
          } else {
            const search = (searchText) => {
              let result = posts.filter(object => {
                  return JSON.stringify(object)
                  .toString()
                  .toLowerCase()
                  .includes(searchText);
              })
              return result;
          }
          dispatch(setPosts(search(searchText)));
          dispatch(setIsloading(false));
          }
        }
      });
    })
  }


useEffect(() => {
  
  console.log(isLoading);
  generateFeed()
  

}, [subreddit, searchText]);

console.log(posts)

    return (
        <section className='feed'>
           { 
            (isLoading == true) ? <div className='loading'></div> :
            (posts.length > 0 ) ? posts.map((post, index) => <Post key={index} id={index} post={post} />) : <h2 className='noresult'>No posts found..</h2>
         
           } 
        </section>
    )
}
export default Feed;
