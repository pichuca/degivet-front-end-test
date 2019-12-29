import React from 'react';
import moment from 'moment';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasBeenRead: false,
        };
        // handlers.
        this.handleClickToDisplayPost = this.handleClickToDisplayPost.bind(this);
    }

    handleClickToDisplayPost(event) {
        console.log('Clicked on post id: ' + event.currentTarget.id);
        // TODO:
    }

    render() {
        const getUTCEntryDate = () => {
            let createdUTC = this.props.data.created_utc;
            return moment.unix(createdUTC).fromNow();
        };
        return (
            <div id={this.props.data.id} className="post" onClick={this.handleClickToDisplayPost}>
                <div className="post__user-image">
                    <img src={this.props.data.thumbnail} alt="user thumbnail" />
                </div>
                <div className="post__readed-status">
                    {/* TODO: add icon for UX enhancement */}
                    {this.props.data.visited ? 'READED' : 'NOT READED YET'}
                </div>
                <h2>{this.props.data.title}</h2>
                <h3>Author: {this.props.data.author}</h3>
                <div className="post__entry-date">
                    <span><b>Entry date: </b></span>
                    <span>{getUTCEntryDate(this.props.entryDate)}</span>
                </div>
                <div className="post__comments-amount">
                    <span>Number of comments: </span>
                    <span>{this.props.data.num_comments}</span>
                </div>
            </div>
        );
    }
}

export default Post;