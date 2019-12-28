import React from 'react';

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
        // TODO: this implementation correctly.
        this.setState({ hasBeenRead: !event.target.hasBeenRead });
    }

    render() {
        return (
            <div className="post" >
                <div className="post__user-image">
                    <img src={this.props.thumbnailURL} alt="user thumbnail photo" />
                </div>
                <div className="post__readed-status">
                    {this.state.hasBeenRead ? 'post has been readed' : 'post has not been readed yet'}
                </div>
                <h2>{this.props.title}</h2>
                <h3>{this.props.author}</h3>
                <div className="post__entry-date">
                    <span>{this.props.entryDate}</span>
                </div>
                <div className="post__comments-amount">
                    <span>{this.props.commentsAmount}</span>
                </div>
            </div>
        );
    }
}

export default Post;