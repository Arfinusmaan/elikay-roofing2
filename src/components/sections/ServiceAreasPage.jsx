import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import { useLanguage } from '../../context/LanguageContext';
import SEOHead from '../SEOHead';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../../utils/schemaGenerators';
import './ServiceAreasPage.css';

export default function ServiceAreasPage({ onNavigate }) {
  const [selectedCounty, setSelectedCounty] = useState('All');
  const { lang } = useLanguage();

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const counties = ['All', 'Harris County', 'Waller County', 'Montgomery County', 'Brazoria County', 'Galveston County'];

  const filteredAreas = selectedCounty === 'All'
    ? companyData.serviceAreas
    : companyData.serviceAreas.filter(a => a.county.includes(selectedCounty.split(' ')[0]));

  const breadcrumbs = [
    { name: lang === 'es' ? "Inicio" : "Home", url: "/" },
    { name: lang === 'es' ? "Áreas de Servicio" : "Service Areas", url: "/service-areas" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="service-areas-root">
      <SEOHead
        title={lang === 'es' ? "Áreas de Servicio de Techos en Texas | EliKay Roofing LLC" : "Texas Roofing Service Areas | EliKay Roofing LLC"}
        description={lang === 'es' ? "Servicios residenciales de techos e instalación de tejas en Houston, Katy, Cypress, Waller, The Woodlands y Galveston. Llame al (970) 778-7951." : "Residential roofing services and free estimates across Houston, Katy, Cypress, Waller, The Woodlands, and Galveston TX. Call (970) 778-7951."}
        canonicalPath="/service-areas"
        ogType="website"
        ogImage="/images/elikay/hero_residential.jpg"
        schema={schema}
      />

      {/* HERO WITH RICH BACKGROUND */}
      <section className="areas-hero">
        <div className="areas-hero-bg-wrap">
          <img
            src="/images/elikay/hero_residential.jpg"
            alt="Texas residential roofing service areas"
            className="areas-hero-bg"
            width="1376"
            height="768"
            fetchpriority="high"
          />
          <div className="areas-hero-overlay"></div>
        </div>

        <div className="container areas-hero-content">
          <span className="status-pill">
            <span className="pulse-dot"></span> {lang === 'es' ? 'Cobertura Regional en Texas · Cuadrillas Locales' : 'Greater Houston Regional Coverage · Local Crews'}
          </span>
          <h1 className="areas-title">
            {lang === 'es'
              ? 'Servicio de techado residencial en todo el Gran Houston y condados cercanos.'
              : 'Residential roofing craftsmanship across Greater Houston & surrounding communities.'}
          </h1>
          <p className="areas-subtitle">
            {lang === 'es'
              ? 'Con bases operativas en Houston, Katy y Waller, EliKay Roofing despliega techadores experimentados para inspecciones gratuitas, cambio completo de techos y reparaciones duraderas en Harris, Waller, Montgomery, Fort Bend, Brazoria y Galveston.'
              : 'With active dispatch bases in Houston, Katy, and Waller, EliKay Roofing provides complimentary on-site roof evaluations, precision leak repairs, and lifetime shingle replacements throughout Southeast Texas.'}
          </p>
          <div className="areas-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency">
              📞 {lang === 'es' ? 'Llamar al' : 'Call Dispatch:'} {companyData.phone}
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-secondary-outline">
              {lang === 'es' ? 'Agendar Presupuesto Gratuito →' : 'Schedule Free On-Site Estimate →'}
            </a>
          </div>
        </div>
      </section>

      {/* REGIONAL HUB STRIP */}
      <section className="hubs-bar">
        <div className="container hubs-bar-grid">
          <div className="hub-card">
            <div className="hub-icon">★</div>
            <div>
              <strong>{lang === 'es' ? 'Sede Central: Houston & Katy, TX' : 'Primary Hub: Houston & Katy, TX'}</strong>
              <p>{lang === 'es' ? 'Coordinación central para reemplazos residenciales, tejas arquitectónicas y atención bilingüe.' : 'Headquarters and residential staging depot serving Harris, Fort Bend, and metropolitan communities.'}</p>
            </div>
          </div>
          <div className="hub-card">
            <div className="hub-icon">★</div>
            <div>
              <strong>{lang === 'es' ? 'Base Noroeste: Waller & Cypress, TX' : 'Northwest Staging: Waller & Cypress, TX'}</strong>
              <p>{lang === 'es' ? 'Equipo de respuesta en Waller, Hempstead, Cypress y parcelas campestres del corredor US-290.' : 'Operations fleet depot serving Waller, Cypress, Hempstead, and US-290 corridor properties.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERABLE LOCAL CITIES SECTION */}
      <section className="section-light areas-grid-section">
        <div className="container">
          <div className="areas-section-header text-center">
            <span className="eyebrow">{lang === 'es' ? 'Cobertura Local & Factores de Clima' : 'Local Coverage & Environmental Profiles'}</span>
            <h2>{lang === 'es' ? 'Comunidades Atendidas por EliKay Roofing' : 'Communities Served by EliKay Roofing LLC'}</h2>
            <p>
              {lang === 'es'
                ? 'Cada zona de Texas enfrenta retos climáticos distintos: calor implacable de verano en Houston, vientos fuertes en llanuras y humedad costera que exigen materiales y clavado de primera.'
                : 'Every Southeast Texas community faces unique roofing demands: intense summer thermal cycles, sudden windstorms, and gulf humidity that require high-grade synthetic underlayment and precision installation.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="county-filter-tabs">
            {counties.map((county, idx) => (
              <button
                key={idx}
                className={`county-tab ${selectedCounty === county ? 'active' : ''}`}
                onClick={() => setSelectedCounty(county)}
              >
                {county}
              </button>
            ))}
          </div>

          <div className="areas-cards-grid">
            {filteredAreas.map((area, idx) => {
              const landmarkMap = {
                "roof-repair-houston": "/images/elikay/houston_landmark.jpg",
                "roof-replacement-katy": "/images/elikay/katy_landmark.jpg",
                "cypress-roofing-services": "/images/elikay/cypress_landmark.jpg",
                "waller-roof-repairs": "/images/elikay/waller_landmark.jpg",
                "hempstead-roofing-services": "/images/elikay/hempstead_landmark.jpg",
                "spring-roof-repairs": "/images/elikay/spring_landmark.jpg",
                "woodlands-roofing-contractor": "/images/elikay/woodlands_landmark.jpg",
                "pearland-roof-restoration": "/images/elikay/pearland_landmark.jpg",
                "galveston-roofing-repairs": "/images/elikay/galveston_landmark.jpg"
              };
              const cardImg = landmarkMap[area.slug] || "/images/elikay/hero_residential.jpg";

              return (
                <div key={idx} className="area-card">
                  <div className="area-card-thumb-wrap">
                    <img
                      src={cardImg}
                      alt={`${area.name} residential roofing services by EliKay Roofing`}
                      className="area-card-thumb"
                      width="600"
                      height="400"
                      loading="lazy"
                    />
                    <span className="area-card-thumb-tag">{area.county}</span>
                    <span className="area-card-thumb-eta">{lang === 'es' ? 'Citas Disponibles' : 'Free Estimates'}</span>
                  </div>

                  <div className="area-card-content">
                    <div className="area-top">
                      <h3>{area.name}</h3>
                      <span className="area-pop">{lang === 'es' ? 'Población:' : 'Pop:'} {area.population}</span>
                    </div>

                    <div className="area-risk">
                      <strong>{lang === 'es' ? 'Desafío Climático del Techo:' : 'Local Weather Challenges:'}</strong>
                      <p>{typeof area.riskProfile === 'object' ? area.riskProfile[lang] : area.riskProfile}</p>
                    </div>

                    <div className="area-neighborhoods">
                      <strong>{lang === 'es' ? 'Vecindarios Principales:' : 'Priority Service Areas:'}</strong>{' '}
                      {typeof area.notableAreas === 'object' ? area.notableAreas[lang] : area.notableAreas}
                    </div>

                    <div className="area-card-actions">
                      <a
                        href={`/${area.slug}`}
                        onClick={(e) => handleNav(`/${area.slug}`, e)}
                        className="btn-emergency btn-sm"
                      >
                        {lang === 'es' ? `Ver Página de ${area.name.split(',')[0]}` : `Explore ${area.name.split(',')[0]} Roofing →`}
                      </a>
                      <a
                        href={`tel:${companyData.phoneRaw}`}
                        className="area-link"
                      >
                        {companyData.phone}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGIONAL ROOFING INSIGHTS */}
      <section className="section-dark areas-insights-section">
        <div className="container">
          <div className="insights-header text-center">
            <span className="eyebrow">{lang === 'es' ? 'Ingeniería Climática de Techos' : 'Texas Climate Roofing Engineering'}</span>
            <h2>{lang === 'es' ? 'Cómo Afecta la Geografía de Texas a la Vida de su Techo' : 'How Southeast Texas Geography Impacts Roof Longevity'}</h2>
            <p>
              {lang === 'es'
                ? 'Desde los vientos salinos de Galveston hasta los densos bosques de The Woodlands y las llanuras abiertas de Waller, cada microclima demanda técnicas específicas de instalación.'
                : 'From the corrosive salt fog of Galveston Island to the shaded pine canopies of The Woodlands and the open wind plains of Waller, each microclimate requires specialized roofing engineering.'}
            </p>
          </div>

          <div className="insights-grid">
            <div className="insight-card">
              <span className="insight-icon">01</span>
              <h3>{lang === 'es' ? 'Corrosión Costera y Viento en Galveston' : 'Coastal Corrosion & Hurricane Uplift'}</h3>
              <p>
                {lang === 'es'
                  ? 'La salinidad marina deteriora los clavos galvanizados estándar en menos de 5 años. En la costa de Texas utilizamos clavos anillados de acero inoxidable y tejas clasificadas para 130+ MPH.'
                  : 'Airborne sea salt rusts conventional electro-galvanized fasteners rapidly. Along the Texas coast, we install stainless steel ring-shank nails and Class H 130 MPH wind-rated architectural shingles.'}
              </p>
            </div>
            <div className="insight-card">
              <span className="insight-icon">02</span>
              <h3>{lang === 'es' ? 'Bosques y Moho en The Woodlands y Spring' : 'Pine Canopies & Algae Defense'}</h3>
              <p>
                {lang === 'es'
                  ? 'Las acículas de pino retienen humedad en las limahoyas, pudriendo la madera bajo el metal. Instalamos tejas con gránulos de cobre anti-algas y protectores de canaletas micro-mesh.'
                  : 'Dense pine needle accumulations trap water in valleys and rot underlying decking. We install Scotchgard copper granule shingles that inhibit organic stains and seamless metal valley flashing.'}
              </p>
            </div>
            <div className="insight-card">
              <span className="insight-icon">03</span>
              <h3>{lang === 'es' ? 'Calor y Viento en Llanuras de Waller y Katy' : 'Prairie Wind Sheer & Attic Thermal Cycles'}</h3>
              <p>
                {lang === 'es'
                  ? 'Sin barreras naturales contra el viento, las tormentas en llanuras alcanzan 70 MPH. Instalamos clavado de 6 puntos y ventilación continua de caballete para reducir temperaturas de 140°F.'
                  : 'Open suburban and rural terrain exposes roofs to sudden 70 MPH convective microbursts. We enforce certified 6-nail patterns and continuous ridge venting to exhaust 140°F attic heat.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL CRAFTSMANSHIP SHOWCASE */}
      <section className="section-light areas-visual-showcase">
        <div className="container">
          <div className="showcase-grid">
            <div className="showcase-img-wrap">
              <img
                src="/images/elikay/10.jpeg"
                alt="EliKay Roofing team installing architectural shingles on Texas home"
                className="showcase-img"
                width="800"
                height="500"
                loading="lazy"
              />
              <span className="showcase-caption">
                {lang === 'es' ? 'Instalación de tejas arquitectónicas con goterón y membrana sintética en Houston, TX.' : 'Precision architectural shingle application with drip edge and synthetic barrier in Houston, TX.'}
              </span>
            </div>
            <div className="showcase-text">
              <span className="eyebrow">{lang === 'es' ? 'Compromiso de Calidad' : 'Local Commitment'}</span>
              <h2>{lang === 'es' ? 'Mano de Obra Local con Más de 13 Años de Experiencia en Texas' : 'Rooted in Texas with 13+ Years of Proven Craftsmanship'}</h2>
              <p>
                {lang === 'es'
                  ? 'En EliKay Roofing LLC no creemos en parches temporales ni en presupuestos inflados. Nuestro equipo evalúa personalmente la estructura de madera, el aislamiento del ático y el drenaje de canaletas para ofrecerle la solución más duradera y económica.'
                  : 'At EliKay Roofing LLC, we believe in honest assessments, direct communication, and lasting installations. Whether you need a small leak sealed around a plumbing collar or a complete roof replacement after severe weather, our crews treat your home with total care.'}
              </p>
              <div className="areas-actions" style={{ marginTop: '1.5rem' }}>
                <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency">
                  {lang === 'es' ? 'Llamar a Despacho:' : 'Call Dispatch:'} {companyData.phone}
                </a>
                <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-secondary-outline">
                  {lang === 'es' ? 'Agendar Inspección Gratuita' : 'Schedule Free Roof Inspection'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
