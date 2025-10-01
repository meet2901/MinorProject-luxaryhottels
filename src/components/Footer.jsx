import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #ffffff;
  padding: 5rem 2rem 2rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), #FF9A3C, var(--primary-color));
    z-index: 5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 50%);
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const WaveShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 46px;
  }
  
  .shape-fill {
    fill: var(--background-light);
  }
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const Logo = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--primary-color);
    border-radius: 2px;
  }
  
  span {
    color: var(--primary-color);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary-color);
      transform: translateY(100%);
      transition: transform 0.3s ease;
      z-index: -1;
    }
    
    &:hover {
      transform: translateY(-5px);
      color: #ffffff;
      
      &::before {
        transform: translateY(0);
      }
    }
    
    i {
      position: relative;
      z-index: 2;
    }
  }
`;

const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin-right: 2.5rem;
  
  h3 {
    color: #ffffff;
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: 1.2rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 30px;
      height: 2px;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 1rem;
      transform: translateX(0);
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateX(5px);
      }
      
      a, .footer-link {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 0.95rem;
        display: inline-block;
        position: relative;
        padding-left: 0;
        cursor: pointer;
        
        &::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        &:hover {
          color: var(--primary-color);
          padding-left: 20px;
          
          &::before {
            opacity: 1;
            left: 0;
          }
        }
      }
    }
  }
`;

const NewsletterSection = styled.div`
  flex: 1.5;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  
  h2 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
    color: #ffffff;
  }
  
  p {
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const SubscribeForm = styled.div`
  display: flex;
  position: relative;
  
  input {
    flex: 1;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 50px;
    font-size: 0.95rem;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      background: #ffffff;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }
    
    &::placeholder {
      color: #888;
    }
  }
  
  button {
    position: absolute;
    right: 5px;
    top: 5px;
    background: linear-gradient(135deg, var(--primary-color), #FF9A3C);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(237, 109, 5, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(237, 109, 5, 0.4);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: var(--primary-color);
  }
`;

const CompanyInfo = styled.div`
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const FloatingShape = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(237, 109, 5, 0.1) 0%, rgba(237, 109, 5, 0) 70%);
  z-index: 1;
  pointer-events: none;
  
  &.shape1 {
    top: -100px;
    right: -50px;
    width: 400px;
    height: 400px;
    animation: float 15s infinite alternate ease-in-out;
  }
  
  &.shape2 {
    bottom: 50px;
    left: -150px;
    width: 350px;
    height: 350px;
    animation: float 20s infinite alternate-reverse ease-in-out;
  }
  
  @keyframes float {
    0% {
      transform: translate(0, 0) scale(1);
    }
    100% {
      transform: translate(50px, 50px) scale(1.1);
    }
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <WaveShape>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </WaveShape>
      
      <FloatingShape className="shape1" />
      <FloatingShape className="shape2" />
      
      <FooterContent>
        <FooterTop>
          <Logo>Stay<span>Easy</span></Logo>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </SocialIcons>
        </FooterTop>
        
        <FooterColumns>
          <FooterSection>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/rooms" className="footer-link">Rooms & Suites</Link></li>
              <li><Link to="/bookings" className="footer-link">Bookings</Link></li>
              <li><Link to="/dining" className="footer-link">Restaurants</Link></li>
              <li><Link to="/spa" className="footer-link">Spa & Wellness</Link></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Information</h3>
            <ul>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </FooterSection>
          
          <NewsletterSection>
            <h2>Get exclusive offers and updates for your next dream vacation</h2>
            <SubscribeForm>
              <input type="email" placeholder="Your email address" aria-label="Email address" />
              <button type="submit" onClick={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to our newsletter!');
              }}>Subscribe</button>
            </SubscribeForm>
          </NewsletterSection>
        </FooterColumns>
      </FooterContent>
      
      <Copyright>
        <CompanyInfo>
          StayEasy Hotels & Resorts, Luxury Avenue 123, Paradise City
        </CompanyInfo>
        <span>&copy; {currentYear} StayEasy | All rights reserved.</span>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;