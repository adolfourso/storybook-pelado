import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Alert as BootstrapAlert } from 'react-bootstrap';

export const Alert = ({
  variant = 'primary',
  dismissible = false,
  show = true,
  onClose,
  children,
  autoFocus = false,
  ariaLabel,
  ...props
}) => {
  const alertRef = useRef(null);

  useEffect(() => {
    if (show && autoFocus && alertRef.current) {
      alertRef.current.focus();
    }
  }, [show, autoFocus]);

  const getAriaRole = () => {
    if (variant === 'danger' || variant === 'warning') {
      return 'alert';
    }
    return 'status';
  };

  const getAriaLive = () => {
    if (variant === 'danger' || variant === 'warning') {
      return 'assertive';
    }
    return 'polite';
  };

  return (
    <BootstrapAlert
      ref={alertRef}
      variant={variant}
      dismissible={dismissible}
      show={show}
      onClose={onClose}
      role={getAriaRole()}
      aria-live={getAriaLive()}
      aria-label={ariaLabel}
      tabIndex={autoFocus ? 0 : undefined}
      {...props}
    >
      {children}
    </BootstrapAlert>
  );
};

Alert.propTypes = {
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
  dismissible: PropTypes.bool,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  autoFocus: PropTypes.bool,
  ariaLabel: PropTypes.string,
};