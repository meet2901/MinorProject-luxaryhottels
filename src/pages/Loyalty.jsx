import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const LoyaltyContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const LoyaltyHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="loyalty-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23loyalty-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`;

const LoyaltyTitle = styled.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const LoyaltyDescription = styled.p`
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

const MembershipTiers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const TierCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 3px solid ${props => {
    switch(props.tier) {
      case 'gold': return '#FFD700';
      case 'platinum': return '#E5E4E2';
      case 'diamond': return '#B9F2FF';
      default: return '#E9ECEF';
    }
  }};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => {
      switch(props.tier) {
        case 'gold': return 'linear-gradient(135deg, #FFF8DC 0%, #F0E68C 100%)';
        case 'platinum': return 'linear-gradient(135deg, #F5F7FA 0%, #C0C0C0 100%)';
        case 'diamond': return 'linear-gradient(135deg, #E0FFFF 0%, #87CEEB 100%)';
        default: return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
      }
    }};
    opacity: 0.1;
    z-index: 0;
  }

  .tier-icon {
    font-size: 4rem;
    margin-bottom: var(--space-md);
    position: relative;
    z-index: 1;
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: var(--space-sm);
    position: relative;
    z-index: 1;
    color: ${props => {
      switch(props.tier) {
        case 'gold': return '#DAA520';
        case 'platinum': return '#708090';
        case 'diamond': return '#1E90FF';
        default: return '#333';
      }
    }};
  }

  .tier-points {
    font-size: 1.125rem;
    margin-bottom: var(--space-lg);
    position: relative;
    z-index: 1;
    color: #666;
  }

  .tier-benefits {
    text-align: left;
    margin-bottom: var(--space-xl);
    position: relative;
    z-index: 1;

    .benefit {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      margin-bottom: var(--space-sm);
      color: #555;

      .icon {
        color: ${props => {
          switch(props.tier) {
            case 'gold': return '#FFD700';
            case 'platinum': return '#E5E4E2';
            case 'diamond': return '#B9F2FF';
            default: return '#28a745';
          }
        }};
        font-size: 1.1rem;
      }
    }
  }
`;

const BenefitsSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const BenefitsTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const BenefitCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .benefit-icon {
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

  .benefit-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .benefit-value {
    font-size: 1.125rem;
    font-weight: bold;
    color: #ffecd2;
  }
`;

const PointsCalculator = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin-bottom: var(--space-3xl);
  border: 1px solid rgba(255, 236, 210, 0.2);
`;

const CalculatorTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const CalculatorForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    label {
      font-weight: 600;
      color: #333;
    }

    input, select {
      padding: var(--space-md);
      border: 2px solid #e9ecef;
      border-radius: 8px;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: #ffecd2;
        box-shadow: 0 0 0 3px rgba(255, 236, 210, 0.1);
      }
    }
  }
