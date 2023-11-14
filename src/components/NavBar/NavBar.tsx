import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../../assets/logo.png';
import ru from './../../assets/flags/Russia.png';
import eng from './../../assets/flags/UK.png';
import est from './../../assets/flags/Estonia.png';
import './NavBar.scss';

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n
      .changeLanguage(lng)
      .then(() => {
        // Language change successful, you can perform additional actions if needed
      })
      .catch((error) => {
        console.error(`Error changing language to ${lng}:`, error);
      });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
              offset={-70}
              duration={300}
            >
              <Nav.Link>{t('navBar.home')}</Nav.Link>
            </ScrollLink>

            <NavDropdown title={t('navBar.services')}>
              <NavDropdown.Item href="#action/3.1" aria-label="Facebook">
                {t('navBar.production')}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" aria-label="Facebook">
                {t('navBar.installation')}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" aria-label="Facebook">
                {t('navBar.maintenance')}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" aria-label="Facebook">
                {t('navBar.metalWork')}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={t('navBar.products')}>
              <NavDropdown.Item href="#action/3.1" aria-label="Facebook">
                {t('navBar.consoleCranes')}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" aria-label="Facebook">
                {t('navBar.gantryCranes')}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" aria-label="Facebook">
                {t('navBar.overheadCranes')}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" aria-label="Facebook">
                {t('navBar.mechanicalEngineering')}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={t('navBar.projects')}>
              <NavDropdown.Item href="#action/3.1">{t('navBar.action')}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {t('navBar.anotherAction')}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{t('navBar.something')}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                {t('navBar.mechanicalEngineering')}
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
              <Nav.Link>{t('navBar.contacts')}</Nav.Link>
            </ScrollLink>
          </Nav>

          <Nav
            defaultActiveKey="/home"
            as="ul"
            id="navbar-icons-languages"
            className="ms-auto"
          >
            <Nav.Item as="li">
              <Nav.Link   onClick={() => changeLanguage('est')}>
                <img className="flag flag-est" src={est} alt="Estonian Flag" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link onClick={() => changeLanguage('en')}>
                <img className="flag flag-eng" src={eng} alt="UK Flag" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link  onClick={() => changeLanguage('ru')}>
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
