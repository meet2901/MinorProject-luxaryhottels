import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const DiningContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const DiningHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    margin-bottom: var(--space-2xl);
  }
`;

const DiningTitle = styled.h1`
  color: #333;
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const DiningDescription = styled.p`
  color: #666;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const RestaurantCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
`;

const RestaurantImage = styled.div`
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .rating {
    position: absolute;
    top: var(--space-lg);
    right: var(--space-lg);
    background: rgba(255, 255, 255, 0.9);
    padding: var(--space-xs) var(--space-sm);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    .stars {
      color: #FFD700;
    }
  }
`;

const RestaurantInfo = styled.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .cuisine {
    color: #ED6D05;
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
        color: #ED6D05;
        font-size: 1.1rem;
      }
    }
  }
`;

const MenuSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const MenuTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const MenuCategory = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;

  h3 {
    color: #333;
    margin-bottom: var(--space-lg);
    font-size: 1.25rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    .icon {
      color: #ED6D05;
      font-size: 1.5rem;
    }
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  .item-info {
    flex: 1;

    .item-name {
      font-weight: 500;
      color: #333;
      margin-bottom: var(--space-xs);
    }

    .item-description {
      font-size: 0.875rem;
      color: #666;
      line-height: 1.4;
    }
  }

  .item-price {
    font-weight: 600;
    color: #ED6D05;
    font-size: 1.1rem;
    margin-left: var(--space-lg);
  }
`;

const ReservationSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;
  color: white;
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    padding: var(--space-2xl);
    margin-bottom: var(--space-2xl);
  }
`;

const ReservationTitle = styled.h2`
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const ReservationDescription = styled.p`
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`;

const SpecialOffers = styled.div`
  margin-bottom: var(--space-3xl);
`;

const OffersTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const OfferCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .offer-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .offer-description {
    color: #666;
    margin-bottom: var(--space-lg);
    line-height: 1.5;
  }

  .offer-discount {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ED6D05;
    margin-bottom: var(--space-md);
  }
