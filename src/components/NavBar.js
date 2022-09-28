
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import Cv from './Cv';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() =>{
        const onScroll = ()=>{
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    },[]);

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

  return (
  <Router>
    <section id="home">
      <Navbar expand="md" className={scrolled ? 'scrolled': ""}>
        <Container>
          <Navbar.Brand href="/">
              <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Cv className="btnCv"/>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href="https://www.linkedin.com/in/giu-dev/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://api.whatsapp.com/send?phone=51922276249" target="_blank" rel="noreferrer"><img src={navIcon5} alt="Icon" /></a>
                <a href="https://github.com/Giuxpro" target="_blank" rel="noreferrer"><img src={navIcon4} alt="Icon" /></a>
              </div>
              <HashLink to='#connect'>
                <button className='btn' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  </Router>
  );
}