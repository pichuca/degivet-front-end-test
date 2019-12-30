import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchPostsAction from './services/fetch-posts';
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

      this.dismissAllPosts = this.dismissAllPosts.bind(this);
    }
    
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    dismissAllPosts() {
        console.log('Dismiss all button clicked.');
        // TODO:
    }

    render() {
        const { error, posts, pending } = this.props;
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
                            { pending ? <LoadingSpinner /> : null}
                            { error && <span className="error-message">{error}</span> }

                            {/* TODO: dismiss all */}
                            <Button variant="contained" color="primary" onClick={this.dismissAllPosts}>
                                Dismiss all posts
                            </Button>
                            {posts.length > 1 ? <PostsList posts={ posts } /> : null}
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
  fetchPosts: fetchPostsAction
}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
