import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/actions';
import { Button, Spinner } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import Moment from 'react-moment';
import { LinkContainer } from 'react-router-bootstrap';

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

            { !loading && posts && (
                <Masonry
                    breakpointCols={{default: 3, 800: 2, 400: 1}}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {
                        posts.map(post => {
                            const { id, title, excerpt, image, author, createdAt } = post;
                            return (
                                <div key={id}>
                                    <img style={{width: '100%', height: '200px'}} src={image} alt="" />
                                    <div className="author">
                                        <span>{author} -</span>
                                        <Moment  format="DD MMMM Y">
                                            {createdAt}
                                        </Moment>
                                    </div>
                                    <div className="content">
                                        <div className="title">{title}</div>
                                        <div className="excerpt">{excerpt}</div>
                                        <LinkContainer to={`/article/${id}`} className="mt-3">
                                            <Button variant="light">Read more</Button>
                                        </LinkContainer>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Masonry>
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
