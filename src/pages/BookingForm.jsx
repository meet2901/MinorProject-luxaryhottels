import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const BookingContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: var(--space-2xl) var(--space-md);
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    padding: var(--space-2xl) var(--space-xl);
  }

  @media (min-width: 1201px) {
    padding: var(--space-2xl) var(--space-3xl);
  }
`;

const BookingCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: var(--space-2xl);
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ED6D05, #FF9A3C);
  }

  @media (max-width: 480px) {
    padding: var(--space-xl) var(--space-md);
    border-radius: 12px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: var(--space-2xl) var(--space-xl);
    border-radius: 16px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    padding: var(--space-2xl);
    max-width: 90%;
  }

  @media (min-width: 1201px) {
    padding: var(--space-3xl);
    max-width: 1100px;
  }
`;

const BookingHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: var(--space-md);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    font-size: 1.125rem;
    line-height: 1.6;
  }
`;

const BookingFormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
  }
`;

const FormSection = styled.div`
  background: ${props => props.highlight ? '#f8f9fa' : 'transparent'};
  border-radius: 16px;
  padding: var(--space-xl);
  border: ${props => props.highlight ? '2px solid #e9ecef' : 'none'};
  width: 100%;
  box-sizing: border-box;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 24px;
      height: 24px;
      color: #ED6D05;
    }
  }

  @media (max-width: 480px) {
    padding: var(--space-lg);
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: var(--space-xl);
  }

  @media (min-width: 769px) {
    padding: var(--space-xl);
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
  }

  @media (min-width: 992px) {
    gap: var(--space-lg);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  .required {
    color: #e74c3c;
    margin-left: var(--space-xs);
  }
`;

const Input = styled.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  &::placeholder {
    color: #adb5bd;
  }

  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }

  &:disabled {
    background: #f8f9fa;
    color: #666;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: var(--space-sm) var(--space-md);
  }
`;

const Select = styled.select`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }

  @media (max-width: 480px) {
    padding: var(--space-sm) var(--space-md);
  }
`;

const TextArea = styled.textarea`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  min-height: 100px;
  resize: vertical;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  @media (max-width: 480px) {
    padding: var(--space-sm) var(--space-md);
    min-height: 80px;
  }
  }

  &::placeholder {
    color: #adb5bd;
  }

  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const RoomSelection = styled.div`
  .room-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md);
    border: 2px solid #e9ecef;
    border-radius: 12px;
    margin-bottom: var(--space-md);
    transition: all 0.3s ease;

    &:hover {
      border-color: #ED6D05;
      background: rgba(237, 109, 5, 0.05);
    }

    &.selected {
      border-color: #ED6D05;
      background: rgba(237, 109, 5, 0.1);
    }

    .room-info {
      flex: 1;

      .room-name {
        font-weight: 600;
        color: #333;
        margin-bottom: var(--space-xs);
      }

      .room-details {
        color: #666;
        font-size: 0.9rem;
      }
    }

    .room-price {
      font-weight: 600;
      color: #ED6D05;
      font-size: 1.125rem;
    }
  }
`;

