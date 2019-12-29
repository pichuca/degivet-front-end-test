import { FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../actions/actions';

const initialState = {
    pending: false,
    posts: [],
    error: null,
};


export default function postsReducers(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS_PENDING:
            return {
                ...state,
                pending: true,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                pending: false,
                posts: action.posts,
            };
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        default:
            return state;
    }
}

// Selectors.
export const getPosts = state => state.postsReducers.posts;
export const getPostsPending = state => state.postsReducers.pending;
export const getPostsError = state => state.postsReducers.error;
