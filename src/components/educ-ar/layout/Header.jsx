import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export const EducHeader = ({
  logo = 'educ.ar',
  logoUrl = '/',
  menuItems = [
    { label: 'Recursos', url: '/recursos', hasDropdown: true },
    { label: 'Alfabetización', url: '/alfabetizacion' },
    { label: 'Inteligencia Artificial', url: '/ia' },
    { label: 'Cursos', url: '/cursos' },
    { label: 'Noticias', url: '/noticias' }
  ],
  showSearch = true,
  searchPlaceholder = 'Buscar recursos...',
  onSearch,
  variant = 'default',
  sticky = false,
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`
        educ-header 
        ${variant !== 'default' ? `educ-header--${variant}` : ''}
        ${sticky ? 'educ-header--sticky' : ''}
      `}
      {...props}
    >
      <div className="educ-header__container">
        {/* Logo */}
        <div className="educ-header__logo">
          <a href={logoUrl} className="educ-header__logo-link">
            {logo}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="educ-header__menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label="Alternar menú de navegación"
        >
          <span className="educ-header__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Navigation */}
        <nav 
          id="main-navigation"
          className={`educ-header__nav ${isMenuOpen ? 'educ-header__nav--open' : ''}`}
          role="navigation"
          aria-label="Navegación principal"
        >
          <ul className="educ-header__menu">
            {menuItems.map((item, index) => (
              <li key={index} className="educ-header__menu-item">
                <a 
                  href={item.url}
                  className={`
                    educ-header__menu-link
                    ${item.hasDropdown ? 'educ-header__menu-link--dropdown' : ''}
                  `}
                  aria-haspopup={item.hasDropdown ? 'true' : undefined}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="educ-header__dropdown-arrow" aria-hidden="true">
                      ▼
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Search */}
          {showSearch && (
            <div className="educ-header__search">
              <form onSubmit={handleSearch} className="educ-header__search-form">
                <input
                  type="search"
                  className="educ-header__search-input"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Buscar"
                />
                <button
                  type="submit"
                  className="educ-header__search-button"
                  aria-label="Realizar búsqueda"
                >
                  🔍
                </button>
              </form>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

EducHeader.propTypes = {
  logo: PropTypes.string,
  logoUrl: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      hasDropdown: PropTypes.bool
    })
  ),
  showSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  onSearch: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'minimal', 'dark']),
  sticky: PropTypes.bool
};