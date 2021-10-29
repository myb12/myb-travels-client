import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <section>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link activeStyle={{ color: 'red' }} as={NavLink} to="/home">Home</Nav.Link>
                            {
                                user.email && <Nav.Link activeStyle={{ color: 'red' }} as={NavLink} to="/my-orders">My Orders</Nav.Link>
                            }
                            {
                                user.email && <span>{user.displayName}</span>
                            }
                            {
                                user.email ? <Nav.Link onClick={logOut} as={NavLink} to="/">Logout</Nav.Link>
                                    :
                                    <Nav.Link activeStyle={{ color: 'red' }} as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default Header;