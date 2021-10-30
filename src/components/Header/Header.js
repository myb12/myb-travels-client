import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import logo from '../../images/myb.svg';


const activeStyle = {
    color: '#62ac1e',
    borderTop: '3px solid #62ac1e'
}
const Header = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();

    const handleScroll = () => {
        window.scrollTo(0, 0);
    }
    return (
        <section>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container >
                    <Navbar.Brand >
                        <Link onClick={handleScroll} to="/">
                            <img width="50" className="me-2" src={logo} alt="" />
                        </Link>
                        <span className="brand-name"> MYB Travels</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                location.pathname === '/' ? <Nav.Link onClick={handleScroll} activeStyle={activeStyle} as={NavLink} to="/">Home</Nav.Link>
                                    :
                                    <Nav.Link onClick={handleScroll} activeStyle={activeStyle} as={NavLink} to="/home">Home</Nav.Link>
                            }

                            <Nav.Link onClick={handleScroll} activeStyle={activeStyle} as={NavLink} to="/add-service">Add A New Service</Nav.Link>

                            <Nav.Link onClick={handleScroll} activeStyle={activeStyle} as={NavLink} to="/my-orders">My Orders</Nav.Link>

                            <Nav.Link onClick={handleScroll} activeStyle={activeStyle} as={NavLink} to="/manage-orders">Manage All Orders</Nav.Link>

                            {
                                user.email && <Nav.Link>
                                    <img className="rounded-pill me-2" width="30" src={user.photoURL} alt="" />
                                    {user.displayName}
                                </Nav.Link>
                            }

                            {
                                user.email ? <Nav.Link onClick={logOut} >Logout</Nav.Link>
                                    :
                                    <Nav.Link onClick={handleScroll} activeStyle={activeStyle} as={NavLink} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default Header;