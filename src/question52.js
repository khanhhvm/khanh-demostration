import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Example2 from './KhanhHoang';
import Example3 from './Animation';

import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faWalking } from '@fortawesome/free-solid-svg-icons'


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Example3 />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Test = () => {
    const [identity, setIdentity] = useState(null);

    // menu
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // example 3
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        const url = "https://api.randomuser.me/";
        fetch(url)
        .then(response => response.json())
        .then(data => setIdentity(data.results[0]));

    },[]);

    return (
        <div>
            <div className="stickyClass z-1">
                <Button variant="primary" onClick={handleShow}>List of demostration</Button>
            </div>
            <br />
            <br/>
            {/* menu */}
            <Offcanvas show={show} onHide={handleClose} className="width250">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Demostration List</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                        <Nav className="flex-column">
                            <Nav.Link href="#example1" smooth={true} eventKey="example1" onClick={handleClose}>API Call</Nav.Link>
                            <Nav.Link href="#example2"  smooth={true} eventKey="example2" onClick={handleClose}>React + JS</Nav.Link>
                            <Nav.Link href="#example3" smooth={true} eventKey="example3" onClick={handleClose}>React + P5</Nav.Link>
                            <Nav.Link href="#example4" smooth={true} eventKey="example4" onClick={handleClose}>Other Work</Nav.Link>
                        </Nav>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
            {/* example 1 */}

            <Container id="example1" className='d-flex'>
                <div>
                    <h1 className="mb-0">
                        API Call
                    </h1>
                    <div className="subheading mb-2">
                        Source: https://api.randomuser.me/
                    </div>
                    <p className="lead mb-2 text-sm">I retrieve data from randomuser API and display the information below using Promises in Javascript and React </p>
                    {identity ? (
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                <Image thumbnail roundedCircle src={identity.picture.medium} />
                                <Card.Title>{identity.name.first}, {identity.name.last}</Card.Title>
                                <Card.Text>
                                    {identity.email}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Address: {identity.location.street.number}, {identity.location.street.name}</ListGroup.Item>
                                <ListGroup.Item>City: {identity.location.city}, {identity.location.state}</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        ):(<div> loading... </div>)
                    }

                </div>
            </Container>
            <hr className="mt-4" />
            {/* example 2 */}

            <Container className="resume-section" id="example2">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Javascript in React Form
                    </h1>
                    <div className="subheading mb-2">
                        <p className="lead mb-2 text-sm">With React Hook, I write a simple calculation under Javascript to send and receive data between client and server.</p>
                    </div>
                    <Example2 />
                </div>
            </Container>
            <hr className="mt-4" />

            {/* example 3 */}

            <Container className="resume-section" id="example3">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Animation with P5
                    </h1>
                    <div className="subheading mb-2">
                        Source: https://p5js.org/
                    </div>
                    <p className="lead mb-2 text-sm">With the help of P5, I draw a simple fairy tale to display this powerful tool.</p>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Play
                    </Button>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </Container>

            <hr className="mt-4" />
            {/* example 4 */}

            <Container className="resume-section" id="example4">
                <div className="resume-section-content">
                    <h1 className="mb-3">
                        Other Application
                    </h1>
                    <p className="lead mb-2 text-sm">These are the previous work I did during my school years and related jobs.</p>
                    
                    <h6 className="mb-2">
                        <FontAwesomeIcon icon={faStar} /> Kid Toy Website
                    </h6>
                    <Container>
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <Image src="/image/kidtoy_1.png" fluid />
                                <Carousel.Caption>
                                <h3>Carousel</h3>
                                <p>Display news, products, etc.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/image/kidtoy_2.png" fluid />
                                <Carousel.Caption>
                                <h3>Product Page</h3>
                                <p>Display products, images, prices.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/image/kidtoy_3.png" fluid />
                                <Carousel.Caption>
                                <h3>Contact Page</h3>
                                <p>A random miscellaneous.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                    <div className="divider-custom ">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon={faWalking} /></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <h6 className="mb-2">
                        <FontAwesomeIcon icon={faStar} /> React Native: Renting Instrument App on mobile. Inspired by AirBnb.
                    </h6>
                    <Container>
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <Image src="/image/owner.png" fluid />
                                <Carousel.Caption>
                                <h3>Owner App</h3>
                                <p>An app for user to display their instrument-for-rent.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/image/renter.png"  fluid />
                                <Carousel.Caption>
                                <h3>Renter App</h3>
                                <p>A second app for user to rent instrument.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                        </Carousel>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default Test;