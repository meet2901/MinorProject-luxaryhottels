import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaUpload, FaCamera, FaArrowLeft, FaCheck, FaTimes } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  padding: 120px 20px 40px;
  max-width: 800px;
  margin: 0 auto;
  min-height: 80vh;
  animation: ${fadeIn} 0.5s ease-out;
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

const UploadContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CurrentAvatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ff9800;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const UploadButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const DropZone = styled.div`
  border: 2px dashed ${props => props.isDragActive ? '#ff9800' : '#ddd'};
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  background: ${props => props.isDragActive ? 'rgba(255, 152, 0, 0.1)' : 'transparent'};
  
  &:hover {
    border-color: #ff9800;
    background: rgba(255, 152, 0, 0.05);
  }
`;

const DropzoneText = styled.p`
  margin: 0;
  color: #555;
  font-size: 1.1rem;
`;

const DropzoneIcon = styled.div`
  font-size: 3rem;
  color: #ff9800;
  margin-bottom: 1rem;
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewContainer = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  margin-top: 2rem;
  width: 100%;
`;

const PreviewTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`;

const ImagePreview = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  border: 3px solid #ff9800;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: center;
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

const DangerButton = styled(Button)`
  background: #f44336;
  color: white;
  
  &:hover {
    background: #d32f2f;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  display: ${props => props.visible ? 'block' : 'none'};
  width: 100%;
  text-align: center;
`;

const ProfileImageUpload = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef(null);
  
  useEffect(() => {
    // Load user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
      navigate('/login');
      return;
    }
    
    setUser(userData);
  }, [navigate]);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target.result);
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        alert('Error reading file. Please try again.');
      };
      reader.readAsDataURL(file);
    } else if (file) {
      alert('Please select an image file (JPEG, PNG, etc.).');
    }
  };
  
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target.result);
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        alert('Error reading file. Please try again.');
      };
      reader.readAsDataURL(file);
    } else if (file) {
      alert('Please select an image file (JPEG, PNG, etc.).');
    }
  };
  
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  
  const handleSave = () => {
    if (previewImage && user) {
      try {
        // Update user data with new avatar
        const updatedUser = {
          ...user,
          avatar: previewImage
        };
        
        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        
        // Show success message
        setShowSuccess(true);
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
          // Navigate back to profile after successful upload
          navigate('/profile');
        }, 3000);
      } catch (error) {
        console.error('Error saving image:', error);
        alert('Error saving image. Please try again.');
      }
    } else {
      alert('Please select an image first.');
    }
  };
  
  const handleCancel = () => {
    setPreviewImage(null);
  };
  
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <PageContainer>
      <SecondaryButton onClick={handleBack} style={{ marginBottom: '1rem' }}>
        <FaArrowLeft /> Back
      </SecondaryButton>
      
      <PageTitle>Upload Profile Image</PageTitle>
      
      <SuccessMessage visible={showSuccess}>
        Profile image updated successfully!
      </SuccessMessage>
      
      <UploadContainer>
        <CurrentAvatar>
          <img 
            src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'} 
            alt="Current Profile" 
          />
          <div className="overlay">
            <UploadButton onClick={handleUploadClick}>
              <FaCamera />
            </UploadButton>
          </div>
        </CurrentAvatar>
        
        <DropZone 
          isDragActive={isDragActive}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleUploadClick}
        >
          <DropzoneIcon>
            <FaUpload />
          </DropzoneIcon>
          <DropzoneText>
            Drag & drop an image here, or click to select a file
          </DropzoneText>
        </DropZone>
        
        <HiddenInput 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept="image/*" 
        />
        
        <PreviewContainer visible={!!previewImage}>
          <PreviewTitle>Preview</PreviewTitle>
          <ImagePreview>
            {previewImage && <img src={previewImage} alt="Preview" />}
          </ImagePreview>
          
          <ButtonGroup>
            <PrimaryButton onClick={handleSave}>
              <FaCheck /> Save Image
            </PrimaryButton>
            <DangerButton onClick={handleCancel}>
              <FaTimes /> Cancel
            </DangerButton>
          </ButtonGroup>
        </PreviewContainer>
      </UploadContainer>
    </PageContainer>
  );
};

export default ProfileImageUpload;