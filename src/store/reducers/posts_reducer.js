import {
    GET_POST,
    GET_POSTS,
    CLEAR_POST
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

        case CLEAR_POST:
            return {
                ...state,
                singlePost: null
            }

        default:
            return state;
    }
}