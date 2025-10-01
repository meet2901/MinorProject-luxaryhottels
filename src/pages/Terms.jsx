import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const TermsContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const TermsCard = styled.div`
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

const TermsHeader = styled.div`
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

const TermsContent = styled.div`
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
    background: #fff3cd;
    padding: var(--space-sm) var(--space-md);
    border-radius: 8px;
    border-left: 4px solid #ffc107;
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

function Terms() {
  return (
    <TermsContainer>
      <TermsCard>
        <TermsHeader>
          <h1>Terms of Service</h1>
          <p>These terms and conditions outline the rules and regulations for the use of StayEasy Hotel's website and services.</p>
          <div className="last-updated">Last updated: January 15, 2024</div>
        </TermsHeader>

        <TermsContent>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using StayEasy Hotel's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily access the materials (information or software) on StayEasy Hotel's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
            <li>attempt to decompile or reverse engineer any software contained on StayEasy Hotel's website</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2>3. Booking and Reservation Terms</h2>
          <h3>3.1 Reservation Confirmation</h3>
          <p>All reservations are subject to availability and confirmation. We reserve the right to refuse service to anyone for any lawful reason.</p>

          <h3>3.2 Cancellation Policy</h3>
          <p>Cancellation policies vary by room type and rate plan. Please review the specific cancellation terms for your reservation at the time of booking.</p>

          <h3>3.3 Check-in and Check-out</h3>
          <p>Standard check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges.</p>

          <h2>4. User Account and Responsibilities</h2>
          <p>As a user of our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information when creating an account</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Be responsible for all activities that occur under your account</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Use the service in compliance with all applicable laws and regulations</li>
          </ul>

          <h2>5. Payment Terms</h2>
          <p>All payments are processed securely through our payment partners. By making a reservation, you authorize us to charge your payment method for the total amount due, including any applicable taxes and fees.</p>

          <div className="highlight">
            <strong>Important:</strong> All rates are quoted in the currency selected during booking and include applicable taxes unless otherwise specified.
          </div>

          <h2>6. Privacy and Data Protection</h2>
          <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.</p>

          <h2>7. Limitation of Liability</h2>
          <p>In no event shall StayEasy Hotel or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StayEasy Hotel's website.</p>

          <h2>8. Contact Information</h2>
          <div className="contact-info">
            <h4>StayEasy Hotel Management</h4>
            <p><strong>Address:</strong> 123 Luxury Avenue, Hospitality District, City, State 12345</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Email:</strong> legal@stayeasy.com</p>
            <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
          </div>

          <h2>9. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of [Jurisdiction], and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>

          <h2>10. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
        </TermsContent>

        <ActionButtons>
          <Button variant="outline" as={Link} to="/signup">
            Back to Sign Up
          </Button>
          <Button as={Link} to="/privacy">
            View Privacy Policy
          </Button>
        </ActionButtons>
      </TermsCard>
    </TermsContainer>
  );
}

export default Terms;
