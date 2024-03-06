import React from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import Dipak from "../Images/dipak.jpg";
import Sushant from "../Images/sushant.png";
import Anisha from "../Images/anisha.jpg";
import Rushikesh from '../Images/rushikesh.jpg';
import Shayan from '../Images/shayan.jpg';
import './Aboutus.css';

export default function AboutUs() {
    return (
        
        <Container fluid><br />
            <center> <h2><b>About Us</b></h2></center><br />
            <Container >
            <Row className="justify-content-md-center">
                <Col  md={8}>
                        <Card style={{width:"800px"}} className="aboutus" >
                            <Card.Body>
                                <Card.Title style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}><u>Purpose of the Training & Placement Cell</u> </Card.Title>
                                <Card.Text style={{ color: 'black', fontStyle: 'italic', textAlign: 'center' }}>
                                    The Training & Placement Cell at our institution is a dynamic and integral part of our commitment to shaping the future of our students. Our primary objective is to bridge the gap between academia and industry by facilitating meaningful interactions and collaborations.

                                      <br />Talk with Expert's
                                      <br /> Industry Interaction
                                    <br />  Campus Recruitment Drives
                                    <br />  Individual Career Counseling
                                  <br />  Skill Enhancement Initiatives
                                    <br />  Preparing Industry-Ready Graduates
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>

            <Row >
                <Col lg={4}>
                    <Card className="aboutus">
                        <Card.Body>
                            <Card.Title style={{ color: 'black', fontWeight: 'bold' }}><u>Vision</u></Card.Title>
                            <Card.Text style={{ color: 'black', fontStyle: 'italic' }}>
                                Equipping the students with relevant and conceptualized professional skills and guiding them towards a bright future and career all around the world with the values of Sincerity, Hard Work, and Justice. The Cell endeavors to carry out successfully all the processes methodically throughout the year.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="aboutus">
                        <Card.Body>
                            <Card.Title style={{ color: 'black', fontWeight: 'bold' }}><u>Mission</u></Card.Title>
                            <Card.Text style={{ color: 'black', fontStyle: 'italic' }}>
                                To achieve 100% placement for students through dedication, attitude, and complete involvement is our mission. The Training and Placement Cell, guided by a set of rules and principles, strives to maintain a good relationship with industries. Preparing the recruitment schedule for the year, inviting corporations for pre-placement.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="aboutus">
                        <Card.Body>
                            <Card.Title style={{ color: 'black', fontWeight: 'bold' }}><u>Our Objective</u></Card.Title>
                            <Card.Text style={{ color: 'black', fontStyle: 'italic' }}>
                                To provide class training for the students through a continuous training module. To enhance the employability skills among the students to meet corporate expectations. To produce the most competitive students to fit in all scenarios of the job market. To place all the students in prospective IT, Management Companies.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
<hr />
            <Alert
                variant="light"
                style={{
                    textAlign: "center",
                    color: "dark blue",
                    backgroundColor:"violet"
                }}
            > <h1>Meet Our Team </h1>
            </Alert>
            <center>


                <Row className="mx-5" >
                    <Col lg={4} style={{ textAlign: "center" }}>
                        <Card style={{ width: '20rem' }} className="aboutus1">
                            <Card.Img variant="top" src={Dipak} />
                            <Card.Body>
                                <Card.Title><b><u>Dipak Wani</u></b> </Card.Title>
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

                        <Card style={{ width: '20rem'}} className="aboutus1">
                            <Card.Img variant="top" src={Sushant} />
                            <Card.Body>
                                <Card.Title><b><u>Shushant Borkar</u></b></Card.Title>
                                <Card.Text>
                                    PRN : 230940520089 <br />
                                    PG-DAC Student, Sep-23 batch <br />
                                    CDAC Mumbai JH
                                </Card.Text>
                                <Button variant="info"><a href="https://www.linkedin.com/in/sushant-borkar-10bb4718b/">LinkedIn</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} style={{ textAlign: "center" }}>
                        <Card style={{ width: '20rem' }} className="aboutus1">
                            <Card.Img variant="top" src={Rushikesh} />
                            <Card.Body>
                                <Card.Title><b><u>Rushikesh Baravkar</u></b></Card.Title>
                                <Card.Text>
                                    PRN : 230940520068 <br />
                                    PG-DAC Student, Sep-23 batch <br />
                                    CDAC Mumbai JH
                                </Card.Text>
                                <Button variant="info"><a href="https://www.linkedin.com/in/rushikesh-baravkar-a0a384224/">LinkedIn</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr />
                <Row >
                    <Col lg={2} style={{ textAlign: "center" }} >
                    </Col>
                    <Col lg={4} style={{ textAlign: "center" }}>

                        <Card style={{ width: '20rem'}} className="aboutus1">
                            <Card.Img variant="top" src={Anisha} />
                            <Card.Body>
                                <Card.Title><b><u>Anisha Vanjari</u></b></Card.Title>
                                <Card.Text>
                                    PRN : 230940520019 <br />
                                    PG-DAC Student, Sep-23 batch <br />
                                    CDAC Mumbai KH
                                </Card.Text>
                                <Button variant="info"><a href="https://www.linkedin.com/in/shayanshaikh999/">LinkedIn</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col lg={4} style={{ textAlign: "center" }}>

                        <Card style={{ width: '20rem'}} className="aboutus1">
                            <Card.Img variant="top" src={Shayan} />
                            <Card.Body>
                                <Card.Title><b><u>Shayan Shaikh</u></b></Card.Title>
                                <Card.Text>
                                    PRN : 230940520017 <br />
                                    PG-DAC Student, Sep-23 batch <br />
                                    CDAC Mumbai KH
                                </Card.Text>
                                <Button variant="info"><a href="https://www.linkedin.com/in/shayanshaikh999/">LinkedIn</a></Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={2} style={{ textAlign: "center" }}>
                    </Col>
                </Row>

            </center>


            <hr />

            <Row>
                <Col>
                    <Card className="aboutus2">
                        <Card.Header>Quote</Card.Header>
                        <Card.Body >
                            <blockquote className="blockquote mb-5 ">
                                <p>
                                    "Teamwork is the ability to work together toward a common vision & organizational objectives."
                                </p>
                                <footer className="blockquote-footer">
                                    - Andrew Carnegie<cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="aboutus2">
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-5 ">
                                <p>
                                    "Teamwork is the secret that makes common people achieve uncommon results."
                                </p>
                                <footer className="blockquote-footer">
                                    - Ifeanyi Enoch Onuoha<cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="aboutus2">
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-5 ">
                                <p>
                               "Great things in business are never done by one person they're done by a team of people."
                                </p>
                                <footer className="blockquote-footer">
                                - Steve Jobs<cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
               
            </Row>




        </Container>
    );
}