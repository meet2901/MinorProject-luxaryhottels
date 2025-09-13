import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
`;

const FAQList = styled.div`
  margin-top: 2rem;
`;

const Question = styled.h3`
  color: #ED6D05;
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p`
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.5;
`;

const faqs = [
  {
    question: 'What is the check-in and check-out time?',
    answer: 'Check-in is from 3 PM and check-out is until 11 AM.'
  },
  {
    question: 'Do you offer free Wi-Fi?',
    answer: 'Yes, complimentary Wi-Fi is available throughout the hotel.'
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we offer free parking for all guests.'
  },
  {
    question: 'Are pets allowed?',
    answer: 'Pets are allowed in designated rooms with prior notice.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 48 hours before arrival are free of charge.'
  },
];

function FAQ() {
  return (
    <PageContainer>
      <Hero>Frequently Asked Questions</Hero>
      <FAQList>
        {faqs.map((faq, index) => (
          <div key={index}>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </div>
        ))}
      </FAQList>
    </PageContainer>
  );
}

export default FAQ;
