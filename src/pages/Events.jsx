import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
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

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 2rem;
`;

const EventCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  h3 {
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
  }

  .capacity {
    font-weight: bold;
    color: #ED6D05;
  }
`;

const sampleEvents = [
  { id: 1, name: 'Wedding Receptions', description: 'Elegant venues for your special day with customizable packages.', capacity: 'Up to 200 guests' },
  { id: 2, name: 'Corporate Meetings', description: 'Professional conference rooms with AV equipment and catering options.', capacity: '10-100 attendees' },
  { id: 3, name: 'Birthday Parties', description: 'Fun and festive spaces for celebrations of all ages.', capacity: '20-150 guests' },
  { id: 4, name: 'Anniversary Celebrations', description: 'Romantic settings for milestone anniversaries.', capacity: '2-50 guests' },
];

function Events() {
  return (
    <PageContainer>
      <Hero>Events & Celebrations</Hero>
      <Section>
        <SectionTitle>Event Spaces & Services</SectionTitle>
        <EventGrid>
          {sampleEvents.map(event => (
            <EventCard key={event.id}>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <div className="capacity">{event.capacity}</div>
            </EventCard>
          ))}
        </EventGrid>
      </Section>
    </PageContainer>
  );
}

export default Events;