const BookingSummary = styled.div`
  background: #f8f9fa;
  border-radius: 16px;
  padding: var(--space-2xl);
  border: 2px solid #e9ecef;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-sm) 0;
    border-bottom: 1px solid #e9ecef;

    &:last-child {
      border-bottom: none;
      font-weight: 600;
      font-size: 1.125rem;
      color: #ED6D05;
    }
  }

  .total {
    margin-top: var(--space-md);
    padding-top: var(--space-md);
    border-top: 2px solid #e9ecef;
    font-size: 1.25rem;
    font-weight: 700;
    color: #333;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: var(--space-md);
  justify-content: space-between;
  margin-top: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function BookingForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1,
    roomType: '',
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'card'
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);

  const roomTypes = [
    { id: 'deluxe', name: 'Deluxe Room', price: 299, description: 'King bed, city view, luxury amenities' },
    { id: 'suite', name: 'Executive Suite', price: 499, description: 'Separate living area, premium view' },
    { id: 'standard', name: 'Standard Room', price: 199, description: 'Comfortable double bed, basic amenities' },
    { id: 'family', name: 'Family Room', price: 399, description: 'Two queen beds, perfect for families' }
  ];

  useEffect(() => {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, checkIn: today }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRoomSelect = (room) => {
    setSelectedRooms(prev => {
      const exists = prev.find(r => r.id === room.id);
      if (exists) {
        return prev.filter(r => r.id !== room.id);
      } else {
        return [...prev, room];
      }
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';

    if (formData.checkIn && formData.checkOut) {
      if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
        newErrors.checkOut = 'Check-out must be after check-in';
      }
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (selectedRooms.length === 0) {
      newErrors.rooms = 'Please select at least one room';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateTotal = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;

    const nights = Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24));
    const roomTotal = selectedRooms.reduce((sum, room) => sum + room.price, 0);
    return roomTotal * nights;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Navigate to booking confirmation
      navigate('/booking-confirmation', {
        state: {
          bookingData: {
            ...formData,
            rooms: selectedRooms,
            total: calculateTotal(),
            bookingId: 'BK' + Date.now()
          }
        }
      });
    } catch (error) {
      setErrors({ submit: 'Failed to process booking. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const total = calculateTotal();

  return (
    <BookingContainer>
      <BookingCard>
        <BookingHeader>
          <h1>Book Your Stay</h1>
          <p>Complete your reservation details and secure your perfect accommodation</p>
        </BookingHeader>

        <BookingFormContainer onSubmit={handleSubmit}>
          <div>
            <FormSection>
              <h3>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Stay Details
              </h3>

              <FormGrid>
                <FormGroup>
                  <Label>
                    Check-in Date
                    <span className="required">*</span>
                  </Label>
                  <Input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={errors.checkIn ? 'error' : ''}
                  />
                  {errors.checkIn && <ErrorMessage>{errors.checkIn}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>
                    Check-out Date
                    <span className="required">*</span>
                  </Label>
                  <Input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    min={formData.checkIn || new Date().toISOString().split('T')[0]}
                    className={errors.checkOut ? 'error' : ''}
                  />
                  {errors.checkOut && <ErrorMessage>{errors.checkOut}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Number of Guests</Label>
                  <Select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label>Number of Rooms</Label>
                  <Select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </Select>
                </FormGroup>
              </FormGrid>
            </FormSection>

            <FormSection>
              <h3>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Guest Information
              </h3>

              <FormGrid>
                <FormGroup>
                  <Label>
                    First Name
                    <span className="required">*</span>
                  </Label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>
                    Last Name
                    <span className="required">*</span>
                  </Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>
                    Email Address
                    <span className="required">*</span>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>
                    Phone Number
                    <span className="required">*</span>
                  </Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                </FormGroup>
              </FormGrid>

              <FormGroup style={{ marginTop: 'var(--space-lg)' }}>
                <Label>Special Requests</Label>
                <TextArea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special requests or requirements..."
                  rows="4"
                />
              </FormGroup>
            </FormSection>
          </div>

          <div>
            <FormSection highlight>
              <h3>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h6a1 1 0 100-2H9z" />
                </svg>
                Select Rooms
              </h3>

              <RoomSelection>
                {roomTypes.map(room => (
                  <div
                    key={room.id}
                    className={`room-item ${selectedRooms.find(r => r.id === room.id) ? 'selected' : ''}`}
                    onClick={() => handleRoomSelect(room)}
                  >
                    <div className="room-info">
                      <div className="room-name">{room.name}</div>
                      <div className="room-details">{room.description}</div>
                    </div>
                    <div className="room-price">${room.price}/night</div>
                  </div>
                ))}
              </RoomSelection>

              {errors.rooms && <ErrorMessage>{errors.rooms}</ErrorMessage>}
            </FormSection>

            <BookingSummary>
              <h3>Booking Summary</h3>

              {formData.checkIn && formData.checkOut && (
                <>
                  <div className="summary-item">
                    <span>Check-in</span>
                    <span>{new Date(formData.checkIn).toLocaleDateString()}</span>
                  </div>
                  <div className="summary-item">
                    <span>Check-out</span>
                    <span>{new Date(formData.checkOut).toLocaleDateString()}</span>
                  </div>
                  <div className="summary-item">
                    <span>Nights</span>
                    <span>
                      {Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24))}
                    </span>
                  </div>
                </>
              )}

              {selectedRooms.map(room => (
                <div key={room.id} className="summary-item">
                  <span>{room.name}</span>
                  <span>${room.price}/night</span>
                </div>
              ))}

              <div className="summary-item total">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </BookingSummary>
          </div>
        </BookingFormContainer>

        {errors.submit && (
          <ErrorMessage style={{ justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.submit}
          </ErrorMessage>
        )}

        <ActionButtons>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/rooms')}
          >
            Back to Rooms
          </Button>
          <Button
            type="submit"
            disabled={loading || selectedRooms.length === 0}
            className={loading ? 'loading' : ''}
          >
            {loading ? 'Processing...' : `Complete Booking - $${total.toLocaleString()}`}
          </Button>
        </ActionButtons>
      </BookingCard>
    </BookingContainer>
  );
}

export default BookingForm;
