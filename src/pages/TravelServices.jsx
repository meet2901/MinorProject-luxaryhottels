import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
`;

const Section = styled.section`
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  color: #ED6D05;
  margin-bottom: 1rem;
  text-align: center;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;

  h3 {
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
  }

  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const sampleServices = [
  { id: 1, name: 'Airport Shuttle', description: 'Convenient transportation to and from the airport.', icon: '🚌' },
  { id: 2, name: 'Car Rental', description: 'Partnered with top rental companies for your convenience.', icon: '🚗' },
  { id: 3, name: 'City Tours', description: 'Guided tours of local attractions and landmarks.', icon: '🏛️' },
  { id: 4, name: 'Concierge Services', description: 'Personal assistance for reservations and recommendations.', icon: '🛎️' },
];

function TravelServices() {
  return (
    <PageContainer>
      <Hero>Travel & Concierge Services</Hero>
      <Section>
        <SectionTitle>Travel Assistance</SectionTitle>
        <ServiceGrid>
          {sampleServices.map(service => (
            <ServiceCard key={service.id}>
              <div className="icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Section>
    </PageContainer>
  );
}

export default TravelServices;
