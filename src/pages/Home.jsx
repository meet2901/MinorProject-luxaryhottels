import styled from 'styled-components';
import Button from '../components/Button';

const HeroSection = styled.section`
  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionContainer = styled.section` 
  data-aos="fade-up"
  data-aos-duration="1000"
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #ED6D05;
    margin: 0.5rem auto 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin: 1rem 0;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
  }

  .icon {
    font-size: 2.5rem;
    color: #16a085;
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;

  &:before {
    content: '"';
    font-size: 3rem;
    color: #ED6D05;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    font-style: italic;
    margin: 1rem 0;
  }

  .name {
    font-weight: bold;
    color: #333;
  }

  .rating {
    color: #FFD700;
    margin-top: 0.5rem;
  }
`;

function Home() {
  return (
    <>
      <HeroSection>
        <HeroTitle data-aos="fade-up">Welcome to Luxury Hotel Experience</HeroTitle>
        <HeroSubtitle data-aos="fade-up" data-aos-delay="200">
          Book your stay and enjoy Luxury redefined at the most affordable rates.
        </HeroSubtitle>
        <ButtonGroup data-aos="fade-up" data-aos-delay="400">
          <Button size="large">Book a Room</Button>
          <Button size="large" variant="outline">Explore Rooms</Button>
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