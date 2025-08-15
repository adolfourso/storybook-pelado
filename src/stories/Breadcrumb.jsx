import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap';

export const Breadcrumb = ({
  items = [],
  ariaLabel = 'breadcrumb navigation',
  ...props
}) => {
  const handleKeyDown = (event, item, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (item.onClick) {
        item.onClick(event);
      }
    }
  };

  return (
    <nav aria-label={ariaLabel}>
      <BootstrapBreadcrumb {...props}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <BootstrapBreadcrumb.Item
              key={index}
              href={item.href}
              active={item.active || isLast}
              onClick={item.onClick}
              onKeyDown={(e) => handleKeyDown(e, item, index)}
              tabIndex={item.onClick && !item.active && !isLast ? 0 : undefined}
              role={item.onClick && !item.href ? 'button' : undefined}
              aria-current={isLast ? 'page' : undefined}
            >
              {item.text}
            </BootstrapBreadcrumb.Item>
          );
        })}
      </BootstrapBreadcrumb>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
      active: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ),
  ariaLabel: PropTypes.string,
};