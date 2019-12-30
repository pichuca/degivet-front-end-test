import React from 'react';
import ReactPaginate from 'react-paginate';
import Post from '../post/post';

import './post-list.css';

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';


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
    }
    componentDidMount() {
        let elementsLength = this.state.data.length;
        let perPage = this.state.perPage;
        this.setState({
            pageCount: Math.ceil(elementsLength / perPage),
        }, () => this.setElementsForCurrentPage());
    }
    setElementsForCurrentPage() {
        let elements = this.state.data.slice(this.state.offset, this.state.offset + this.state.perPage);
        this.setState({elements: elements});
    }
    handlePageClick(data) {
        const selectedPage = data.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset,
        }, () => this.setElementsForCurrentPage());
    }
    render() {
        const postItems = this.state.elements;
        const postsElements = postItems ? postItems.map((postData) => {
            return <Post data={postData.data} key={postData.data.id}/>;
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
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <List>
                    {paginationElement}
                    {postsElements}
                    {paginationElement}
                </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                    DETAILS POSTS
                </Grid>
            </Grid>
        );
    }
}

export default PostsList;


