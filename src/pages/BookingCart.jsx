import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const CartContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const CartHeader = styled.h1`
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CartItemCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const ItemPrice = styled.div`
  font-weight: bold;
  color: #16a085;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.25rem;
`;

function BookingCart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart();

  return (
    <CartContainer>
      <CartHeader>Your Booking Cart</CartHeader>
      {cartItems.length === 0 ? (
        <EmptyMessage>
          Your booking cart is empty. Please add rooms to book.
        </EmptyMessage>
      ) : (
        <>
          <CartList>
            {cartItems.map(item => (
              <CartItemCard key={item.cartId}>
                <ItemInfo>
                  <ItemTitle>{item.name}</ItemTitle>
                  <div>Price: ₹{item.price} / night</div>
                </ItemInfo>
                <ItemPrice>₹{item.price}</ItemPrice>
                <Button variant="outline" onClick={() => removeFromCart(item.cartId)}>
                  Remove
                </Button>
              </CartItemCard>
            ))}
          </CartList>
          <div style={{ marginTop: '2rem', textAlign: 'right', fontWeight: 'bold', fontSize: '1.25rem', color: '#16a085' }}>
            Total: ₹{getCartTotal()}
          </div>
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <Button onClick={clearCart} variant="outline" style={{ marginRight: '1rem' }}>
              Clear Cart
            </Button>
            <Button onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </CartContainer>
  );
}

export default BookingCart;
