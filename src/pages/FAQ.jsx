import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const FAQContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const FAQHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="faq-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23faq-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`;

const FAQTitle = styled.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const FAQDescription = styled.p`
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

const SearchSection = styled.div`
  margin-bottom: var(--space-3xl);
  text-align: center;
`;

const SearchInput = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;

  input {
    width: 100%;
    padding: var(--space-lg) var(--space-xl);
    padding-right: 50px;
    border: 2px solid #e9ecef;
    border-radius: 50px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
  }

  .search-icon {
    position: absolute;
    right: var(--space-lg);
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 1.25rem;
  }
`;

const CategoriesSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const CategoriesTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const CategoryCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: #007bff;
  }

  .category-icon {
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

  .category-description {
    color: #666;
    line-height: 1.5;
    font-size: 0.9rem;
  }
`;

const FAQSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const FAQSectionTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 12px;
  margin-bottom: var(--space-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  overflow: hidden;
`;

const FAQQuestion = styled.div`
  padding: var(--space-xl);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.expanded ? '#007bff' : 'white'};
  color: ${props => props.expanded ? 'white' : '#333'};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.expanded ? '#0056b3' : '#f8f9fa'};
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
  }

  .toggle-icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    transform: ${props => props.expanded ? 'rotate(45deg)' : 'rotate(0deg)'};
  }
`;

const FAQAnswer = styled.div`
  padding: ${props => props.expanded ? 'var(--space-xl)' : '0'};
  max-height: ${props => props.expanded ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;

  .answer-content {
    color: #666;
    line-height: 1.6;
  }
`;

const QuickActionsSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const QuickActionsTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const QuickActionCard = styled.div`
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
    margin-bottom: var(--space-lg);
  }
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`;

const ContactTitle = styled.h2`
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const ContactDescription = styled.p`
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`;

// Sample data
const faqCategories = [
  {
    icon: '🏨',
    name: 'Reservations',
    description: 'Questions about booking, rates, and availability'
  },
  {
    icon: '🍽️',
    name: 'Dining',
    description: 'Restaurant reservations and dining experiences'
  },
  {
    icon: '🧖',
    name: 'Spa & Wellness',
    description: 'Spa treatments and wellness services'
  },
  {
    icon: '🎉',
    name: 'Events',
    description: 'Event planning and hosting services'
  },
  {
    icon: '💼',
    name: 'Business',
    description: 'Corporate services and meeting facilities'
  },
  {
    icon: '🌍',
    name: 'Travel',
    description: 'Transportation and travel arrangements'
  }
];

const faqData = [
  {
    id: 1,
    category: 'Reservations',
    question: 'How do I make a reservation?',
    answer: 'You can make a reservation through our website, by calling our reservations team at +1 (555) 123-4567, or through our mobile app. We recommend booking in advance to ensure availability, especially during peak seasons.'
  },
  {
    id: 2,
    category: 'Reservations',
    question: 'What is your cancellation policy?',
    answer: 'Our standard cancellation policy allows free cancellation up to 24 hours before check-in for most room types. Some special rates and packages may have different policies. Please check your confirmation email for specific terms.'
  },
  {
    id: 3,
    category: 'Reservations',
    question: 'Do you offer early check-in or late check-out?',
    answer: 'We offer complimentary early check-in and late check-out based on availability. Early check-in is available from 12:00 PM and late check-out until 2:00 PM. Premium members receive extended hours as part of their benefits.'
  },
  {
    id: 4,
    category: 'Dining',
    question: 'How do I make restaurant reservations?',
    answer: 'Restaurant reservations can be made through our concierge, by calling the restaurant directly, or through our website. We recommend making reservations in advance, especially for our fine dining establishments.'
  },
  {
    id: 5,
    category: 'Dining',
    question: 'Do you accommodate dietary restrictions?',
    answer: 'Yes, all our restaurants can accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and kosher options. Please inform us of your requirements when making your reservation.'
  },
  {
    id: 6,
    category: 'Spa & Wellness',
    question: 'What spa treatments do you offer?',
    answer: 'Our spa offers a comprehensive range of treatments including massages, facials, body treatments, and wellness therapies. We use premium products and our certified therapists provide personalized experiences.'
  },
  {
    id: 7,
    category: 'Spa & Wellness',
    question: 'Do I need to book spa treatments in advance?',
    answer: 'While walk-ins are welcome based on availability, we strongly recommend booking spa treatments in advance to ensure your preferred time and therapist. You can book up to 6 months in advance.'
  },
  {
    id: 8,
    category: 'Events',
    question: 'Can I host events at the hotel?',
    answer: 'Yes, we offer comprehensive event planning services for weddings, corporate events, celebrations, and more. Our event spaces can accommodate from 10 to 500 guests with full catering and AV services.'
  },
  {
    id: 9,
    category: 'Business',
    question: 'What business services do you provide?',
    answer: 'We offer a full range of business services including meeting rooms, conference facilities, high-speed internet, printing services, and secretarial support. Our business center is open 24/7.'
  },
  {
    id: 10,
    category: 'Travel',
    question: 'Do you provide airport transportation?',
    answer: 'Yes, we offer luxury airport transfer services with professional drivers. You can arrange transportation when booking your room or through our concierge. We also have electric vehicle charging stations available.'
  }
];

const quickActions = [
  {
    icon: '📞',
    name: 'Call Us',
    description: 'Speak directly with our customer service team',
    action: 'Call Now'
  },
  {
    icon: '💬',
    name: 'Live Chat',
    description: 'Get instant answers through our live chat support',
    action: 'Start Chat'
  },
  {
    icon: '📧',
    name: 'Email Support',
    description: 'Send us your questions and we\'ll respond within 24 hours',
    action: 'Send Email'
  },
  {
    icon: '📱',
    name: 'Mobile App',
    description: 'Download our app for easy booking and support',
    action: 'Download App'
  }
];

function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <FAQContainer>
      <FAQHeader data-aos="fade-up">
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQDescription>
          Find answers to common questions about our hotel, services, and amenities.
          Can't find what you're looking for? Our team is here to help.
        </FAQDescription>
      </FAQHeader>

      <SearchSection>
        <SearchInput>
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon">🔍</div>
        </SearchInput>
      </SearchSection>

      <CategoriesSection>
        <CategoriesTitle data-aos="fade-up">Browse by Category</CategoriesTitle>
        <CategoriesGrid>
          {faqCategories.map((category, index) => (
            <CategoryCard
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              data-aos="fade-up"
              data-aos-delay={100 + (index * 100)}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <div className="category-description">{category.description}</div>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </CategoriesSection>

      <FAQSection>
        <FAQSectionTitle data-aos="fade-up">
          {selectedCategory === 'All' ? 'All Questions' : `${selectedCategory} Questions`}
        </FAQSectionTitle>
        <FAQList>
          {filteredFAQs.map((faq) => (
            <FAQItem key={faq.id} data-aos="fade-up">
              <FAQQuestion
                expanded={expandedFAQ === faq.id}
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3>{faq.question}</h3>
                <div className="toggle-icon">+</div>
              </FAQQuestion>
              <FAQAnswer expanded={expandedFAQ === faq.id}>
                <div className="answer-content">{faq.answer}</div>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQSection>

      <QuickActionsSection>
        <QuickActionsTitle data-aos="fade-up">Need More Help?</QuickActionsTitle>
        <QuickActionsGrid>
          {quickActions.map((action, index) => (
            <QuickActionCard key={action.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="action-icon">{action.icon}</div>
              <h3>{action.name}</h3>
              <div className="action-description">{action.description}</div>
              <Button variant="outline">{action.action}</Button>
            </QuickActionCard>
          ))}
        </QuickActionsGrid>
      </QuickActionsSection>

      <ContactSection data-aos="fade-up">
        <ContactTitle>Still Have Questions?</ContactTitle>
        <ContactDescription>
          Our friendly customer service team is available 24/7 to assist you with any questions
          or concerns you may have. We're here to make your experience exceptional.
        </ContactDescription>
        <Button size="large" style={{ background: 'white', color: '#007bff' }}>
          Contact Support
        </Button>
      </ContactSection>
    </FAQContainer>
  );
}

export default FAQ;
