import { dismissAllPostsSuccess } from '../actions/actions';

export default function dismissAllPosts() {
    return dispatch => {
        dispatch(dismissAllPostsSuccess());
    };
}
