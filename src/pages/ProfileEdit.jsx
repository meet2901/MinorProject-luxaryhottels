import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaSave, FaArrowLeft } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 120px 20px 40px;
  max-width: 800px;
  margin: 0 auto;
  min-height: 80vh;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #ff9800, #ff5722);
    border-radius: 2px;
  }
`;

const ProfileForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #ff9800;
    box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.2);
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #ff9800;
    box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.2);
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(45deg, #ff9800, #ff5722);
  color: white;
  
  &:hover {
    background: linear-gradient(45deg, #ff5722, #ff9800);
  }
`;

const SecondaryButton = styled(Button)`
  background: #f5f5f5;
  color: #333;
  
  &:hover {
    background: #e5e5e5;
  }
`;

const ProfilePreview = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ff9800;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  h2 {
    margin: 0 0 0.5rem;
    color: #333;
  }
  
  p {
    margin: 0;
    color: #777;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: 'en',
    currency: 'ind',
    theme: 'light',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  
  useEffect(() => {
    // Load user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
      navigate('/login');
      return;
    }
    
    setFormData({
      name: userData.name || '',
      email: userData.email || '',
      phone: userData.phone || '',
      language: userData.preferences?.language || 'en',
      currency: userData.preferences?.currency || 'ind',
      theme: userData.preferences?.theme || 'light',
    });
  }, [navigate]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get current user data
    const userData = JSON.parse(localStorage.getItem('user'));
    
    // Update user data
    const updatedUser = {
      ...userData,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferences: {
        language: formData.language,
        currency: formData.currency,
        theme: formData.theme
      }
    };
    
    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    // Show success message
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };
  
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <PageContainer>
      <SecondaryButton onClick={handleBack} style={{ marginBottom: '1rem' }}>
        <FaArrowLeft /> Back
      </SecondaryButton>
      
      <PageTitle>Edit Profile</PageTitle>
      
      <SuccessMessage visible={showSuccess}>
        Profile updated successfully!
      </SuccessMessage>
      
      <ProfileForm onSubmit={handleSubmit}>
        <ProfilePreview>
          <Avatar>
            <img 
              src={JSON.parse(localStorage.getItem('user'))?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'} 
              alt="Profile" 
            />
          </Avatar>
          <ProfileInfo>
            <h2>{formData.name}</h2>
            <p>{formData.email}</p>
            <SecondaryButton 
              type="button" 
              onClick={() => navigate('/profile/upload-image')}
              style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}
            >
              Change Photo
            </SecondaryButton>
          </ProfileInfo>
        </ProfilePreview>
        
        <FormGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="language">Preferred Language</Label>
          <Select 
            id="language" 
            name="language" 
            value={formData.language} 
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </Select>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="currency">Preferred Currency</Label>
          <Select 
            id="currency" 
            name="currency" 
            value={formData.currency} 
            onChange={handleChange}
          >
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
            <option value="INR">Indian Rupee (INR)</option>
          </Select>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="theme">Theme Preference</Label>
          <Select 
            id="theme" 
            name="theme" 
            value={formData.theme} 
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </Select>
        </FormGroup>
        
        <ButtonGroup>
          <PrimaryButton type="submit">
            <FaSave /> Save Changes
          </PrimaryButton>
          <SecondaryButton type="button" onClick={handleBack}>
            Cancel
          </SecondaryButton>
        </ButtonGroup>
      </ProfileForm>
    </PageContainer>
  );
};

export default ProfileEdit;