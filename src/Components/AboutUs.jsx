import React from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import Dipak from "../Images/dipak.jpg";


export default function AboutUs() {
    return (
        <Container fluid>
            <br/><br/><br/>
            <Alert
                variant="success"
                style={{
                    textAlign: "center",
                    backgroundColor: "#888888",
                    color: "white",
                }}
            >
                <h1>About Us</h1>
            </Alert>
            <Row>
                <Col lg={4}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Vision</h3>

                    <p style={{ color: 'black', fontStyle: 'italic' }}>
                       ------------------------------------------------
                    </p>
                </Col>
                <Col lg={4}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Mission</h3>
                    <p style={{ color: 'black', fontStyle: 'italic' }}>------------------------------------------

                        </p>
                </Col>
                <Col lg={4}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Our History</h3>
                    <p style={{ color: 'black', fontStyle: 'italic' }}>--------------------------------------------</p>
                </Col>
            </Row>


            <Alert
                variant="danger"
                style={{
                    textAlign: "center",
                    color: "dark blue",
                }}
            > <h1>Meet Our Team </h1>
            </Alert>

            <Row >
                <Col lg={4} style={{ textAlign: "center" }}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={Dipak} />
                        <Card.Body>
                            <Card.Title>Dipak Wani</Card.Title>
                            <Card.Text>
                            PRN : 230940520019 <br />
                                PG-DAC Student, Sep-23 batch <br />
                                CDAC Mumbai JH 
                            </Card.Text>
                            <Button variant="info"><a href="https://www.linkedin.com/in/dipak-wani-726b2521a/">LinkedIn</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>

                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={Dipak} />
                        <Card.Body>
                            <Card.Title>Dips</Card.Title>
                            <Card.Text>
                                PRN : 230940320022 <br />
                                PG-DAC Student, Sep-23 batch <br />
                                CDAC Mumbai KH 
                            </Card.Text>
                            <Button variant="info"><a href="https://www.linkedin.com/in/anuja-gupta-7b89ba148/">LinkedIn</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={Dipak} />
                        <Card.Body>
                            <Card.Title>Dip</Card.Title>
                            <Card.Text>
                            PRN : 230940320132 <br />
                                PG-DAC Student, Sep-23 batch <br />
                                CDAC Mumbai KH 
                            </Card.Text>
                            <Button variant="info"><a href="https://www.linkedin.com/in/yogesh-patel-8b426b229/">LinkedIn</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row >
                <Col lg={4} style={{ textAlign: "center" }}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={Dipak} />
                        <Card.Body>
                            <Card.Title>Dipak Wani</Card.Title>
                            <Card.Text>
                            PRN : 230940520019 <br />
                                PG-DAC Student, Sep-23 batch <br />
                                CDAC Mumbai JH 
                            </Card.Text>
                            <Button variant="info"><a href="https://www.linkedin.com/in/dipak-wani-726b2521a/">LinkedIn</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>

                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={Dipak} />
                        <Card.Body>
                            <Card.Title>Dips</Card.Title>
                            <Card.Text>
                                PRN : 230940320022 <br />
                                PG-DAC Student, Sep-23 batch <br />
                                CDAC Mumbai KH 
                            </Card.Text>
                            <Button variant="info"><a href="https://www.linkedin.com/in/anuja-gupta-7b89ba148/">LinkedIn</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={Dipak} />
                        <Card.Body>
                            <Card.Title>Dip</Card.Title>
                            <Card.Text>
                            PRN : 230940320132 <br />
                                PG-DAC Student, Sep-23 batch <br />
                                CDAC Mumbai KH 
                            </Card.Text>
                            <Button variant="info"><a href="https://www.linkedin.com/in/yogesh-patel-8b426b229/">LinkedIn</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
<hr />

            <Row>
                <Col>
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-5 ">
                                <p>
                                    "Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives."
                                </p>
                                <footer className="blockquote-footer">
                                    Andrew Carnegie<cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-5 ">
                                <p>
                                Teamwork is the secret that makes common people achieve uncommon results. - Ifeanyi Enoch Onuoha
                                </p>
                                <footer className="blockquote-footer">
                                Helen Keller <cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-5 ">
                                <p>
                                Teamwork is the secret that makes common people achieve uncommon results. 
                                </p>
                                <footer className="blockquote-footer">
                                - Ifeanyi Enoch Onuoha<cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


                    
      
        </Container>
    );
}