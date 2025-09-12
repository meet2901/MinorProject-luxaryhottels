import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const AboutSubtitle = styled.p`
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #16a085;
    margin-top: 0.5rem;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1rem;
  }
`;

const TeamSection = styled.section`
  margin-bottom: 4rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid #16a085;
  }
  
  h3 {
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-style: italic;
  }
`;

function About() {
  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>About Us</AboutTitle>
        <AboutSubtitle>
          Learn more about our hotel's history, mission, and the team behind our exceptional service.
        </AboutSubtitle>
      </AboutHeader>
      
      <AboutSection>
        <SectionTitle>Our Story</SectionTitle>
        <AboutContent>
          <div>
            <p>
              Founded in 2005, our hotel has been providing exceptional hospitality services for nearly two decades. What started as a small family-owned establishment has grown into one of the most respected names in the hospitality industry.
            </p>
            <p>
              Our commitment to excellence, attention to detail, and personalized service has earned us numerous accolades and the loyalty of guests who return year after year. We believe that a great hotel experience is about more than just a comfortable bed—it's about creating memories that last a lifetime.
            </p>
            <p>
              Today, we continue to uphold the traditions that made us successful while embracing innovation to meet the evolving needs of modern travelers. Our dedicated team works tirelessly to ensure that every guest feels welcomed, valued, and completely satisfied with their stay.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Hotel Exterior" />
        </AboutContent>
      </AboutSection>
      
      <TeamSection>
        <SectionTitle>Our Leadership Team</SectionTitle>
        <TeamGrid>
          <TeamMember>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" />
            <h3>John Doe</h3>
            <p>Chief Executive Officer</p>
          </TeamMember>
          
          <TeamMember>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Operations Director" />
            <h3>Jane Smith</h3>
            <p>Director of Operations</p>
          </TeamMember>
          
          <TeamMember>
            <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Chef" />
            <h3>Michael Johnson</h3>
            <p>Executive Chef</p>
          </TeamMember>
          
          <TeamMember>
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Customer Relations" />
            <h3>Sarah Williams</h3>
            <p>Head of Customer Relations</p>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
}

export default About;