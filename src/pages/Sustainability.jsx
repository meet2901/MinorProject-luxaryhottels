import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const SustainabilityContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const SustainabilityHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="sustainability-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23sustainability-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`;

const SustainabilityTitle = styled.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const SustainabilityDescription = styled.p`
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

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;

  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #28a745;
    margin-bottom: var(--space-sm);
  }

  .stat-label {
    color: #666;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
  }
`;

const InitiativesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const InitiativeCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(40, 167, 69, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(40, 167, 69, 0.15);
  }
`;

const InitiativeImage = styled.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .initiative-category {
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    background: rgba(40, 167, 69, 0.9);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const InitiativeInfo = styled.div`
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

  .impact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);

    .impact-item {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: #555;
      font-size: 0.9rem;

      .icon {
        color: #28a745;
        font-size: 1.1rem;
      }
    }
  }

  .progress {
    margin-bottom: var(--space-lg);

    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--space-xs);
      font-size: 0.875rem;
      color: #666;
    }

    .progress-bar {
      height: 8px;
      background: #e9ecef;
      border-radius: 4px;
      overflow: hidden;

      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #28a745, #20c997);
        border-radius: 4px;
        transition: width 0.3s ease;
        width: ${props => props.progress}%;
      }
    }
  }
`;

const CertificationsSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const CertificationsTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const CertificationCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .certification-icon {
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

  .certification-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .certification-year {
    color: #28a745;
    font-weight: 600;
  }
`;

const GuestActionsSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const GuestActionsTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const GuestActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const GuestActionCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .action-icon {
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

  .action-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .action-impact {
    background: rgba(40, 167, 69, 0.1);
    color: #28a745;
    padding: var(--space-xs) var(--space-sm);
    border-radius: 15px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: var(--space-lg);
  }
`;

const GoalsSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const GoalsTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const GoalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const GoalCard = styled.div`
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border-radius: 16px;
  padding: var(--space-2xl);
  color: #333;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="goal-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23goal-pattern)"/></svg>');
    opacity: 0.3;
  }

  .goal-icon {
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

  .goal-description {
    margin-bottom: var(--space-lg);
    opacity: 0.9;
    line-height: 1.5;
    position: relative;
    z-index: 1;
  }

  .goal-target {
    font-size: 1.25rem;
    font-weight: bold;
    position: relative;
    z-index: 1;
  }

  .goal-progress {
    margin-top: var(--space-lg);
    position: relative;
    z-index: 1;

    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--space-xs);
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .progress-bar {
      height: 8px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      overflow: hidden;

      .progress-fill {
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 4px;
        transition: width 0.3s ease;
        width: ${props => props.progress}%;
      }
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
const sustainabilityStats = [
  { number: '45%', label: 'Energy Saved' },
  { number: '60%', label: 'Water Conserved' },
  { number: '75%', label: 'Waste Recycled' },
  { number: '100%', label: 'Green Certified' }
];

const sustainabilityInitiatives = [
  {
    id: 1,
    name: 'Solar Power Installation',
    category: 'Energy',
    description: 'Large-scale solar panel installation to generate clean, renewable energy for the entire hotel.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    impact: [
      { icon: '⚡', text: '500 kW capacity' },
      { icon: '🌱', text: 'Reduces CO2 by 300 tons/year' }
    ],
    progress: 85
  },
  {
    id: 2,
    name: 'Water Conservation Program',
    category: 'Water',
    description: 'Comprehensive water-saving measures including low-flow fixtures and greywater recycling systems.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    impact: [
      { icon: '💧', text: '60% water reduction' },
      { icon: '🔄', text: 'Greywater recycling system' }
    ],
    progress: 92
  },
  {
    id: 3,
    name: 'Organic Garden Initiative',
    category: 'Food',
    description: 'On-site organic garden providing fresh, locally-sourced produce for our restaurants.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    impact: [
      { icon: '🥕', text: '5,000 sq ft garden' },
      { icon: '🏪', text: 'Supplies 40% of restaurant produce' }
    ],
    progress: 78
  },
  {
    id: 4,
    name: 'Electric Vehicle Charging',
    category: 'Transportation',
    description: 'Free electric vehicle charging stations for guests and staff to promote sustainable transportation.',
    image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    impact: [
      { icon: '🔌', text: '20 charging stations' },
      { icon: '🌱', text: 'Reduces transport emissions' }
    ],
    progress: 95
  }
];

const certifications = [
  {
    icon: '🏆',
    name: 'LEED Platinum',
    description: 'Leadership in Energy and Environmental Design - the highest level of green building certification',
    year: '2022'
  },
  {
    icon: '🌍',
    name: 'Green Key Global',
    description: 'International eco-label for tourism facilities committed to sustainable practices',
    year: '2021'
  },
  {
    icon: '♻️',
    name: 'Zero Waste Certified',
    description: 'Recognition for achieving zero waste goals through comprehensive recycling programs',
    year: '2023'
  },
  {
    icon: '💧',
    name: 'WaterSense Partner',
    description: 'EPA certification for water-efficient practices and technologies',
    year: '2020'
  }
];

