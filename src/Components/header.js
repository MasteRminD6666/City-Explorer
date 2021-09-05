
import React, { Component } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../asserts/img/Logo.png'

class Header extends Component {
    render() {
        return (
            <>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">Maps</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">About us</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>

            </>
        )
    }
}



export default Header;