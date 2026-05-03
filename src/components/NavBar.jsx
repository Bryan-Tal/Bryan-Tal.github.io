import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import '../css/NavBar.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y < 80) {
        onUpdateActiveLink('home');
        setScrolled(false);
      } else {
        setScrolled(true);
        // Rough breakpoints: adjust if section heights shift
        if (y < 1800) {
          onUpdateActiveLink('projects');
        } else if (y < 2600) {
          onUpdateActiveLink('skills');
        } else {
          onUpdateActiveLink('about');
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  // Maps section key → DOM element id used as anchor
  const sectionIds = { home: 'home', projects: 'featured', skills: 'skills', about: 'about' };

  const handleNavClick = (section, e) => {
    e.preventDefault();
    onUpdateActiveLink(section);
    setExpanded(false);
    // Wait for Bootstrap collapse animation before scrolling so layout is stable
    setTimeout(() => {
      document.getElementById(sectionIds[section])?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} expanded={expanded} onToggle={setExpanded}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={(e) => handleNavClick('home', e)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#featured"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={(e) => handleNavClick('projects', e)}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={(e) => handleNavClick('skills', e)}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                onClick={(e) => handleNavClick('about', e)}
              >
                About Me
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/bryan-t-163001290/" target="_blank" rel="noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://public.tableau.com/app/profile/bryan.talavera/vizzes" target="_blank" rel="noreferrer">
                  <img src={navIcon2} alt="Tableau Public" />
                </a>
              </div>
              <HashLink to="#connect" onClick={() => setExpanded(false)}>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
