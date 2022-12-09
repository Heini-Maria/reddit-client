import Post from '../Post/Post';

const Feed = ({ setShowingComments }) => {
    return (
        <section className='feed'>
         <Post 
         setShowingComments={setShowingComments}/>
         <Post 
         setShowingComments={setShowingComments}
         />   
        </section>
    )
}
export default Feed;