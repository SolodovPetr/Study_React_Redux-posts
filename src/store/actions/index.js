import * as api from '../../api';
import {
    GET_POST,
    GET_POSTS,
    CLEAR_POST,
    ADD_NEWSLETTER,
    CLEAR_NEWSLETTER
} from '../types';

// Posts actions:
export const getPosts = (params, prevPosts) => ({
    type: GET_POSTS,
    payload: api.getPosts(params, prevPosts)
});

export const getPost = id => ({
    type: GET_POST,
    payload: api.getPost(id)
});

export const clearPost = () => ({
    type: CLEAR_POST
});


// Users actions:
export const addNewsletter = email => ({
    type: ADD_NEWSLETTER,
    payload: api.addNewsletter(email)
});

export const clearNewsletter = () => ({
    type: CLEAR_NEWSLETTER,
});
