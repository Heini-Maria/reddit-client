import React from 'react';
import Feed from '../Feed/Feed';

function Crafts() {
  const subreddit = 'crafts';
  return (
    <section className="crafts">
      <Feed subreddit={subreddit} />
    </section>
  );
}
export default Crafts;
