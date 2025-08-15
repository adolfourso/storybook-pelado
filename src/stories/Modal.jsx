import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

export const Modal = ({
  show = false,
  onHide,
  title,
  body,
  size,
  centered = false,
  backdrop = true,
  keyboard = true,
  primaryButton,
  secondaryButton,
  children,
  autoFocus = true,
  ariaLabel,
  ariaDescribedBy,
  ...props
}) => {
  const primaryButtonRef = useRef(null);
  const secondaryButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (show && autoFocus) {
      const timeoutId = setTimeout(() => {
        if (primaryButtonRef.current) {
          primaryButtonRef.current.focus();
        } else if (secondaryButtonRef.current) {
          secondaryButtonRef.current.focus();
        } else if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [show, autoFocus]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && keyboard && onHide) {
      event.preventDefault();
      onHide();
    }
  };

  const titleId = title ? `modal-title-${Math.random().toString(36).substr(2, 9)}` : undefined;
  const bodyId = body ? `modal-body-${Math.random().toString(36).substr(2, 9)}` : undefined;

  return (
    <BootstrapModal
      ref={modalRef}
      show={show}
      onHide={onHide}
      size={size}
      centered={centered}
      backdrop={backdrop}
      keyboard={keyboard}
      onKeyDown={handleKeyDown}
      aria-labelledby={ariaLabel ? undefined : titleId}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy || bodyId}
      role="dialog"
      aria-modal="true"
      {...props}
    >
      {title && (
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title id={titleId}>
            {title}
          </BootstrapModal.Title>
        </BootstrapModal.Header>
      )}
      
      <BootstrapModal.Body id={bodyId}>
        {body && <p>{body}</p>}
        {children}
      </BootstrapModal.Body>
      
      {(primaryButton || secondaryButton) && (
        <BootstrapModal.Footer>
          {secondaryButton && (
            <Button 
              ref={secondaryButtonRef}
              variant="secondary" 
              onClick={onHide}
            >
              {secondaryButton}
            </Button>
          )}
          {primaryButton && (
            <Button 
              ref={primaryButtonRef}
              variant="primary" 
              onClick={onHide}
            >
              {primaryButton}
            </Button>
          )}
        </BootstrapModal.Footer>
      )}
    </BootstrapModal>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  centered: PropTypes.bool,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
  keyboard: PropTypes.bool,
  primaryButton: PropTypes.string,
  secondaryButton: PropTypes.string,
  children: PropTypes.node,
  autoFocus: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
};