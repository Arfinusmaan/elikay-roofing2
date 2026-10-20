import React, { useState, useEffect } from 'react';
import Header from './components/navigation/Header';
import Footer from './components/footer/Footer';
import MobileBottomBar from './components/navigation/MobileBottomBar';
import HomePage from './components/sections/HomePage';
import ServicePage from './components/sections/ServicePage';
import AboutPage from './components/sections/AboutPage';
import ServiceAreasPage from './components/sections/ServiceAreasPage';
import CityServiceAreaPage from './components/sections/CityServiceAreaPage';
import GalleryPage from './components/sections/GalleryPage';
import BlogPage from './components/sections/BlogPage';
import ContactPage from './components/sections/ContactPage';
import LegalPage from './components/sections/LegalPage';
import SEOHead from './components/SEOHead';
import { companyData } from './data/companyData';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainApp({ initialPath }) {
  const [currentPath, setCurrentPath] = useState(
    initialPath || (typeof window !== 'undefined' ? window.location.pathname : '/') || '/'
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLanguage } = useLanguage();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Guarantee that every page transition starts from the very top (0, 0)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [currentPath]);

  const handleNavigate = (path) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  // Routing Logic
  const renderContent = () => {
    const cleanPath = currentPath.replace(/\/$/, '') || '/';

    if (cleanPath === '/') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/about-us') {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    // Check if it matches any service slug first
    const matchingService = companyData.services.find(s => cleanPath === `/${s.slug}`);
    if (matchingService) {
      return <ServicePage serviceSlug={matchingService.slug} onNavigate={handleNavigate} />;
    }

    // Fallback service routes for legacy URLs
    if (cleanPath === '/water-damage-restoration' || cleanPath === '/roof-repair') {
      return <ServicePage serviceSlug="roof-repairs" onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/category-3-water-cleanup' || cleanPath === '/storm-damage-cleanup' || cleanPath === '/storm-damage-repairs') {
      return <ServicePage serviceSlug="storm-damage-repairs" onNavigate={handleNavigate} />;
    }

    // Dedicated City Service Area Landing Pages
    const matchingArea = companyData.serviceAreas.find(a => `/${a.slug}` === cleanPath);
    if (matchingArea) {
      return <CityServiceAreaPage areaSlug={matchingArea.slug} onNavigate={handleNavigate} />;
    }

    if (
      cleanPath === '/service-areas' ||
      cleanPath.endsWith('-roofing') ||
      cleanPath.endsWith('-roof-repair') ||
      cleanPath.endsWith('-roof-repairs') ||
      cleanPath.endsWith('-roof-replacement') ||
      cleanPath.endsWith('-roofing-services') ||
      cleanPath.endsWith('-roofing-repairs') ||
      cleanPath.includes('water-mitigation')
    ) {
      return <ServiceAreasPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/gallery') {
      return <GalleryPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/contact-us') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/privacy-policy') {
      return <LegalPage pageType="privacy" onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/terms') {
      return <LegalPage pageType="terms" onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/blog') {
      return <BlogPage articleSlug={null} onNavigate={handleNavigate} />;
    }

    if (cleanPath.startsWith('/blog/')) {
      const parts = cleanPath.split('/');
      const articleSlug = parts.length > 2 ? parts[parts.length - 1] : null;
      return <BlogPage articleSlug={articleSlug} onNavigate={handleNavigate} />;
    }

    // 404 Not Found fallback
    return (
      <div style={{ backgroundColor: 'var(--surface-charcoal)', minHeight: '60vh', padding: '8rem 0', textAlign: 'center' }}>
        <SEOHead
          title="404 Page Not Found | EliKay Roofing LLC"
          description="The requested roofing page was not found. Contact EliKay Roofing LLC directly at (970) 778-7951."
          canonicalPath="/404"
          noindex={true}
        />
        <div className="container-narrow">
          <span className="status-pill">{lang === 'es' ? 'Página No Encontrada' : 'Resource Not Located'}</span>
          <h1 style={{ fontSize: '2.8rem', color: '#FFFFFF', margin: '1rem 0' }}>
            {lang === 'es' ? 'La página solicitada no fue localizada.' : 'That page is not located.'}
          </h1>
          <p style={{ color: 'var(--text-light-secondary)', marginBottom: '2rem' }}>
            {lang === 'es'
              ? 'El recurso solicitado puede haber cambiado de lugar. Vuelva al inicio o llame directamente para su presupuesto.'
              : 'The requested resource may have moved. Return to our homepage or call for your free roof estimate.'}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button onClick={() => handleNavigate('/')} className="btn-emergency">
              {lang === 'es' ? 'Volver al Inicio' : 'Return to Homepage'}
            </button>
            <a href={`tel:${companyData.phoneRaw}`} className="btn-ghost-light">
              {companyData.phone}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-shell">
      <SEOHead currentPath={currentPath} />
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        lang={lang}
        setLanguage={setLanguage}
      />
      <main id="main-content" role="main">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} lang={lang} setLanguage={setLanguage} />

      {/* Viewport-fixed Mobile Bottom Bar (Bilingual & Fixed on scroll) */}
      <MobileBottomBar
        onOpenQuote={() => handleNavigate('/contact-us')}
        phoneNumber={companyData.phone}
        phoneRaw={companyData.phoneRaw}
        isNavOpen={mobileMenuOpen}
        lang={lang}
      />
    </div>
  );
}

export default function App({ initialPath }) {
  return (
    <LanguageProvider>
      <MainApp initialPath={initialPath} />
    </LanguageProvider>
  );
}
