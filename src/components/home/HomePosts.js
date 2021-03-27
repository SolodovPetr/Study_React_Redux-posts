import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/actions';
import { Button, Spinner } from 'react-bootstrap';

const HomePosts = () => {

    const { posts, page, morePosts } = useSelector( state => state.posts );
    const dispatch = useDispatch();
    const [ params ] = useState({order: 'desc', limit: 6});
    const [ loading, setLoading ] = useState(false);

    useEffect( () => {
        dispatch(getPosts({...params}))
    },[ dispatch, params ]);

    const loadMoreHandler = () => {
        setLoading(true);
        const nextPage = page + 1;
        // Passing current posts as argument to store them in new state
        dispatch(getPosts({ ...params, page: nextPage }, posts))
            .then(() => setLoading(false))
    }

    return (
        <>
            <h2>Home Posts</h2>
            { loading && (
                <div style={{textAlign: 'center'}}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) }
            { !loading && morePosts && (
                <Button variant="outline-dark"
                        onClick={loadMoreHandler}>
                    Load more
                </Button>
            ) }
        </>
    );
}

export default HomePosts;
