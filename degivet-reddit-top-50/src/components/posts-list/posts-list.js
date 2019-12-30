import React from 'react';
import ReactPaginate from 'react-paginate';
import Post from '../post/post';

import List from '@material-ui/core/List';

class PostsList extends React.Component  {
    constructor(props) {
        super(props);

    }
    render() {
        const postItems = this.props.posts;
        const postsElements = postItems ? postItems.map((postData) => {
            return <Post data={postData.data} key={postData.data.id}/>;
        }) : null;
        return (
            <List className={'list'}>{postsElements}</List>
        );
    }
}

export default PostsList;


