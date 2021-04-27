import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";

import L_REACT from "../../assets/img/skills/react.svg";
import L_NEXTJS from "../../assets/img/skills/nextjs.svg";


import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS_JS from "../../assets/img/skills/expressjs.svg";


import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";

import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_AWS from "../../assets/img/skills/aws.svg";

import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_C from "../../assets/img/skills/c.svg";

import "./skills.styles.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4 text-white">TECH SKILLS</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
                      <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1" target="_blank" rel="noopener noreferrer">
                      <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_JAVASCRIPT} alt="JavaScript" rounded className="image-style m-1"></Image> JavaScript
                    </a>
                  </span>
                  

                  
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REACT} alt="React" rounded className="image-style m-1"></Image> React
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_NEXTJS} alt="React" rounded className="image-style m-1"></Image> Nextjs
                    </a>
                  </span>
                  

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REACT_BOOTSTRAP} alt="React Bootstrap" rounded className="image-style m-1"></Image> React-Bootstrap
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style m-1"></Image> Node.js
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_EXPRESS_JS} alt="Node.js" rounded className="image-style m-1"></Image> Express JS
                    </a>
                  </span>
                  
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  
                <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://aws.amazon.com/console/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_AWS} alt="Digital Ocean" rounded className="image-style m-1"></Image> AWS
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_DIGITAL_OCEAN} alt="Digital Ocean" rounded className="image-style m-1"></Image> Digital-Ocean
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_GITHUB_PAGES} alt="GitHub Pages" rounded className="image-style m-1"></Image> GitHub-Pages
                    </a>
                  </span>

                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_JAVASCRIPT} alt="JavaScript" rounded className="image-style m-1"></Image> JavaScript
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_PYTHON} alt="Python" rounded className="image-style m-1"></Image> Python
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_JAVA} alt="JAVA" rounded className="image-style m-1"></Image> Java
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.learner-c.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_C} alt="C" rounded className="image-style m-1"></Image> C-Programming
                    </a>
                 </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.microsoft.com/en-us/sql-server/sql-server-2019" target="_blank" rel="noopener noreferrer">
                      <Image src={L_MSSQL} alt="MS-SQL" rounded className="image-style m-1"></Image> MS-SQL
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.microsoft.com/en-us/sql-server/sql-server-2019" target="_blank" rel="noopener noreferrer">
                      <Image src={L_MONGODB} alt="MS-SQL" rounded className="image-style m-1"></Image> MongoDb
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
