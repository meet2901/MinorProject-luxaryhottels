import styled from 'styled-components';

const ButtonStyles = styled.button`
  padding: ${props => {
    if (props.size === 'small') return 'var(--space-sm) var(--space-md)';
    if (props.size === 'large') return 'var(--space-lg) var(--space-2xl)';
    if (props.size === 'xl') return 'var(--space-xl) var(--space-3xl)';
    return 'var(--space-md) var(--space-xl)';
  }};
  background-color: ${props => props.variant === 'outline' ? 'transparent' : props.variant === 'secondary' ? '#FF9A3C' : '#ED6D05'};
  color: ${props => props.variant === 'outline' ? '#ED6D05' : '#fff'};
  border: ${props => props.variant === 'outline' ? '2px solid #ED6D05' : 'none'};
  border-radius: 8px;
  font-size: ${props => {
    if (props.size === 'small') return '0.875rem';
    if (props.size === 'large') return '1.125rem';
    if (props.size === 'xl') return '1.25rem';
    return '1rem';
  }};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  min-height: ${props => {
    if (props.size === 'small') return '36px';
    if (props.size === 'large') return '56px';
    if (props.size === 'xl') return '64px';
    return '44px';
  }};
  line-height: 1.2;

  &:hover {
    background-color: ${props => props.variant === 'outline' ? 'rgba(237, 109, 5, 0.1)' : props.variant === 'secondary' ? '#FFA959' : '#D66104'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(237, 109, 5, 0.25);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(237, 109, 5, 0.15);
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.2);
  }

  /* Full width variant */
  ${props => props.fullWidth && `
    width: 100%;
    justify-content: center;
  `}

  /* Icon spacing */
  svg, .icon {
    width: 1.2em;
    height: 1.2em;
    flex-shrink: 0;
  }

  /* Loading state */
  &.loading {
    position: relative;
    color: transparent;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: ${props => {
      if (props.size === 'large') return '1rem';
      if (props.size === 'xl') return '1.125rem';
      return props.size === 'small' ? '0.8125rem' : '0.9375rem';
    }};

    padding: ${props => {
      if (props.size === 'small') return 'var(--space-xs) var(--space-sm)';
      if (props.size === 'large') return 'var(--space-md) var(--space-xl)';
      if (props.size === 'xl') return 'var(--space-lg) var(--space-2xl)';
      return 'var(--space-sm) var(--space-lg)';
    }};
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