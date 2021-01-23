import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_REACT from "../../assets/img/skills/react.svg";
import L_PORTFOLIO from "../../assets/img/projects/portfolio.webp";
import L_COMMING from "../../assets/img/projects/commingsoon.webp";
import Image from "react-bootstrap/Image";

import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";


import "./projects-timeline.styles.css";

export default function TimeLine() {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3 text-white">PROJECTS</h1>
      <Timeline className="timeline">
                <Events className="events">
                    {/*Project: Portfolio */}
                    <ImageEvent date="19/07/2020"  className="text-center" text="Portfolio " src={L_PORTFOLIO} alt="Portfolio">
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
                                             <hr/>
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
                                                 <br/>
                                                 <br />
                                                 If you are reading this , that means I have updeted my Portfolio website to recent one.
                                                 <br/>
                                                 You can Still see a video of my project by clicking on the vutton below.
                                                 <br />
                                                 <br/>
                                             </em>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            </div>


                            <div className="d-flex justify-content-between flex-nowrap text-center">
                               <UrlButton href="https://smart-face-detect-app.herokuapp.co/" target="_blank">
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

                                        {/*Project: comming project */}
                                        <ImageEvent date="19/07/2020"  className="text-center" text="Portfolio " src={L_COMMING} alt="Comming Soon">
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
                                                <li> My Rewsume</li>
                                            </ul>
                                             <hr/>
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
                                                 <br/>
                                                 <br />
                                                 If you are reading this , that means I have updeted my Portfolio website to recent one.
                                                 <br/>
                                                 You can Still see a video of my project by clicking on the vutton below.
                                                 <br />
                                                 <br/>
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
                                 <UrlButton href="https://github.com/akjha96/Smart_Brain" target="_blank">
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
