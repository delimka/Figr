import { useTranslation } from 'react-i18next'; 
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { BiLogoGmail} from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faPrint, faHome } from "@fortawesome/free-solid-svg-icons";
import './Footer.scss';

export default function App() {
  const { t } = useTranslation();

  return (
    <MDBFooter bgColor='light'  className='footer text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>{t('footer.socialNetworksText')}</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' className='me-4 text-reset'  aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'  aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://wwww.gmail.com/' className='me-4 text-reset' aria-label="Gmail">
          <BiLogoGmail/>      
            </a>
          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-underline fw-bold mb-4'>
                FIGR
              </h6>
              <p className='footer-p'>
              {t('footer.aboutFigr.description')}
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-underline'>{t('footer.products.heading')}</h6>
              <p>
                <a href='#!' className='text-reset'>
                {t('footer.products.items.0.label')}
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                {t('footer.products.items.1.label')}
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                {t('footer.products.items.2.label')}
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                {t('footer.products.items.3.label')}
                </a>
              </p>
            </MDBCol>

        

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
        <h6 className='text-uppercase fw-bold mb-4 text-underline'>{t('footer.contact')}</h6>
        <p>
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Monumendi, Laagri, 76401
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="me-3" />
          pavel.pissarenko@figr.ee
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="me-3" />
          +372 52 66 828
        </p>
        <p>
          <FontAwesomeIcon icon={faPrint} className="me-3" />
          +372 423 567 89
        </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba($orange' }}>
        <a href="/home" className="footer-copyright"target="_blank" rel="noopener noreferrer">
          © {new Date().getFullYear()} Figr. All rights reserved.
        </a>
      </div>
    </MDBFooter>
  );
}