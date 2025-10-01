import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const PrivacyContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const PrivacyCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ED6D05, #FF9A3C);
  }

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-xl);
    border-radius: 16px;
  }
`;

const PrivacyHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: var(--space-md);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    font-size: 1.125rem;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .last-updated {
    font-size: 0.9rem;
    color: #888;
    font-style: italic;
  }
`;

const PrivacyContent = styled.div`
  line-height: 1.8;

  h2 {
    font-size: 1.75rem;
    color: #333;
    margin: var(--space-2xl) 0 var(--space-lg);
    font-weight: 600;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: var(--space-sm);

    &:first-child {
      margin-top: 0;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.375rem;
    color: #333;
    margin: var(--space-xl) 0 var(--space-md);
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    color: #555;
    margin-bottom: var(--space-md);
  }

  ul, ol {
    margin: var(--space-md) 0;
    padding-left: var(--space-xl);

    li {
      margin-bottom: var(--space-sm);
      color: #555;
    }
  }

  .highlight {
    background: #d1ecf1;
    padding: var(--space-sm) var(--space-md);
    border-radius: 8px;
    border-left: 4px solid #17a2b8;
    margin: var(--space-md) 0;
  }

  .contact-info {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: var(--space-lg);
    margin: var(--space-xl) 0;

    h4 {
      font-size: 1.125rem;
      color: #333;
      margin-bottom: var(--space-sm);
      font-weight: 600;
    }

    p {
      margin-bottom: var(--space-xs);
      color: #555;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  margin-top: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function Privacy() {
  return (
    <PrivacyContainer>
      <PrivacyCard>
        <PrivacyHeader>
          <h1>Privacy Policy</h1>
          <p>This Privacy Policy describes how StayEasy Hotel collects, uses, and protects your personal information when you use our services.</p>
          <div className="last-updated">Last updated: January 15, 2024</div>
        </PrivacyHeader>

        <PrivacyContent>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, make a reservation, or contact us for support.</p>

          <h3>1.1 Personal Information</h3>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Billing and payment information</li>
            <li>Government-issued identification (when required)</li>
            <li>Communication preferences</li>
          </ul>

          <h3>1.2 Usage Information</h3>
          <ul>
            <li>Information about how you use our website and services</li>
            <li>Device information and browser type</li>
            <li>IP address and location information</li>
            <li>Pages visited and features used</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and manage your reservations</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send booking confirmations and important updates</li>
            <li>Improve our services and develop new features</li>
            <li>Comply with legal obligations and prevent fraud</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>

          <h2>3. Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>

          <h3>3.1 Service Providers</h3>
          <p>We may share information with trusted third-party service providers who assist us in operating our business, such as payment processors, email service providers, and analytics companies.</p>

          <h3>3.2 Legal Requirements</h3>
          <p>We may disclose your information if required by law, legal process, or government request, or to protect our rights, property, or safety.</p>

          <h3>3.3 Business Transfers</h3>
          <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <div className="highlight">
            <strong>Security Measures:</strong> We use industry-standard encryption for data transmission and storage, regular security audits, and access controls to protect your information.
          </div>

          <h2>5. Your Rights and Choices</h2>
          <p>You have certain rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
            <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
          </ul>

          <h2>6. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.</p>

          <h3>6.1 Types of Cookies We Use</h3>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>

          <h2>8. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during such transfers.</p>

          <h2>9. Children's Privacy</h2>
          <p>Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.</p>

          <h2>11. Contact Us</h2>
          <div className="contact-info">
            <h4>Data Protection Officer</h4>
            <p><strong>Address:</strong> 123 Luxury Avenue, Hospitality District, City, State 12345</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Email:</strong> privacy@stayeasy.com</p>
            <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
          </div>

          <p>If you have any questions about this Privacy Policy or our data practices, please contact us using the information provided above.</p>
        </PrivacyContent>

        <ActionButtons>
          <Button variant="outline" as={Link} to="/signup">
            Back to Sign Up
          </Button>
          <Button as={Link} to="/terms">
            View Terms of Service
          </Button>
        </ActionButtons>
      </PrivacyCard>
    </PrivacyContainer>
  );
}

export default Privacy;
