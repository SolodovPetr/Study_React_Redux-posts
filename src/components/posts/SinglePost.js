import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/actions';
import Moment from 'react-moment';

import Newsletter from '../../components/utils/NewsLetter';

const SinglePost = ({ match }) => {

    const { id } = match.params;
    const { singlePost: post } = useSelector( state => state.posts );
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getPost(id));
    }, [dispatch, id]);

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
