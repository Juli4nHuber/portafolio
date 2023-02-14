import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import Profile from '../img/profile.jpg'
import '../styles/sideNavStyles.css'

export default function SideNav() {
    return (
        <div>
            <Navbar variant="tabs" fixed="top" expand="lg" bg="primary" className="navbar navbar-dark" id="sideNav">
                <Navbar.Brand className="d-none d-lg-block js-scroll-trigger" href="#page-top">
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Profile} alt="..." />
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse className="navbar-collapse collapse" id="navbarResponsive">
                    <Nav>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#interests">Interests</Nav.Link>
                        <Nav.Link href="#awards">Awards</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    );
}