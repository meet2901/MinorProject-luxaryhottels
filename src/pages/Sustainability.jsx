import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
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

const InitiativeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 2rem;
`;

const InitiativeCard = styled.div`
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

const sampleInitiatives = [
  { id: 1, name: 'Energy Conservation', description: 'LED lighting and smart energy management systems.', icon: '💡' },
  { id: 2, name: 'Water Conservation', description: 'Low-flow fixtures and rainwater harvesting.', icon: '💧' },
  { id: 3, name: 'Waste Reduction', description: 'Recycling programs and compost initiatives.', icon: '♻️' },
  { id: 4, name: 'Local Sourcing', description: 'Supporting local farmers and suppliers.', icon: '🌱' },
];

function Sustainability() {
  return (
    <PageContainer>
      <Hero>Community & Sustainability</Hero>
      <Section>
        <SectionTitle>Our Green Initiatives</SectionTitle>
        <InitiativeGrid>
          {sampleInitiatives.map(initiative => (
            <InitiativeCard key={initiative.id}>
              <div className="icon">{initiative.icon}</div>
              <h3>{initiative.name}</h3>
              <p>{initiative.description}</p>
            </InitiativeCard>
          ))}
        </InitiativeGrid>
      </Section>
    </PageContainer>
  );
}

export default Sustainability;
