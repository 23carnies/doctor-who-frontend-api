import react, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#003BBB" }}>
        <Navbar expand="lg" className="bg-dark">
          <Container>
            <Navbar.Brand className="navbar-logo">
              <Link to="/" className="navbar-logo">
                <GiRocketThruster className="navbar-icon" />
                Doctor Who API
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbar navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="nav-item">
                  <NavLink to="/episodes" className="nav-link">
                    Episodes
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="nav-item">
                  <NavLink to="/characters" className="nav-link">
                    Characters
                  </NavLink>
                </Nav.Link>
                {/*  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
                </NavDropdown>*/}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
