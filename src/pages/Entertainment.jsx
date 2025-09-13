import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
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

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 2rem;
`;

const ActivityCard = styled.div`
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

const sampleActivities = [
  { id: 1, name: 'Rooftop Bar', description: 'Enjoy cocktails with city views at our rooftop lounge.', icon: '🍸' },
  { id: 2, name: 'Live Music', description: 'Weekly live performances by local artists.', icon: '🎵' },
  { id: 3, name: 'Game Room', description: 'Pool tables, arcade games, and board games for all ages.', icon: '🎮' },
  { id: 4, name: 'Kids Club', description: 'Supervised activities and play areas for children.', icon: '🧸' },
];

function Entertainment() {
  return (
    <PageContainer>
      <Hero>Entertainment & Leisure</Hero>
      <Section>
        <SectionTitle>Activities & Amenities</SectionTitle>
        <ActivityGrid>
          {sampleActivities.map(activity => (
            <ActivityCard key={activity.id}>
              <div className="icon">{activity.icon}</div>
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
            </ActivityCard>
          ))}
        </ActivityGrid>
      </Section>
    </PageContainer>
  );
}

export default Entertainment;
