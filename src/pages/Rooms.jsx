import { useState } from 'react';
import styled from 'styled-components';
import RoomCard from '../components/RoomCard';

const RoomsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const RoomsHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const RoomsTitle = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const RoomsDescription = styled.p`
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 8px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  
  label {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  select, input {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const NoRoomsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.25rem;
`;

// Sample room data (in a real app, this would come from an API)
const sampleRooms = [
  {
    id: 1,
    name: 'Deluxe King Room',
    description: 'Spacious room with king-sized bed, work desk, and city view.',
    price: 199,
    capacity: 2,
    amenities: ['wifi', 'breakfast', 'tv', 'ac'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Luxury suite with separate living area, king bed, and premium amenities.',
    price: 349,
    capacity: 2,
    amenities: ['wifi', 'breakfast', 'minibar', 'spa', 'tv', 'ac'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Family Room',
    description: 'Perfect for families with two queen beds and extra space for children.',
    price: 249,
    capacity: 4,
    amenities: ['wifi', 'breakfast', 'tv', 'ac'],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Presidential Suite',
    description: 'Our most luxurious accommodation with panoramic views and butler service.',
    price: 599,
    capacity: 2,
    amenities: ['wifi', 'breakfast', 'minibar', 'spa', 'tv', 'ac', 'butler'],
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
];

function Rooms() {
  const [filters, setFilters] = useState({
    capacity: '',
    minPrice: '',
    maxPrice: '',
  });
  
  // Apply filters to rooms
  const filteredRooms = sampleRooms.filter(room => {
    if (filters.capacity && room.capacity < parseInt(filters.capacity)) {
      return false;
    }
    if (filters.minPrice && room.price < parseInt(filters.minPrice)) {
      return false;
    }
    if (filters.maxPrice && room.price > parseInt(filters.maxPrice)) {
      return false;
    }
    return true;
  });
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <RoomsContainer>
      <RoomsHeader>
        <RoomsTitle data-aos="fade-up">Our Rooms & Suites</RoomsTitle>
        <RoomsDescription data-aos="fade-up" data-aos-delay="100">
          Choose from our selection of luxurious rooms and suites designed for your comfort and relaxation.
        </RoomsDescription>
      </RoomsHeader>
      
      <FiltersContainer data-aos="fade-up" data-aos-delay="200">
        <FilterGroup>
          <label htmlFor="capacity">Guests</label>
          <select 
            id="capacity" 
            name="capacity" 
            value={filters.capacity} 
            onChange={handleFilterChange}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </FilterGroup>
        
        <FilterGroup>
          <label htmlFor="minPrice">Min Price</label>
          <input 
            type="number" 
            id="minPrice" 
            name="minPrice" 
            value={filters.minPrice} 
            onChange={handleFilterChange}
            placeholder="Min $"
          />
        </FilterGroup>
        
        <FilterGroup>
          <label htmlFor="maxPrice">Max Price</label>
          <input 
            type="number" 
            id="maxPrice" 
            name="maxPrice" 
            value={filters.maxPrice} 
            onChange={handleFilterChange}
            placeholder="Max $"
          />
        </FilterGroup>
      </FiltersContainer>
      
      {filteredRooms.length > 0 ? (
        <RoomsGrid>
          {filteredRooms.map((room, index) => (
            <div key={room.id} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <RoomCard room={room} />
            </div>
          ))}
        </RoomsGrid>
      ) : (
        <NoRoomsMessage>
          No rooms match your current filters. Please try different criteria.
        </NoRoomsMessage>
      )}
    </RoomsContainer>
  );
}

export default Rooms;