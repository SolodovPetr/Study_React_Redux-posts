import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

import { addNewsletter, clearNewsletter } from '../../store/actions';
import { showToast } from './tools';

const NewsLetter = () => {

    const usersData = useSelector( state => state.users );
    const dispatch = useDispatch();
    const textInput = useRef();

    // Show message on result
    useEffect( () => {
        if( usersData.newsletter ) {
            usersData.newsletter === 'added' ?
                showToast('success', 'You email has been added successfully!') :
                showToast('warning', 'Email already in the list.', 'BOTTOM_LEFT');

            textInput.current.value = "";
        }
    }, [usersData]);

    // Destroy newsletter state on component unmount
    useEffect( () => {
        return () => {
            dispatch(clearNewsletter());
        }
    }, [dispatch]);

    const submitHandler = e => {
        e.preventDefault();
        const email = textInput.current.value;
        dispatch(addNewsletter(email));
    }

    return (
        <div className="newsletter_container">
            <h1>Join our newsletter!</h1>
            <div className="form">
                <Form onSubmit={submitHandler} className="mt-4">
                    <FormGroup>
                        <FormControl type="email"
                                     placeholder="Example: youremail@gmail.com"
                                     name="email"
                                     ref={textInput} />

                    </FormGroup>
                    <Button type="submit" variant="primary">
                        Add me to the list!
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default NewsLetter;
