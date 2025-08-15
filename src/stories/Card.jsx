import React from 'react';
import PropTypes from 'prop-types';
import { Card as BootstrapCard } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Card = ({
  title,
  subtitle,
  text,
  image,
  imagePosition = 'top',
  variant,
  border,
  children,
  onClick,
  ariaLabel,
  role,
  ...props
}) => {
  const ImageComponent = image && (
    <BootstrapCard.Img
      variant={imagePosition}
      src={image}
      alt={title || 'Card image'}
      role="img"
    />
  );

  const isInteractive = Boolean(onClick);

  const handleKeyDown = (event) => {
    if (isInteractive && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <BootstrapCard
      bg={variant}
      border={border}
      style={{ width: '18rem' }}
      onClick={isInteractive ? onClick : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      role={role || (isInteractive ? 'button' : undefined)}
      aria-label={ariaLabel || (isInteractive && title ? `Card: ${title}` : undefined)}
      {...props}
    >
      {imagePosition === 'top' && ImageComponent}
      
      <BootstrapCard.Body>
        {title && (
          <BootstrapCard.Title id={title ? `card-title-${Math.random().toString(36).substr(2, 9)}` : undefined}>
            {title}
          </BootstrapCard.Title>
        )}
        {subtitle && (
          <BootstrapCard.Subtitle className="mb-2 text-muted">
            {subtitle}
          </BootstrapCard.Subtitle>
        )}
        {text && <BootstrapCard.Text>{text}</BootstrapCard.Text>}
        {children}
      </BootstrapCard.Body>
      
      {imagePosition === 'bottom' && ImageComponent}
    </BootstrapCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  imagePosition: PropTypes.oneOf(['top', 'bottom']),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
  border: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  role: PropTypes.string,
};