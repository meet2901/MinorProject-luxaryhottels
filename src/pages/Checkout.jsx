import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--space-3xl);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const CheckoutHeader = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  margin-bottom: var(--space-2xl);

  h1 {
    color: #333;
    margin-bottom: var(--space-md);
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    font-size: 1.125rem;
  }
`;

const CheckoutForm = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;

  @media (max-width: 768px) {
    padding: var(--space-xl);
  }
`;

const FormSection = styled.div`
  margin-bottom: var(--space-2xl);

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-lg);
    font-size: 1.375rem;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 20px;
      height: 20px;
      color: #ED6D05;
    }
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
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
  }
`;

const Input = styled.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
  }

  &.error {
    border-color: #e74c3c;
  }
`;

const Select = styled.select`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
  }
`;

const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
`;

const PaymentMethod = styled.div`
  border: 2px solid ${props => props.selected ? '#ED6D05' : '#e9ecef'};
  border-radius: 8px;
  padding: var(--space-lg);
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.selected ? 'rgba(237, 109, 5, 0.05)' : 'white'};

  &:hover {
    border-color: #ED6D05;
  }

  .method-name {
    font-weight: 600;
    color: #333;
    margin-bottom: var(--space-xs);
  }

  .method-desc {
    color: #666;
    font-size: 0.875rem;
  }
`;

const CouponSection = styled.div`
  border: 2px dashed #e9ecef;
  border-radius: 8px;
  padding: var(--space-lg);
  background: #f8f9fa;
`;

const CouponInput = styled.div`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const OrderSummary = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  height: fit-content;
  position: sticky;
  top: var(--space-xl);

  @media (max-width: 1024px) {
    position: static;
  }

  @media (max-width: 768px) {
    padding: var(--space-xl);
  }
`;

const SummaryTitle = styled.h3`
  color: #333;
  margin-bottom: var(--space-lg);
  font-size: 1.375rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    font-weight: 600;
    font-size: 1.125rem;
    color: #ED6D05;
    padding-top: var(--space-lg);
    border-top: 2px solid #e9ecef;
    margin-top: var(--space-md);
  }

  .item-name {
    color: #666;
  }

  .item-price {
    font-weight: 600;
    color: #333;
  }
`;

const TotalAmount = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #16a085;
  text-align: center;
  margin: var(--space-lg) 0;
  padding: var(--space-lg);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
`;

const CheckoutActions = styled.div`
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-2xl);

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`;

const SuccessModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-3xl);
  max-width: 500px;
  width: 90%;
  text-align: center;

  h2 {
    color: #16a085;
    margin-bottom: var(--space-lg);
  }

  p {
    color: #666;
    margin-bottom: var(--space-xl);
    line-height: 1.6;
  }

  .booking-ref {
    background: #f8f9fa;
    padding: var(--space-lg);
    border-radius: 8px;
    margin: var(--space-lg) 0;
    font-family: monospace;
    font-weight: 600;
    color: #ED6D05;
  }
`;

