import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const GalleryContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="gallery-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23gallery-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`;

const GalleryTitle = styled.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const GalleryDescription = styled.p`
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  margin-bottom: var(--space-3xl);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: var(--space-sm);
    margin-bottom: var(--space-2xl);
  }
`;

const FilterButton = styled.button`
  padding: var(--space-sm) var(--space-lg);
  border: 2px solid ${props => props.active ? '#007bff' : '#e9ecef'};
  background: ${props => props.active ? '#007bff' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #007bff;
    color: #007bff;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--space-lg);
  }
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

    .gallery-overlay {
      opacity: 1;
    }
  }

  .gallery-image {
    width: 100%;
    height: 250px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${props => props.src});
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 123, 255, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    .overlay-icon {
      font-size: 3rem;
      color: white;
      margin-bottom: var(--space-sm);
    }

    .overlay-text {
      color: white;
      font-size: 1.125rem;
      font-weight: 600;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: var(--space-xl);

  .modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;

    .modal-image {
      max-width: 100%;
      max-height: 90vh;
      border-radius: 8px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    }

    .modal-close {
      position: absolute;
      top: -var(--space-lg);
      right: -var(--space-lg);
      background: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

      &:hover {
        background: #f8f9fa;
      }
    }

    .modal-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.9);
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

      &:hover {
        background: white;
      }

      &.prev {
        left: -var(--space-2xl);
      }

      &.next {
        right: -var(--space-2xl);
      }
    }
  }
`;

const VideoSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const VideoTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const VideoCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }

  .video-thumbnail {
    position: relative;
    height: 200px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${props => props.src});
    background-size: cover;
    background-position: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    .play-button {
      font-size: 4rem;
      color: white;
      opacity: 0.8;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 1;
      }
    }
  }

  .video-info {
    padding: var(--space-xl);

    h3 {
      font-size: 1.25rem;
      color: #333;
      margin-bottom: var(--space-sm);
      font-weight: 600;
    }

    .video-description {
      color: #666;
      line-height: 1.5;
      margin-bottom: var(--space-md);
    }

    .video-duration {
      color: #007bff;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`;

const VirtualTourSection = styled.div`
  background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;
  color: white;
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`;

const VirtualTourTitle = styled.h2`
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const VirtualTourDescription = styled.p`
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`;

const CTATitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const CTADescription = styled.p`
  color: #666;
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`;

// Sample data
const galleryCategories = ['All', 'Rooms', 'Dining', 'Spa', 'Events', 'Facilities', 'Views'];

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Rooms',
    title: 'Luxury Suite',
    description: 'Elegant suite with panoramic city views'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Dining',
    title: 'Fine Dining',
    description: 'Award-winning restaurant with exquisite cuisine'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Spa',
    title: 'Spa Treatment',
    description: 'Relaxing spa experience with professional therapists'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Events',
    title: 'Grand Ballroom',
    description: 'Perfect venue for weddings and corporate events'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Facilities',
    title: 'Infinity Pool',
    description: 'Stunning rooftop pool with city skyline views'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Views',
    title: 'Ocean View',
    description: 'Breathtaking sunset views from our premium rooms'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Rooms',
    title: 'Presidential Suite',
    description: 'Ultimate luxury with private terrace and jacuzzi'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Dining',
    title: 'Terrace Dining',
    description: 'Al fresco dining under the stars'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Spa',
    title: 'Wellness Center',
    description: 'State-of-the-art fitness and wellness facilities'
  }
];

const videos = [
  {
    id: 1,
    title: 'Hotel Virtual Tour',
    description: 'Take a complete virtual tour of our luxury hotel and all its amenities',
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '3:45',
    url: '#'
  },
  {
    id: 2,
    title: 'Behind the Scenes',
    description: 'Go behind the scenes to see how we create exceptional guest experiences',
    thumbnail: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '5:20',
    url: '#'
  },
  {
    id: 3,
    title: 'Chef\'s Table Experience',
    description: 'Exclusive look at our chef\'s table dining experience with wine pairing',
    thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '4:15',
    url: '#'
  }
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory);

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <GalleryContainer>
      <GalleryHeader data-aos="fade-up">
        <GalleryTitle>Photo & Video Gallery</GalleryTitle>
        <GalleryDescription>
          Explore our stunning photo and video gallery showcasing the luxury,
          elegance, and exceptional experiences that await you at our hotel.
        </GalleryDescription>
      </GalleryHeader>

      <FilterButtons>
        {galleryCategories.map((category) => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterButtons>

      <GalleryGrid>
        {filteredImages.map((image) => (
          <GalleryItem
            key={image.id}
            src={image.src}
            onClick={() => setSelectedImage(image)}
            data-aos="fade-up"
          >
            <div className="gallery-image">
              <div className="gallery-overlay">
                <div className="overlay-icon">🔍</div>
                <div className="overlay-text">View Image</div>
              </div>
            </div>
          </GalleryItem>
        ))}
      </GalleryGrid>

      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <button className="modal-nav prev" onClick={prevImage}>‹</button>
            <button className="modal-nav next" onClick={nextImage}>›</button>
            <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
          </div>
        </Modal>
      )}

      <VideoSection>
        <VideoTitle data-aos="fade-up">Featured Videos</VideoTitle>
        <VideoGrid>
          {videos.map((video, index) => (
            <VideoCard key={video.id} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div
                className="video-thumbnail"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="play-button">▶️</div>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <div className="video-description">{video.description}</div>
                <div className="video-duration">Duration: {video.duration}</div>
              </div>
            </VideoCard>
          ))}
        </VideoGrid>
      </VideoSection>

      <VirtualTourSection data-aos="fade-up">
        <VirtualTourTitle>Take a Virtual Tour</VirtualTourTitle>
        <VirtualTourDescription>
          Experience our hotel from the comfort of your home with our immersive 360° virtual tour.
          Explore every corner and discover what makes us special.
        </VirtualTourDescription>
        <Button size="large" style={{ background: 'white', color: '#007bff' }}>
          Start Virtual Tour
        </Button>
      </VirtualTourSection>

      <CTASection data-aos="fade-up">
        <CTATitle>Ready to Experience It Yourself?</CTATitle>
        <CTADescription>
          See these beautiful spaces in person and create your own unforgettable memories.
          Book your stay today and experience luxury like never before.
        </CTADescription>
        <Button size="large">Book Your Stay</Button>
      </CTASection>
    </GalleryContainer>
  );
}

export default Gallery;
