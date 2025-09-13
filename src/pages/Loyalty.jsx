import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
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

const BenefitsList = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;

  li {
    background: white;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    color: #333;
    font-weight: 500;
  }
`;

const sampleBenefits = [
  'Earn points for every stay and redeem for free nights',
  'Exclusive member-only discounts and offers',
  'Priority check-in and late check-out',
  'Birthday and anniversary perks',
  'Access to members-only events and experiences',
  'Referral rewards program',
];

function Loyalty() {
  return (
    <PageContainer>
      <Hero>Loyalty & Membership Program</Hero>
      <Section>
        <SectionTitle>Member Benefits</SectionTitle>
        <BenefitsList>
          {sampleBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </BenefitsList>
      </Section>
    </PageContainer>
  );
}

export default Loyalty;
