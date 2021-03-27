import React from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({ children }) => (
    <Container className="mt-5 mb-5">
        { children }
        <ToastContainer />
    </Container>
);

export default MainLayout