import jsonPlaceholder from '../../api/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    return { type: "FETCH_POSTS", response }
}

export const selectPost = () => {
    return { type: "SELECT_POST" }
};