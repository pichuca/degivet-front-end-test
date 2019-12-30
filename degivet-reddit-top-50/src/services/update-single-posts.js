import { updateSinglePostReadedStatusSuccess } from '../actions/actions';

/**
 * @updateSinglePost
 * @param {number} postId
 * Updates posts readed status by id 
 */
export default function updateSinglePost(postId, posts) {
    // TODO: changed item readed status by id
    // and re arrange post with new one.
    return dispatch => {
        dispatch(updateSinglePostReadedStatusSuccess(posts));
    }
}
