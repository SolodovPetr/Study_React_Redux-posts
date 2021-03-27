import {
    GET_POSTS
} from '../types';

export default function postsReducer(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                ...action.payload // { posts: [ {..}, {..} ... ] }
            }

        default:
            return state;
    }
}