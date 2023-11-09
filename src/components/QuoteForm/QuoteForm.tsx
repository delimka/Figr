import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import OrangeBtn from "./../OrangeBtn/OrangeBtn";
import './QuoteForm.scss';
import icon4 from "./../../assets/info-icons/Vector4.svg";
import icon5 from "./../../assets/info-icons/Vector5.svg";
import icon6 from "./../../assets/info-icons/Vector6.svg";

function QuoteForm() {
  const [validated, setValidated] = useState(false);


  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const QuoteSideInfo = [
    {
      title: "Construction and Installation",
      description:
        "Expert construction and installation of robust cranes for demanding environments.",
      icon: icon4,
    },
    {
      title: "Crane Maintenance and Repair",
      description:
        "Comprehensive services for crane upkeep, ensuring reliability and longevity.",
      icon: icon5,
    },
    {
      title: "Surface Coating and Refurbishment",
      description:
        "High-quality surface coating and refurbishment for crane preservation.",
      icon: icon6,
    },
  ];


  return (
    <section className='quote-request-container'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>  
        <h3>Appointment</h3>
        <h2>Request a Quote</h2>
        <div className="row">
          <div className="col-md-6">
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid">
                Please enter your full name.
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" required />
              <Form.Control.Feedback type="invalid">
                Please enter your phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" required />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="service">
              <Form.Label>Select Service</Form.Label>
              <Form.Control as="select" required>
                <option value="">Choose...</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
                <option value="service3">Service 3</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a service.
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} required />
              <Form.Control.Feedback type="invalid">
                Please enter a message.
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <OrangeBtn>Submit</OrangeBtn>
      </Form>
      <div className='quote-form-info'>
      <ul>
            {QuoteSideInfo.map((activity, index) => (
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
    </section>
  );
}

export default QuoteForm;
