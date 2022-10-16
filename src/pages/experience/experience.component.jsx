import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_APTRON from "../../assets/img/experience/aptron.jfif";
import EZYCERTS from "../../assets/img/experience/ezycerts.jpg";
import Dipole from "../../assets/img/experience/dipole.png";
import Tilt from "react-tilt";
import "./experience.styles.css";


const Experience = () => {
    return (
        <div id="experience">
            <h1  className ="pt-3 text-center font-details-b pb-3 text-white">
                EXPERIENCE
            </h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{max:25}}>
                <Card className="card">
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                        <Card.Img variant="top" className="img-resize" src={Dipole} alt="Aptron logo"/>
                        
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                            <Card.Title className="text-center">Software Engineer</Card.Title>
                        </div>
                        <div>
                            <Card.Text className="text-center style">
                                <strong>Domain:</strong> Fullstac Developer
                                <br />
                                <strong>Role:</strong> Software Engineer
                                <br />
                                <strong>Description:</strong> Android, iOS and Web app development
                                <br />
                                <strong>Duration:</strong> From Aug 2022 - Working
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                        <Card.Img variant="top" style={{width:'100px',height:'50px'}} className="img-resize" src={EZYCERTS} alt="Aptron logo"/>
                        
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                            <Card.Title className="text-center">Software Engineer</Card.Title>
                        </div>
                        <div>
                            <Card.Text className="text-center style">
                                <strong>Domain:</strong> Fullstac Developer
                                <br />
                                <strong>Role:</strong> Software Engineer
                                <br />
                                <strong>Description:</strong> Android, iOS and Web app development
                                <br />
                                <strong>Duration:</strong> June 2021 - Sept 22
                            </Card.Text>
                        </div>
                    </Card.Body>
                
                </Card>
                </Tilt>
                </Container>
            </Jumbotron>
        </div>
    );
};


export default Experience;