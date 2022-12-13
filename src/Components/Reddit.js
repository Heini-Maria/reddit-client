import React from 'react';

export const API_ROOT = 'https://www.reddit.com/r/';

export const getSubredditPosts = async (crafts) => {
    const response = await fetch('${API_ROOT}${crafts}.json');
    const json = await response.json();

    return json.data.children.map((post) = post.data);

};
console.log(getSubredditPosts());

export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();

    return json[1].data.children.map((subreddit) => subreddit.data);
};