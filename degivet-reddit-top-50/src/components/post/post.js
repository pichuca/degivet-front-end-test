import React from 'react';
import moment from 'moment';

import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasBeenRead: false,
        };
        // handlers.
        this.handleClickToDisplayPost = this.handleClickToDisplayPost.bind(this);
        this.dismissPost = this.dismissPost.bind(this);
    }

    handleClickToDisplayPost(event) {
        console.log('Clicked on post id: ' + event.currentTarget.id);
        // TODO: UI, update store/state on action.
    }

    dismissPost() {
        console.log('Click on dismiss post button.');
    }

    render() {
        const getUTCEntryDate = () => {
            let createdUTC = this.props.data.created_utc;
            return moment.unix(createdUTC).fromNow();
        };
        return (
            <React.Fragment>
                <ListItem id={this.props.data.id} className="post" onClick={this.handleClickToDisplayPost} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="user thumbnail" src={this.props.data.thumbnail} />
                    </ListItemAvatar>
                    <CancelOutlinedIcon onClick={this.dismissPost} />
                    <ListItemText>
                        <h3>{this.props.data.author}</h3>
                        <h2>
                            {this.props.data.title}
                        </h2>
                        <div className="post__entry-date">
                            <span><b>Entry date: </b></span>
                            <span>{getUTCEntryDate(this.props.entryDate)}</span>
                        </div>
                        <div className="post__comments-amount">
                            <span><b>Number of comments:</b> </span>
                            <span>{this.props.data.num_comments}</span>
                        </div>
                        <div className="post__readed-status">
                            {/* TODO: add icon for UX enhancement */}
                            {this.props.data.visited ? <CheckCircleOutlinedIcon /> : 'Unreaded.' }
                        </div>
                    </ListItemText>
                </ListItem>
                <Divider variant="middle" />
            </React.Fragment>
        );
    }
}

export default Post;