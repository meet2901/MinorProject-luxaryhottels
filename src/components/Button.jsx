import styled from 'styled-components';

const ButtonStyles = styled.button`
  padding: ${props => props.size === 'small' ? '0.5rem 1rem' : props.size === 'large' ? '1rem 2rem' : '0.75rem 1.5rem'};
  background-color: ${props => props.variant === 'outline' ? 'transparent' : props.variant === 'secondary' ? '#FF9A3C' : '#ED6D05'};
  color: ${props => props.variant === 'outline' ? '#ED6D05' : '#fff'};
  border: ${props => props.variant === 'outline' ? '2px solid #ED6D05' : 'none'};
  border-radius: 4px;
  font-size: ${props => props.size === 'small' ? '0.875rem' : props.size === 'large' ? '1.125rem' : '1rem'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${props => props.variant === 'outline' ? 'rgba(237, 109, 5, 0.1)' : props.variant === 'secondary' ? '#FFA959' : '#D66104'};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    transform: none;
  }
`;

function Button({ children, variant = 'primary', size = 'medium', type = 'button', disabled = false, onClick, ...props }) {
  return (
    <ButtonStyles 
      variant={variant}
      size={size}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyles>
  );
}

export default Button;