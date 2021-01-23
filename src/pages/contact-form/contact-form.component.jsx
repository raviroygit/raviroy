import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm =() => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3 text-white"> CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                    <div className="m-2">
                        <a href="mailto:ravi93448@yahoo.com" target="_blank" rel="noopener noreferrer">
                           <Button variant="outline-danger" title="ravi93448@yahoo.com">
                            <i className="fas fa-envelope-square"></i> Email Me
                           </Button>
                        </a>
                    </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/ravikumarroy" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="visit my Linkedin">
                                    <i className ="fab fa-linkdin"></i> Linkedin
                                </Button>

                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.facebook.com/ravi93448" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary " title="Say Hello on Facebook">
                                    <i className="fab fa-facebook-square"></i> FaceBook
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.github.com/raviroygit" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="My github page">
                                    <i className="fab fa-github-square"></i> GitHub

                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default ContactForm;