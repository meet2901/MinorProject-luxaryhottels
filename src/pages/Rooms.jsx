import { useState, useEffect } from 'react';
import styled from 'styled-components';
import RoomCard from '../components/RoomCard';
import { getRooms, getSpecialOffers } from '../services/hotelService';

const RoomsContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const RoomsHeader = styled.div`
  margin-bottom: var(--space-3xl);
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: var(--space-2xl);
  }
`;

const RoomsTitle = styled.h1`
  color: #333;
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const RoomsDescription = styled.p`
  color: #666;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
  padding: var(--space-2xl);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #dee2e6;
  position: relative;

  @media (max-width: 768px) {
    padding: var(--space-xl);
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
  }
`;

const ClearFiltersButton = styled.button`
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  background: #ED6D05;
  color: white;
  border: none;
  border-radius: 8px;
  padding: var(--space-sm) var(--space-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #d55a04;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    position: static;
    align-self: flex-end;
    margin-top: var(--space-md);
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  flex: 1;

  @media (max-width: 768px) {
    min-width: 100%;
  }

  label {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: #495057;
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  select, input {
    padding: var(--space-md) var(--space-lg);
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    background: white;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    &:focus {
      outline: none;
      border-color: #ED6D05;
      box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    }

    &::placeholder {
      color: #adb5bd;
    }
  }

  select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right var(--space-md) center;
    background-repeat: no-repeat;
    background-size: 1rem;
    padding-right: var(--space-2xl);
  }
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--space-2xl);
  padding: var(--space-xl);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #dee2e6;

  @media (max-width: 768px) {
    justify-content: stretch;
    margin-bottom: var(--space-xl);
    padding: var(--space-lg);
  }
`;

const SortGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;

  @media (max-width: 768px) {
    min-width: 100%;
  }

  label {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: #495057;
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  select {
    padding: var(--space-md) var(--space-lg);
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    background: white;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right var(--space-md) center;
    background-repeat: no-repeat;
    background-size: 1rem;
    padding-right: var(--space-2xl);

    &:focus {
      outline: none;
      border-color: #ED6D05;
      box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    }
  }
`;

const AmenitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const AmenityCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: #ED6D05;
    background: #fff5f0;
  }

  input {
    margin: 0;
    accent-color: #ED6D05;
  }

  input:checked + & {
    background: #ED6D05;
    color: white;
    border-color: #ED6D05;
  }
`;

const PromotionsSection = styled.div`
  margin-bottom: var(--space-3xl);
  padding: var(--space-2xl);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: var(--space-2xl);
    padding: var(--space-xl);
  }
`;

const PromotionsTitle = styled.h2`
  margin-bottom: var(--space-lg);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
    margin-bottom: var(--space-md);
  }
`;

const PromotionsDescription = styled.p`
  margin-bottom: var(--space-2xl);
  font-size: 1.125rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-xl);
    font-size: 1rem;
  }
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const OfferCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: var(--space-xl);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: var(--space-lg);
  }
`;

const OfferTitle = styled.h3`
  margin-bottom: var(--space-sm);
  font-size: 1.375rem;
`;

const OfferDescription = styled.p`
  margin-bottom: var(--space-lg);
  opacity: 0.9;
  line-height: 1.5;
`;

const OfferDiscount = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const NoRoomsMessage = styled.div`
  text-align: center;
  padding: var(--space-4xl) var(--space-xl);
  color: #666;
  font-size: 1.375rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-lg);
    font-size: 1.125rem;
  }
