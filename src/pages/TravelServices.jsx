import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

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

// Sample data
const travelServices = [
  {
    id: 1,
    name: "Airport Transfer",
    type: "Transportation",
    description: "Comfortable and reliable airport pickup and drop-off service with professional drivers.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      { icon: "🚗", text: "Luxury vehicles" },
      { icon: "👨‍✈️", text: "Professional drivers" },
      { icon: "📱", text: "Real-time tracking" },
      { icon: "🛄", text: "Luggage assistance" }
    ],
    price: "Starting at $50"
  },
  {
    id: 2,
    name: "City Tours",
    type: "Sightseeing",
    description: "Guided tours of the city's most famous landmarks and hidden gems with expert local guides.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      { icon: "🗺️", text: "Expert guides" },
      { icon: "📸", text: "Photo stops" },
      { icon: "🍽️", text: "Local cuisine" },
      { icon: "🎟️", text: "Skip-the-line access" }
    ],
    price: "Starting at $75"
  },
  {
    id: 3,
    name: "Car Rental",
    type: "Transportation",
    description: "Premium car rental service with a wide selection of vehicles from economy to luxury.",
    image: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      { icon: "🚙", text: "Wide selection" },
      { icon: "⛽", text: "Full insurance" },
      { icon: "🗺️", text: "GPS navigation" },
      { icon: "🛡️", text: "24/7 support" }
    ],
    price: "Starting at $35/day"
  },
  {
    id: 4,
    name: "Travel Insurance",
    type: "Insurance",
    description: "Comprehensive travel insurance covering medical emergencies, trip cancellation, and lost luggage.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      { icon: "🛡️", text: "Medical coverage" },
      { icon: "✈️", text: "Trip protection" },
      { icon: "🛄", text: "Lost luggage" },
      { icon: "📞", text: "24/7 assistance" }
    ],
    price: "Starting at $25"
  }
];

const popularDestinations = [
  {
    name: "Historic Downtown",
    description: "Explore the rich history and architecture of our city's historic downtown district.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    highlights: ["Historic Buildings", "Museums", "Shopping", "Dining", "Architecture Tours"]
  },
  {
    name: "Waterfront District",
    description: "Stroll along the scenic waterfront with beautiful views and fresh seafood restaurants.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    highlights: ["Harbor Views", "Seafood", "Parks", "Boat Tours", "Sunset Watching"]
  },
  {
    name: "Cultural Quarter",
    description: "Immerse yourself in the local arts and culture scene with galleries and theaters.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    highlights: ["Art Galleries", "Theaters", "Live Music", "Festivals", "Street Art"]
  }
];

const travelPackages = [
  {
    icon: "🏙️",
    name: "City Explorer Package",
    description: "Complete city exploration package with airport transfer, guided tours, and premium experiences",
    price: 299,
    duration: "3 days",
    includes: ["Airport Transfer", "City Tour", "Museum Tickets", "Local Dining", "Hotel Booking"]
  },
  {
    icon: "🏖️",
    name: "Beach Getaway Package",
    description: "Relaxing beach vacation with transportation, accommodation, and leisure activities",
    price: 499,
    duration: "5 days",
    includes: ["Airport Transfer", "Beach Resort", "Spa Treatment", "Water Sports", "Meals Included"]
  },
  {
    icon: "🎭",
    name: "Cultural Experience Package",
    description: "Immersive cultural experience with guided tours, shows, and authentic local experiences",
    price: 399,
    duration: "4 days",
    includes: ["Cultural Tours", "Show Tickets", "Local Workshops", "Traditional Dining", "Expert Guides"]
  }
];

function TravelServices() {
  const [selectedService, setSelectedService] = useState(null);

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
        {travelServices.map((service, index) => (
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
          {popularDestinations.map((destination, index) => (
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
          {travelPackages.map((pkg, index) => (
            <PackageCard key={pkg.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="package-icon">{pkg.icon}</div>
              <h3>{pkg.name}</h3>
              <div className="package-description">{pkg.description}</div>
              <div className="package-price">
                <span className="currency">$</span>
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
