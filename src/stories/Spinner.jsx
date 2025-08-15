import React from 'react';
import PropTypes from 'prop-types';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

export const Spinner = ({
  animation = 'border',
  variant,
  size,
  role = 'status',
  children,
  ariaLabel,
  ariaLive = 'polite',
  ...props
}) => {
  const defaultText = children || 'Loading...';
  
  return (
    <BootstrapSpinner
      animation={animation}
      variant={variant}
      size={size}
      role={role}
      aria-label={ariaLabel || defaultText}
      aria-live={ariaLive}
      {...props}
    >
      <span className="visually-hidden">{defaultText}</span>
    </BootstrapSpinner>
  );
};

Spinner.propTypes = {
  animation: PropTypes.oneOf(['border', 'grow']),
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
  size: PropTypes.oneOf(['sm']),
  role: PropTypes.string,
  children: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLive: PropTypes.oneOf(['polite', 'assertive', 'off']),
};