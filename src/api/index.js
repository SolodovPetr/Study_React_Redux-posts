import axios from 'axios';

const SERVER_URL = 'http://localhost:3004';

export const getPosts = async ({page = 1, order = 'asc', limit = 10, orderby = 'id'}, prevPosts = false) => {
    try {

        const queryString = `${SERVER_URL}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=${orderby}`;
        const response = await axios.get(queryString);
        const newPosts = response.data;
        return {
            posts: prevPosts ? [...prevPosts, ...newPosts] : newPosts,
            page,
            morePosts: (newPosts.length < limit) ? false : true
        }

    } catch (error) {
        console.log('No posts, got error - ');
        throw error;
    }
}
