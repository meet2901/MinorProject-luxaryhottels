import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const SignupContainer = styled.div`
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

const SignupCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  width: 100%;
  max-width: 500px;
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

const SignupHeader = styled.div`
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
  gap: var(--space-lg);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
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

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  margin: var(--space-md) 0;

  input[type="checkbox"] {
    margin-top: 2px;
    width: 18px;
    height: 18px;
    accent-color: #ED6D05;
  }

  label {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
    cursor: pointer;
    font-weight: normal;

    a {
      color: #ED6D05;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
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

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const { signup, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await signup(formData.name, formData.email, formData.password, formData.confirmPassword);
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      // Error is handled by AuthContext
    }
  };

  return (
    <SignupContainer>
      <SignupCard>
        <SignupHeader>
          <h1>Join Us</h1>
          <p>Create your account to start your luxury hotel experience</p>
        </SignupHeader>

        {showSuccess && (
          <SuccessMessage>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Account created successfully! Redirecting to login...
          </SuccessMessage>
        )}

        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label>
                Full Name
                <span className="required">*</span>
              </Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && (
                <ErrorMessage>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.name}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>
                Email Address
                <span className="required">*</span>
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && (
                <ErrorMessage>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </ErrorMessage>
              )}
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label>
              Password
              <span className="required">*</span>
            </Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password (min 6 characters)"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && (
              <ErrorMessage>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.password}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>
              Confirm Password
              <span className="required">*</span>
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && (
              <ErrorMessage>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.confirmPassword}
              </ErrorMessage>
            )}
          </FormGroup>

          <CheckboxGroup>
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeToTerms">
              I agree to the{' '}
              <Link to="/terms">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy">Privacy Policy</Link>
              <span className="required">*</span>
            </label>
          </CheckboxGroup>
          {errors.agreeToTerms && (
            <ErrorMessage>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.agreeToTerms}
            </ErrorMessage>
          )}

          {error && (
            <ErrorMessage style={{ justifyContent: 'center', marginBottom: 'var(--space-md)' }}>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </ErrorMessage>
          )}

          <ButtonGroup>
            <Button
              type="submit"
              size="large"
              disabled={loading}
              className={loading ? 'loading' : ''}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </ButtonGroup>
        </Form>

        <Links>
          <Link to="/login">Already have an account? Sign In</Link>
        </Links>
      </SignupCard>
    </SignupContainer>
  );
}

export default Signup;