`;

// Sample data
const restaurants = [
  {
    id: 1,
    name: "The Grand Dining Room",
    cuisine: "Fine Dining",
    description: "Experience culinary excellence in our elegant main dining room featuring contemporary cuisine with a focus on local ingredients.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    hours: "6:00 PM - 10:00 PM",
    dressCode: "Smart Casual",
    capacity: "120 guests"
  },
  {
    id: 2,
    name: "Garden Terrace",
    cuisine: "Mediterranean",
    description: "Al fresco dining under the stars featuring fresh Mediterranean cuisine and an extensive wine selection.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    hours: "12:00 PM - 11:00 PM",
    dressCode: "Casual",
    capacity: "80 guests"
  },
  {
    id: 3,
    name: "Sky Lounge",
    cuisine: "Asian Fusion",
    description: "Modern rooftop dining with panoramic city views and innovative Asian-inspired dishes.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    hours: "5:00 PM - 12:00 AM",
    dressCode: "Smart Casual",
    capacity: "60 guests"
  }
];

const menuCategories = [
  {
    name: "Appetizers",
    icon: "🥗",
    items: [
      { name: "Seared Scallops", description: "Pan-seared diver scallops with cauliflower purée", price: "$24" },
      { name: "Burrata Salad", description: "Fresh burrata with heirloom tomatoes and basil oil", price: "$18" },
      { name: "Tuna Tartare", description: "Yellowfin tuna with avocado and citrus dressing", price: "$22" }
    ]
  },
  {
    name: "Main Courses",
    icon: "🍽️",
    items: [
      { name: "Grilled Salmon", description: "Atlantic salmon with roasted vegetables and herb butter", price: "$38" },
      { name: "Beef Tenderloin", description: "Prime beef tenderloin with truffle mashed potatoes", price: "$52" },
      { name: "Duck Confit", description: "Slow-cooked duck leg with cherry gastrique", price: "$36" }
    ]
  },
  {
    name: "Desserts",
    icon: "🍰",
    items: [
      { name: "Chocolate Soufflé", description: "Warm chocolate soufflé with vanilla ice cream", price: "$16" },
      { name: "Crème Brûlée", description: "Classic vanilla bean crème brûlée", price: "$14" },
      { name: "Tiramisu", description: "Traditional Italian tiramisu with espresso", price: "$15" }
    ]
  }
];

const specialOffers = [
  {
    icon: "🍾",
    title: "Wine Tasting Dinner",
    description: "Four-course dinner paired with premium wines from our cellar",
    discount: "$89 per person"
  },
  {
    icon: "🎉",
    title: "Anniversary Special",
    description: "Complimentary champagne and dessert for anniversary celebrations",
    discount: "FREE"
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Sunday Brunch",
    description: "Special family pricing with kids menu and entertainment",
    discount: "25% OFF"
  }
];

function Dining() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <DiningContainer>
      <DiningHeader>
        <DiningTitle data-aos="fade-up">Fine Dining Experience</DiningTitle>
        <DiningDescription data-aos="fade-up" data-aos-delay="100">
          Indulge in exceptional culinary experiences across our three distinctive restaurants,
          each offering unique atmospheres and world-class cuisine.
        </DiningDescription>
      </DiningHeader>

      <RestaurantsGrid>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={restaurant.id} data-aos="fade-up" data-aos-delay={200 + (index * 100)}>
            <RestaurantImage src={restaurant.image}>
              <div className="rating">
                <span className="stars">⭐</span>
                {restaurant.rating}
              </div>
            </RestaurantImage>
            <RestaurantInfo>
              <h3>{restaurant.name}</h3>
              <div className="cuisine">{restaurant.cuisine}</div>
              <div className="description">{restaurant.description}</div>
              <div className="details">
                <div className="detail">
                  <span className="icon">🕐</span>
                  {restaurant.hours}
                </div>
                <div className="detail">
                  <span className="icon">👔</span>
                  {restaurant.dressCode}
                </div>
                <div className="detail">
                  <span className="icon">👥</span>
                  {restaurant.capacity}
                </div>
                <div className="detail">
                  <span className="icon">⭐</span>
                  {restaurant.rating}/5
                </div>
              </div>
              <Button
                onClick={() => setSelectedRestaurant(restaurant)}
                style={{ width: '100%' }}
              >
                View Menu & Reserve
              </Button>
            </RestaurantInfo>
          </RestaurantCard>
        ))}
      </RestaurantsGrid>

      <MenuSection>
        <MenuTitle data-aos="fade-up">Sample Menu</MenuTitle>
        <MenuGrid>
          {menuCategories.map((category, index) => (
            <MenuCategory key={category.name} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <h3>
                <span className="icon">{category.icon}</span>
                {category.name}
              </h3>
              <MenuItems>
                {category.items.map((item, itemIndex) => (
                  <MenuItem key={itemIndex}>
                    <div className="item-info">
                      <div className="item-name">{item.name}</div>
                      <div className="item-description">{item.description}</div>
                    </div>
                    <div className="item-price">{item.price}</div>
                  </MenuItem>
                ))}
              </MenuItems>
            </MenuCategory>
          ))}
        </MenuGrid>
      </MenuSection>

      <SpecialOffers>
        <OffersTitle data-aos="fade-up">Special Offers</OffersTitle>
        <OffersGrid>
          {specialOffers.map((offer, index) => (
            <OfferCard key={offer.title} data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="offer-icon">{offer.icon}</div>
              <h3>{offer.title}</h3>
              <div className="offer-description">{offer.description}</div>
              <div className="offer-discount">{offer.discount}</div>
              <Button variant="outline">Learn More</Button>
            </OfferCard>
          ))}
        </OffersGrid>
      </SpecialOffers>

      <ReservationSection data-aos="fade-up">
        <ReservationTitle>Make a Reservation</ReservationTitle>
        <ReservationDescription>
          Reserve your table now and experience exceptional dining in an unforgettable atmosphere.
        </ReservationDescription>
        <Button size="large" style={{ background: 'white', color: '#667eea' }}>
          Reserve Now
        </Button>
      </ReservationSection>
    </DiningContainer>
  );
}

export default Dining;
