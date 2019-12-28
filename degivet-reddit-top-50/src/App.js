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

        // Bindings
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    shouldComponentRender() {
        const { pending } = this.props;
        if (!this.pending) {
            return false;
        }

        return true;
    }

    render() {
        const { posts, error, pending } = this.props;
        if (!this.shouldComponentRender()) return <LoadingSpinner />;
        return (
            <div className="App">
                <header className="App-header">
                    Degivet Reddit's top 50
                </header>
                <div className="posts-list-wrapper">
                    { error && <span className="error-message">{error}</span> }
                    <PostsList posts={ posts } />
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
