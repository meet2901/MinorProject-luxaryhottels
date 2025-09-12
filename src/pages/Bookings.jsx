import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const BookingsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BookingsHeader = styled.div`
  margin-bottom: 2rem;
`;

const BookingsTitle = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const BookingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BookingCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const BookingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${props => {
    switch(props.status) {
      case 'confirmed': return '#e6f7f2';
      case 'pending': return '#fff8e6';
      case 'cancelled': return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  border-bottom: 1px solid #eee;
`;

const BookingStatus = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${props => {
    switch(props.status) {
      case 'confirmed': return '#16a085';
      case 'pending': return '#f39c12';
      case 'cancelled': return '#e74c3c';
      default: return '#95a5a6';
    }
  }};
  color: white;
`;

const BookingDetails = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const BookingInfo = styled.div`
  h3 {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  
  p {
    font-size: 1rem;
    color: #333;
    font-weight: 500;
  }
`;

const BookingActions = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const EmptyBookings = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  
  h3 {
    margin-bottom: 1rem;
    color: #333;
  }
  
  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

// Sample booking data (in a real app, this would come from an API)
const sampleBookings = [
  {
    id: 'B001',
    roomName: 'Deluxe King Room',
    checkIn: '2023-09-15',
    checkOut: '2023-09-18',
    guests: 2,
    totalPrice: 597,
    status: 'confirmed',
    bookingDate: '2023-08-20'
  },
  {
    id: 'B002',
    roomName: 'Executive Suite',
    checkIn: '2023-10-05',
    checkOut: '2023-10-10',
    guests: 2,
    totalPrice: 1745,
    status: 'pending',
    bookingDate: '2023-09-01'
  },
  {
    id: 'B003',
    roomName: 'Family Room',
    checkIn: '2023-08-01',
    checkOut: '2023-08-05',
    guests: 4,
    totalPrice: 996,
    status: 'cancelled',
    bookingDate: '2023-07-15'
  }
];

function Bookings() {
  const [bookings, setBookings] = useState(sampleBookings);
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const cancelBooking = (bookingId) => {
    setBookings(prevBookings => 
      prevBookings.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: 'cancelled' } 
          : booking
      )
    );
  };
  
  return (
    <BookingsContainer>
      <BookingsHeader>
        <BookingsTitle>My Bookings</BookingsTitle>
      </BookingsHeader>
      
      {bookings.length > 0 ? (
        <BookingsList>
          {bookings.map(booking => (
            <BookingCard key={booking.id}>
              <BookingHeader status={booking.status}>
                <h2>Booking #{booking.id}</h2>
                <BookingStatus status={booking.status}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </BookingStatus>
              </BookingHeader>
              
              <BookingDetails>
                <BookingInfo>
                  <h3>Room</h3>
                  <p>{booking.roomName}</p>
                </BookingInfo>
                
                <BookingInfo>
                  <h3>Check-in</h3>
                  <p>{formatDate(booking.checkIn)}</p>
                </BookingInfo>
                
                <BookingInfo>
                  <h3>Check-out</h3>
                  <p>{formatDate(booking.checkOut)}</p>
                </BookingInfo>
                
                <BookingInfo>
                  <h3>Guests</h3>
                  <p>{booking.guests}</p>
                </BookingInfo>
                
                <BookingInfo>
                  <h3>Total Price</h3>
                  <p>${booking.totalPrice}</p>
                </BookingInfo>
                
                <BookingInfo>
                  <h3>Booking Date</h3>
                  <p>{formatDate(booking.bookingDate)}</p>
                </BookingInfo>
              </BookingDetails>
              
              <BookingActions>
                {booking.status === 'confirmed' && (
                  <Button variant="outline" onClick={() => cancelBooking(booking.id)}>Cancel Booking</Button>
                )}
                <Button>View Details</Button>
              </BookingActions>
            </BookingCard>
          ))}
        </BookingsList>
      ) : (
        <EmptyBookings>
          <h3>No Bookings Found</h3>
          <p>You haven't made any bookings yet. Start by exploring our available rooms.</p>
          <Button>Browse Rooms</Button>
        </EmptyBookings>
      )}
    </BookingsContainer>
  );
}

export default Bookings;