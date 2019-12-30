// Actions

/**
 * Fetch posts.
 */
export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

/**
 * Update single post.
 */
export const UPDATE_SINGLE_POST_READED_STATUS_PENDING = 'UPDATE_SINGLE_POST_READED_STATUS_PENDING';
export const UPDATE_SINGLE_POST_READED_STATUS_SUCCESS = 'UPDATE_SINGLE_POST_READED_STATUS_SUCCESS';
export const UPDATE_SINGLE_POST_READED_STATUS_ERROR = 'UPDATE_SINGLE_POST_READED_STATUS_ERROR';

/**
 * Dismiss all posts.
 */
 export const DISMISS_ALL_POSTS_PENDING = 'DISMISS_ALL_POSTS_PENDING';
 export const DISMISS_ALL_POSTS_SUCCESS = 'DISMISS_ALL_POSTS_SUCCESS';
 export const DISMISS_ALL_POSTS_ERROR = 'DISMISS_ALL_POSTS_ERROR';

export function fetchPostsPending() {
    return {
        type: FETCH_POSTS_PENDING
    };
}

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts: posts,
    };
}

export function fetchPostsError(error) {
    return {
        type: FETCH_POSTS_ERROR,
        error: error,
    };
}

export function updateSinglePostReadedStatusPending() {
    return {
        type: UPDATE_SINGLE_POST_READED_STATUS_PENDING
    };
}

export function updateSinglePostReadedStatusSuccess(posts) {
    return {
        type: UPDATE_SINGLE_POST_READED_STATUS_PENDING,
        posts: posts,
    };
}

export function updateSinglePostReadedStatusError(error) {
    return {
        type: UPDATE_SINGLE_POST_READED_STATUS_ERROR,
        error: error,
    };
}

export function dismissAllPostsPending() {
    return {
        type: DISMISS_ALL_POSTS_PENDING,
        pending: true,
    };
}

export function dismissAllPostsSuccess() {
    return {
        type: DISMISS_ALL_POSTS_SUCCESS,
        pending: false,
    };
}

export function dismissAllPostsError(error) {
    return {
        type: DISMISS_ALL_POSTS_ERROR,
        error: error,
    };
}
