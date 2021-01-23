import React, { Component } from "react";

import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import About from "./pages/about/about.component";
import {Parallax} from "react-parallax";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import Timeline from "./components/project-timeline/projects-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import "./App.css";
import FooterPanel from "./components/footer/footer.component";
import Timer from "./components/timer/timer.component";



class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: "relative" }}>
        <MyCarousal />
        <MyTitleMessage/>
         
           <MyNavbar/>
   
        {/* particles className="[particles particles-box" params={particlesOptions} /> */}
        <div>
          <Parallax className="parallax" blur={{ min: -30, max: 30}} bgImage={require("./assets/img/parallax/background.webp")} bgImageAlt="" strength={-200} >
            <div>
              <Container className="container-box rounded">
                <Fade duration={700}>
                  <About />
                </Fade>
              </Container>
            </div>
            </Parallax>
            <Parallax  blur={{ min: -30, max: 30}} bgImage={require("./assets/img/parallax/techbackground.webp")} bgImageAlt="" strength={-200} >
            <div>
            <Container className="container-box rounded">
               <Fade duration={700}>
                 <hr />
                 <Skills />
               </Fade>
            </Container>
            </div>
            
            <div>
              <Container className="cotainer-box rounded">
                   <Fade duration={500}>
                     <hr />
                     <Experience />
                   </Fade>
              </Container>
            </div>
            <div>
              <Container className="container-box rounded">
                <Fade duration={700}>
                  <hr />
                  <Timeline/>
                </Fade>
              </Container>
            </div>
            <div>
              <Container className="container-box rounded">
                <Fade duration={700}>
                  <hr />
                  <ContactForm />
                </Fade>
              </Container>
            </div>
            </Parallax>
        </div>
        <hr />
        <div>
        <FooterPanel />
        <Timer />

        </div>
        
        
      </div>
    );
  }
}

export default App;
