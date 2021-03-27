import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/actions'

const HomePosts = () => {
    // const homePosts = useSelector( state => state.posts );
    const dispatch = useDispatch();

    useEffect( () => {

        dispatch(getPosts())

    }, [ dispatch ]);

    return (
        <h2>Home Posts</h2>
    );
}

export default HomePosts;