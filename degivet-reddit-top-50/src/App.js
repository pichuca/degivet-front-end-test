import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchPostsAction from './services/fetch-posts';
import dismissAllPostsAction from './services/dismiss-all-posts';

import { getPosts, getPostsPending, getPostsError } from './reducers/posts';

import './App.css';

import PostsList from './components/posts-list/posts-list';
import LoadingSpinner from './components/loading-spinner';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          areAllPostsDismissed: false,
      };

      this.dismissAllPostsHandler = this.dismissAllPostsHandler.bind(this);
      this.handleRefreshPage = this.handleRefreshPage.bind(this);
    }
    
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    dismissAllPostsHandler() {
        const { dismissAllPosts } = this.props;
        dismissAllPosts();
        // Set new state property.
        this.setState({
            areAllPostsDismissed: true,
        });
    }
    handleRefreshPage() {
        window.location.reload();
    }

    render() {
        const { error, posts, pending } = this.props;
        const dismissAllPostsButton = <div className="dismiss-all">
             <Button variant="contained" color="primary" onClick={this.dismissAllPostsHandler}>
                Dismiss all posts
            </Button>
        </div>;
        const emptyPageMessage = <div className={'empty-page'}>
            <h3>No posts to show here.</h3>
            <p>
                Please, refresh your browser or click <span className={'refresh-link'} onClick={this.handleRefreshPage}>here</span>.
                <br />
                Thank you!
            </p>
        </div>;
        return (
                <div className="app">
                    <AppBar>
                      <Toolbar>
                        <Typography variant="h6" className={'title'}>
                            Degivet Reddit's top 50
                        </Typography>
                      </Toolbar>
                    </AppBar>
                    <Container maxWidth={'xl'}>
                        <div className="posts-list-wrapper">
                            { pending ? <LoadingSpinner /> : null }
                            { error && <span className="error-message">{error}</span> }

                            { !this.state.areAllPostsDismissed ? dismissAllPostsButton : emptyPageMessage }
                            { posts.length > 1 ? <PostsList posts={ posts } /> : null }
                        </div>
                    </Container>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    error: getPostsError(state),
    posts: getPosts(state),
    pending: getPostsPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts: fetchPostsAction,
  dismissAllPosts: dismissAllPostsAction,
}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
