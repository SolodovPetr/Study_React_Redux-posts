import {
    GET_POST,
    GET_POSTS
} from '../types';

export default function postsReducer(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                ...action.payload // { posts: [ {..}, {..} ... ] }
            }

        case GET_POST:
            return {
                ...state,
                singlePost: action.payload
            }

        default:
            return state;
    }
}