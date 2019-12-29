import React from 'react';
import Post from '../post/post';

import List from '@material-ui/core/List';

function PostsList(props) {
    const postItems = props.posts;
    const postsElements = postItems ? postItems.map((postData) => {
        return <Post data={postData.data} key={postData.data.id}/>;
    }) : null;
    return (
        <List>{postsElements}</List>
    );
}

export default PostsList;


