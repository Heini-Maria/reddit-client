import Post from '../Post/Post';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setPosts } from './FeedSlice';



const Feed = ({subreddit}) => {
const dispatch = useDispatch();
const posts = useSelector((state) => state.feed.posts);


const generateFeed = () => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`).then(res => {
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
          const postsWithMetadata = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,
          }));
          dispatch(setPosts(postsWithMetadata));
        }
      });
    })
  }
  useEffect(() => {
    generateFeed()
  }, [subreddit]);

    return (
        <section className='feed'>
           {
            (posts != null) ? posts.map((post, index) => <Post key={index} id={index} post={post} />) : ''
         
           } 
        </section>
    )
}
export default Feed;