function Checkout() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartItems, getCartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    phone: '',
    checkIn: '',
    checkOut: '',
    specialRequests: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    couponCode: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Available coupons
  const coupons = {
    'WELCOME10': { discount: 10, type: 'percentage', description: '10% off your first booking' },
    'SUMMER20': { discount: 20, type: 'percentage', description: '20% off summer bookings' },
    'FAMILY15': { discount: 15, type: 'percentage', description: '15% off family bookings' },
    'FLASH50': { discount: 50, type: 'fixed', description: '₹50 off any booking' }
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }

    // Set default dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    setFormData(prev => ({
      ...prev,
      checkIn: today.toISOString().split('T')[0],
      checkOut: tomorrow.toISOString().split('T')[0]
    }));
  }, [cartItems, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const applyCoupon = () => {
    const code = formData.couponCode.toUpperCase();
    if (coupons[code]) {
      setAppliedCoupon({ code, ...coupons[code] });
      setFormData(prev => ({ ...prev, couponCode: '' }));
    } else {
      setErrors(prev => ({ ...prev, coupon: 'Invalid coupon code' }));
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;

    const subtotal = getCartTotal();
    if (appliedCoupon.type === 'percentage') {
      return (subtotal * appliedCoupon.discount) / 100;
    } else {
      return Math.min(appliedCoupon.discount, subtotal);
    }
  };

  const calculateTotal = () => {
    const subtotal = getCartTotal();
    const discount = calculateDiscount();
    return subtotal - discount;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';

    if (formData.checkIn && formData.checkOut) {
      if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
        newErrors.checkOut = 'Check-out must be after check-in';
      }
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber.replace(/\s/g, '')) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Generate booking reference
      const ref = 'BK' + Date.now();
      setBookingRef(ref);
      setShowSuccess(true);

      // Clear cart after successful booking
      clearCart();

    } catch (error) {
      setErrors({ submit: 'Payment failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
    navigate('/bookings');
  };

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <>
      <CheckoutContainer>
        <CheckoutHeader>
          <h1>Checkout</h1>
          <p>Complete your booking and secure your stay</p>
        </CheckoutHeader>

        <CheckoutForm>
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
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
              </FormGroup>
            </FormGrid>
          </FormSection>

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
            </FormGrid>

            <FormGroup>
              <Label>Special Requests</Label>
              <Input
                as="textarea"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requests or requirements..."
                rows="3"
                style={{ resize: 'vertical', minHeight: '80px' }}
              />
            </FormGroup>
          </FormSection>

          <FormSection>
            <h3>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h6a1 1 0 100-2H9z" />
              </svg>
              Payment Method
            </h3>

            <PaymentMethods>
              <PaymentMethod
                selected={formData.paymentMethod === 'card'}
                onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
              >
                <div className="method-name">💳 Credit Card</div>
                <div className="method-desc">Visa, MasterCard, American Express</div>
              </PaymentMethod>

              <PaymentMethod
                selected={formData.paymentMethod === 'paypal'}
                onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'paypal' }))}
              >
                <div className="method-name">🅿️ PayPal</div>
                <div className="method-desc">Pay with your PayPal account</div>
              </PaymentMethod>
            </PaymentMethods>

            {formData.paymentMethod === 'card' && (
              <FormGrid style={{ marginTop: 'var(--space-lg)' }}>
                <FormGroup>
                  <Label>Card Number</Label>
                  <Input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className={errors.cardNumber ? 'error' : ''}
                  />
                  {errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Expiry Date</Label>
                  <Input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className={errors.expiryDate ? 'error' : ''}
                  />
                  {errors.expiryDate && <ErrorMessage>{errors.expiryDate}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>CVV</Label>
                  <Input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    className={errors.cvv ? 'error' : ''}
                  />
                  {errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Cardholder Name</Label>
                  <Input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.cardName ? 'error' : ''}
                  />
                  {errors.cardName && <ErrorMessage>{errors.cardName}</ErrorMessage>}
                </FormGroup>
              </FormGrid>
            )}
          </FormSection>

          <FormSection>
            <CouponSection>
              <h4 style={{ marginBottom: 'var(--space-md)', color: '#333' }}>Have a coupon?</h4>
              {appliedCoupon ? (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>{appliedCoupon.code}</strong> - {appliedCoupon.description}
                  </div>
                  <Button variant="outline" size="small" onClick={removeCoupon}>
                    Remove
                  </Button>
                </div>
              ) : (
                <CouponInput>
                  <Input
                    type="text"
                    name="couponCode"
                    value={formData.couponCode}
                    onChange={handleChange}
                    placeholder="Enter coupon code"
                    style={{ flex: 1 }}
                  />
                  <Button onClick={applyCoupon} disabled={!formData.couponCode.trim()}>
                    Apply
                  </Button>
                </CouponInput>
              )}
              {errors.coupon && <ErrorMessage>{errors.coupon}</ErrorMessage>}
            </CouponSection>
          </FormSection>
        </CheckoutForm>

        <OrderSummary>
          <SummaryTitle>Order Summary</SummaryTitle>

          {cartItems.map(item => (
            <SummaryItem key={item.cartId}>
              <span className="item-name">{item.name}</span>
              <span className="item-price">₹{item.price}</span>
            </SummaryItem>
          ))}

          {appliedCoupon && (
            <SummaryItem>
              <span className="item-name">Discount ({appliedCoupon.code})</span>
              <span className="item-price" style={{ color: '#e74c3c' }}>
                -₹{calculateDiscount().toFixed(2)}
              </span>
            </SummaryItem>
          )}

          <SummaryItem>
            <span className="item-name">Subtotal</span>
            <span className="item-price">₹{getCartTotal().toFixed(2)}</span>
          </SummaryItem>

          <TotalAmount>
            Total: ₹{calculateTotal().toFixed(2)}
          </TotalAmount>

          {errors.submit && (
            <ErrorMessage style={{ justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
              {errors.submit}
            </ErrorMessage>
          )}

          <CheckoutActions>
            <Button
              variant="outline"
              onClick={() => navigate('/cart')}
              style={{ flex: 1 }}
            >
              Back to Cart
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={loading}
              style={{ flex: 1 }}
            >
              {loading ? 'Processing...' : `Complete Payment - ₹${calculateTotal().toFixed(2)}`}
            </Button>
          </CheckoutActions>
        </OrderSummary>
      </CheckoutContainer>

      {showSuccess && (
        <SuccessModal>
          <ModalContent>
            <h2>🎉 Booking Confirmed!</h2>
            <p>
              Thank you for your booking! Your reservation has been successfully processed
              and a confirmation email has been sent to your email address.
            </p>
            <div className="booking-ref">
              Booking Reference: {bookingRef}
            </div>
            <Button onClick={closeSuccessModal}>
              View My Bookings
            </Button>
          </ModalContent>
        </SuccessModal>
      )}
    </>
  );
}

export default Checkout;
