import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useLocation
} from "react-router-dom";

import { CSSTransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPaginate from 'react-paginate';
import Post from '../post/post';
import PostDeatils from '../post-details/post-details';

import './post-list.css';

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

import updateSinglePostAction from '../../services/update-single-posts';
import dismissSinglePostAction from '../../services/dismiss-single-post';

import { getPosts, getPostsPending, getPostsError } from '../../reducers/posts';

class PostsList extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: props.posts,
            elements: props.posts,
            perPage: 5,
            currentPage: 0,
        };
        this.setElementsForCurrentPage = this.setElementsForCurrentPage.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleSinglePostDismiss = this.handleSinglePostDismiss.bind(this);
    }
    componentDidMount() {
        this.setElementsForCurrentPage();
    }
    setElementsForCurrentPage() {
        const elementsLength = this.state.data.length;
        const perPage = this.state.perPage;
        const elements = this.state.data.slice(this.state.offset, this.state.offset + this.state.perPage);
        this.setState({
            pageCount: Math.ceil(elementsLength / perPage),
            elements: elements,
        });
    }
    handlePageClick(data) {
        const selectedPage = data.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset,
        }, () => this.setElementsForCurrentPage());
    }
    handleSinglePostDismiss(postId) {
        const copydCollection = [...this.state.data].filter((post) => {
            return post.data.id !== postId;
        });
        
        this.setState({
            elements: copydCollection,
            data: copydCollection,
        }, () => this.setElementsForCurrentPage());
    }
    render() {
        const postItems = this.state.elements;
        const postsElements = postItems ? postItems.map((postData) => {
            return <Post data={postData.data} key={postData.data.id} getPostClickEvent={this.handleSinglePostDismiss} />;
        }) : null;
        const breakLabel = <span className="gap">...</span>;
        let paginationElement;
        if (this.state.pageCount > 1) {
            paginationElement = <ReactPaginate
                previousLabel={'←'}
                nextLabel={'→'}
                breakLabel={breakLabel}
                pageCount={this.state.pageCount}
                onPageChange={this.handlePageClick}
                forcePage={this.state.currentPage}
                containerClassName={'pagination'}
                previousLinkClassName={'previous-page'}
                nextLinkClassName={'next-page'}
                disabledClassName={'disabled'}
                activeClassName={'active'}
            />
        }
        return (
            <Router>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    {paginationElement}
                    <List className={'posts-list'}>
                        <CSSTransitionGroup
                            transitionName="fade-out-dismiss"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                            {postsElements}
                        </CSSTransitionGroup>
                    </List>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Switch>
                            <Route path="/:id" children={ <PostDetail /> } />
                        </Switch>
                    </Grid>
                </Grid>
            </Router>
        );
    }
}

function PostDetail() {
    const location = useLocation();
    const { thumbnail, author, subreddit_id, url, title } = location.state;
    let { id } = useParams();
    const detailsData = {
        thumbnail,
        author,
        subreddit_id,
        url,
        id,
        title,
    };
  
    return (
        <React.Fragment>
            <PostDeatils {...detailsData} />
        </React.Fragment>
    );
  }

const mapStateToProps = state => ({
    error: getPostsError(state),
    posts: getPosts(state),
    pending: getPostsPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateSinglePost: updateSinglePostAction,
    dismissSinglePost: dismissSinglePostAction,
  }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsList);


