import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ED6D05;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    
    &.active {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

function Header() {
  const path = window.location.pathname;
  
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>Stay<span style={{ color: 'black' }}>Easy</span></Logo>
      </Link>
      <NavLinks>
        <Link to="/" className={path === '/' ? 'active' : ''}>What's Included</Link>
        <Link to="/rooms" className={path === '/rooms' ? 'active' : ''}>Stories</Link>
        <Link to="/about" className={path === '/about' ? 'active' : ''}>Our Why</Link>
        <Link to="/contact" className={path === '/contact' ? 'active' : ''}>FAQs</Link>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;