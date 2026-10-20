import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import { translations } from '../../data/translations';
import './Header.css';

export default function Header({
  currentPath,
  onNavigate,
  mobileMenuOpen,
  setMobileMenuOpen,
  lang = 'en',
  setLanguage
}) {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const t = translations.nav;

  const handleNavClick = (path, e) => {
    e.preventDefault();
    if (setMobileMenuOpen) setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header" role="banner">
      {/* Top Ticker - Desktop Only */}
      <div className="header-emergency-ticker desktop-only-ticker">
        <div className="container ticker-container">
          <div className="ticker-left">
            <span className="status-pill">
              <span className="pulse-dot"></span> {t.emergencyTicker[lang]}
            </span>
            <span className="ticker-location">{t.tickerLocation[lang]}</span>
          </div>
          <div className="ticker-right">
            <span className="ticker-badge">13 {lang === 'es' ? 'Años de Experiencia' : 'Years Experience'}</span>
            <a href={`tel:${companyData.phoneRaw}`} className="ticker-phone">
              {lang === 'es' ? 'Teléfono Directo:' : 'Direct Phone:'} <strong>{companyData.phone}</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="header-main-bar">
        <div className="container header-container">
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            className="header-brand"
            aria-label="EliKay Roofing Home"
          >
            <img
              src="/images/elikay/Elikay-Logo.jpeg"
              alt="EliKay Roofing LLC Logo"
              className="brand-logo-img"
              width="64"
              height="64"
            />
            <div className="brand-text">
              <span className="brand-name">ELIKAY ROOFING</span>
              <span className="brand-sub">{companyData.tagline[lang]}</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <a
              href="/"
              onClick={(e) => handleNavClick('/', e)}
              className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
            >
              {t.home[lang]}
            </a>

            {/* Services Dropdown */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`nav-link dropdown-toggle ${companyData.services.some(s => `/${s.slug}` === currentPath) ? 'active' : ''}`}
                aria-expanded={servicesDropdownOpen}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                {t.services[lang]}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="dropdown-chevron">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    {companyData.services.map((svc) => (
                      <a
                        key={svc.slug}
                        href={`/${svc.slug}`}
                        onClick={(e) => handleNavClick(`/${svc.slug}`, e)}
                        className={`dropdown-item ${currentPath === `/${svc.slug}` ? 'active' : ''}`}
                      >
                        <span className="item-title">{svc.title[lang]}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/about-us"
              onClick={(e) => handleNavClick('/about-us', e)}
              className={`nav-link ${currentPath === '/about-us' ? 'active' : ''}`}
            >
              {t.about[lang]}
            </a>

            {/* Service Areas Dropdown */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setAreasDropdownOpen(true)}
              onMouseLeave={() => setAreasDropdownOpen(false)}
            >
              <button
                className={`nav-link dropdown-toggle ${currentPath === '/service-areas' || companyData.serviceAreas.some(a => `/${a.slug}` === currentPath) ? 'active' : ''}`}
                aria-expanded={areasDropdownOpen}
                onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
              >
                {t.serviceAreas[lang]}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="dropdown-chevron">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {areasDropdownOpen && (
                <div className="dropdown-menu dropdown-menu-areas">
                  <div className="dropdown-grid">
                    <a
                      href="/service-areas"
                      onClick={(e) => handleNavClick('/service-areas', e)}
                      className={`dropdown-item dropdown-item-all ${currentPath === '/service-areas' ? 'active' : ''}`}
                    >
                      <span className="item-title">★ {lang === 'es' ? 'Todas las Áreas de Texas' : 'All Texas Service Areas'}</span>
                    </a>
                    {companyData.serviceAreas.map((area) => (
                      <a
                        key={area.slug}
                        href={`/${area.slug}`}
                        onClick={(e) => handleNavClick(`/${area.slug}`, e)}
                        className={`dropdown-item ${currentPath === `/${area.slug}` ? 'active' : ''}`}
                      >
                        <span className="item-title">{area.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/gallery"
              onClick={(e) => handleNavClick('/gallery', e)}
              className={`nav-link ${currentPath === '/gallery' ? 'active' : ''}`}
            >
              {t.gallery[lang]}
            </a>

            <a
              href="/blog"
              onClick={(e) => handleNavClick('/blog', e)}
              className={`nav-link ${currentPath.startsWith('/blog') ? 'active' : ''}`}
            >
              {t.guides[lang]}
            </a>

            <a
              href="/contact-us"
              onClick={(e) => handleNavClick('/contact-us', e)}
              className={`nav-link ${currentPath === '/contact-us' ? 'active' : ''}`}
            >
              {t.contact[lang]}
            </a>
          </nav>

          {/* Action CTA & Language Toggle */}
          <div className="header-actions">
            {/* Bilingual Toggle (EN / ES) */}
            <div className="lang-switcher" aria-label="Language selection">
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active-lang' : ''}`}
                onClick={() => setLanguage('en')}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="lang-divider">|</span>
              <button
                type="button"
                className={`lang-btn ${lang === 'es' ? 'active-lang' : ''}`}
                onClick={() => setLanguage('es')}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>

            <a
              href={`tel:${companyData.phoneRaw}`}
              className="btn-emergency header-cta"
              aria-label={`Call ${companyData.phone}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="cta-phone-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="header-cta-text">{companyData.phone}</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="container mobile-nav-content">
            {/* Mobile Language Switcher Inside Drawer */}
            <div className="mobile-drawer-lang">
              <span className="drawer-lang-label">Language / Idioma:</span>
              <div className="lang-switcher">
                <button
                  type="button"
                  className={`lang-btn ${lang === 'en' ? 'active-lang' : ''}`}
                  onClick={() => setLanguage('en')}
                >
                  English (EN)
                </button>
                <span className="lang-divider">|</span>
                <button
                  type="button"
                  className={`lang-btn ${lang === 'es' ? 'active-lang' : ''}`}
                  onClick={() => setLanguage('es')}
                >
                  Español (ES)
                </button>
              </div>
            </div>

            <a href="/" onClick={(e) => handleNavClick('/', e)} className="mobile-nav-link">{t.home[lang]}</a>
            
            {/* Services Mobile Accordion Dropdown */}
            <div className={`mobile-dropdown-section ${mobileServicesOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="mobile-dropdown-btn"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                <div className="mobile-dropdown-btn-left">
                  <span className="mobile-btn-text">{t.services[lang]}</span>
                  <span className="mobile-badge-count">{companyData.services.length}</span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`mobile-chevron ${mobileServicesOpen ? 'rotate' : ''}`}
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="mobile-dropdown-list">
                  {companyData.services.map((svc) => (
                    <a
                      key={svc.slug}
                      href={`/${svc.slug}`}
                      onClick={(e) => handleNavClick(`/${svc.slug}`, e)}
                      className={`mobile-sub-link ${currentPath === `/${svc.slug}` ? 'active' : ''}`}
                    >
                      <span className="mobile-bullet">›</span>
                      <span>{svc.title[lang]}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/about-us" onClick={(e) => handleNavClick('/about-us', e)} className="mobile-nav-link">{t.about[lang]}</a>
            
            {/* Service Areas Mobile Accordion Dropdown */}
            <div className={`mobile-dropdown-section ${mobileAreasOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="mobile-dropdown-btn"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                aria-expanded={mobileAreasOpen}
              >
                <div className="mobile-dropdown-btn-left">
                  <span className="mobile-btn-text">{t.serviceAreas[lang]}</span>
                  <span className="mobile-badge-count">{companyData.serviceAreas.length} Cities</span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`mobile-chevron ${mobileAreasOpen ? 'rotate' : ''}`}
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileAreasOpen && (
                <div className="mobile-dropdown-list">
                  <a
                    href="/service-areas"
                    onClick={(e) => handleNavClick('/service-areas', e)}
                    className={`mobile-sub-link mobile-all-areas-link ${currentPath === '/service-areas' ? 'active' : ''}`}
                  >
                    ★ {lang === 'es' ? 'Ver Todas las Ciudades de Texas →' : 'View All Texas Service Areas →'}
                  </a>
                  {companyData.serviceAreas.map((area) => (
                    <a
                      key={area.slug}
                      href={`/${area.slug}`}
                      onClick={(e) => handleNavClick(`/${area.slug}`, e)}
                      className={`mobile-sub-link ${currentPath === `/${area.slug}` ? 'active' : ''}`}
                    >
                      <span className="mobile-bullet">📍</span>
                      <span>{area.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/gallery" onClick={(e) => handleNavClick('/gallery', e)} className="mobile-nav-link">{t.gallery[lang]}</a>
            <a href="/blog" onClick={(e) => handleNavClick('/blog', e)} className="mobile-nav-link">{t.guides[lang]}</a>
            <a href="/contact-us" onClick={(e) => handleNavClick('/contact-us', e)} className="mobile-nav-link">{t.contact[lang]}</a>
            
            <div className="mobile-drawer-cta">
              <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-block">
                {lang === 'es' ? 'Llamar al' : 'Call'} {companyData.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
