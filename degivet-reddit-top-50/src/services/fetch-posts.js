import axios from 'axios';
import { fetchPostsPending, fetchPostsSuccess, fetchPostsError } from '../actions/actions';

const postsDataURL = '/mock-data/top.json';

export default function fetchPosts() {
    return dispatch => {
        dispatch(fetchPostsPending());
        axios.get(postsDataURL)
            .then(res => {
                dispatch(fetchPostsSuccess(res.data.data.children));
                return res.data.data.children;
            })
            .catch((error) => {
                dispatch(fetchPostsError(error));
            })
            .finally(() => {
                console.log('Get Promise finalized.');
            });
    };
}
