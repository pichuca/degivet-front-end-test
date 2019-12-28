import axios from 'axios';
import { fetchPostsPending, fetchPostsSuccess, fetchPostsError } from '../actions/actions';

// TODO: add path to Reddit API.
const postsDataURL = '/mock-data/top.json'; // Axios needs absolute path to read the local file.

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
            });
    };
}
