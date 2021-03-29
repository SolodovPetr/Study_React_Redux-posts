import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, clearPost } from '../../store/actions';
import Moment from 'react-moment';

import Newsletter from '../../components/utils/NewsLetter';
import { showToast } from '../utils/tools';

const SinglePost = ({ match, history }) => {

    const { id } = match.params;
    const { singlePost: post } = useSelector( state => state.posts );
    const dispatch = useDispatch();

    // Get post
    useEffect( () => {
        dispatch(getPost(id));
    }, [dispatch, id]);

    // Clear singlePost state
    useEffect( () => {
        return () => dispatch(clearPost())
    }, [dispatch]);

    // 404 and error handler
    useEffect( () => {
        if( post === '404') {
            showToast('error', 'Sorry, nothing was found!');
            history.push('/');
        }
    }, [post, history]);

    return (
        <>
            { post && (
                <div className="article_container">
                <h1>{post.title}</h1>
                    <div style={{background: `url(${post.imagexl})`}}
                        className="image"></div>
                    <div className="author">
                        Created by: <span>{post.author} - </span>
                        <Moment  format="DD MMMM Y">
                            {post.createdAt}
                        </Moment>
                    </div>
                    <div className="mt-3 content">
                        <div dangerouslySetInnerHTML={{__html: post.content }} />
                    </div>
                </div>
            ) }
            <Newsletter />
        </>
    );
}

export default SinglePost;
