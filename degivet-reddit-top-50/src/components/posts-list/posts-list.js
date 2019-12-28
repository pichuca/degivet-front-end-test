import React from 'react';

function PostsList(props) {
    const postItems = props.posts;
    const postsElements = postItems.map((postData) => {
        <Post props={postData} />
    });
    return (
        <ul>{postsElements}</ul>
    );
}

export default PostsList;


