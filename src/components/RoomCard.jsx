import styled from 'styled-components';
import Button from './Button';

const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(237, 109, 5, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  border: 1px solid rgba(237, 109, 5, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(237, 109, 5, 0.25);
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RoomInfo = styled.div`
  padding: 1.5rem;
`;

const RoomTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #333;
  font-weight: 600;
  
  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: #F2912C;
    margin-top: 8px;
  }
`;

const RoomDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const RoomFeatures = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #555;
  font-size: 0.9rem;
`;

const Feature = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #16a085;
`;

function RoomCard({ room }) {
  const { id, name, description, price, image, capacity, amenities } = room;
  
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
          <Price>${price} <small>/night</small></Price>
          <Button>Book Now</Button>
        </PriceRow>
      </RoomInfo>
    </Card>
  );
}

export default RoomCard;