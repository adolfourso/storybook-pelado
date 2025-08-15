import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export const EducFooter = ({
  siteName = 'educ.ar',
  logo,
  institutionalLinks = [
    { label: 'Acerca de', url: '/acerca' },
    { label: 'Contacto', url: '/contacto' },
    { label: 'Términos y condiciones', url: '/terminos' },
    { label: 'Política de privacidad', url: '/privacidad' }
  ],
  quickLinks = [
    { label: 'Recursos educativos', url: '/recursos' },
    { label: 'Capacitación docente', url: '/capacitacion' },
    { label: 'Novedades', url: '/novedades' },
    { label: 'Calendario escolar', url: '/calendario' }
  ],
  socialLinks = [
    { platform: 'facebook', url: 'https://facebook.com/educargentina', icon: '📘' },
    { platform: 'twitter', url: 'https://twitter.com/educargentina', icon: '🐦' },
    { platform: 'youtube', url: 'https://youtube.com/educargentina', icon: '📺' },
    { platform: 'instagram', url: 'https://instagram.com/educargentina', icon: '📷' }
  ],
  contactInfo = {
    address: 'Pizzurno 935, Ciudad Autónoma de Buenos Aires',
    phone: '0800-222-EDUC (3382)',
    email: 'info@educ.ar'
  },
  showGovernmentBranding = true,
  copyrightYear = new Date().getFullYear(),
  variant = 'default',
  ...props
}) => {
  return (
    <footer 
      className={`
        educ-footer 
        ${variant !== 'default' ? `educ-footer--${variant}` : ''}
      `}
      {...props}
    >
      <div className="educ-footer__container">
        {/* Main footer content */}
        <div className="educ-footer__main">
          {/* Brand section */}
          <div className="educ-footer__brand">
            {logo ? (
              <div className="educ-footer__logo">
                {logo}
              </div>
            ) : (
              <h3 className="educ-footer__site-name">{siteName}</h3>
            )}
            
            {contactInfo && (
              <div className="educ-footer__contact">
                {contactInfo.address && (
                  <p className="educ-footer__contact-item">
                    <span className="educ-footer__contact-icon" aria-hidden="true">📍</span>
                    {contactInfo.address}
                  </p>
                )}
                {contactInfo.phone && (
                  <p className="educ-footer__contact-item">
                    <span className="educ-footer__contact-icon" aria-hidden="true">📞</span>
                    <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>
                      {contactInfo.phone}
                    </a>
                  </p>
                )}
                {contactInfo.email && (
                  <p className="educ-footer__contact-item">
                    <span className="educ-footer__contact-icon" aria-hidden="true">✉️</span>
                    <a href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Quick links */}
          {quickLinks && quickLinks.length > 0 && (
            <div className="educ-footer__section">
              <h4 className="educ-footer__section-title">Acceso rápido</h4>
              <ul className="educ-footer__links">
                {quickLinks.map((link, index) => (
                  <li key={index} className="educ-footer__link-item">
                    <a href={link.url} className="educ-footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Institutional links */}
          {institutionalLinks && institutionalLinks.length > 0 && (
            <div className="educ-footer__section">
              <h4 className="educ-footer__section-title">Institucional</h4>
              <ul className="educ-footer__links">
                {institutionalLinks.map((link, index) => (
                  <li key={index} className="educ-footer__link-item">
                    <a href={link.url} className="educ-footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social links */}
          {socialLinks && socialLinks.length > 0 && (
            <div className="educ-footer__section">
              <h4 className="educ-footer__section-title">Redes sociales</h4>
              <div className="educ-footer__social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="educ-footer__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${social.platform}`}
                    title={`Visitar ${social.platform}`}
                  >
                    <span className="educ-footer__social-icon" aria-hidden="true">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer bottom */}
        <div className="educ-footer__bottom">
          {showGovernmentBranding && (
            <div className="educ-footer__government">
              <span className="educ-footer__government-text">
                Ministerio de Educación - Presidencia de la Nación
              </span>
            </div>
          )}
          
          <div className="educ-footer__copyright">
            <p>
              © {copyrightYear} {siteName}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

EducFooter.propTypes = {
  siteName: PropTypes.string,
  logo: PropTypes.node,
  institutionalLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  quickLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ),
  contactInfo: PropTypes.shape({
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
  }),
  showGovernmentBranding: PropTypes.bool,
  copyrightYear: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'minimal', 'dark'])
};