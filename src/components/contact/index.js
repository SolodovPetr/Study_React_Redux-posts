import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/actions';
import { showToast } from '../utils/tools';

const Contact = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            firstname: '',
            lastname: '',
            message: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Email is required.')
                .email('Please provide valid email.'),
            firstname: Yup.string()
                .required('Name is required.')
                .min(2, 'Too short, must be a least 2 characters.'),
            lastname: Yup.string()
                .required('Last Name is required.')
                .min(3, 'Too short, must be a least 3 characters.'),
            message:Yup.string()
                .required('Message is required.')
                .max(500,'Sorry the message is too long')
        }),
        onSubmit: ( values, {resetForm} ) => {
            console.log(values)
            dispatch( sendMessage(values) )
                .then( ({ payload }) => {
                    if ( payload ) {
                        showToast('success', 'Thank you!')
                    } else {
                        showToast('error', 'Sorry, something went wrong.')
                    }
                    resetForm();
                })
        }
    });

    const { errors, touched, handleSubmit } = formik;

    return (
        <>
            <h1>Contact us</h1>
            <form onSubmit={ handleSubmit }>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="email@example.com"
                        {...formik.getFieldProps('email')}
                    />
                    {
                        errors.email && touched.email &&
                        ( <Alert variant="danger">{errors.email}</Alert> )
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="firstname">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        {...formik.getFieldProps('firstname')}
                    />
                    {
                        errors.firstname && touched.firstname &&
                        ( <Alert variant="danger">{errors.firstname}</Alert> )
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your last name"
                        {...formik.getFieldProps('lastname')}
                    />
                    {
                        errors.lastname && touched.lastname &&
                        ( <Alert variant="danger">{errors.lastname}</Alert> )
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        {...formik.getFieldProps('message')}
                    ></textarea>
                    {
                        errors.message && touched.message &&
                        ( <Alert variant="danger">{errors.message}</Alert> )
                    }
                </div>

                <button type="submit" className="btn btn-primary mb-2">
                    Send message
                </button>

            </form>
        </>

    );
}

export default Contact;
