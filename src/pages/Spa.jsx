import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
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

const TreatmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 2rem;
`;

const TreatmentCard = styled.div`
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

  .price {
    font-weight: bold;
    color: #ED6D05;
    font-size: 1.2rem;
  }
`;

const sampleTreatments = [
  { id: 1, name: 'Swedish Massage', description: 'Relaxing full-body massage using gentle, flowing strokes.', price: '$120', duration: '60 min' },
  { id: 2, name: 'Deep Tissue Massage', description: 'Therapeutic massage targeting deep muscle layers.', price: '$140', duration: '60 min' },
  { id: 3, name: 'Facial Treatment', description: 'Rejuvenating facial with cleansing, exfoliation, and moisturizing.', price: '$90', duration: '45 min' },
  { id: 4, name: 'Aromatherapy Session', description: 'Essential oils massage for stress relief and relaxation.', price: '$110', duration: '50 min' },
];

function Spa() {
  return (
    <PageContainer>
      <Hero>Wellness & Spa Services</Hero>
      <Section>
        <SectionTitle>Our Spa Treatments</SectionTitle>
        <TreatmentGrid>
          {sampleTreatments.map(treatment => (
            <TreatmentCard key={treatment.id}>
              <h3>{treatment.name}</h3>
              <p>{treatment.description}</p>
              <div className="price">{treatment.price} - {treatment.duration}</div>
            </TreatmentCard>
          ))}
        </TreatmentGrid>
      </Section>
    </PageContainer>
  );
}

export default Spa;
