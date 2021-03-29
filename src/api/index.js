import axios from 'axios';
import { stringifyUrl } from 'query-string';

const SERVER_URL = 'http://localhost:3004';

// Posts:
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

export const getPost = async id => {
    try {
        const getUrl = `${SERVER_URL}/posts/${ id }`;
        const response = await axios.get(getUrl);
        return response.data;

    } catch (error) {
        console.error('Get post:', error);
        return '404';
    }
}


// Users:
export const addNewsletter = async email => {
    try {
        const getUrl = stringifyUrl({
            url: `${SERVER_URL}/newsletter`,
            query: { email }
        });
        const getUser = await axios.get(getUrl);

        if ( Array.isArray(getUser.data) && getUser.data.length > 0 ) {
            // email already exists - deny adding
            return { newsletter: 'failed' }
        } else {
            // add email to db
            await axios.post(`${SERVER_URL}/newsletter`, { email });
            return {
                newsletter: 'added',
                email
            }
        }
    } catch (error) {
        throw error;
    }
}
