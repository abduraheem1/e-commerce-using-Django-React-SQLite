import React from 'react';
import {Link} from  'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions';

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())  
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                         <Navbar.Brand>PROSHOP</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to='/cart'>
                                 <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to='/login'>
                                 <Nav.Link><i className='fas fa-user'></i> Login</Nav.Link>
                            </LinkContainer> */}

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}
                        

                        {/* <Link to="/fileUploadfe">
                            <button>Go to Upload</button>
                        </Link> */}

                            <LinkContainer to='/fileUploadfe'>
                                 <Nav.Link><i></i> Go To Upload</Nav.Link>
                            </LinkContainer>

                        {/* <Link to="/showmyfile">
                            <button>Show CSV</button>
                        </Link> */}

                            { <LinkContainer to='/showmyfile'>
                                 <Nav.Link><i></i> Show File</Nav.Link>
                            </LinkContainer>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
