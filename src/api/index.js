import axios from 'axios';
import { stringifyUrl } from 'query-string';

const SERVER_URL = 'http://localhost:3004';

export const getPosts = async ({page = 1, order = 'asc', limit = 10, orderby = 'id'}, prevPosts = false) => {
    try {
        const getUrl = stringifyUrl({
            url: `${SERVER_URL}/posts`,
            query: {
                _page: page,
                _oder: order,
                _limit: limit,
                _sort: orderby
            }
        });
        const response = await axios.get(getUrl);
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
