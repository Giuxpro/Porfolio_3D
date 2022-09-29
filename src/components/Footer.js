import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/astronot.gif";
import logo1 from "../assets/img/planet.gif";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-sm-center">
          <Col size={12} sm={4} className="text-center text-sm-start">
            <img className="imgF" src={logo} alt="Logo" />
            <img className="imgF" src={logo1} alt="Logo" />
          </Col>
          <Col size={12} sm={4} className="justify-content-center text-sm-center">
            <p className="justify-content-center text-sm-center">Copyright 2022. All Rights Reserved</p>
            <p>Alberto Giuseppe Full Stack Developer</p>
          </Col>
          <Col size={12} sm={4} className="text-center text-md-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/giu-dev/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://api.whatsapp.com/send?phone=51922276249" target="_blank" rel="noreferrer"><img src={navIcon5} alt="Icon" /></a>
              <a href="https://github.com/Giuxpro" target="_blank" rel="noreferrer"><img src={navIcon4} alt="Icon" /></a>
            </div>
          </Col>
          
        </Row>
      </Container>
    </footer>
  )
}