const guestActions = [
  {
    icon: '🛏️',
    name: 'Opt-out of Daily Cleaning',
    description: 'Choose to skip daily room cleaning to save water and energy',
    impact: 'Saves 50L water per day'
  },
  {
    icon: '♻️',
    name: 'Recycling Program',
    description: 'Participate in our comprehensive recycling program for all waste',
    impact: 'Diverts 90% from landfill'
  },
  {
    icon: '🚰',
    name: 'Reusable Water Bottles',
    description: 'Use our filtered water stations instead of single-use plastic bottles',
    impact: 'Eliminates plastic waste'
  },
  {
    icon: '🌱',
    name: 'Plant a Tree',
    description: 'Contribute to our reforestation program during your stay',
    impact: 'Carbon offset program'
  }
];

const sustainabilityGoals = [
  {
    icon: '🌱',
    name: 'Carbon Neutral by 2025',
    description: 'Achieve net-zero carbon emissions through renewable energy and efficiency measures',
    target: '100% renewable energy',
    progress: 75
  },
  {
    icon: '💧',
    name: 'Zero Water Waste by 2024',
    description: 'Implement complete water recycling and conservation systems',
    target: '100% water recycled',
    progress: 85
  },
  {
    icon: '♻️',
    name: '100% Sustainable Sourcing by 2026',
    description: 'Source all materials and products from sustainable, ethical suppliers',
    target: '100% certified suppliers',
    progress: 60
  }
];

function Sustainability() {
  const [selectedInitiative, setSelectedInitiative] = useState(null);

  return (
    <SustainabilityContainer>
      <SustainabilityHeader data-aos="fade-up">
        <SustainabilityTitle>Our Commitment to Sustainability</SustainabilityTitle>
        <SustainabilityDescription>
          We're dedicated to protecting our planet while providing exceptional hospitality.
          Discover our comprehensive sustainability initiatives and how we're making a positive impact.
        </SustainabilityDescription>
      </SustainabilityHeader>

      <StatsSection>
        {sustainabilityStats.map((stat, index) => (
          <StatCard key={stat.label} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </StatCard>
        ))}
      </StatsSection>

      <InitiativesGrid>
        {sustainabilityInitiatives.map((initiative, index) => (
          <InitiativeCard key={initiative.id} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
            <InitiativeImage src={initiative.image}>
              <div className="initiative-category">{initiative.category}</div>
            </InitiativeImage>
            <InitiativeInfo>
              <h3>{initiative.name}</h3>
              <div className="description">{initiative.description}</div>
              <div className="impact">
                {initiative.impact.map((item, itemIndex) => (
                  <div key={itemIndex} className="impact-item">
                    <span className="icon">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
              <div className="progress">
                <div className="progress-label">
                  <span>Implementation Progress</span>
                  <span>{initiative.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" progress={initiative.progress}></div>
                </div>
              </div>
              <Button
                onClick={() => setSelectedInitiative(initiative)}
                style={{ width: '100%' }}
              >
                Learn More
              </Button>
            </InitiativeInfo>
          </InitiativeCard>
        ))}
      </InitiativesGrid>

      <CertificationsSection>
        <CertificationsTitle data-aos="fade-up">Certifications & Recognition</CertificationsTitle>
        <CertificationsGrid>
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="certification-icon">{cert.icon}</div>
              <h3>{cert.name}</h3>
              <div className="certification-description">{cert.description}</div>
              <div className="certification-year">Awarded {cert.year}</div>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </CertificationsSection>

      <GuestActionsSection>
        <GuestActionsTitle data-aos="fade-up">How You Can Help</GuestActionsTitle>
        <GuestActionsGrid>
          {guestActions.map((action, index) => (
            <GuestActionCard key={action.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="action-icon">{action.icon}</div>
              <h3>{action.name}</h3>
              <div className="action-description">{action.description}</div>
              <div className="action-impact">{action.impact}</div>
              <Button variant="outline">Participate</Button>
            </GuestActionCard>
          ))}
        </GuestActionsGrid>
      </GuestActionsSection>

      <GoalsSection>
        <GoalsTitle data-aos="fade-up">Our Sustainability Goals</GoalsTitle>
        <GoalsGrid>
          {sustainabilityGoals.map((goal, index) => (
            <GoalCard key={goal.name} progress={goal.progress} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="goal-icon">{goal.icon}</div>
              <h3>{goal.name}</h3>
              <div className="goal-description">{goal.description}</div>
              <div className="goal-target">{goal.target}</div>
              <div className="goal-progress">
                <div className="progress-label">
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </GoalCard>
          ))}
        </GoalsGrid>
      </GoalsSection>

      <CTASection data-aos="fade-up">
        <CTATitle>Join Our Sustainability Journey</CTATitle>
        <CTADescription>
          Together, we can make a difference. Learn more about our sustainability initiatives
          and discover how you can contribute to a greener future.
        </CTADescription>
        <Button size="large">Download Sustainability Report</Button>
      </CTASection>
    </SustainabilityContainer>
  );
}

export default Sustainability;
