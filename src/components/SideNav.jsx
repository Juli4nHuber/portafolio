import React from "react";
import {Nav, Navbar, NavDropdown } from "react-bootstrap";
import Profile from '../img/profile.jpg'

export default function SideNav(){
    return (
        <div>
            <Navbar fixed="top" expand="lg" bg="primary" className="navbar navbar-dark" id="sideNav">
                    <Navbar.Brand className="js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Clarence Taylor</span>
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Profile} alt="..." />
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="navbar-collapse collapse" id="navbarResponsive">
                        <Nav>
                            <NavDropdown.Item className="nav-item" href="#about">About</NavDropdown.Item>
                            <NavDropdown.Item className="nav-item" href="#experience">Experience</NavDropdown.Item>
                            <NavDropdown.Item className="nav-item" href="#education">Education</NavDropdown.Item>
                            <NavDropdown.Item className="nav-item" href="#skills">Skills</NavDropdown.Item>
                            <NavDropdown.Item className="nav-item" href="#interests">Interests</NavDropdown.Item>
                            <NavDropdown.Item className="nav-item" href="#awards">Awards</NavDropdown.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
}