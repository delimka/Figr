import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../../assets/Logo.webp";
import ru from "./../../assets/flags/Russia.png";
import eng from "./../../assets/flags/UK.png";
import est from "./../../assets/flags/Estonia.png";
import "./NavBar.scss";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const changeLanguage = (lng: string) => {
    i18n
      .changeLanguage(lng)
      .then(() => {
        setExpanded(false);
      })
      .catch((error) => {
        console.error(`Error changing language to ${lng}:`, error);
      });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      // Click occurred outside the navbar
      setExpanded(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      ref={navRef}
    >
      <Container id="container-id">
        <img className="logo" src={logo} alt="Figr logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="clr-black">
            <ScrollLink
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-300}
              duration={300}
              onClick={() => setExpanded(false)}
            >
              <Nav.Link>{t("navBar.home")}</Nav.Link>
            </ScrollLink>

            <NavDropdown title={t("navBar.services")}>
              <NavDropdown.Item href="#action/3.1" aria-label="Production">
                {t("navBar.production")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" aria-label="Installation">
                {t("navBar.installation")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" aria-label="Maintenance">
                {t("navBar.maintenance")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" aria-label="Metal Work">
                {t("navBar.metalWork")}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={t("navBar.products")}>
              <NavDropdown.Item href="#action/3.1" aria-label="consoleCranes">
                {t("navBar.consoleCranes")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" aria-label="Gantry cranes">
                {t("navBar.gantryCranes")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" aria-label="Overhead cranes">
                {t("navBar.overheadCranes")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.4"
                aria-label="mechanicalEngineering"
              >
                {t("navBar.mechanicalEngineering")}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={t("navBar.projects")}>
              <NavDropdown.Item href="#action/3.1">
                {t("navBar.action")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {t("navBar.anotherAction")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {t("navBar.something")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                {t("navBar.mechanicalEngineering")}
              </NavDropdown.Item>
            </NavDropdown>

            <ScrollLink
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              onClick={() => setExpanded(false)}
            >
              <Nav.Link>{t("navBar.contacts")}</Nav.Link>
            </ScrollLink>
          </Nav>

          <Nav
            defaultActiveKey="/home"
            as="ul"
            id="navbar-icons-languages"
            className="ms-auto"
          >
            <Nav.Link onClick={() => changeLanguage("est")}>
              <img className="flag flag-est" src={est} alt="Estonian Flag" />
            </Nav.Link>

            <Nav.Link onClick={() => changeLanguage("en")}>
              <img className="flag flag-eng" src={eng} alt="UK Flag" />
            </Nav.Link>

            <Nav.Link onClick={() => changeLanguage("ru")}>
              <img className="flag flag-ru" src={ru} alt="Russian Flag" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
