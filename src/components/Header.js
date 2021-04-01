import React from 'react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header  = () => {
    return (
        <>
            <Navbar className="yellotail">
                <LinkContainer to="/">
                    <NavbarBrand>
                        The Daily News
                    </NavbarBrand>
                </LinkContainer>
            </Navbar>
            <Nav>
                <NavItem>
                    <LinkContainer to="/">
                        <NavLink>
                            Home
                        </NavLink>
                    </LinkContainer>
                </NavItem>
                <NavItem>
                    <LinkContainer to="/contact">
                        <NavLink>
                            Contact
                        </NavLink>
                    </LinkContainer>
                </NavItem>
                <NavItem>
                    <LinkContainer to="/reducer">
                        <NavLink>
                            Reducer
                        </NavLink>
                    </LinkContainer>
                </NavItem>
            </Nav>
        </>
    );
}

export default Header;