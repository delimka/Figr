import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../../assets/Logo.webp";
import ru from "./../../assets/flags/Russia.png";
import eng from "./../../assets/flags/UK.png";
import est from "./../../assets/flags/Estonia.png";
import { useNavigate } from "react-router-dom";
import { useNavBarVisibility } from "./../../context/NavBarVisibilityContext";

import "./NavBar.scss";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();

  const { isNavBarVisible } = useNavBarVisibility();

  const changeLanguage = (lng: string) => {
    i18n
      .changeLanguage(lng)
      .then(() => {
        setExpanded(false);
        localStorage.setItem("i18nextLng", lng);
      })
      .catch((error) => {
        console.error(`Error changing language to ${lng}:`, error);
      });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary ${isNavBarVisible ? "" : "transparent"}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      ref={navRef}
    >
      <Container id="nav-container-id">
        <button
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="logoImg" src={logo} alt="Figr logo" />
        </button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="clr-black">
            <NavLink
              onClick={() => setExpanded(false)}
              to="/"
              className="nav-link"
            >
              {t("navBar.home")}
            </NavLink>
            <NavDropdown title={t("navBar.services")}>
              <NavDropdown.Item
                as={NavLink}
                to="/production"
                onClick={() => setExpanded(false)}
              >
                {t("navBar.production")}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                onClick={() => setExpanded(false)}
                to="/installation"
              >
                {t("navBar.installation")}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                onClick={() => setExpanded(false)}
                to="/maintenance"
              >
                {t("navBar.maintenance")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item aria-label="Metal Work">
                {t("navBar.metalWork")}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("navBar.products")}>
              <NavDropdown.Item
                aria-label="consoleCranes"
                onClick={() => setExpanded(false)}
                as={NavLink}
                to="/consoleCranes"
              >
                {t("navBar.consoleCranes")}
              </NavDropdown.Item>
              <NavDropdown.Item
                aria-label="Gantry cranes"
                as={NavLink}
                onClick={() => setExpanded(false)}
                to="/gantryCranes"
              >
                {t("navBar.gantryCranes")}
              </NavDropdown.Item>
              <NavDropdown.Item
                aria-label="Overhead cranes"
                as={NavLink}
                onClick={() => setExpanded(false)}
                to="/overheadCranes"
              >
                {t("navBar.overheadCranes")}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={t("navBar.projects")}>
              <NavDropdown.Item
                aria-label="Our projects"
                as={NavLink}
                onClick={() => setExpanded(false)}
                to="/ourProjects"
              >
                {t("navBar.ourProjects")}
              </NavDropdown.Item>
              <NavDropdown.Item
                aria-label="Our projects"
                as={NavLink}
                onClick={() => setExpanded(false)}
                to="/gallery"
              >
                {t("navBar.gallery")}
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              aria-label="Contact page"
              as={NavLink}
              onClick={() => setExpanded(false)}
              to="/contact"
            >
              {t("navBar.contacts")}
            </Nav.Link>
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
