import axios from 'axios';

const SERVER_URL = 'http://localhost:3004';

export const getPosts = async () => {
    try {

        const response = await axios.get(`${SERVER_URL}/posts?_limit=10`);
        return {
            posts: response.data // array of objects
        }

    } catch (error) {
        console.log('No posts, got error - ');
        throw error;
    }
}