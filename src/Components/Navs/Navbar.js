import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navs = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar expand="lg" className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
              <Nav.Link href="#explore">Explore Foods</Nav.Link>
              <Nav.Link href="#reviews">Reviews</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className='phonenum'>+970599873879</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navs;
