import Feed from '../Feed/Feed';


const Crafts =() => {
  const subreddit = 'crafts';
    return (
        <section className='crafts'>
            <Feed subreddit={subreddit} />
        </section>
    )
}
export default Crafts;
