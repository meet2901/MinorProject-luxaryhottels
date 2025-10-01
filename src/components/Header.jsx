import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSignOutAlt, FaEdit, FaTrash, FaUpload } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const HeaderWrapper = styled.header`
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.8));
  backdrop-filter: blur(10px);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(20, 20, 20, 0.9));
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(45deg, #ff9800, #ff5722);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 10px rgba(255, 152, 0, 0.3);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #ff9800, #ff5722);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
  
  & > li {
    animation: ${fadeIn} 0.5s ease-out;
    animation-fill-mode: both;
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }
  }
`;

const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #ff9800, #ff5722);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover:after {
    width: 100%;
  }

  &:hover > ul {
    display: block;
    animation: ${fadeIn} 0.3s ease-out;
  }
  
  a {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #ff9800;
    }
  }
`;

const Dropdown = styled.ul`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background: rgba(20, 20, 20, 0.95);
  top: 100%;
  left: 0;
  padding: 0.8rem 1.2rem;
  list-style: none;
  border-radius: 0.5rem;
  min-width: 200px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transform-origin: top center;
  z-index: 100;

  li {
    padding: 0.7rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
    animation: ${slideIn} 0.3s ease-out;
    animation-fill-mode: both;
    
    &:nth-child(1) { animation-delay: 0.05s; }
    &:nth-child(2) { animation-delay: 0.1s; }
    &:nth-child(3) { animation-delay: 0.15s; }
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      color: #ff9800;
      transform: translateX(5px);
    }
    
    a {
      color: white;
      text-decoration: none;
      display: block;
      transition: all 0.3s ease;
      
      &:hover {
        color: #ff9800;
      }
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  animation: ${fadeIn} 0.5s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
`;

const CartIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    color: #ff9800;
  }
  
  &:active {
    transform: scale(0.95);
  }

  .badge {
    position: absolute;
    top: -8px;
    right: -10px;
    background: linear-gradient(45deg, #ff5722, #ff9800);
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
    border-radius: 50%;
    padding: 0.2rem 0.4rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    animation: ${pulse} 2s infinite;
  }
`;

const UserMenu = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    color: #ff9800;
  }
  
  &:active {
    transform: scale(0.95);
  }

  .dropdown {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: absolute;
    right: 0;
    top: 120%;
    background: rgba(20, 20, 20, 0.95);
    border-radius: 0.5rem;
    padding: 0.8rem 1.2rem;
    list-style: none;
    min-width: 200px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 100;
    animation: ${fadeIn} 0.3s ease-out;

    li {
      padding: 0.7rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      animation: ${slideIn} 0.3s ease-out;
      animation-fill-mode: both;
      
      &:nth-child(1) { animation-delay: 0.05s; }
      &:nth-child(2) { animation-delay: 0.1s; }
      &:nth-child(3) { animation-delay: 0.15s; }
      &:nth-child(4) { animation-delay: 0.2s; }
      
      &:last-child {
        border-bottom: none;
      }
      
      &:hover {
        color: #ff9800;
        transform: translateX(5px);
      }
      
      a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        transition: all 0.3s ease;
        
        &:hover {
          color: #ff9800;
        }
      }
    }
    
    .user-profile {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding-bottom: 0.8rem;
      margin-bottom: 0.8rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #ff9800;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      
      .user-info {
        display: flex;
        flex-direction: column;
        
        .name {
          font-weight: bold;
          font-size: 0.9rem;
        }
        
        .email {
          font-size: 0.75rem;
          opacity: 0.7;
        }
      }
    }
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff9800;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const slideInRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const MobileNavPanel = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.98), rgba(0, 0, 0, 0.98));
  height: 100vh;
  width: 280px;
  padding: 2rem;
  z-index: 1500;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  animation: ${slideInRight} 0.3s ease-out;
  overflow-y: auto;

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      color: #ff9800;
      transform: scale(1.1);
    }
  }
  
  .mobile-user-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1rem;
    
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #ff9800;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .user-info {
      display: flex;
      flex-direction: column;
      
      .name {
        font-weight: bold;
        font-size: 1rem;
      }
      
      .email {
        font-size: 0.8rem;
        opacity: 0.7;
      }
    }
  }

  a {
    color: white;
    text-decoration: none;
    padding: 0.8rem 0;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    animation: ${slideIn} 0.3s ease-out;
    animation-fill-mode: both;
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.2s; }
    &:nth-child(4) { animation-delay: 0.25s; }
    &:nth-child(5) { animation-delay: 0.3s; }
    &:nth-child(6) { animation-delay: 0.35s; }
    &:nth-child(7) { animation-delay: 0.4s; }
    &:nth-child(8) { animation-delay: 0.45s; }
    &:nth-child(9) { animation-delay: 0.5s; }
    &:nth-child(10) { animation-delay: 0.55s; }
    &:nth-child(11) { animation-delay: 0.6s; }
    
    &:hover {
      color: #ff9800;
      transform: translateX(5px);
    }
  }
  
  .mobile-cart {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 1rem;
    padding: 0.8rem 0;
    position: relative;
    
    .badge {
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(45deg, #ff5722, #ff9800);
      color: white;
      font-size: 0.7rem;
      font-weight: bold;
      border-radius: 50%;
      padding: 0.2rem 0.4rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = !!user;
  
  // Get cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("bookingCart")) || [];
  const cartCount = cartItems.length;

  // close user dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-menu")) {
        setUserDropdownOpen(false);
      }
      if (!e.target.closest(".cart-menu")) {
        setCartOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  
  const handleEditProfile = () => {
    navigate("/profile/edit");
  };
  
  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // In a real app, you would make an API call here
      localStorage.removeItem("user");
      navigate("/signup");
    }
  };
  
  const handleImageUpload = () => {
    navigate("/profile/upload-image");
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <HeaderWrapper>
      <Nav>
        <Logo onClick={() => navigate("/")}>🏨 Luxury Hotel</Logo>

        <NavLinks>
          <NavItem>
            <Link to="/">
              Home
            </Link>
          </NavItem>

          <NavItem
            onMouseEnter={() => toggleMenu("amenities")}
            onMouseLeave={() => setOpenMenu(null)}
            aria-haspopup="true"
            aria-expanded={openMenu === "amenities"}
          >
            Amenities
            <Dropdown isOpen={openMenu === "amenities"}>
              <li>
                <Link to="/rooms"><FaShoppingCart size={14} style={{opacity: 0.7}} /> Rooms & Suites</Link>
              </li>
              <li>
                <Link to="/spa"><FaShoppingCart size={14} style={{opacity: 0.7}} /> Spa & Wellness</Link>
              </li>
              <li>
                <Link to="/restaurant"><FaShoppingCart size={14} style={{opacity: 0.7}} /> Restaurant</Link>
              </li>
            </Dropdown>
          </NavItem>

          <NavItem
            onMouseEnter={() => toggleMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
            aria-haspopup="true"
            aria-expanded={openMenu === "services"}
          >
            Services
            <Dropdown isOpen={openMenu === "services"}>
              <li>
                <Link to="/events"><FaShoppingCart size={14} style={{opacity: 0.7}} /> Events</Link>
              </li>
              <li>
                <Link to="/entertainment"><FaShoppingCart size={14} style={{opacity: 0.7}} /> Entertainment</Link>
              </li>
              <li>
                <Link to="/gallery"><FaShoppingCart size={14} style={{opacity: 0.7}} /> Gallery</Link>
              </li>
            </Dropdown>
          </NavItem>

          <NavItem
            onMouseEnter={() => toggleMenu("support")}
            onMouseLeave={() => setOpenMenu(null)}
            aria-haspopup="true"
            aria-expanded={openMenu === "support"}
          >
            Support
            <Dropdown isOpen={openMenu === "support"}>
              <li>
                <Link to="/about"><FaShoppingCart size={14} style={{opacity: 0.7}} /> About</Link>
              </li>
              <li>
                <Link to="/contact"><FaShoppingCart size={14} style={{opacity: 0.7}} /> Contact</Link>
              </li>
              <li>
                <Link to="/faqs"><FaShoppingCart size={14} style={{opacity: 0.7}} /> FAQs</Link>
              </li>
            </Dropdown>
          </NavItem>

          <NavItem>
            <Link to="/shop">
              Shop
            </Link>
          </NavItem>
        </NavLinks>

        <IconContainer>
          <CartIconWrapper className="cart-menu" onClick={() => setCartOpen(!cartOpen)}>
            <FaShoppingCart size={20} />
            {cartCount > 0 && <div className="badge">{cartCount}</div>}
            {cartOpen && (
              <Dropdown isOpen={true} style={{ right: 0, left: 'auto', minWidth: '250px' }}>
                <li style={{ fontWeight: 'bold', borderBottom: '2px solid rgba(255, 152, 0, 0.3)', paddingBottom: '10px', marginBottom: '10px' }}>
                  Your Cart ({cartCount} items)
                </li>
                {cartCount > 0 ? (
                  <>
                    {cartItems.slice(0, 2).map((item, index) => (
                      <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{item.name || 'Item'}</span>
                        <span style={{ color: '#ff9800' }}>${item.price || '0'}</span>
                      </li>
                    ))}
                    {cartCount > 2 && (
                      <li style={{ textAlign: 'center', fontStyle: 'italic', opacity: 0.7 }}>
                        +{cartCount - 2} more items
                      </li>
                    )}
                    <li style={{ marginTop: '10px', textAlign: 'center' }}>
                      <Link to="/cart" style={{ background: 'linear-gradient(45deg, #ff5722, #ff9800)', padding: '8px 15px', borderRadius: '20px', fontWeight: 'bold' }}>
                        View Cart
                      </Link>
                    </li>
                  </>
                ) : (
                  <li style={{ textAlign: 'center', padding: '10px 0' }}>
                    Your cart is empty
                  </li>
                )}
              </Dropdown>
            )}
          </CartIconWrapper>

          <UserMenu
            className="user-menu"
            isOpen={userDropdownOpen}
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          >
            <FaUser size={20} />
            <div className="dropdown">
              {isAuthenticated ? (
                <>
                  <div className="user-profile">
                    <div className="avatar">
                      <img src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'} alt={user.name} />
                    </div>
                    <div className="user-info">
                      <span className="name">{user.name}</span>
                      <span className="email">{user.email}</span>
                    </div>
                  </div>
                  <li onClick={handleEditProfile}>
                    <FaEdit size={14} /> Edit Profile
                  </li>
                  <li onClick={handleImageUpload}>
                    <FaUpload size={14} /> Upload Image
                  </li>
                  <li onClick={handleDeleteAccount}>
                    <FaTrash size={14} /> Delete Account
                  </li>
                  <li onClick={handleLogout}>
                    <FaSignOutAlt size={14} /> Logout
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">
                      <FaUser size={14} /> Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup">
                      <FaUser size={14} /> Signup
                    </Link>
                  </li>
                </>
              )}
            </div>
          </UserMenu>

          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </IconContainer>
      </Nav>

      {/* Mobile Nav */}
      <MobileNavPanel isOpen={mobileMenuOpen}>
        <div className="close-button" onClick={closeMobileMenu}>
          <FaTimes />
        </div>
        
        {isAuthenticated && (
          <div className="mobile-user-section">
            <div className="avatar">
              <img src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'} alt={user.name} />
            </div>
            <div className="user-info">
              <span className="name">{user.name}</span>
              <span className="email">{user.email}</span>
            </div>
          </div>
        )}
        
        <Link to="/" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> Home
        </Link>
        <Link to="/rooms" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> Rooms & Suites
        </Link>
        <Link to="/spa" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> Spa & Wellness
        </Link>
        <Link to="/restaurant" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> Restaurant
        </Link>
        <Link to="/events" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> Events
        </Link>
        <Link to="/entertainment" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> Entertainment
        </Link>
        <Link to="/gallery" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> Gallery
        </Link>
        <Link to="/shop" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> Shop
        </Link>
        <Link to="/about" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> About
        </Link>
        <Link to="/contact" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> Contact
        </Link>
        <Link to="/faqs" onClick={closeMobileMenu}>
          <FaShoppingCart size={16} style={{opacity: 0.7}} /> FAQs
        </Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/profile/edit" onClick={closeMobileMenu}>
              <FaEdit size={16} /> Edit Profile
            </Link>
            <Link to="/profile/upload-image" onClick={closeMobileMenu}>
              <FaUpload size={16} /> Upload Image
            </Link>
            <div onClick={handleLogout} style={{ color: 'white', padding: '0.8rem 0', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <FaSignOutAlt size={16} /> Logout
            </div>
          </>
        ) : (
          <>
            <Link to="/login" onClick={closeMobileMenu}>
              <FaUser size={16} /> Login
            </Link>
            <Link to="/signup" onClick={closeMobileMenu}>
              <FaUser size={16} /> Signup
            </Link>
          </>
        )}
        
        <div className="mobile-cart">
          <Link to="/cart" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <FaShoppingCart size={16} /> View Cart
          </Link>
          {cartCount > 0 && <div className="badge">{cartCount}</div>}
        </div>
      </MobileNavPanel>
    </HeaderWrapper>
  );
};

export default Header;
