import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container className="about-container">
          <Row className="pt-3 pb-3 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-3 my-details rounded">
                Hi there! I am <strong>&nbsp;Ravi Kumar</strong>
                <br />A passionate programmer and Web Developer, born and brought Sitamarhi (Bihar) in India. I am a Full Stack Web Developer with React.js,  React Native , MSSQL as my tech stack.
                <br />
                passout in 2020 with 70%(7CGPA), my Engineering with specialization in 'Computer Science and Engineering'.
                <br />
                Hello!

                I have proven working experience as software developer with good logical and analytical skills. I have delivered number of complex and real time processing projects that solves customer's business problems.

                I can build everything from the front-end to the back-end and everything in between.

                Main areas of expertise are:

                - Frontend - JavaScript, Typescript, AJAX, HTML5/CSS3, pixel perfect and responsive layout

                - Frontend libraries/frameworks: jQuery, AngularJS 1/2, React, React Native, RequireJS, Bootstrap 3

                - Backend - PHP, Parse Server, NodeJS (MEAN stack)

                - Hybrid Applications : Ionic/Angular, Ionic/React, Capacitor, Cordova, Flutter

                - Databases - MongoDB, MySQL

                - Cloud services - AWS,

                - Payment Integrations : In App Purchase, Stripe, PayPal

                - Tools - Git, GitHub, bug trackers, Jira

                I am a self motivated guy with extra ordinary analytical, problem solving skills. When you will work with me you will found a great co-operation from me. I am very flexible to customer budget and always tries to meet their expectations.
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1pF5XckqtUQ_T89rZYW4h9xvskFVLgxKU/view" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="github link" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/erraviroy" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
