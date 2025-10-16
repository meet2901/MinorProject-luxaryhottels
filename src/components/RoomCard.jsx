import styled from 'styled-components';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(237, 109, 5, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  border: 1px solid rgba(237, 109, 5, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(237, 109, 5, 0.25);
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`;

const RoomInfo = styled.div`
  padding: var(--space-xl);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RoomTitle = styled.h3`
  margin: 0 0 var(--space-md) 0;
  font-size: 1.375rem;
  color: #333;
  font-weight: 600;
  line-height: 1.3;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #F2912C;
    margin-top: var(--space-sm);
  }
`;

const RoomDescription = styled.p`
  color: #666;
  margin-bottom: var(--space-lg);
  line-height: 1.6;
  flex: 1;
`;

const RoomFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm) var(--space-md);
  margin-bottom: var(--space-lg);
  color: #555;
  font-size: 0.875rem;
`;

const Feature = styled.span`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-sm);
  background: rgba(237, 109, 5, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(237, 109, 5, 0.1);
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--space-md);
  border-top: 1px solid rgba(237, 109, 5, 0.1);
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #16a085;
`;

function RoomCard({ room }) {
  const { id, name, description, price, image, capacity, amenities } = room;
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleBookNow = () => {
    addToCart(room);
    navigate('/cart');
  };

  return (
    <Card>
      <RoomImage src={image || 'https://via.placeholder.com/400x200?text=Room+Image'} alt={name} />
      <RoomInfo>
        <RoomTitle>{name}</RoomTitle>
        <RoomFeatures>
          <Feature>👥 {capacity} Guests</Feature>
          {amenities?.includes('wifi') && <Feature>📶 WiFi</Feature>}
          {amenities?.includes('breakfast') && <Feature>🍳 Breakfast</Feature>}
        </RoomFeatures>
        <RoomDescription>{description}</RoomDescription>
        <PriceRow>
          <Price>₹{price} <small>/night</small></Price>
          <Button onClick={handleBookNow}>Book Now</Button>
        </PriceRow>
      </RoomInfo>
    </Card>
  );
}

export default RoomCard;