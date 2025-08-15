import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';

export const ProgressBar = ({
  now = 0,
  min = 0,
  max = 100,
  label,
  variant,
  striped = false,
  animated = false,
  visuallyHidden = false,
  ariaLabel,
  ariaDescribedBy,
  ...props
}) => {
  const percentage = Math.round((now / max) * 100);
  const defaultLabel = label || `${percentage}%`;
  
  return (
    <BootstrapProgressBar
      now={now}
      min={min}
      max={max}
      label={visuallyHidden ? undefined : defaultLabel}
      variant={variant}
      striped={striped}
      animated={animated}
      visuallyHidden={visuallyHidden}
      role="progressbar"
      aria-valuenow={now}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-label={ariaLabel || `Progress ${percentage} percent`}
      aria-describedby={ariaDescribedBy}
      {...props}
    />
  );
};

ProgressBar.propTypes = {
  now: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string,
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
  striped: PropTypes.bool,
  animated: PropTypes.bool,
  visuallyHidden: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
};