import { Outlet } from "react-router-dom";
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Layout extends React.Component {

    state = {
        loading: true,
        person: null

    }

    render() {
        return (
          <>
            <Navbar bg="primary" variant="dark" sticky="top" expand="lg" className="navigation">
              <Container>
                <Navbar.Brand href="/">About me</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {/*<Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="edu" eventKey="link-1">Education</Nav.Link>
                    <Nav.Link href="user" eventKey="link-2">Demostration</Nav.Link>
                    <Nav.Link href="video" eventKey="link-3">Video</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                */}
              </Container>
            </Navbar>
            <Container className="p-3">
              <Outlet />
            </Container>
          </>
          );
    }
}

export default Layout;