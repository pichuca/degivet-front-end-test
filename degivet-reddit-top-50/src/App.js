import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchPostsAction from './services/fetch-posts';
import { getPosts, getPostsPending, getPostsError } from './reducers/posts';

import './App.css';

import PostsList from './components/posts-list/posts-list';
import LoadingSpinner from './components/loading-spinner';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isFetching: true,
      };

      this.dismissAllPosts = this.dismissAllPosts.bind(this);
    }
    
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
        this.setState({
            isFetching: false,
        });
    }

    dismissAllPosts() {
        console.log('Dismiss all button clicked.');
        // TODO:
    }

    render() {
        const { error, posts, pending } = this.props;
        return (
            <div className="app">
                <header className="app-header">
                    Degivet Reddit's top 50
                </header>
                <div className="posts-list-wrapper">
                    { this.state.isFetching ? <LoadingSpinner /> : null}
                    { error && <span className="error-message">{error}</span> }

                    {/* TODO: dismiss all */}
                    <button onClick={this.dismissAllPosts}>Dismiss all posts</button>
                    <PostsList posts={ this.props.posts } />
                </div>
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
