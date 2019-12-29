import React from 'react';
import Post from '../post/post';

function PostsList(props) {
    const postItems = props.posts;
    const postsElements = postItems ? postItems.map((postData) => {
        return <Post data={postData.data} key={postData.data.id}/>;
    }) : null;
    return (
        <ul>{postsElements}</ul>
    );
}

export default PostsList;


