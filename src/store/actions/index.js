import * as api from '../../api';
import {
    GET_POSTS
} from '../types';


export const getPosts = (params, prevPosts) => ({
    type: GET_POSTS,
    payload: api.getPosts(params, prevPosts)
});
