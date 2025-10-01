import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const ForgotPasswordContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: var(--space-xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-lg) var(--space-md);
  }
`;

const ForgotPasswordCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  width: 100%;
  max-width: 450px;
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

const ForgotPasswordHeader = styled.div`
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
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  .required {
    color: #e74c3c;
    margin-left: var(--space-xs);
  }
`;

const Input = styled.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  &::placeholder {
    color: #adb5bd;
  }

  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: var(--space-md);
  border-radius: 8px;
  margin-bottom: var(--space-lg);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: var(--space-sm);

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-lg);
`;

const Links = styled.div`
  text-align: center;
  margin-top: var(--space-xl);

  a {
    color: #ED6D05;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #D66104;
      text-decoration: underline;
    }
  }
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: var(--space-lg);
  margin-top: var(--space-xl);

  h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: var(--space-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: var(--space-xs);

    strong {
      color: #333;
      font-family: monospace;
      background: #e9ecef;
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
`;

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await resetPassword(email);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <ForgotPasswordContainer>
        <ForgotPasswordCard>
          <ForgotPasswordHeader>
            <h1>Check Your Email</h1>
            <p>We've sent password reset instructions to your email address</p>
          </ForgotPasswordHeader>

          <SuccessMessage>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Password reset email sent successfully! Check your inbox and follow the instructions.
          </SuccessMessage>

          <ButtonGroup>
            <Button
              size="large"
              onClick={() => window.location.href = 'mailto:'}
            >
              Open Email Client
            </Button>
          </ButtonGroup>

          <Links>
            <Link to="/login">Back to Sign In</Link>
          </Links>
        </ForgotPasswordCard>
      </ForgotPasswordContainer>
    );
  }

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordCard>
        <ForgotPasswordHeader>
          <h1>Reset Password</h1>
          <p>Enter your email address and we'll send you instructions to reset your password</p>
        </ForgotPasswordHeader>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>
              Email Address
              <span className="required">*</span>
            </Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={error ? 'error' : ''}
            />
            {error && (
              <ErrorMessage>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </ErrorMessage>
            )}
          </FormGroup>

          <ButtonGroup>
            <Button
              type="submit"
              size="large"
              disabled={loading}
              className={loading ? 'loading' : ''}
            >
              {loading ? 'Sending...' : 'Send Reset Instructions'}
            </Button>
          </ButtonGroup>
        </Form>

        <Links>
          <Link to="/login">Remember your password? Sign In</Link>
        </Links>

        <InfoBox>
          <h4>Demo Information</h4>
          <p>Enter any valid email address to receive password reset instructions.</p>
          <p>The reset email will be simulated and logged to the console.</p>
        </InfoBox>
      </ForgotPasswordCard>
    </ForgotPasswordContainer>
  );
}

export default ForgotPassword;
