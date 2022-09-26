import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-sm-center">
          <Col size={12} sm={6} className="text-center text-sm-start">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/giu-dev/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://api.whatsapp.com/send?phone=51922276249" target="_blank"><img src={navIcon5} alt="Icon" /></a>
              <a href="https://github.com/Giuxpro" target="_blank"><img src={navIcon4} alt="Icon" /></a>
            </div>
          </Col>
          <Col size={12} sm={12} className="justify-content-center text-sm-center">
            <p className="justify-content-center text-sm-center">Copyright 2022. All Rights Reserved</p>
            <p>Alberto Giuseppe Full Stack Developer</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
