import commentsicon from '../../Assets/images/commentsicon.png';
import close from '../../Assets/images/close.png';
import Comment from '../Comment/Comment.js';
import { hideComments } from '../Comments/CommentsSlice';
import { useDispatch } from 'react-redux';
import commentsSlice from './CommentsSlice';
import { useEffect, useState } from 'react';
import { getPostComments } from '../../Components/Reddit';


const Comments = ({permalink, comments, post}) => {
    const dispatch = useDispatch();




    
console.log(comments);

    return (
    <section className='comments'>
        <div className='comments-top-bar'>
            <article className='top-bar-item'>
                <img className='comments-icon'src={commentsicon}/>
                <h2>{post.num_comments} Comments</h2>
            </article>
            <aside className='top-bar-item'>
                <button onClick = {() => {
                dispatch(hideComments({value: false}));
                }}>
                    <img className='close-icon' src={close} />
                </button>
            </aside>
        </div>
            {comments.map((comment, index) => <Comment key={comment.author + index} comment={comment} /> )}    
    </section>    
    )
}

export default Comments;