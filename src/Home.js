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
            <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="#">Demo</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="user">Retrieve Data from API</Nav.Link>
                  <Nav.Link href="input">Examinate the input value</Nav.Link>
                  <Nav.Link href="video">Video</Nav.Link>
                  <Nav.Link href="animation">P5.js Animation</Nav.Link>
                  <Nav.Link href="vrwebgl">VR with WebGL</Nav.Link>
                </Nav>
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