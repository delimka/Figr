import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { BiLogoGmail } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../../assets/logo.png";
import ru from "./../../assets/flags/Russia.png";
import eng from "./../../assets/flags/UK.png";
import est from "./../../assets/flags/Estonia.png";
import "./NavBar.scss";

const NavBar = () => {
  
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container id="container-id">
        <img className="logo" src={logo} alt="Figr logo" loading="lazy" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-socialmedia">
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home" aria-label="Gmail">
                <BiLogoGmail />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="clr-black">
            <ScrollLink
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
            >
              <Nav.Link> Home</Nav.Link>
            </ScrollLink>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" aria-label="Facebook">
                Production
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" aria-label="Facebook">
                Installation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" aria-label="Facebook">
                Maintenance
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" aria-label="Facebook">
                Metal work
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Products" id="basic-nav-droSpdown">
              <NavDropdown.Item href="#action/3.1" aria-label="Facebook">
                Console cranes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" aria-label="Facebook">
                Gantry cranes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" aria-label="Facebook">
                Overhead cranes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" aria-label="Facebook">
                Mechanical engineering
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Mechanical Engineering
              </NavDropdown.Item>
            </NavDropdown>
            <ScrollLink
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
            >
              <Nav.Link>Contacts</Nav.Link>
            </ScrollLink>
          </Nav>

          <Nav
            defaultActiveKey="/home"
            as="ul"
            id="navbar-icons-languages"
            className="ms-auto"
          >
            <Nav.Item as="li">
              <Nav.Link href="/home">
                <img className="flag flag-est" src={est} alt="Estonian Flag" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link href="link-1">
                <img className="flag flag-eng" src={eng} alt="UK Flag" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link href="link-2">
                <img className="flag flag-ru" src={ru} alt="Russian Flag" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
