import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactTitle = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const ContactSubtitle = styled.p`
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    font-weight: 500;
    color: #333;
  }
  
  input, textarea, select {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #16a085;
      box-shadow: 0 0 0 2px rgba(22, 160, 133, 0.2);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  h3 {
    color: #333;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    .icon {
      color: #16a085;
    }
  }
  
  p, a {
    color: #555;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  a {
    text-decoration: none;
    
    &:hover {
      color: #16a085;
    }
  }
`;

const SuccessMessage = styled.div`
  background-color: #e6f7f2;
  color: #16a085;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  text-align: center;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactSubtitle>
          Have questions or need assistance? Reach out to our friendly team and we'll get back to you as soon as possible.
        </ContactSubtitle>
      </ContactHeader>
      
      <ContactContent>
        <div>
          {formSubmitted && (
            <SuccessMessage>
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <select 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required
              >
                <option value="">Select a subject</option>
                <option value="booking">Booking Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <Button type="submit">Send Message</Button>
          </ContactForm>
        </div>
        
        <ContactInfo>
          <InfoCard>
            <h3>
              <span className="icon">📍</span> Address
            </h3>
            <p>123 Hotel Street</p>
            <p>Luxury Avenue</p>
            <p>New York, NY 10001</p>
          </InfoCard>
          
          <InfoCard>
            <h3>
              <span className="icon">📞</span> Phone
            </h3>
            <p>Reservations: +1 (555) 123-4567</p>
            <p>Front Desk: +1 (555) 123-4568</p>
            <p>Customer Service: +1 (555) 123-4569</p>
          </InfoCard>
          
          <InfoCard>
            <h3>
              <span className="icon">✉️</span> Email
            </h3>
            <a href="mailto:reservations@hotelbooking.com">reservations@hotelbooking.com</a>
            <a href="mailto:info@hotelbooking.com">info@hotelbooking.com</a>
            <a href="mailto:support@hotelbooking.com">support@hotelbooking.com</a>
          </InfoCard>
        </ContactInfo>
      </ContactContent>
    </ContactContainer>
  );
}

export default Contact;