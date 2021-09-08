
import React, { Component } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

import './header.scss'

class Header extends Component {
    render() {
        return (
            <>

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    
                        <img 
                            src="https://1000logos.net/wp-content/uploads/2017/03/Metallica-Logo-500x313.png"
                      
                        />

                
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