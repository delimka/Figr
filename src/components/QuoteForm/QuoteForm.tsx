import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import Form from 'react-bootstrap/Form';
import OrangeBtn from "./../OrangeBtn/OrangeBtn";
import icon4 from "./../../assets/info-icons/Vector4.svg";
import icon5 from "./../../assets/info-icons/Vector5.svg";
import icon6 from "./../../assets/info-icons/Vector6.svg";
import './QuoteForm.scss';


function QuoteForm() {
  const [validated, setValidated] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  interface ActivityType{
    title: string;
    description:string;
    icon: string;
  }
  const QuoteSideInfo: ActivityType[] = [
    {
      title: t('quoteForm.sideInfo.0.title'),
      description: t('quoteForm.sideInfo.0.description'),
      icon: icon4,
    },
    {
      title: t('quoteForm.sideInfo.1.title'),
      description: t('quoteForm.sideInfo.1.description'),
      icon: icon5,
    },
    {
      title: t('quoteForm.sideInfo.2.title'),
      description: t('quoteForm.sideInfo.2.description'),
      icon: icon6,
    },
  ];


  return (
    <div className='quote-request-container'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>{t('quoteForm.heading.appointment')}</h3>
        <h2>{t('quoteForm.heading.requestQuote')}</h2>
        <div className="row">
          <div className="col-md-6">
            <Form.Group controlId="fullName">
              <Form.Label>{t('quoteForm.formFields.fullName')}</Form.Label>
              <Form.Control type="text"  required />
              <Form.Control.Feedback type="invalid">
              {t('quoteForm.formFields.fullNameWarning')}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="phone">
              <Form.Label>{t('quoteForm.formFields.phone')}</Form.Label>
              <Form.Control type="tel" autoComplete="on" required />
              <Form.Control.Feedback type="invalid" >
              {t('quoteForm.formFields.phoneWarning')}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Form.Group controlId="email">
              <Form.Label>{t('quoteForm.formFields.email')}</Form.Label>
              <Form.Control type="email" autoComplete="on"  required />
              <Form.Control.Feedback type="invalid">
              {t('quoteForm.formFields.emailWarning')}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="service">
              <Form.Label>{t('quoteForm.formFields.selectService')}</Form.Label>
              <Form.Control as="select"  required>
                <option value="">{t('quoteForm.formFields.serviceOptions.choose')}</option>
                <option value="service1">{t('quoteForm.formFields.serviceOptions.service1')}</option>
                <option value="service2">{t('quoteForm.formFields.serviceOptions.service2')}</option>
                <option value="service3">{t('quoteForm.formFields.serviceOptions.service3')}</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
              {t('quoteForm.formFields.serviceOptions.warning')}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Form.Group controlId="message">
              <Form.Label>{t('quoteForm.formFields.message')}</Form.Label>
              <Form.Control as="textarea" rows={3}  required />
              <Form.Control.Feedback type="invalid">
              {t('quoteForm.formFields.messageWarning')}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <OrangeBtn>{t('quoteForm.formFields.submitBtn')}</OrangeBtn>
      </Form>
      <div className='quote-form-info'>
        <ul>
          {QuoteSideInfo.map((activity:ActivityType, index:number) => (
            <li key={index} className="activity-item">
              <div className="icon-container">
                <img
                  src={activity.icon}
                  alt={activity.title}
                  className="instrument-icons"
                />
              </div>
              <div className="activity-info">
                <h5 className="sub-heading-5">{activity.title}</h5>
                <p className="description-p">{activity.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuoteForm;