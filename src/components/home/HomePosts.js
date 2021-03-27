import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/actions';
import { Button } from 'react-bootstrap';

const HomePosts = () => {

    const homePostsData = useSelector( state => state.posts );
    const dispatch = useDispatch();
    const [ params ] = useState({order: 'desc', limit: 6});

    useEffect( () => {
        dispatch(getPosts({...params}))
    },[ dispatch, params ]);

    const loadMoreHandler = () => {
        let { page, posts } = homePostsData;
        // Passing current posts as argument to store them in new state
        dispatch(getPosts({ ...params, page: ++page }, posts))
    }

    return (
        <>
            <h2>Home Posts</h2>
            <Button variant="outline-dark"
                    onClick={loadMoreHandler}>
                Load more
            </Button>
        </>
    );
}

export default HomePosts;
