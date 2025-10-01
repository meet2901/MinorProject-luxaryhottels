import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const EventsContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const EventsHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="events-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23events-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`;

const EventsTitle = styled.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const EventsDescription = styled.p`
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

const EventTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const EventTypeCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(102, 126, 234, 0.15);
  }
`;

const EventTypeImage = styled.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .capacity {
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    background: rgba(255, 255, 255, 0.9);
    padding: var(--space-xs) var(--space-sm);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    .icon {
      color: #667eea;
    }
  }
`;

const EventTypeInfo = styled.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .event-type {
    color: #667eea;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--space-md);
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
        color: #667eea;
        font-size: 1.1rem;
      }
    }
  }
`;

const VenuesSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const VenuesTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const VenuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const VenueCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(102, 126, 234, 0.15);
  }
`;

const VenueImage = styled.div`
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .size {
    position: absolute;
    bottom: var(--space-lg);
    left: var(--space-lg);
    background: rgba(102, 126, 234, 0.9);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

const VenueInfo = styled.div`
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

  .amenities {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);

    .amenity {
      background: rgba(102, 126, 234, 0.1);
      color: #667eea;
      padding: var(--space-xs) var(--space-sm);
      border-radius: 15px;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`;

const ServicesSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const ServicesTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .service-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
    display: block;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .service-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .service-price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #667eea;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: var(--space-2xl);
  color: white;
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
    opacity: 0.9;
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
const eventTypes = [
  {
    id: 1,
    name: "Wedding Celebrations",
    type: "Wedding",
    description: "Create magical memories with our comprehensive wedding packages, from intimate ceremonies to grand receptions.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    capacity: "50-300 guests",
    features: [
      { icon: "💒", text: "Ceremony Setup" },
      { icon: "🍾", text: "Champagne Toast" },
      { icon: "🎵", text: "Live Music" },
      { icon: "📸", text: "Photography" }
    ]
  },
  {
    id: 2,
    name: "Corporate Events",
    type: "Business",
    description: "Professional meeting spaces and conference facilities equipped with modern technology for successful business events.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    capacity: "20-200 guests",
    features: [
      { icon: "💼", text: "AV Equipment" },
      { icon: "🍽️", text: "Catering Service" },
      { icon: "📊", text: "Presentation Setup" },
      { icon: "🌐", text: "Video Conferencing" }
    ]
  },
  {
    id: 3,
    name: "Birthday Parties",
    type: "Celebration",
    description: "Fun and memorable birthday celebrations with themed decorations, entertainment, and delicious catering options.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    capacity: "30-150 guests",
    features: [
      { icon: "🎂", text: "Birthday Cake" },
      { icon: "🎈", text: "Decorations" },
      { icon: "🎤", text: "Entertainment" },
      { icon: "🎁", text: "Party Favors" }
    ]
  }
];

const venues = [
  {
    id: 1,
    name: "Grand Ballroom",
    description: "Elegant ballroom with crystal chandeliers and marble floors, perfect for large celebrations and formal events.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    size: "5,000 sq ft",
    amenities: ["Crystal Chandeliers", "Marble Floors", "Stage", "Dance Floor", "Bridal Suite", "AV System"]
  },
  {
    id: 2,
    name: "Garden Terrace",
    description: "Beautiful outdoor venue with garden views, ideal for romantic ceremonies and cocktail receptions.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    size: "2,500 sq ft",
    amenities: ["Garden Views", "Natural Light", "Outdoor Setting", "Fountain", "String Lights", "Weather Backup"]
  },
  {
    id: 3,
    name: "Executive Boardroom",
    description: "Professional meeting space with modern technology and comfortable seating for business presentations.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    size: "800 sq ft",
    amenities: ["Video Conferencing", "Whiteboard", "Coffee Service", "High-Speed WiFi", "Presentation Screen", "Sound System"]
  }
];

const eventServices = [
  {
    icon: "🎤",
    name: "Entertainment",
    description: "Professional DJs, live bands, and performers for your special event",
    price: "Starting at $500"
  },
  {
    icon: "📸",
    name: "Photography",
    description: "Professional photography and videography services to capture your memories",
    price: "Starting at $300"
  },
  {
    icon: "🍽️",
    name: "Catering",
    description: "Delicious catering options from our award-winning culinary team",
    price: "Starting at $50/person"
  },
  {
    icon: "🎨",
    name: "Decorations",
    description: "Beautiful floral arrangements and themed decorations",
    price: "Starting at $200"
  }
];

const eventPackages = [
  {
    icon: "💒",
    name: "Complete Wedding Package",
    description: "Everything you need for your perfect wedding day, from ceremony to reception",
    price: 2500,
    includes: ["Venue Rental", "Catering", "Photography", "DJ", "Decorations", "Wedding Cake"]
  },
  {
    icon: "💼",
    name: "Corporate Meeting Package",
    description: "Professional setup for business meetings and conferences",
    price: 800,
    includes: ["Meeting Room", "AV Equipment", "Coffee Service", "Lunch", "Notebooks", "Parking"]
  },
  {
    icon: "🎉",
    name: "Birthday Celebration Package",
    description: "Fun-filled birthday party with entertainment and decorations",
    price: 600,
    includes: ["Party Room", "Entertainment", "Birthday Cake", "Decorations", "Party Favors", "Games"]
  }
];

function Events() {
  const [selectedEventType, setSelectedEventType] = useState(null);

  return (
    <EventsContainer>
      <EventsHeader data-aos="fade-up">
        <EventsTitle>Event Planning & Hosting</EventsTitle>
        <EventsDescription>
          Create unforgettable memories with our comprehensive event planning services.
          From intimate gatherings to grand celebrations, we make every moment special.
        </EventsDescription>
      </EventsHeader>

      <EventTypesGrid>
        {eventTypes.map((eventType, index) => (
          <EventTypeCard key={eventType.id} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
            <EventTypeImage src={eventType.image}>
              <div className="capacity">
                <span className="icon">👥</span>
                {eventType.capacity}
              </div>
            </EventTypeImage>
            <EventTypeInfo>
              <h3>{eventType.name}</h3>
              <div className="event-type">{eventType.type}</div>
              <div className="description">{eventType.description}</div>
              <div className="features">
                {eventType.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature">
                    <span className="icon">{feature.icon}</span>
                    {feature.text}
                  </div>
                ))}
              </div>
              <Button
                onClick={() => setSelectedEventType(eventType)}
                style={{ width: '100%' }}
              >
                Learn More
              </Button>
            </EventTypeInfo>
          </EventTypeCard>
        ))}
      </EventTypesGrid>

      <VenuesSection>
        <VenuesTitle data-aos="fade-up">Our Venues</VenuesTitle>
        <VenuesGrid>
          {venues.map((venue, index) => (
            <VenueCard key={venue.id} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <VenueImage src={venue.image}>
                <div className="size">{venue.size}</div>
              </VenueImage>
              <VenueInfo>
                <h3>{venue.name}</h3>
                <div className="description">{venue.description}</div>
                <div className="amenities">
                  {venue.amenities.map((amenity, amenityIndex) => (
                    <span key={amenityIndex} className="amenity">{amenity}</span>
                  ))}
                </div>
                <Button variant="outline" style={{ width: '100%' }}>
                  View Details
                </Button>
              </VenueInfo>
            </VenueCard>
          ))}
        </VenuesGrid>
      </VenuesSection>

      <ServicesSection>
        <ServicesTitle data-aos="fade-up">Event Services</ServicesTitle>
        <ServicesGrid>
          {eventServices.map((service, index) => (
            <ServiceCard key={service.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <div className="service-description">{service.description}</div>
              <div className="service-price">{service.price}</div>
              <Button variant="outline">Book Service</Button>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      <PackagesSection>
        <PackagesTitle data-aos="fade-up">Event Packages</PackagesTitle>
        <PackagesGrid>
          {eventPackages.map((pkg, index) => (
            <PackageCard key={pkg.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="package-icon">{pkg.icon}</div>
              <h3>{pkg.name}</h3>
              <div className="package-description">{pkg.description}</div>
              <div className="package-price">
                <span className="currency">$</span>
                {pkg.price}
              </div>
              <Button
                style={{ background: 'white', color: '#667eea' }}
              >
                Book Package
              </Button>
            </PackageCard>
          ))}
        </PackagesGrid>
      </PackagesSection>

      <CTASection data-aos="fade-up">
        <CTATitle>Ready to Plan Your Event?</CTATitle>
        <CTADescription>
          Contact our event planning team today to start creating your perfect celebration.
          We'll handle every detail so you can focus on making memories.
        </CTADescription>
        <Button size="large">Contact Event Planner</Button>
      </CTASection>
    </EventsContainer>
  );
}

export default Events;
