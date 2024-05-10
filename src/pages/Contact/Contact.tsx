import MainContainer from "../../components/MainContainer/MainContainer";
import Contacts from "../../components/Contacts/Contacts";
import InfoContainer from "../../components/MainContainer/InfoContainer/InfoContainer";
import CoverImageWithText from "./../../components/CoverImageWithText/CoverImageWithText";
import coverImg from "./../../assets/contacts-images/contactCover.webp";
import Form from "react-bootstrap/Form";
import OrangeBtn from "../../components/OrangeBtn/OrangeBtn";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <MainContainer>
      <CoverImageWithText
        imgSrc={coverImg}
        imgAlt="Contact cover image"
        h1Text="Contact Us"
        h2Text="Home / Contact Us"
      />
      <InfoContainer>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h2 className="quote-heading">{t("quoteForm.heading.requestQuote")}</h2>
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="fullName">
                <Form.Label>{t("quoteForm.formFields.fullName")}</Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback type="invalid">
                  {t("quoteForm.formFields.fullNameWarning")}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="phone">
                <Form.Label>{t("quoteForm.formFields.phone")}</Form.Label>
                <Form.Control type="tel" autoComplete="on" required />
                <Form.Control.Feedback type="invalid">
                  {t("quoteForm.formFields.phoneWarning")}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="email">
                <Form.Label>{t("quoteForm.formFields.email")}</Form.Label>
                <Form.Control type="email" autoComplete="on" required />
                <Form.Control.Feedback type="invalid">
                  {t("quoteForm.formFields.emailWarning")}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="service">
                <Form.Label>
                  {t("quoteForm.formFields.selectService")}
                </Form.Label>
                <Form.Control as="select" required>
                  <option value="">
                    {t("quoteForm.formFields.serviceOptions.choose")}
                  </option>
                  <option value="service1">
                    {t("quoteForm.formFields.serviceOptions.service1")}
                  </option>
                  <option value="service2">
                    {t("quoteForm.formFields.serviceOptions.service2")}
                  </option>
                  <option value="service3">
                    {t("quoteForm.formFields.serviceOptions.service3")}
                  </option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {t("quoteForm.formFields.serviceOptions.warning")}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Form.Group controlId="message">
                <Form.Label>{t("quoteForm.formFields.message")}</Form.Label>
                <Form.Control as="textarea" rows={3} required />
                <Form.Control.Feedback type="invalid">
                  {t("quoteForm.formFields.messageWarning")}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>

          <OrangeBtn>{t("quoteForm.formFields.submitBtn")}</OrangeBtn>
        </Form>
      </InfoContainer>
      <Contacts />
    </MainContainer>
  );
};

export default Contact;
