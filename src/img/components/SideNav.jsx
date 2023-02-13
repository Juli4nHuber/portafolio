import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


export default function SideNav(){
    return (
        <div>
            <Navbar fixed="top" expand="lg" bg="primary" className="navbar" id="sideNav">
                <Navbar.Brand href="#page-top">
                    <span className="d-block d-lg-none">Clarence Taylor</span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="./img/profile.jpg" alt="..." /></span>
                </Navbar.Brand>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <Navbar.Collapse id="navbarResponsive">
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