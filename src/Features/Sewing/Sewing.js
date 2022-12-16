import Feed from '../Feed/Feed';


const Sewing = () => {
  const subreddit = 'sewing';

return (
    <section className="diy">
        <Feed subreddit={subreddit} />
    </section>
)
}
export default Sewing;