import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import ProtectedRoute from '../components/ProtectedRoute';

const ProfileContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  max-width: 800px;
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

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: var(--space-lg);
  }
`;

const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ED6D05, #FF9A3C);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  color: white;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(237, 109, 5, 0.3);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }
`;

const AvatarUpload = styled.label`
  padding: var(--space-sm) var(--space-md);
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  color: #666;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ED6D05;
    background: rgba(237, 109, 5, 0.05);
  }

  input {
    display: none;
  }
`;

const UserInfo = styled.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .role {
    display: inline-block;
    padding: var(--space-xs) var(--space-md);
    background: ${props => props.role === 'admin' ? '#e74c3c' : '#28a745'};
    color: white;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: var(--space-md);
  }

  .joined {
    color: #666;
    font-size: 1rem;
  }
`;

const ProfileForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);

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

  &:disabled {
    background: #f8f9fa;
    color: #666;
    cursor: not-allowed;
  }
`;

const Select = styled.select`
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
`;

const PreferencesSection = styled.div`
  background: #f8f9fa;
  border-radius: 16px;
  padding: var(--space-2xl);
  margin-bottom: var(--space-2xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
  }
`;

const PreferencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: var(--space-md);
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
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

function Profile() {
  const { user, updateProfile, loading, error } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    language: user?.preferences?.language || 'en',
    currency: user?.preferences?.currency || 'USD',
    theme: user?.preferences?.theme || 'light'
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile({
        name: formData.name,
        preferences: {
          language: formData.language,
          currency: formData.currency,
          theme: formData.theme
        }
      });
      setSuccess(true);
      setIsEditing(false);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      // Error is handled by AuthContext
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      language: user?.preferences?.language || 'en',
      currency: user?.preferences?.currency || 'USD',
      theme: user?.preferences?.theme || 'light'
    });
    setIsEditing(false);
  };

  if (!user) {
    return <ProtectedRoute />;
  }

  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileHeader>
          <AvatarSection>
            <Avatar>
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                user.name.charAt(0).toUpperCase()
              )}
            </Avatar>
            <AvatarUpload>
              Change Avatar
              <input type="file" accept="image/*" />
            </AvatarUpload>
          </AvatarSection>

          <UserInfo role={user.role}>
            <h1>{user.name}</h1>
            <div className="role">{user.role}</div>
            <div className="joined">Member since {user.joinedDate}</div>
          </UserInfo>
        </ProfileHeader>

        {success && (
          <SuccessMessage>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Profile updated successfully!
          </SuccessMessage>
        )}

        <form onSubmit={handleSubmit}>
          <ProfileForm>
            <FormGroup>
              <Label>Full Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </FormGroup>

            <FormGroup>
              <Label>Email Address</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                disabled
              />
              <small style={{ color: '#666', fontSize: '0.875rem' }}>
                Email cannot be changed
              </small>
            </FormGroup>

            <FormGroup>
              <Label>Language</Label>
              <Select
                name="language"
                value={formData.language}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Currency</Label>
              <Select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="JPY">JPY (¥)</option>
                <option value="CAD">CAD (C$)</option>
              </Select>
            </FormGroup>
          </ProfileForm>

          <PreferencesSection>
            <h3>Account Statistics</h3>
            <PreferencesGrid>
              <div>
                <strong>Total Bookings</strong>
                <div style={{ color: '#666', marginTop: '4px' }}>12</div>
              </div>
              <div>
                <strong>Loyalty Points</strong>
                <div style={{ color: '#666', marginTop: '4px' }}>2,450</div>
              </div>
              <div>
                <strong>Member Since</strong>
                <div style={{ color: '#666', marginTop: '4px' }}>{user.joinedDate}</div>
              </div>
              <div>
                <strong>Account Status</strong>
                <div style={{ color: '#28a745', marginTop: '4px' }}>Active</div>
              </div>
            </PreferencesGrid>
          </PreferencesSection>

          {error && (
            <ErrorMessage style={{ justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </ErrorMessage>
          )}

          <ActionButtons>
            {isEditing ? (
              <>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className={loading ? 'loading' : ''}
                >
                  {loading ? 'Updating...' : 'Update Profile'}
                </Button>
              </>
            ) : (
              <Button
                type="button"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            )}
          </ActionButtons>
        </form>
      </ProfileCard>
    </ProfileContainer>
  );
}

export default Profile;
