import { updateSinglePostReadedStatusSuccess } from '../actions/actions';

/**
 * @updateSinglePost
 * @param {number} postId
 * Updates posts readed status by id 
 */
export default function updateSinglePost(posts) {
    return dispatch => {
        dispatch(updateSinglePostReadedStatusSuccess(posts));
    };
}
