import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_REACT from "../../assets/img/skills/react.svg";
import L_PORTFOLIO from "../../assets/img/projects/portfolio.webp";
import L_COMMING from "../../assets/img/projects/commingsoon.webp";
import L_Auth from "../../assets/img/projects/react-aws.png";
import L_bootstrap4 from "../../assets/img/projects/bootstrap4.png";


import Image from "react-bootstrap/Image";

import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_NEXTJS from "../../assets/img/skills/nextjs.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS_JS from "../../assets/img/skills/expressjs.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_AWS from "../../assets/img/skills/aws.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap4.svg";
import PARKING_BUCKET from "../../assets/img/projects/parking-bucket.jpeg"
import AngularJs from "../../assets/img/skills/angularJs.png";
import PORTFOLIO from "../../assets/img/projects/portfolio_new.png";



import "./projects-timeline.styles.css";

export default function TimeLine() {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3 text-white">PROJECTS</h1>
            <Timeline className="timeline">
                <Events className="events">

                    {/* Parking Bucket */}
                    <ImageEvent date="07/10/2022" className="text-center" text="Parking Bucket " src={PARKING_BUCKET} alt="Portfolio">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion className="accordion">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECTS DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Are you looking for parking near me? Here on Parking Bucket you can book car parking near me, navigate parking space, review parking space.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className=" list-styles pt-1">
                                                    <li>Send Emails</li>
                                                    <li>View My Projects</li>
                                                    <li>Social media profile</li>
                                                    <li> My Rewsume</li>
                                                </ul>
                                                <hr />
                                                <strong> Tech Used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={AngularJs} alt="React" rounded className="image-style1 m-1"></Image> Angular Js
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1">

                                                            </Image>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT_BOOTSTRAP} alt="react-bootstrap" rounded className="image-style m-1"></Image>

                                                        </span>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <em>
                                                    <strong>
                                                        View Demo video:
                                                    </strong>
                                                    <br />
                                                    <br />
                                                    If you are reading this , that means I have updeted my Parking Bucket website and Mobile App to recent one.
                                                    <br />
                                                    You can Still see a video of my project by clicking on the vutton below.
                                                    <br />
                                                    <br />
                                                </em>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>


                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton href="https://www.parkingbucket.com/" target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton href="https://github.com/raviroygit" target="_blank">
                                    SOURCE CODE
                                </UrlButton>

                                <UrlButton href="https://www.youtube.com/watch?v=je8IJszEaDQ" target="_blank">
                                    WATCH VIDEO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/*Project: Portfolio */}
                                        {/*Project: Portfolio */}
                                        <ImageEvent date="01/11/2021" className="text-center" text="Portfolio " src={PORTFOLIO} alt="Portfolio">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion className="accordion">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECTS DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is first My Portfolo ,Build using Reactjs
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className=" list-styles pt-1">
                                                    <li>Send Emails</li>
                                                    <li>View My Projects</li>
                                                    <li>Social media profile</li>
                                                    <li> My Rewsume</li>
                                                </ul>
                                                <hr />
                                                <strong> Tech Used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1">

                                                            </Image>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT_BOOTSTRAP} alt="react-bootstrap" rounded className="image-style m-1"></Image>

                                                        </span>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <em>
                                                    <strong>
                                                        View Demo video:
                                                    </strong>
                                                    <br />
                                                    <br />
                                                    If you are reading this , that means I have updeted my Portfolio website to recent one.
                                                    <br />
                                                    You can Still see a video of my project by clicking on the vutton below.
                                                    <br />
                                                    <br />
                                                </em>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>


                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton href="https://raviroy.codelength.net/" target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton href="https://github.com/raviroygit" target="_blank">
                                    SOURCE CODE
                                </UrlButton>

                                <UrlButton href=" https://youtu.be/mfSyX40dxPg" target="_blank">
                                    WATCH VIDEO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    <ImageEvent date="19/07/2020" className="text-center" text="Portfolio " src={L_PORTFOLIO} alt="Portfolio">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion className="accordion">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECTS DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is first My Portfolo ,Build using Reactjs
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className=" list-styles pt-1">
                                                    <li>Send Emails</li>
                                                    <li>View My Projects</li>
                                                    <li>Social media profile</li>
                                                    <li> My Rewsume</li>
                                                </ul>
                                                <hr />
                                                <strong> Tech Used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1">

                                                            </Image>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT_BOOTSTRAP} alt="react-bootstrap" rounded className="image-style m-1"></Image>

                                                        </span>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <em>
                                                    <strong>
                                                        View Demo video:
                                                    </strong>
                                                    <br />
                                                    <br />
                                                    If you are reading this , that means I have updeted my Portfolio website to recent one.
                                                    <br />
                                                    You can Still see a video of my project by clicking on the vutton below.
                                                    <br />
                                                    <br />
                                                </em>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>


                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton href="https://www.codelength.net/" target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton href="https://github.com/raviroygit/portfolio" target="_blank">
                                    SOURCE CODE
                                </UrlButton>

                                <UrlButton href=" https://youtu.be/mfSyX40dxPg" target="_blank">
                                    WATCH VIDEO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/*Project: React-AWS-auth project */}
                    <ImageEvent date="20/05/2021" className="text-center" text="React-aws-authantication-system " src={L_Auth} alt="React-aws-authantication-system">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECTS DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This Authentication system build using Reactjs,Nextjs,Nodejs,ExpressJs,MongoDb and AWS.
                                                this is a production ready authantication application.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className=" list-styles pt-1">
                                                    <li>Send Emails</li>
                                                    <li>View My Projects</li>
                                                    <li>Social media profile</li>
                                                    <li> My Resume</li>
                                                </ul>
                                                <hr />
                                                <strong> Tech Used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_NEXTJS} alt="Nextjs" rounded className="image-style1 m-1"></Image> NextJs
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_MONGODB} alt="MongoDB" rounded className="image-style m-1"></Image> MongoDb
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_EXPRESS_JS} alt="Expressjs" rounded className="image-style m-1"></Image> Express JS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_NODE_JS} alt="nodejs" rounded className="image-style m-1"></Image> Node.js
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_AWS} alt="aws" rounded className="image-style m-1"></Image> AWS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_JAVASCRIPT} alt="javascript" rounded className="image-style m-1"></Image> JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT_BOOTSTRAP} alt="react-bootstrap" rounded className="image-style m-1"></Image>React-bootstrap

                                                        </span>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <em>
                                                    <strong>
                                                        View Demo video:
                                                    </strong>
                                                    <br />
                                                    <br />
                                                    If you are reading this , that means I have updeted my Portfolio website to recent one.
                                                    <br />
                                                    You can Still see a video of my project by clicking on the vutton below.
                                                    <br />
                                                    <br />
                                                </em>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>


                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton href="http://ec2-13-127-224-93.ap-south-1.compute.amazonaws.com/" target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton href="https://github.com/raviroygit/-Nextjs-React-aws-client" target="_blank">
                                    SOURCE CODE
                                </UrlButton>

                                <UrlButton href=" https://www.youtube.com/watch?v=w66-w6104ns" target="_blank">
                                    WATCH VIDEO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/*Bootstrap4_Html_nodejs*/}
                    <ImageEvent date="04/06/2021" className="text-center" text="Bootstrap4-nodejs-html-css " src={L_bootstrap4} alt="Bootstrap4">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECTS DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This website build using Bootstrap,Nodejs,Html,css ant etc.In this website contain all features for a website.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className=" list-styles pt-1">
                                                    <li>Send Emails</li>
                                                    <li>View My Projects</li>
                                                    <li>Social media profile</li>
                                                    <li> My Resume</li>
                                                </ul>
                                                <hr />
                                                <strong> Tech Used:</strong>
                                                <ul>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_NODE_JS} alt="nodejs" rounded className="image-style m-1"></Image> Node.js
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_JAVASCRIPT} alt="javascript" rounded className="image-style m-1"></Image> JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_BOOTSTRAP4} alt="react-bootstrap" rounded className="image-style m-1"></Image>Bootstrap4

                                                        </span>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <em>
                                                    <strong>
                                                        View Demo video:
                                                    </strong>
                                                    <br />
                                                    <br />
                                                    If you are reading this , that means I have updeted my Portfolio website to recent one.
                                                    <br />
                                                    You can Still see a video of my project by clicking on the vutton below.
                                                    <br />
                                                    <br />
                                                </em>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>


                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton href="http://bootstrap4.codelength.net/" target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton href="https://github.com/raviroygit/Bootstrap_Html_Css" target="_blank">
                                    SOURCE CODE
                                </UrlButton>

                                <UrlButton href=" https://www.youtube.com/watch?v=w66-w6104ns" target="_blank">
                                    WATCH VIDEO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                    {/*Project: comming project */}
                    <ImageEvent date="19/07/2022" className="text-center" text="Comming Soon " src={L_COMMING} alt="Comming Soon">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECTS DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is first My Portfolo ,Build using Reactjs
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className=" list-styles pt-1">
                                                    <li>Send Emails</li>
                                                    <li>View My Projects</li>
                                                    <li>Social media profile</li>
                                                    <li> My Resume</li>
                                                </ul>
                                                <hr />
                                                <strong> Tech Used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1">

                                                            </Image>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT_BOOTSTRAP} alt="react-bootstrap" rounded className="image-style m-1"></Image>

                                                        </span>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <em>
                                                    <strong>
                                                        View Demo video:
                                                    </strong>
                                                    <br />
                                                    <br />
                                                    If you are reading this , that means I have updeted my Portfolio website to recent one.
                                                    <br />
                                                    You can Still see a video of my project by clicking on the vutton below.
                                                    <br />
                                                    <br />
                                                </em>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>


                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton href="https://smart-face-detect-app.herokuapp.com/" target="_blank">
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton href="https://github.com/raviroygit" target="_blank">
                                    SOURCE CODE
                                </UrlButton>

                                <UrlButton href=" youte link of project" target="_blank">
                                    WATCH VIDEO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    );
}
