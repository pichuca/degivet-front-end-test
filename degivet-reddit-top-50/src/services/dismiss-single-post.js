import { dismissSinglePostSuccess } from '../actions/actions';

export default function dismissSinglePost(postId, posts) {
    // TODO: changed item readed status by id
    // and re arrange post with new one.
    return dispatch => {
        dispatch(dismissSinglePostSuccess(postId, posts));
    };
}
