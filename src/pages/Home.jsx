import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 85vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: var(--space-4xl) var(--space-md);
  position: relative;

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: var(--space-3xl) var(--space-md);
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: var(--space-lg);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: var(--space-md);
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.375rem;
  margin-bottom: var(--space-2xl);
  max-width: 700px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: var(--space-xl);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--space-lg);
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
    width: 100%;
    max-width: 300px;
  }
`;

const SectionContainer = styled.section`
  padding: var(--space-4xl) var(--space-md);
  max-width: var(--container-xl);
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-md);
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--space-2xl);
  color: #333;
  position: relative;
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
    margin-bottom: var(--space-xl);
  }

  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #ED6D05;
    margin: var(--space-md) auto 0;
    border-radius: 2px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: var(--space-2xl);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(237, 109, 5, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(237, 109, 5, 0.15);
  }

  @media (max-width: 768px) {
    padding: var(--space-xl);
  }

  h3 {
    margin: var(--space-lg) 0 var(--space-md) 0;
    color: #333;
    font-size: 1.25rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }

  .icon {
    font-size: 3rem;
    color: #16a085;
    margin-bottom: var(--space-md);
    display: block;
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  padding: var(--space-2xl);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(237, 109, 5, 0.05);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(237, 109, 5, 0.12);
  }

  @media (max-width: 768px) {
    padding: var(--space-xl);
  }

  &:before {
    content: '"';
    font-size: 4rem;
    color: #ED6D05;
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    font-family: serif;
    opacity: 0.3;
  }

  p {
    color: #666;
    line-height: 1.7;
    font-style: italic;
    margin: var(--space-lg) 0 var(--space-xl) 0;
    font-size: 1.1rem;
    position: relative;
    z-index: 1;
  }

  .name {
    font-weight: 600;
    color: #333;
    font-size: 1.125rem;
    margin-bottom: var(--space-sm);
  }

  .rating {
    color: #FFD700;
    font-size: 1.25rem;
    letter-spacing: 2px;
  }
`;

function Home() {
  const navigate = useNavigate();

  const handleBookRoom = () => {
    navigate('/booking');
  };

  const handleExploreRooms = () => {
    navigate('/rooms');
  };

  return (
    <>
      <HeroSection>
        <HeroTitle data-aos="fade-up">Welcome to Luxury Hotel Experience</HeroTitle>
        <HeroSubtitle data-aos="fade-up" data-aos-delay="200">
          Book your stay and enjoy Luxury redefined at the most affordable rates.
        </HeroSubtitle>
        <ButtonGroup data-aos="fade-up" data-aos-delay="400">
          <Button size="large" onClick={handleBookRoom}>Book a Room</Button>
          <Button size="large" variant="outline" onClick={handleExploreRooms}>Explore Rooms</Button>
        </ButtonGroup>
      </HeroSection>
      
      <SectionContainer>
        <SectionTitle data-aos="fade-up">Why Choose Us</SectionTitle>
        <FeaturesGrid>
          <FeatureCard data-aos="fade-up" data-aos-delay="100">
            <div className="icon">🌟</div>
            <h3>Luxury Rooms</h3>
            <p>Experience the best in comfort with our premium rooms designed for relaxation and luxury.</p>
          </FeatureCard>
          
          <FeatureCard data-aos="fade-up" data-aos-delay="200">
            <div className="icon">🍽️</div>
            <h3>Fine Dining</h3>
            <p>Enjoy exquisite cuisine prepared by our world-class chefs using the finest ingredients.</p>
          </FeatureCard>
          
          <FeatureCard data-aos="fade-up" data-aos-delay="300">
            <div className="icon">🏊</div>
            <h3>Wellness Facilities</h3>
            <p>Rejuvenate your body and mind with our spa, pool, and fitness center amenities.</p>
          </FeatureCard>
        </FeaturesGrid>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle data-aos="fade-up">Guest Testimonials</SectionTitle>
        <FeaturesGrid>
          <TestimonialCard data-aos="fade-up" data-aos-delay="100">
            <p>"An unforgettable experience! The luxury and attention to detail were exceptional."</p>
            <div className="name">Sarah Johnson</div>
            <div className="rating">★★★★★</div>
          </TestimonialCard>

          <TestimonialCard data-aos="fade-up" data-aos-delay="200">
            <p>"The fine dining was outstanding, and the wellness facilities helped me relax completely."</p>
            <div className="name">Michael Chen</div>
            <div className="rating">★★★★★</div>
          </TestimonialCard>

          <TestimonialCard data-aos="fade-up" data-aos-delay="300">
            <p>"Perfect location and impeccable service. I will definitely return."</p>
            <div className="name">Emily Davis</div>
            <div className="rating">★★★★★</div>
          </TestimonialCard>
        </FeaturesGrid>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle data-aos="fade-up">Explore Our Amenities</SectionTitle>
        <FeaturesGrid>
          <FeatureCard data-aos="fade-up" data-aos-delay="100">
            <div className="icon">🛎️</div>
            <h3>24/7 Concierge</h3>
            <p>Our dedicated concierge team is available around the clock to assist with any needs.</p>
          </FeatureCard>

          <FeatureCard data-aos="fade-up" data-aos-delay="200">
            <div className="icon">🎉</div>
            <h3>Event Hosting</h3>
            <p>Host your special events in our elegant venues, from weddings to corporate gatherings.</p>
          </FeatureCard>

          <FeatureCard data-aos="fade-up" data-aos-delay="300">
            <div className="icon">📍</div>
            <h3>Prime Location</h3>
            <p>Located in the heart of the city, close to attractions, shopping, and transportation.</p>
          </FeatureCard>
        </FeaturesGrid>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle data-aos="fade-up">Discover Our Services</SectionTitle>
        <FeaturesGrid>
          <FeatureCard data-aos="fade-up" data-aos-delay="100" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/dining'}>
            <div className="icon">🍽️</div>
            <h3>Fine Dining</h3>
            <p>Indulge in exquisite cuisine crafted by our world-class chefs in elegant settings.</p>
          </FeatureCard>

          <FeatureCard data-aos="fade-up" data-aos-delay="200" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/spa'}>
            <div className="icon">💆</div>
            <h3>Luxury Spa</h3>
            <p>Rejuvenate your senses with our premium spa treatments and wellness therapies.</p>
          </FeatureCard>

          <FeatureCard data-aos="fade-up" data-aos-delay="300" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/events'}>
            <div className="icon">🎊</div>
            <h3>Event Planning</h3>
            <p>Let us handle every detail for your perfect wedding, conference, or special occasion.</p>
          </FeatureCard>

          <FeatureCard data-aos="fade-up" data-aos-delay="400" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/entertainment'}>
            <div className="icon">🎭</div>
            <h3>Entertainment</h3>
            <p>Enjoy a variety of entertainment options from live music to recreational activities.</p>
          </FeatureCard>

          <FeatureCard data-aos="fade-up" data-aos-delay="500" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/gallery'}>
            <div className="icon">📸</div>
            <h3>Photo Gallery</h3>
            <p>Explore our stunning hotel spaces and guest experiences through our curated gallery.</p>
          </FeatureCard>

          <FeatureCard data-aos="fade-up" data-aos-delay="600" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/travelservices'}>
            <div className="icon">🚗</div>
            <h3>Travel Services</h3>
            <p>Comprehensive travel assistance including airport transfers and local tours.</p>
          </FeatureCard>
        </FeaturesGrid>
      </SectionContainer>
    </>
  );
}

export default Home;