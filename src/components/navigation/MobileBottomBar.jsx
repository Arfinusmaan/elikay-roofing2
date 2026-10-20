import React, { useState, useEffect } from 'react';
import './MobileBottomBar.css';

export default function MobileBottomBar({
  onOpenQuote,
  phoneNumber = '(970) 778-7951',
  phoneRaw = '9707787951',
  isNavOpen = false,
  lang = 'en'
}) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = scrolledPastHero && !isNavOpen;

  return (
    <div
      id="mobile-action-bar-container"
      className={`mobile-action-bar-wrap ${isVisible ? 'bar-revealed' : 'bar-hidden'}`}
      role="region"
      aria-label="Mobile Roofing Actions"
    >
      <div className="mobile-action-bar-inner">
        {/* Call Pill Button */}
        <a
          href={`tel:${phoneRaw}`}
          className="mobile-bar-call-btn"
          aria-label={`Call ${phoneNumber}`}
        >
          <svg
            className="mobile-bar-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="17"
            height="17"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="mobile-bar-text">
            {lang === 'es' ? 'Llamar ' : 'Call '} {phoneNumber}
          </span>
        </a>

        {/* Free Estimate Pill Button */}
        <button
          onClick={onOpenQuote}
          type="button"
          className="mobile-bar-quote-btn"
          aria-label="Get Free Estimate"
        >
          <span>{lang === 'es' ? 'Presupuesto Gratis' : 'Get Free Estimate'}</span>
        </button>
      </div>
    </div>
  );
}
