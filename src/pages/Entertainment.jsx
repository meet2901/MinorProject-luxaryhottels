import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const EntertainmentContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const EntertainmentHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="entertainment-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23entertainment-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`;

const EntertainmentTitle = styled.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const EntertainmentDescription = styled.p`
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

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const CategoryCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 154, 158, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(255, 154, 158, 0.15);
  }
`;

const CategoryImage = styled.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .category-name {
    position: absolute;
    bottom: var(--space-lg);
    left: var(--space-lg);
    background: rgba(255, 154, 158, 0.9);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 25px;
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

const CategoryInfo = styled.div`
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

  .activities {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);

    .activity {
      background: rgba(255, 154, 158, 0.1);
      color: #ff9a9e;
      padding: var(--space-xs) var(--space-sm);
      border-radius: 15px;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`;

const ShowsSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const ShowsTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const ShowsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const ShowCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 154, 158, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(255, 154, 158, 0.15);
  }
`;

const ShowImage = styled.div`
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .show-time {
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    background: rgba(255, 154, 158, 0.9);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    .icon {
      font-size: 1rem;
    }
  }

  .show-price {
    position: absolute;
    bottom: var(--space-lg);
    right: var(--space-lg);
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    padding: var(--space-sm) var(--space-md);
    border-radius: 20px;
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

const ShowInfo = styled.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .show-date {
    color: #ff9a9e;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--space-md);
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);

    .detail {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: #555;
      font-size: 0.9rem;

      .icon {
        color: #ff9a9e;
        font-size: 1.1rem;
      }
    }
  }
`;

const ActivitiesSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const ActivitiesTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const ActivityCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .activity-icon {
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

  .activity-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .activity-duration {
    color: #ff9a9e;
    font-weight: 500;
    margin-bottom: var(--space-lg);
  }
`;

const ScheduleSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const ScheduleTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const ScheduleCard = styled.div`
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  border-radius: 16px;
  padding: var(--space-2xl);
  color: white;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="schedule-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23schedule-pattern)"/></svg>');
    opacity: 0.3;
  }

  .schedule-day {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    position: relative;
    z-index: 1;
  }

  .schedule-events {
    position: relative;
    z-index: 1;

    .event {
      margin-bottom: var(--space-md);
      padding: var(--space-sm);
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;

      .event-time {
        font-size: 0.875rem;
        opacity: 0.8;
        margin-bottom: var(--space-xs);
      }

      .event-name {
        font-weight: 500;
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
const entertainmentCategories = [
  {
    id: 1,
    name: "Live Music",
    description: "Enjoy live performances from talented musicians across various genres in our intimate venues.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    activities: ["Jazz Nights", "Acoustic Sessions", "Rock Concerts", "Classical Music"]
  },
  {
    id: 2,
    name: "Comedy Shows",
    description: "Laugh out loud with our regular comedy nights featuring both established and emerging comedians.",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    activities: ["Stand-up Comedy", "Improv Shows", "Comedy Festivals", "Open Mic Nights"]
  },
  {
    id: 3,
    name: "Dance Performances",
    description: "Experience breathtaking dance performances from contemporary to traditional styles.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    activities: ["Ballet", "Contemporary Dance", "Cultural Performances", "Dance Workshops"]
  }
];

const shows = [
  {
    id: 1,
    name: "Jazz Night with The Blue Notes",
    date: "Friday, March 15",
    description: "An intimate evening of smooth jazz featuring the renowned Blue Notes quartet.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    time: "8:00 PM",
    price: "$35",
    details: [
      { icon: "🕐", text: "2-hour show" },
      { icon: "🍸", text: "Drinks included" },
      { icon: "🎵", text: "Live performance" },
      { icon: "📍", text: "Sky Lounge" }
    ]
  },
  {
    id: 2,
    name: "Comedy Central Presents",
    date: "Saturday, March 16",
    description: "Hilarious stand-up comedy featuring three top comedians from Comedy Central.",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    time: "9:00 PM",
    price: "$25",
    details: [
      { icon: "🕐", text: "90-minute show" },
      { icon: "🍺", text: "Bar service" },
      { icon: "🎤", text: "3 comedians" },
      { icon: "📍", text: "Garden Terrace" }
    ]
  },
  {
    id: 3,
    name: "Contemporary Dance Showcase",
    date: "Sunday, March 17",
    description: "Modern dance performances by the acclaimed City Dance Company.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    time: "7:00 PM",
    price: "$40",
    details: [
      { icon: "🕐", text: "75-minute show" },
      { icon: "🍷", text: "Wine reception" },
      { icon: "💃", text: "5 performances" },
      { icon: "📍", text: "Grand Ballroom" }
    ]
  }
];

const activities = [
  {
    icon: "🎸",
    name: "Karaoke Night",
    description: "Sing your heart out with our state-of-the-art karaoke system and song library",
    duration: "Every Thursday, 8 PM - 12 AM"
  },
  {
    icon: "🎲",
    name: "Game Night",
    description: "Board games, card games, and trivia competitions for all ages",
    duration: "Every Wednesday, 7 PM - 10 PM"
  },
  {
    icon: "🎨",
    name: "Art & Wine",
    description: "Creative painting sessions paired with wine tasting and light appetizers",
    duration: "Every Tuesday, 6 PM - 9 PM"
  },
  {
    icon: "💃",
    name: "Dance Lessons",
    description: "Learn various dance styles from professional instructors in a fun environment",
    duration: "Every Monday, 7 PM - 8:30 PM"
  }
];

const weeklySchedule = [
  {
    day: "Monday",
    events: [
      { time: "7:00 PM", name: "Dance Lessons" },
      { time: "9:00 PM", name: "Piano Bar" }
    ]
  },
  {
    day: "Tuesday",
    events: [
      { time: "6:00 PM", name: "Art & Wine Night" },
      { time: "8:30 PM", name: "Acoustic Sessions" }
    ]
  },
  {
    day: "Wednesday",
    events: [
      { time: "7:00 PM", name: "Game Night" },
      { time: "9:00 PM", name: "Comedy Open Mic" }
    ]
  },
  {
    day: "Thursday",
    events: [
      { time: "8:00 PM", name: "Karaoke Night" },
      { time: "10:00 PM", name: "DJ Night" }
    ]
  },
  {
    day: "Friday",
    events: [
      { time: "8:00 PM", name: "Live Jazz" },
      { time: "10:00 PM", name: "Dance Party" }
    ]
  },
  {
    day: "Saturday",
    events: [
      { time: "7:00 PM", name: "Featured Show" },
      { time: "9:00 PM", name: "Comedy Night" },
      { time: "11:00 PM", name: "Late Night Music" }
    ]
  },
  {
    day: "Sunday",
    events: [
      { time: "6:00 PM", name: "Classical Music" },
      { time: "8:00 PM", name: "Sunday Showcase" }
    ]
  }
];

function Entertainment() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <EntertainmentContainer>
      <EntertainmentHeader data-aos="fade-up">
        <EntertainmentTitle>Entertainment & Nightlife</EntertainmentTitle>
        <EntertainmentDescription>
          Experience unforgettable evenings with our diverse entertainment options,
          from live music and comedy shows to interactive activities and special events.
        </EntertainmentDescription>
      </EntertainmentHeader>

      <CategoriesGrid>
        {entertainmentCategories.map((category, index) => (
          <CategoryCard key={category.id} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
            <CategoryImage src={category.image}>
              <div className="category-name">{category.name}</div>
            </CategoryImage>
            <CategoryInfo>
              <h3>{category.name}</h3>
              <div className="description">{category.description}</div>
              <div className="activities">
                {category.activities.map((activity, activityIndex) => (
                  <span key={activityIndex} className="activity">{activity}</span>
                ))}
              </div>
              <Button
                onClick={() => setSelectedCategory(category)}
                style={{ width: '100%' }}
              >
                View Schedule
              </Button>
            </CategoryInfo>
          </CategoryCard>
        ))}
      </CategoriesGrid>

      <ShowsSection>
        <ShowsTitle data-aos="fade-up">Featured Shows</ShowsTitle>
        <ShowsGrid>
          {shows.map((show, index) => (
            <ShowCard key={show.id} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <ShowImage src={show.image}>
                <div className="show-time">
                  <span className="icon">🕐</span>
                  {show.time}
                </div>
                <div className="show-price">{show.price}</div>
              </ShowImage>
              <ShowInfo>
                <h3>{show.name}</h3>
                <div className="show-date">{show.date}</div>
                <div className="description">{show.description}</div>
                <div className="details">
                  {show.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="detail">
                      <span className="icon">{detail.icon}</span>
                      {detail.text}
                    </div>
                  ))}
                </div>
                <Button style={{ width: '100%' }}>
                  Get Tickets
                </Button>
              </ShowInfo>
            </ShowCard>
          ))}
        </ShowsGrid>
      </ShowsSection>

      <ActivitiesSection>
        <ActivitiesTitle data-aos="fade-up">Weekly Activities</ActivitiesTitle>
        <ActivitiesGrid>
          {activities.map((activity, index) => (
            <ActivityCard key={activity.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="activity-icon">{activity.icon}</div>
              <h3>{activity.name}</h3>
              <div className="activity-description">{activity.description}</div>
              <div className="activity-duration">{activity.duration}</div>
              <Button variant="outline">Join Activity</Button>
            </ActivityCard>
          ))}
        </ActivitiesGrid>
      </ActivitiesSection>

      <ScheduleSection>
        <ScheduleTitle data-aos="fade-up">Weekly Entertainment Schedule</ScheduleTitle>
        <ScheduleGrid>
          {weeklySchedule.map((day, index) => (
            <ScheduleCard key={day.day} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="schedule-day">{day.day}</div>
              <div className="schedule-events">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="event">
                    <div className="event-time">{event.time}</div>
                    <div className="event-name">{event.name}</div>
                  </div>
                ))}
              </div>
            </ScheduleCard>
          ))}
        </ScheduleGrid>
      </ScheduleSection>

      <CTASection data-aos="fade-up">
        <CTATitle>Ready for Some Entertainment?</CTATitle>
        <CTADescription>
          Book your tickets now and experience the best entertainment our hotel has to offer.
          From live music to comedy shows, there's something for everyone.
        </CTADescription>
        <Button size="large">View All Events</Button>
      </CTASection>
    </EntertainmentContainer>
  );
}

export default Entertainment;
