import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Netflix from "../assets/netflix_logo.png";
import Logo from "./Logo";
import Avatar from "../assets/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
import Avatar2 from "../assets/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg"
import Avatar3 from "../assets/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
import Avatar4 from "../assets/Netflix-avatar.png"


function MyNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="bg-body-tertiary mb-4 sticky-top">
      <Navbar.Brand href="#" className="mx-5">
        <Logo src={Netflix} width={"140px"}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" className="active">Home</Nav.Link>
          <Nav.Link href="#">Serie TV</Nav.Link>
          <Nav.Link href="#">Film</Nav.Link>
          <Nav.Link href="#">Nuovi e popolari</Nav.Link>
          <Nav.Link href="#">La mia lista</Nav.Link>
          <Nav.Link href="#">Sfoglia per lingua</Nav.Link>
        </Nav>
        <Nav className="me-5 d-flex text-white align-items-center justify-content-center">
          <Nav.Link href="#"><i className="bi bi-search px-2 text-light"></i></Nav.Link>
          <p className="px-2 my-0">Bambini</p>
          <Nav.Link href="#" style={{ position: "relative" }} className="me-2">
            <i className="bi bi-bell px-2 text-light">
              <span className="position-absolute top-10 translate-middle badge rounded-pill bg-danger">
                10
                <span className="visually-hidden">unread messages</span>
              </span>
            </i>
          </Nav.Link>
          <img src={Avatar} width={"30px"} className="mr-5"/>
          <NavDropdown title="" id="basic-nav-dropdown" align="end">
            <div className="bg-black">
          <NavDropdown.Item href="#action/3.1" className="text-light"><img src={Avatar2} width={"30px"} className="me-2 my-1"/>Filippo</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1" className="text-light"><img src={Avatar3} width={"30px"} className="me-2 my-1"/>Andrea</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1" className="text-light"><img src={Avatar4} width={"30px"} className="me-2 my-1"/>Bambini</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1" className="text-light my-1"><i className="bi bi-pencil me-2"></i>Gestisci i profili</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className="text-light my-1"><i class="bi bi-person-fill-up me-2"></i>Trasferisci profilo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-light my-1"><i class="bi bi-person me-2"></i>
                Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text-light my-1">
                <i class="bi bi-question-circle me-2"></i>Centro Assistenza</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="#action/3.4" className="text-center text-light">
                Esci da Netflix
              </NavDropdown.Item>
              </div>
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;
