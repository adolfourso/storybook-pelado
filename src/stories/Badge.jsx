import React from 'react';
import PropTypes from 'prop-types';
import { Badge as BootstrapBadge } from 'react-bootstrap';

export const Badge = ({
  variant = 'primary',
  pill = false,
  children,
  ariaLabel,
  role = 'status',
  ...props
}) => {
  return (
    <BootstrapBadge
      bg={variant}
      pill={pill}
      role={role}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      {...props}
    >
      {children}
    </BootstrapBadge>
  );
};

Badge.propTypes = {
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
  pill: PropTypes.bool,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
  role: PropTypes.string,
};