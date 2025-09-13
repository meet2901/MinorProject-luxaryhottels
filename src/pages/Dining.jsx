import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
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

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 2rem;
`;

const MenuItem = styled.div`
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

const sampleMenu = [
  { id: 1, name: 'Grilled Salmon', description: 'Fresh Atlantic salmon grilled to perfection with lemon butter sauce.', price: '$25' },
  { id: 2, name: 'Ribeye Steak', description: 'Juicy ribeye steak cooked to your liking with garlic mashed potatoes.', price: '$35' },
  { id: 3, name: 'Vegan Buddha Bowl', description: 'A healthy mix of quinoa, chickpeas, avocado, and fresh veggies.', price: '$18' },
  { id: 4, name: 'Classic Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.', price: '$12' },
];

function Dining() {
  return (
    <PageContainer>
      <Hero>Dining & Culinary Experiences</Hero>
      <Section>
        <SectionTitle>Our Menu</SectionTitle>
        <MenuGrid>
          {sampleMenu.map(item => (
            <MenuItem key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="price">{item.price}</div>
            </MenuItem>
          ))}
        </MenuGrid>
      </Section>
    </PageContainer>
  );
}

export default Dining;
