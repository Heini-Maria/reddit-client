import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import Loader from '../../Components/Loader';
import Error from '../../Components/Error';
import { setPosts, setIsloading, setError } from './FeedSlice';

function Feed({ subreddit }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.feed.posts);
  const searchText = useSelector((state) => state.search.searchText);
  const isLoading = useSelector((state) => state.feed.isLoading);
  const isError = useSelector((state) => state.feed.isError);

  const generateFeed = () => {
    dispatch(setError(false));
    dispatch(setIsloading(true));
    fetch(`https://www.reddit.com/r/${subreddit}.json?limit=50`).then((res) => {
      if (res.status !== 200) {
        console.log(` ${res.status} error!`);
        dispatch(setIsloading(false));
        dispatch(setPosts([]));
        dispatch(setError(true));
        return;
      }
      res.json().then((data) => {
        if (data !== null) {
          const posts = data.data.children.filter((post) => {
            if (post.data.post_hint === 'image') return true;
            return false;
          });
          const detailedPosts = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,
          }));
          if (searchText === '') {
            dispatch(setPosts(detailedPosts));
            dispatch(setIsloading(false));
          } else {
            const search = (searchText) => {
              const result = posts.filter((object) =>
                JSON.stringify(object)
                  .toString()
                  .toLowerCase()
                  .includes(searchText)
              );
              return result;
            };
            dispatch(setPosts(search(searchText)));
            dispatch(setIsloading(false));
            dispatch(setError(false));
          }
        }
      });
    });
  };

  useEffect(() => {
    dispatch(setPosts(generateFeed()));
  }, [subreddit, searchText]);

  return (
    <section
      className={`${
        subreddit === 'crafts' ? 'bg-yellow' : 'bg-purple'
      } min-h-screen grid grid-cols-1 justify-items-center gap-10 pt-10 sm:px-10 md:grid-cols-3 sm:grid-cols-2`}
    >
      {isLoading ? (
        <Loader />
      ) : posts.length > 0 ? (
        posts.map((post, index) => <Post key={index} id={index} post={post} />)
      ) : (
        <h2
          className={`${
            isError
              ? 'hidden'
              : 'text-text text-base text-center font-bold mt-[20vh] animate-bounce-slow'
          }`}
        >
          No posts found..
        </h2>
      )}
      {isError && <Error />}
    </section>
  );
}
export default Feed;
