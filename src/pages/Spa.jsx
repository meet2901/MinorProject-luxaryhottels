import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const SpaContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const SpaHeader = styled.div`
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(237,109,5,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(237,109,5,0.1)"/><circle cx="50" cy="10" r="1" fill="rgba(237,109,5,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(237,109,5,0.1)"/><circle cx="90" cy="40" r="1" fill="rgba(237,109,5,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`;

const SpaTitle = styled.h1`
  color: #333;
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const SpaDescription = styled.p`
  color: #666;
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
  border: 1px solid rgba(237, 109, 5, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(237, 109, 5, 0.15);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .duration {
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
      color: #ED6D05;
    }
  }

  .price {
    position: absolute;
    bottom: var(--space-lg);
    right: var(--space-lg);
    background: rgba(237, 109, 5, 0.9);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 25px;
    font-size: 1.125rem;
    font-weight: 600;
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

  .category {
    color: #ED6D05;
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

  .benefits {
    margin-bottom: var(--space-lg);

    .benefit-title {
      font-weight: 600;
      color: #333;
      margin-bottom: var(--space-sm);
      font-size: 0.95rem;
    }

    .benefits-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);

      .benefit {
        background: rgba(237, 109, 5, 0.1);
        color: #ED6D05;
        padding: var(--space-xs) var(--space-sm);
        border-radius: 15px;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }
`;

const FacilitiesSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const FacilitiesTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const FacilityCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .facility-icon {
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

  .facility-description {
    color: #666;
    line-height: 1.5;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="spa-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23spa-pattern)"/></svg>');
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

  .package-duration {
    margin-bottom: var(--space-xl);
    opacity: 0.8;
    position: relative;
    z-index: 1;
  }
`;

const BookingSection = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;
  position: relative;

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
const spaServices = [
  {
    id: 1,
    name: "Swedish Massage",
    category: "Massage Therapy",
    description: "Relaxing full-body massage using long, flowing strokes to improve circulation and reduce stress.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: "60 min",
    price: 120,
    benefits: ["Stress Relief", "Improved Circulation", "Muscle Relaxation", "Better Sleep"]
  },
  {
    id: 2,
    name: "Deep Tissue Massage",
    category: "Massage Therapy",
    description: "Intensive massage targeting deep muscle layers to relieve chronic pain and muscle tension.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: "90 min",
    price: 150,
    benefits: ["Pain Relief", "Improved Mobility", "Muscle Recovery", "Posture Correction"]
  },
  {
    id: 3,
    name: "Hot Stone Therapy",
    category: "Specialty Treatment",
    description: "Therapeutic massage using heated stones to deeply relax muscles and improve energy flow.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: "75 min",
    price: 140,
    benefits: ["Deep Relaxation", "Pain Relief", "Improved Circulation", "Stress Reduction"]
  },
  {
    id: 4,
    name: "Aromatherapy Facial",
    category: "Facial Treatment",
    description: "Rejuvenating facial treatment combining essential oils with cleansing, exfoliation, and moisturizing.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: "60 min",
    price: 110,
    benefits: ["Skin Rejuvenation", "Relaxation", "Improved Complexion", "Stress Relief"]
  }
];

const facilities = [
  {
    icon: "🏊",
    name: "Infinity Pool",
    description: "Heated infinity pool with panoramic views and hydrotherapy jets for ultimate relaxation."
  },
  {
    icon: "🧖",
    name: "Steam Room",
    description: "Traditional steam room with eucalyptus infusion for respiratory health and detoxification."
  },
  {
    icon: "❄️",
    name: "Ice Fountain",
    description: "Cold plunge pool and ice fountain for contrast therapy and improved circulation."
  },
  {
    icon: "🧘",
    name: "Meditation Garden",
    description: "Serene outdoor meditation space with zen gardens and peaceful water features."
  },
  {
    icon: "💆",
    name: "Treatment Rooms",
    description: "Private treatment rooms equipped with the latest spa technology and ambient lighting."
  },
  {
    icon: "🛀",
    name: "Hydrotherapy Bath",
    description: "Therapeutic baths with various jet configurations for targeted muscle relief."
  }
];

const spaPackages = [
  {
    icon: "🌸",
    name: "Ultimate Relaxation",
    description: "Full day of pampering including massage, facial, and access to all facilities",
    price: 299,
    duration: "4 hours",
    includes: ["60-min Massage", "Facial Treatment", "Lunch", "Pool Access"]
  },
  {
    icon: "💎",
    name: "Couples Retreat",
    description: "Romantic spa experience for couples with side-by-side treatments",
    price: 399,
    duration: "3 hours",
    includes: ["Couples Massage", "Champagne", "Chocolate", "Private Suite"]
  },
  {
    icon: "🌿",
    name: "Detox & Renew",
    description: "Cleansing treatments focused on detoxification and skin renewal",
    price: 199,
    duration: "2.5 hours",
    includes: ["Body Scrub", "Detox Wrap", "Herbal Tea", "Sauna Access"]
  }
];

function Spa() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <SpaContainer>
      <SpaHeader data-aos="fade-up">
        <SpaTitle>Luxury Spa & Wellness</SpaTitle>
        <SpaDescription>
          Rejuvenate your body and mind in our world-class spa featuring expert therapists,
          premium treatments, and serene facilities designed for ultimate relaxation.
        </SpaDescription>
      </SpaHeader>

      <ServicesGrid>
        {spaServices.map((service, index) => (
          <ServiceCard key={service.id} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
            <ServiceImage src={service.image}>
              <div className="duration">
                <span className="icon">🕐</span>
                {service.duration}
              </div>
              <div className="price">${service.price}</div>
            </ServiceImage>
            <ServiceInfo>
              <h3>{service.name}</h3>
              <div className="category">{service.category}</div>
              <div className="description">{service.description}</div>
              <div className="benefits">
                <div className="benefit-title">Benefits:</div>
                <div className="benefits-list">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <span key={benefitIndex} className="benefit">{benefit}</span>
                  ))}
                </div>
              </div>
              <Button
                onClick={() => setSelectedService(service)}
                style={{ width: '100%' }}
              >
                Book Treatment
              </Button>
            </ServiceInfo>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <FacilitiesSection>
        <FacilitiesTitle data-aos="fade-up">Our Facilities</FacilitiesTitle>
        <FacilitiesGrid>
          {facilities.map((facility, index) => (
            <FacilityCard key={facility.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="facility-icon">{facility.icon}</div>
              <h3>{facility.name}</h3>
              <div className="facility-description">{facility.description}</div>
            </FacilityCard>
          ))}
        </FacilitiesGrid>
      </FacilitiesSection>

      <PackagesSection>
        <PackagesTitle data-aos="fade-up">Spa Packages</PackagesTitle>
        <PackagesGrid>
          {spaPackages.map((pkg, index) => (
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
                style={{ background: 'white', color: '#667eea' }}
              >
                Book Package
              </Button>
            </PackageCard>
          ))}
        </PackagesGrid>
      </PackagesSection>

      <BookingSection data-aos="fade-up">
        <BookingTitle>Ready to Relax?</BookingTitle>
        <BookingDescription>
          Book your spa treatment today and experience the ultimate in relaxation and wellness.
          Our expert therapists are ready to help you unwind and rejuvenate.
        </BookingDescription>
        <Button size="large">Book Your Treatment</Button>
      </BookingSection>
    </SpaContainer>
  );
}

export default Spa;
