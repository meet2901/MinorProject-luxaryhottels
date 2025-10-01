import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('bookingCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookingCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (room) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === room.id);
      if (existing) {
        // If room already in cart, don't add duplicate
        return prev;
      }
      return [...prev, { ...room, cartId: Date.now() }];
    });
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getCartCount = () => {
    return cartItems.length;
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
