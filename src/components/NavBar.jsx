import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import '../css/NavBar.css';

// label → the DOM element id the link scrolls to and tracks
const SECTIONS = [
  { key: 'home',       label: 'Home',       id: 'home' },
  { key: 'experience', label: 'Experience', id: 'experience' },
  { key: 'projects',   label: 'Projects',   id: 'featured' },
  { key: 'skills',     label: 'Skills',     id: 'skills' },
  { key: 'about',      label: 'About Me',   id: 'about' },
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y >= 80);

      // Last section whose top has scrolled up under the navbar wins
      const offset = 120;
      let current = SECTIONS[0].key;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = section.key;
        }
      }
      setActiveLink(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (section, e) => {
    e.preventDefault();
    setActiveLink(section.key);
    setExpanded(false);
    // Wait for Bootstrap collapse animation before scrolling so layout is stable
    setTimeout(() => {
      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""} expanded={expanded} onToggle={setExpanded}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {SECTIONS.map((section) => (
                <Nav.Link
                  key={section.key}
                  href={`#${section.id}`}
                  className={activeLink === section.key ? 'active navbar-link' : 'navbar-link'}
                  onClick={(e) => handleNavClick(section, e)}
                >
                  {section.label}
                </Nav.Link>
              ))}
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