`;

const CalculatorResult = styled.div`
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 12px;
  padding: var(--space-xl);
  text-align: center;
  color: #333;

  .result-title {
    font-size: 1.25rem;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .result-points {
    font-size: 2rem;
    font-weight: bold;
    color: #DAA520;
    margin-bottom: var(--space-sm);
  }

  .result-description {
    color: #666;
    line-height: 1.5;
  }
`;

const RedeemSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const RedeemTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const RedeemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const RedeemCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .redeem-icon {
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

  .redeem-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .redeem-points {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffecd2;
    margin-bottom: var(--space-lg);
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
const membershipTiers = [
  {
    tier: 'silver',
    name: 'Silver Member',
    icon: '🥈',
    points: '0 - 999 points',
    benefits: [
      { icon: '🏨', text: '10% off room rates' },
      { icon: '🍽️', text: '5% off dining' },
      { icon: '🧖', text: 'Priority spa booking' },
      { icon: '🎁', text: 'Birthday surprise' }
    ]
  },
  {
    tier: 'gold',
    name: 'Gold Member',
    icon: '🥇',
    points: '1,000 - 4,999 points',
    benefits: [
      { icon: '🏨', text: '20% off room rates' },
      { icon: '🍽️', text: '15% off dining' },
      { icon: '🧖', text: 'Free spa treatment monthly' },
      { icon: '✈️', text: 'Airport transfer discount' },
      { icon: '🎁', text: 'Welcome amenity' },
      { icon: '📞', text: 'Dedicated concierge' }
    ]
  },
  {
    tier: 'platinum',
    name: 'Platinum Member',
    icon: '💎',
    points: '5,000 - 9,999 points',
    benefits: [
      { icon: '🏨', text: '30% off room rates' },
      { icon: '🍽️', text: '25% off dining' },
      { icon: '🧖', text: 'Two free spa treatments monthly' },
      { icon: '✈️', text: 'Free airport transfer' },
      { icon: '🍾', text: 'Complimentary champagne' },
      { icon: '🅿️', text: 'Free valet parking' },
      { icon: '🎁', text: 'Exclusive member events' },
      { icon: '📞', text: '24/7 personal assistant' }
    ]
  },
  {
    tier: 'diamond',
    name: 'Diamond Elite',
    icon: '👑',
    points: '10,000+ points',
    benefits: [
      { icon: '🏨', text: '40% off room rates' },
      { icon: '🍽️', text: '35% off dining' },
      { icon: '🧖', text: 'Unlimited free spa treatments' },
      { icon: '✈️', text: 'Private car service' },
      { icon: '🍾', text: 'Premium welcome package' },
      { icon: '🅿️', text: 'Complimentary everything' },
      { icon: '🎁', text: 'VIP exclusive events' },
      { icon: '📞', text: 'Personal lifestyle manager' },
      { icon: '🏆', text: 'Suite upgrades guaranteed' }
    ]
  }
];

const benefits = [
  {
    icon: '💰',
    name: 'Earn Points',
    description: 'Earn points on every stay, dining experience, and service used at our hotel',
    value: 'Up to 10x points'
  },
  {
    icon: '🎁',
    name: 'Exclusive Rewards',
    description: 'Redeem points for free nights, dining credits, spa treatments, and more',
    value: '1000+ rewards'
  },
  {
    icon: '⚡',
    name: 'Instant Benefits',
    description: 'Enjoy immediate perks like room upgrades, late checkout, and priority service',
    value: 'Instant access'
  },
  {
    icon: '👥',
    name: 'Family Sharing',
    description: 'Share your membership benefits with family members and earn bonus points',
    value: 'Up to 4 members'
  }
];

const redeemOptions = [
  {
    icon: '🏨',
    name: 'Free Nights',
    description: 'Redeem points for complimentary hotel stays at any of our properties',
    points: '10,000 points'
  },
  {
    icon: '🍽️',
    name: 'Dining Credits',
    description: 'Use points for dining experiences at our restaurants and bars',
    points: '2,500 points'
  },
  {
    icon: '🧖',
    name: 'Spa Treatments',
    description: 'Exchange points for relaxing spa treatments and wellness services',
    points: '5,000 points'
  },
  {
    icon: '✈️',
    name: 'Travel Services',
    description: 'Book airport transfers, tours, and other travel services with points',
    points: '3,000 points'
  }
];

function Loyalty() {
  const [calculatorData, setCalculatorData] = useState({
    nights: '',
    dining: '',
    spa: '',
    other: ''
  });

  const [calculatedPoints, setCalculatedPoints] = useState(0);

  const handleCalculatorChange = (e) => {
    const { name, value } = e.target;
    setCalculatorData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculatePoints = () => {
    const nights = parseInt(calculatorData.nights) || 0;
    const dining = parseInt(calculatorData.dining) || 0;
    const spa = parseInt(calculatorData.spa) || 0;
    const other = parseInt(calculatorData.other) || 0;

    const points = (nights * 500) + (dining * 100) + (spa * 200) + (other * 50);
    setCalculatedPoints(points);
  };

  return (
    <LoyaltyContainer>
      <LoyaltyHeader data-aos="fade-up">
        <LoyaltyTitle>Loyalty Program</LoyaltyTitle>
        <LoyaltyDescription>
          Join our exclusive loyalty program and unlock a world of premium benefits,
          exclusive rewards, and personalized experiences designed just for you.
        </LoyaltyDescription>
      </LoyaltyHeader>

      <MembershipTiers>
        {membershipTiers.map((tier, index) => (
          <TierCard key={tier.tier} tier={tier.tier} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
            <div className="tier-icon">{tier.icon}</div>
            <h3>{tier.name}</h3>
            <div className="tier-points">{tier.points}</div>
            <div className="tier-benefits">
              {tier.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className="benefit">
                  <span className="icon">{benefit.icon}</span>
                  {benefit.text}
                </div>
              ))}
            </div>
            <Button style={{ width: '100%' }}>
              {tier.tier === 'silver' ? 'Join Now' : 'Upgrade'}
            </Button>
          </TierCard>
        ))}
      </MembershipTiers>

      <BenefitsSection>
        <BenefitsTitle data-aos="fade-up">Program Benefits</BenefitsTitle>
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.name}</h3>
              <div className="benefit-description">{benefit.description}</div>
              <div className="benefit-value">{benefit.value}</div>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsSection>

      <PointsCalculator>
        <CalculatorTitle data-aos="fade-up">Points Calculator</CalculatorTitle>
        <CalculatorForm>
          <div className="form-group">
            <label htmlFor="nights">Hotel Nights</label>
            <input
              type="number"
              id="nights"
              name="nights"
              value={calculatorData.nights}
              onChange={handleCalculatorChange}
              placeholder="Number of nights"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dining">Dining Spend ($)</label>
            <input
              type="number"
              id="dining"
              name="dining"
              value={calculatorData.dining}
              onChange={handleCalculatorChange}
              placeholder="Dining amount"
            />
          </div>
          <div className="form-group">
            <label htmlFor="spa">Spa Treatments</label>
            <input
              type="number"
              id="spa"
              name="spa"
              value={calculatorData.spa}
              onChange={handleCalculatorChange}
              placeholder="Number of treatments"
            />
          </div>
          <div className="form-group">
            <label htmlFor="other">Other Services ($)</label>
            <input
              type="number"
              id="other"
              name="other"
              value={calculatorData.other}
              onChange={handleCalculatorChange}
              placeholder="Other services"
            />
          </div>
        </CalculatorForm>
        <Button onClick={calculatePoints} style={{ width: '100%', marginBottom: 'var(--space-xl)' }}>
          Calculate Points
        </Button>
        {calculatedPoints > 0 && (
          <CalculatorResult>
            <div className="result-title">Estimated Points Earned</div>
            <div className="result-points">{calculatedPoints.toLocaleString()}</div>
            <div className="result-description">
              Points are calculated based on your planned activities. Actual points may vary based on specific services and promotions.
            </div>
          </CalculatorResult>
        )}
      </PointsCalculator>

      <RedeemSection>
        <RedeemTitle data-aos="fade-up">Redeem Your Points</RedeemTitle>
        <RedeemGrid>
          {redeemOptions.map((option, index) => (
            <RedeemCard key={option.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="redeem-icon">{option.icon}</div>
              <h3>{option.name}</h3>
              <div className="redeem-description">{option.description}</div>
              <div className="redeem-points">{option.points}</div>
              <Button variant="outline">Redeem Now</Button>
            </RedeemCard>
          ))}
        </RedeemGrid>
      </RedeemSection>

      <CTASection data-aos="fade-up">
        <CTATitle>Start Earning Rewards Today</CTATitle>
        <CTADescription>
          Join our loyalty program and start earning points immediately.
          The more you stay with us, the more rewards you'll unlock.
        </CTADescription>
        <Button size="large">Join Loyalty Program</Button>
      </CTASection>
    </LoyaltyContainer>
  );
}

export default Loyalty;
