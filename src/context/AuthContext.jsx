import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock authentication functions - replace with real API calls
  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock validation
      if (email === 'admin@hotel.com' && password === 'admin123') {
        const userData = {
          id: 1,
          email: 'admin@hotel.com',
          name: 'Admin User',
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          joinedDate: '2023-01-15',
          preferences: {
            language: 'en',
            currency: 'USD',
            theme: 'light'
          }
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return userData;
      } else if (email && password.length >= 6) {
        const userData = {
          id: Date.now(),
          email,
          name: email.split('@')[0],
          role: 'user',
          avatar: `https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face`,
          joinedDate: new Date().toISOString().split('T')[0],
          preferences: {
            language: 'en',
            currency: 'USD',
            theme: 'light'
          }
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return userData;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name, email, password, confirmPassword) => {
    try {
      setError(null);
      setLoading(true);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Validation
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      const userData = {
        id: Date.now(),
        email,
        name,
        role: 'user',
        avatar: `https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face`,
        joinedDate: new Date().toISOString().split('T')[0],
        preferences: {
          language: 'en',
          currency: 'USD',
          theme: 'light'
        }
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = async (updates) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock password reset email sent
      return { success: true, message: 'Password reset email sent' };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Initialize user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    updateProfile,
    resetPassword,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
