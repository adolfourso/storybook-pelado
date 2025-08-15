import React from 'react';
import PropTypes from 'prop-types';
import './EducButton.css';

export const EducButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  color = 'blue',
  disabled = false,
  loading = false,
  fullWidth = false,
  rounded = false,
  shadow = true,
  onClick,
  href,
  target,
  type = 'button',
  className = '',
  ...props
}) => {
  // Determine if it should render as link or button
  const isLink = !!href;
  const Component = isLink ? 'a' : 'button';

  // Build CSS classes
  const classes = [
    'educ-button',
    `educ-button--${variant}`,
    `educ-button--${size}`,
    `educ-button--${color}`,
    disabled && 'educ-button--disabled',
    loading && 'educ-button--loading',
    fullWidth && 'educ-button--full-width',
    rounded && 'educ-button--rounded',
    shadow && 'educ-button--shadow',
    className
  ].filter(Boolean).join(' ');

  // Handle click with loading state
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  const buttonProps = {
    className: classes,
    onClick: handleClick,
    disabled: disabled || loading,
    'aria-disabled': disabled || loading,
    ...props
  };

  if (isLink) {
    return (
      <Component
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        role="button"
        {...buttonProps}
      >
        {loading && (
          <span className="educ-button__spinner" aria-hidden="true">
            ⟲
          </span>
        )}
        <span className={`educ-button__content ${loading ? 'educ-button__content--loading' : ''}`}>
          {children}
        </span>
      </Component>
    );
  }

  return (
    <Component
      type={type}
      {...buttonProps}
    >
      {loading && (
        <span className="educ-button__spinner" aria-hidden="true">
          ⟲
        </span>
      )}
      <span className={`educ-button__content ${loading ? 'educ-button__content--loading' : ''}`}>
        {children}
      </span>
    </Component>
  );
};

EducButton.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  
  /** Visual variant of the button */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'link']),
  
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  
  /** Color theme based on educ.ar palette */
  color: PropTypes.oneOf(['blue', 'orange', 'purple', 'red', 'gray']),
  
  /** Disabled state */
  disabled: PropTypes.bool,
  
  /** Loading state */
  loading: PropTypes.bool,
  
  /** Full width button */
  fullWidth: PropTypes.bool,
  
  /** Rounded corners */
  rounded: PropTypes.bool,
  
  /** Drop shadow effect */
  shadow: PropTypes.bool,
  
  /** Click handler */
  onClick: PropTypes.func,
  
  /** Link URL (renders as anchor tag) */
  href: PropTypes.string,
  
  /** Link target */
  target: PropTypes.string,
  
  /** Button type for form buttons */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  
  /** Additional CSS classes */
  className: PropTypes.string
};