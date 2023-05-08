import React from "react";
import Feed from "../Feed/Feed";

function Sewing() {
  const subreddit = "sewing";
  return (
    <section className="diy">
      <Feed subreddit={subreddit} />
    </section>
  );
}
export default Sewing;
