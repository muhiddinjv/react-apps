import jsonPlaceholder from "../../../Api/jsonPlaceholder"

export const fetchPosts = () => {
    // bad approach b/c it breaks the rule of action creating
    const response = jsonPlaceholder.get('./posts')

    return {
        type: 'FETCH_POSTS',
        payload: response,
    }
}

