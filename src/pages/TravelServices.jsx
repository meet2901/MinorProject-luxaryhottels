import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { getTravelData } from '../services/travelService';

const TravelServicesContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const TravelServicesHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="travel-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23travel-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`;

const TravelServicesTitle = styled.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const TravelServicesDescription = styled.p`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(168, 237, 234, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(168, 237, 234, 0.15);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .service-type {
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    background: rgba(168, 237, 234, 0.9);
    color: #333;
    padding: var(--space-sm) var(--space-md);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const ServiceInfo = styled.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);

    .feature {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: #555;
      font-size: 0.9rem;

      .icon {
        color: #a8edea;
        font-size: 1.1rem;
      }
    }
  }

  .price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #a8edea;
    margin-bottom: var(--space-lg);
  }
`;

const DestinationsSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const DestinationsTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const DestinationCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;

  .destination-image {
    height: 200px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${props => props.src});
    background-size: cover;
    background-position: center;
    position: relative;

    .destination-name {
      position: absolute;
      bottom: var(--space-lg);
      left: var(--space-lg);
      background: rgba(168, 237, 234, 0.9);
      color: #333;
      padding: var(--space-sm) var(--space-md);
      border-radius: 20px;
      font-size: 1.125rem;
      font-weight: 600;
    }
  }

  .destination-info {
    padding: var(--space-xl);

    .destination-description {
      color: #666;
      line-height: 1.5;
      margin-bottom: var(--space-lg);
    }

    .destination-highlights {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
      margin-bottom: var(--space-lg);

      .highlight {
        background: rgba(168, 237, 234, 0.1);
        color: #a8edea;
        padding: var(--space-xs) var(--space-sm);
        border-radius: 15px;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }
`;

const PackagesSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const PackagesTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const PackageCard = styled.div`
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  border-radius: 16px;
  padding: var(--space-2xl);
  color: #333;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="package-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23package-pattern)"/></svg>');
    opacity: 0.3;
  }

  .package-icon {
    font-size: 4rem;
    margin-bottom: var(--space-md);
    position: relative;
    z-index: 1;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-sm);
    position: relative;
    z-index: 1;
  }

  .package-description {
    margin-bottom: var(--space-lg);
    opacity: 0.8;
    line-height: 1.5;
    position: relative;
    z-index: 1;
  }

  .package-price {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: var(--space-lg);
    position: relative;
    z-index: 1;

    .currency {
      font-size: 1.5rem;
      margin-right: var(--space-xs);
    }
  }

  .package-duration {
    margin-bottom: var(--space-xl);
    opacity: 0.7;
    position: relative;
    z-index: 1;
  }
`;

const BookingSection = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`;

const BookingTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const BookingDescription = styled.p`
  color: #666;
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`;



function TravelServices() {
  const [travelData, setTravelData] = useState({
    travelServices: [],
    destinations: [],
    travelPackages: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchTravelData = async () => {
      try {
        setLoading(true);
        const data = await getTravelData();
        setTravelData(data);
      } catch (err) {
        setError('Failed to load travel services');
        console.error('Error fetching travel data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTravelData();
  }, []);

  if (loading) {
    return (
      <TravelServicesContainer>
        <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
          Loading travel services...
        </div>
      </TravelServicesContainer>
    );
  }

  if (error) {
    return (
      <TravelServicesContainer>
        <div style={{ textAlign: 'center', padding: 'var(--space-3xl)', color: 'red' }}>
          {error}
        </div>
      </TravelServicesContainer>
    );
  }

  return (
    <TravelServicesContainer>
      <TravelServicesHeader data-aos="fade-up">
        <TravelServicesTitle>Travel Services</TravelServicesTitle>
        <TravelServicesDescription>
          Make your journey seamless with our comprehensive travel services.
          From airport transfers to guided tours, we ensure every aspect of your trip is taken care of.
        </TravelServicesDescription>
      </TravelServicesHeader>

      <ServicesGrid>
        {travelData.travelServices.map((service, index) => (
          <ServiceCard key={service.id} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
            <ServiceImage src={service.image}>
              <div className="service-type">{service.type}</div>
            </ServiceImage>
            <ServiceInfo>
              <h3>{service.name}</h3>
              <div className="description">{service.description}</div>
              <div className="features">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature">
                    <span className="icon">{feature.icon}</span>
                    {feature.text}
                  </div>
                ))}
              </div>
              <div className="price">{service.price}</div>
              <Button
                onClick={() => setSelectedService(service)}
                style={{ width: '100%' }}
              >
                Book Service
              </Button>
            </ServiceInfo>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <DestinationsSection>
        <DestinationsTitle data-aos="fade-up">Popular Destinations</DestinationsTitle>
        <DestinationsGrid>
          {travelData.destinations.map((destination, index) => (
            <DestinationCard key={destination.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div
                className="destination-image"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="destination-name">{destination.name}</div>
              </div>
              <div className="destination-info">
                <div className="destination-description">{destination.description}</div>
                <div className="destination-highlights">
                  {destination.highlights.map((highlight, highlightIndex) => (
                    <span key={highlightIndex} className="highlight">{highlight}</span>
                  ))}
                </div>
                <Button variant="outline" style={{ width: '100%' }}>
                  Explore Destination
                </Button>
              </div>
            </DestinationCard>
          ))}
        </DestinationsGrid>
      </DestinationsSection>

      <PackagesSection>
        <PackagesTitle data-aos="fade-up">Travel Packages</PackagesTitle>
        <PackagesGrid>
          {travelData.travelPackages.map((pkg, index) => (
            <PackageCard key={pkg.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="package-icon">{pkg.icon}</div>
              <h3>{pkg.name}</h3>
              <div className="package-description">{pkg.description}</div>
              <div className="package-price">
                <span className="currency">₹</span>
                {pkg.price}
              </div>
              <div className="package-duration">Duration: {pkg.duration}</div>
              <Button
                style={{ background: 'white', color: '#a8edea' }}
              >
                Book Package
              </Button>
            </PackageCard>
          ))}
        </PackagesGrid>
      </PackagesSection>

      <BookingSection data-aos="fade-up">
        <BookingTitle>Ready to Plan Your Journey?</BookingTitle>
        <BookingDescription>
          Contact our travel specialists today to customize your perfect travel experience.
          We'll handle all the details so you can focus on creating memories.
        </BookingDescription>
        <Button size="large">Contact Travel Services</Button>
      </BookingSection>
    </TravelServicesContainer>
  );
}

export default TravelServices;
