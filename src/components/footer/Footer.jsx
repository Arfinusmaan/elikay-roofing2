import React from 'react';
import { companyData } from '../../data/companyData';
import { translations } from '../../data/translations';
import './Footer.css';

export default function Footer({ onNavigate, lang = 'en', setLanguage }) {
  const t = translations.footer;

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Top Banner / Emergency Hook */}
      <div className="footer-emergency-hook">
        <div className="container hook-container">
          <div className="hook-content">
            <span className="eyebrow">{t.hookEyebrow[lang]}</span>
            <h2 className="hook-title">{t.hookTitle[lang]}</h2>
            <p className="hook-subtitle">
              {t.hookSubtitle[lang]}
            </p>
          </div>
          <div className="hook-action">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              {lang === 'es' ? 'Llamar al' : 'Call'} {companyData.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Col 1: Brand & Credibility */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img
                src="/images/elikay/Elikay-Logo.jpeg"
                alt="EliKay Roofing LLC Logo"
                className="footer-logo"
                width="64"
                height="64"
              />
              <span className="footer-brand-title">ELIKAY ROOFING</span>
            </div>
            <p className="footer-mission">
              {t.aboutText[lang]}
            </p>
            <div className="footer-meta-pill">
              <span className="pulse-dot"></span> 13 {lang === 'es' ? 'Años de Experiencia en Texas' : 'Years Texas Trade Experience'}
            </div>
          </div>

          {/* Col 2: Primary Services */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.headingServices[lang]}</h4>
            <ul className="footer-links">
              {companyData.services.map((svc) => (
                <li key={svc.slug}>
                  <a href={`/${svc.slug}`} onClick={(e) => handleNav(`/${svc.slug}`, e)}>
                    {svc.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.headingAreas[lang]}</h4>
            <ul className="footer-links">
              {companyData.serviceAreas.map((area) => (
                <li key={area.slug}>
                  <a href={`/${area.slug}`} onClick={(e) => handleNav(`/${area.slug}`, e)}>
                    {area.name} Roofing
                  </a>
                </li>
              ))}
              <li>
                <a href="/service-areas" onClick={(e) => handleNav('/service-areas', e)} style={{ color: '#79a6fe', fontWeight: 'bold' }}>
                  {lang === 'es' ? '★ Ver Todas las Áreas →' : '★ View All Coverage Areas →'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & Language Toggle */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.headingContact[lang]}</h4>
            <div className="footer-contact-block">
              <div className="contact-item">
                <span className="contact-label">{lang === 'es' ? 'Línea Directa (Llamadas / Textos)' : 'Direct Phone Line'}</span>
                <a href={`tel:${companyData.phoneRaw}`} className="contact-value highlight">
                  {companyData.phone}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">{lang === 'es' ? 'Correo de Contacto' : 'Email Inquiries'}</span>
                <a href={`mailto:${companyData.email}`} className="contact-value">
                  {companyData.email}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">{lang === 'es' ? 'Bases Operativas' : 'Operational Hubs'}</span>
                <span className="contact-plain">Houston, Katy, Cypress & Waller, TX</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">{lang === 'es' ? 'Idioma / Language' : 'Language Selection'}</span>
                <div style={{ marginTop: '0.4rem' }}>
                  <button
                    type="button"
                    onClick={() => setLanguage && setLanguage('en')}
                    style={{
                      background: lang === 'en' ? 'var(--brand-blue)' : 'rgba(255,255,255,0.1)',
                      color: '#FFF',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '4px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      marginRight: '0.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage && setLanguage('es')}
                    style={{
                      background: lang === 'es' ? 'var(--brand-blue)' : 'rgba(255,255,255,0.1)',
                      color: '#FFF',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '4px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Español
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Compliance */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright-text">
            {t.rights[lang]}
          </p>
          <div className="bottom-links">
            <a href="/about-us" onClick={(e) => handleNav('/about-us', e)}>
              {lang === 'es' ? 'Sobre Nosotros' : 'About Us'}
            </a>
            <a href="/gallery" onClick={(e) => handleNav('/gallery', e)}>
              {lang === 'es' ? 'Galería de Trabajos' : 'Project Gallery'}
            </a>
            <a href="/blog" onClick={(e) => handleNav('/blog', e)}>
              {lang === 'es' ? 'Guías de Techos' : 'Roofing Guides'}
            </a>
            <a href="/privacy-policy" onClick={(e) => handleNav('/privacy-policy', e)}>
              {lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
            </a>
            <a href="/terms" onClick={(e) => handleNav('/terms', e)}>
              {lang === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