`;


// Special offers data
const specialOffers = [
  {
    id: 1,
    title: 'Early Bird Discount',
    description: 'Book 30 days in advance and save 15% on your stay',
    discount: '15% OFF'
  },
  {
    id: 2,
    title: 'Weekend Getaway',
    description: 'Special rates for Friday and Saturday nights',
    discount: '20% OFF'
  },
  {
    id: 3,
    title: 'Family Package',
    description: 'Free breakfast for children under 12 when booking family rooms',
    discount: 'FREE BREAKFAST'
  }
];

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [specialOffers, setSpecialOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    capacity: '',
    minPrice: '',
    maxPrice: '',
    type: '',
    amenities: [],
  });

  const [sortBy, setSortBy] = useState('price-low');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [roomsData, offersData] = await Promise.all([
          getRooms(),
          getSpecialOffers()
        ]);
        setRooms(roomsData);
        setSpecialOffers(offersData);
      } catch (err) {
        setError('Failed to load rooms and offers. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <RoomsContainer>
        <RoomsHeader>
          <RoomsTitle data-aos="fade-up">Our Rooms & Suites</RoomsTitle>
          <RoomsDescription data-aos="fade-up" data-aos-delay="100">
            Choose from our selection of luxurious rooms and suites designed for your comfort and relaxation.
          </RoomsDescription>
        </RoomsHeader>
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
          Loading rooms...
        </div>
      </RoomsContainer>
    );
  }

  if (error) {
    return (
      <RoomsContainer>
        <RoomsHeader>
          <RoomsTitle data-aos="fade-up">Our Rooms & Suites</RoomsTitle>
          <RoomsDescription data-aos="fade-up" data-aos-delay="100">
            Choose from our selection of luxurious rooms and suites designed for your comfort and relaxation.
          </RoomsDescription>
        </RoomsHeader>
        <div style={{ textAlign: 'center', padding: '4rem', color: '#dc3545' }}>
          {error}
        </div>
      </RoomsContainer>
    );
  }

  // Apply filters to rooms
  const filteredRooms = rooms.filter(room => {
    if (filters.capacity && room.capacity < parseInt(filters.capacity)) {
      return false;
    }
    if (filters.minPrice && room.price < parseInt(filters.minPrice)) {
      return false;
    }
    if (filters.maxPrice && room.price > parseInt(filters.maxPrice)) {
      return false;
    }
    if (filters.type && room.type !== filters.type) {
      return false;
    }
    if (filters.amenities.length > 0 && !filters.amenities.every(amenity => room.amenities.includes(amenity))) {
      return false;
    }
    return true;
  });

  // Sort rooms
  const sortedRooms = [...filteredRooms].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'capacity-low':
        return a.capacity - b.capacity;
      case 'capacity-high':
        return b.capacity - a.capacity;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAmenityChange = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const clearFilters = () => {
    setFilters({
      capacity: '',
      minPrice: '',
      maxPrice: '',
      type: '',
      amenities: [],
    });
    setSortBy('price-low');
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
        <ClearFiltersButton onClick={clearFilters}>🗑️ Clear Filters</ClearFiltersButton>
        <FilterGroup>
          <label htmlFor="capacity">👥 Guests</label>
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
          <label htmlFor="type">🏨 Room Type</label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
          >
            <option value="">All Types</option>
            <option value="Standard">Standard</option>
            <option value="Suite">Suite</option>
          </select>
        </FilterGroup>

        <FilterGroup>
          <label htmlFor="minPrice">💰 Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            placeholder="Min ₹"
          />
        </FilterGroup>

        <FilterGroup>
          <label htmlFor="maxPrice">💰 Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            placeholder="Max ₹"
          />
        </FilterGroup>

        <FilterGroup>
          <label>✨ Amenities</label>
          <AmenitiesContainer>
            {[
              { key: 'wifi', label: 'WiFi', icon: '📶' },
              { key: 'breakfast', label: 'Breakfast', icon: '🥐' },
              { key: 'tv', label: 'TV', icon: '📺' },
              { key: 'ac', label: 'AC', icon: '❄️' },
              { key: 'minibar', label: 'Minibar', icon: '🍾' },
              { key: 'spa', label: 'Spa', icon: '🧖' }
            ].map(amenity => (
              <AmenityCheckbox key={amenity.key}>
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity.key)}
                  onChange={() => handleAmenityChange(amenity.key)}
                />
                {amenity.icon} {amenity.label}
              </AmenityCheckbox>
            ))}
          </AmenitiesContainer>
        </FilterGroup>
      </FiltersContainer>

      <SortContainer data-aos="fade-up" data-aos-delay="250">
        <SortGroup>
          <label htmlFor="sort">🔄 Sort By</label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="price-low">💰 Price: Low to High</option>
            <option value="price-high">💰 Price: High to Low</option>
            <option value="capacity-low">👥 Capacity: Low to High</option>
            <option value="capacity-high">👥 Capacity: High to Low</option>
            <option value="name">📝 Name: A to Z</option>
          </select>
        </SortGroup>
      </SortContainer>

      <PromotionsSection data-aos="fade-up" data-aos-delay="300">
        <PromotionsTitle>Special Offers</PromotionsTitle>
        <PromotionsDescription>
          Take advantage of our current promotions and save on your stay
        </PromotionsDescription>
        <OffersGrid>
          {specialOffers.map((offer, index) => (
            <OfferCard key={offer.id} data-aos="zoom-in" data-aos-delay={350 + (index * 100)}>
              <OfferTitle>{offer.title}</OfferTitle>
              <OfferDescription>{offer.description}</OfferDescription>
              <OfferDiscount>{offer.discount}</OfferDiscount>
            </OfferCard>
          ))}
        </OffersGrid>
      </PromotionsSection>

      {sortedRooms.length > 0 ? (
        <RoomsGrid>
          {sortedRooms.map((room, index) => (
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