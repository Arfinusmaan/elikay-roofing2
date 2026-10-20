import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import SEOHead from '../SEOHead';
import './HomePage.css';

export default function HomePage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);
  const { lang } = useLanguage();
  const t = translations.home;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const roofingScenarios = [
    {
      title: {
        en: "Active Roof Leaks & Ceiling Stains",
        es: "Fugas Activas de Techo y Manchas en Techos"
      },
      desc: {
        en: "Fast pinpointing of water entry around cracked pipe boots, compromised flashings, and broken shingles before ceiling collapse occurs.",
        es: "Localización rápida de filtraciones en tubos agrietados, tapajuntas dañados y tejas rotas antes de que colapse el cielorraso."
      },
      image: "/images/elikay/14.jpeg"
    },
    {
      title: {
        en: "Full Tear-Off & Decking Replacement",
        es: "Desmonte Total y Reemplazo de Madera"
      },
      desc: {
        en: "Complete removal down to wood framing, replacement of rotted OSB plywood, and installation of heavy-duty synthetic underlayment.",
        es: "Desmonte completo hasta la estructura, cambio de paneles OSB podridos e instalación de membrana sintética reforzada."
      },
      image: "/images/elikay/19.jpeg"
    },
    {
      title: {
        en: "Texas Hail & Wind Storm Damage",
        es: "Daños por Viento y Granizo en Texas"
      },
      desc: {
        en: "Detailed photographic documentation of hail dimples, creased shingle tabs, and granule loss across Greater Houston storm corridors.",
        es: "Documentación fotográfica de impactos de granizo, tejas levantadas y pérdida de gránulos en áreas de tormentas de Houston."
      },
      image: "/images/elikay/storm_inspection.jpg"
    },
    {
      title: {
        en: "Attic Turbine Ventilation & Temperature Control",
        es: "Ventilación de Ático y Control de Temperatura"
      },
      desc: {
        en: "Engineered balanced exhaust using whirlybird wind turbines and ridge vents to lower cooling electric bills and prevent shingle baking.",
        es: "Ventilación equilibrada con turbinas eólicas y cumbreras para bajar el consumo de aire acondicionado y evitar el desgaste prematuro de tejas."
      },
      image: "/images/elikay/18.jpeg"
    },
    {
      title: {
        en: "Architectural Dimensional Shingles",
        es: "Tejas Asfálticas Arquitectónicas"
      },
      desc: {
        en: "Heavyweight laminate shingles engineered for 130 MPH wind resistance, long-term UV protection, and beautiful residential curb appeal.",
        es: "Tejas laminadas de alta resistencia para vientos de 130 MPH, protección solar UV duradera y gran elegancia para su fachada."
      },
      image: "/images/elikay/17.jpeg"
    },
    {
      title: {
        en: "Fascia, Soffit & Seamless Gutter Integration",
        es: "Integración de Fascia, Sofito y Canaletas"
      },
      desc: {
        en: "Repairing dry-rotted fascia boards and installing precision aluminum gutters to protect exterior walls and foundations from water damage.",
        es: "Reparación de madera de fascia con humedad e instalación de canaletas de aluminio para proteger cimientos y muros de la lluvia."
      },
      image: "/images/elikay/gutters_siding.jpg"
    }
  ];

  const faqs = [
    {
      q: {
        en: "Are your roof inspections and estimates really 100% free?",
        es: "¿Las inspecciones y presupuestos de techo son realmente 100% gratuitos?"
      },
      a: {
        en: "Yes, absolutely. We come directly to your home in Houston, Katy, Cypress, Waller, or surrounding areas, inspect your roof thoroughly with photographs, and provide a clear, itemized estimate with zero pressure and zero obligation.",
        es: "Sí, totalmente. Vamos directamente a su casa en Houston, Katy, Cypress, Waller o áreas cercanas, revisamos su techo con fotos reales y le entregamos un presupuesto detallado sin ninguna presión ni compromiso."
      }
    },
    {
      q: {
        en: "Do you have team members who speak Spanish (Se Habla Español)?",
        es: "¿Tienen personal que hable español?"
      },
      a: {
        en: "Yes! EliKay Roofing is 100% bilingual. We can walk you through every aspect of your roof evaluation, materials, estimate, and warranty in either English or Spanish with complete transparency.",
        es: "¡Sí! EliKay Roofing es una empresa 100% bilingüe. Podemos explicarle con total transparencia cada detalle de su inspección, materiales, costos y garantía tanto en inglés como en español."
      }
    },
    {
      q: {
        en: "How do I know if my roof needs a repair or a full replacement?",
        es: "¿Cómo sé si mi techo solo necesita reparación o un reemplazo completo?"
      },
      a: {
        en: "If damage is isolated to a specific section (such as an aging pipe boot flashing, small tree limb strike, or a few missing shingles), a precision repair is often sufficient. If shingles have lost most protective granules, decking is widespread soft/rotted, or the roof is over 18-20 years old, a complete replacement provides lifetime security.",
        es: "Si el daño está localizado en un área puntual (como el sello de una tubería, una rama caída o pocas tejas sueltas), una reparación suele bastar. Si las tejas perdieron casi todos sus gránulos, la madera está blanda o el techo tiene más de 18-20 años, un reemplazo completo es la mejor inversión."
      }
    },
    {
      q: {
        en: "What roofing materials and nailing patterns do you use?",
        es: "¿Qué materiales y patrones de clavado utilizan en la instalación?"
      },
      a: {
        en: "We install heavy-duty synthetic underlayment (which far outperforms old asphalt felt paper), factory-primed drip edges, and use manufacturer-certified 6-nail pneumatic patterns to achieve full 130 MPH Texas wind warranties.",
        es: "Instalamos membrana sintética de uso rudo (muy superior al papel fieltro viejo), tapajuntas de goteo pre-pintados de fábrica y clavado neumático con patrón de 6 clavos para garantizar resistencia a vientos de 130 MPH."
      }
    },
    {
      q: {
        en: "How long does a complete residential roof replacement take?",
        es: "¿Cuánto tiempo toma reemplazar por completo el techo de una casa?"
      },
      a: {
        en: "Most average residential roof replacements are completed in just 1 to 2 days, including complete tear-off, decking replacement, new underlayment, shingle installation, and magnetic ground sweeps for stray nails.",
        es: "La mayoría de los techos residenciales promedio se completan en tan solo 1 o 2 días, incluyendo desmonte total, cambio de madera dañada, nueva membrana sintética, colocación de tejas y limpieza con rodillo magnético."
      }
    }
  ];

  return (
    <div className="home-page-root">
      <SEOHead
        title={lang === 'es' ? "Techos en Houston y Katy TX | EliKay Roofing LLC" : "Roofing Contractor Houston & Katy TX | EliKay Roofing LLC"}
        description={lang === 'es' ? "13 años de experiencia en techos residenciales en Houston, Katy, Cypress y Waller TX. Reparación de goteras, reemplazo completo y tejas de calidad. Presupuestos 100% gratis." : "13 years experience in residential roofing across Houston, Katy, Cypress, and Waller TX. Roof repairs, replacements, and storm restoration. Free on-site estimates."}
        canonicalPath="/"
        ogType="website"
        ogImage="/images/elikay/hero_residential.jpg"
      />

      {/* SECTION 1: Cinematic Hero */}
      <section className="hp-hero" aria-label="EliKay Roofing Hero">
        <div className="hp-hero-image-wrap">
          <img
            src="/images/elikay/hero_residential.jpg"
            alt="EliKay Roofing LLC high-quality residential roof installation in Texas"
            className="hp-hero-bg-img"
            width="1376"
            height="768"
            fetchpriority="high"
          />
          <div className="hp-hero-overlay"></div>
        </div>

        <div className="container hp-hero-content">
          <div className="hp-hero-badge">
            <span className="status-pill">
              <span className="pulse-dot"></span> {t.badge[lang]}
            </span>
            <span className="hero-hub-tag">{t.hubTag[lang]}</span>
          </div>

          <h1 className="hp-hero-headline">
            {t.heroTitleLine1[lang]}<br />
            <span className="hp-headline-highlight">{t.heroTitleHighlight[lang]}</span>
          </h1>

          <p className="hp-hero-subtext">
            {t.heroSubtext[lang]}
          </p>

          <div className="hp-hero-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{t.callCta[lang]}</span>
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-secondary-outline">
              {t.getEstimate[lang]} →
            </a>
          </div>

          {/* Emergency Live Status HUD */}
          <div className="hp-status-hud" aria-label="Workflow Status">
            {t.hud.map((step, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <div className="hud-divider"></div>}
                <div className="hud-step">
                  <span className="hud-num">{step.num}</span>
                  <div className="hud-info">
                    <strong>{step.title[lang]}</strong>
                    <span>{step.sub[lang]}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Verified Trust & Craftsmanship Foundation */}
      <section className="section-dark hp-proof-strip">
        <div className="container proof-grid">
          {t.features.map((feature, idx) => (
            <div key={idx} className="proof-card">
              <span className="proof-icon">{feature.icon}</span>
              <div className="proof-text">
                <h3>{feature.title[lang]}</h3>
                <p>{feature.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Featured Roofing Showcase (Asymmetric Split) */}
      <section className="section-light hp-featured-split" id="featured-services">
        <div className="container split-container">
          <div className="split-visual">
            <img
              src="/images/elikay/synthetic_underlayment_prep.jpg"
              alt="EliKay Roofing craftsman installing heavy synthetic underlayment on roof decking"
              className="split-img"
              width="1376"
              height="768"
              loading="lazy"
            />
            <div className="split-badge-overlay">
              <strong>{lang === 'es' ? 'Membrana Sintética TopShield 85' : 'TopShield 85 Synthetic Barrier'}</strong>
              <span>{lang === 'es' ? 'Protección impermeable contra vientos huracanados' : '100% moisture barrier against hurricane-grade wind driven rain'}</span>
            </div>
          </div>

          <div className="split-content">
            <span className="eyebrow">{lang === 'es' ? 'Compromiso de Calidad' : 'Core Craftsmanship'}</span>
            <h2 className="split-title">
              {lang === 'es'
                ? 'Un techo duradero comienza con lo que no se ve.'
                : 'A long-lasting roof starts with what is underneath.'}
            </h2>
            <p className="split-lead">
              {lang === 'es'
                ? 'Las tejas son la capa visible, pero la verdadera protección impermeable de su hogar depende de la madera base y la membrana sintética.'
                : 'Shingles provide surface curb appeal, but true watertight longevity depends on the underlying decking integrity and synthetic barrier.'}
            </p>
            <p className="split-body">
              {lang === 'es'
                ? 'En EliKay Roofing inspeccionamos cada hoja de madera contrachapada OSB. Nunca colocamos tejas nuevas sobre madera podrida o húmeda. Utilizamos clavado neumático de 6 puntos aprobado por fabricantes para asegurar que su techo resista las tormentas más duras de Texas.'
                : 'At EliKay Roofing, we inspect every inch of roof decking. We never install new shingles over soft or rotted plywood. We apply manufacturer-approved 6-nail pneumatic patterns to ensure full 130 MPH wind-uplift resistance across Southeast Texas.'}
            </p>
            <div className="split-features">
              <div className="feature-item">
                <strong>{lang === 'es' ? 'Madera OSB Limpia:' : 'Solid Wood Decking:'}</strong> {lang === 'es' ? 'Sustitución de paneles dañados para una base firme.' : 'Replacing damaged and rotted decking for a flat, secure nail deck.'}
              </div>
              <div className="feature-item">
                <strong>{lang === 'es' ? 'Membrana Sintética Reforzada:' : 'Heavy Synthetic Underlayment:'}</strong> {lang === 'es' ? 'Mucho más resistente que el papel fieltro tradicional.' : 'Tear-resistant moisture defense far exceeding basic felt paper.'}
              </div>
              <div className="feature-item">
                <strong>{lang === 'es' ? 'Tapajuntas y Sellado de Precisión:' : 'Precision Metal Flashings:'}</strong> {lang === 'es' ? 'Sellado hermético en chimeneas, limahoyas y tubos de ventilación.' : 'Watertight aluminum flashing around chimneys, valleys, and plumbing stacks.'}
              </div>
            </div>
            <div className="split-cta-row">
              <a
                href="/complete-roof-replacements"
                onClick={(e) => handleNav('/complete-roof-replacements', e)}
                className="btn-emergency"
              >
                {lang === 'es' ? 'Detalles de Reemplazo →' : 'Roof Replacement Details →'}
              </a>
              <a href={`tel:${companyData.phoneRaw}`} className="btn-ghost-dark">
                {companyData.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Editorial Service Architecture (Matrix Layout) */}
      <section className="section-dark hp-services-matrix">
        <div className="container">
          <div className="matrix-header">
            <div>
              <span className="eyebrow">{t.servicesHeading.eyebrow[lang]}</span>
              <h2 className="matrix-title">{t.servicesHeading.title[lang]}</h2>
            </div>
            <p className="matrix-desc">
              {t.servicesHeading.desc[lang]}
            </p>
          </div>

          <div className="matrix-grid">
            {/* Service 1: Roof Repairs */}
            <div className="matrix-row">
              <div className="matrix-image-box">
                <img
                  src="/images/elikay/16.jpeg"
                  alt="EliKay Roofing craftsman finishing shingles on residential roof"
                  width="1376"
                  height="768"
                  loading="lazy"
                />
              </div>
              <div className="matrix-details">
                <span className="matrix-tag">{lang === 'es' ? 'Precisión & Ahorro' : 'Precision & Value'}</span>
                <h3>{companyData.services[0].title[lang]}</h3>
                <p>{companyData.services[0].summary[lang]}</p>
                <a
                  href={`/${companyData.services[0].slug}`}
                  onClick={(e) => handleNav(`/${companyData.services[0].slug}`, e)}
                  className="matrix-link"
                >
                  {lang === 'es' ? 'Ver Servicios de Reparación →' : 'Explore Roof Repair Protocols →'}
                </a>
              </div>
            </div>

            {/* Service 2: Complete Replacements */}
            <div className="matrix-row reverse">
              <div className="matrix-image-box">
                <img
                  src="/images/elikay/13.jpeg"
                  alt="Beautiful finished roof replacement at sunset by EliKay Roofing"
                  width="1376"
                  height="768"
                  loading="lazy"
                />
              </div>
              <div className="matrix-details">
                <span className="matrix-tag">{lang === 'es' ? 'Protección de Por Vida' : 'Lifetime Security'}</span>
                <h3>{companyData.services[1].title[lang]}</h3>
                <p>{companyData.services[1].summary[lang]}</p>
                <a
                  href={`/${companyData.services[1].slug}`}
                  onClick={(e) => handleNav(`/${companyData.services[1].slug}`, e)}
                  className="matrix-link"
                >
                  {lang === 'es' ? 'Detalles de Reemplazo Completo →' : 'Complete Replacement Capabilities →'}
                </a>
              </div>
            </div>

            {/* Service 3: Leak Repairs */}
            <div className="matrix-row">
              <div className="matrix-image-box">
                <img
                  src="/images/elikay/14.jpeg"
                  alt="Decking inspection and leak repair by EliKay Roofing team"
                  width="1376"
                  height="768"
                  loading="lazy"
                />
              </div>
              <div className="matrix-details">
                <span className="matrix-tag">{lang === 'es' ? 'Detección Rápida' : 'Active Leak Defense'}</span>
                <h3>{companyData.services[3].title[lang]}</h3>
                <p>{companyData.services[3].summary[lang]}</p>
                <a
                  href={`/${companyData.services[3].slug}`}
                  onClick={(e) => handleNav(`/${companyData.services[3].slug}`, e)}
                  className="matrix-link"
                >
                  {lang === 'es' ? 'Detener Fugas de Techo →' : 'Roof Leak Repair Protocol →'}
                </a>
              </div>
            </div>

            {/* Service 4: Storm & Hail Damage */}
            <div className="matrix-row reverse">
              <div className="matrix-image-box">
                <img
                  src="/images/elikay/storm_inspection.jpg"
                  alt="Professional hail storm inspection on Texas roof"
                  width="1376"
                  height="768"
                  loading="lazy"
                />
              </div>
              <div className="matrix-details">
                <span className="matrix-tag">{lang === 'es' ? 'Clima de Texas' : 'Storm Specialists'}</span>
                <h3>{companyData.services[4].title[lang]}</h3>
                <p>{companyData.services[4].summary[lang]}</p>
                <a
                  href={`/${companyData.services[4].slug}`}
                  onClick={(e) => handleNav(`/${companyData.services[4].slug}`, e)}
                  className="matrix-link"
                >
                  {lang === 'es' ? 'Evaluación de Daños por Tormenta →' : 'Storm Damage Assessment Scope →'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Real Texas Roofing Scenarios */}
      <section className="section-light hp-scenarios">
        <div className="container">
          <div className="scenarios-header">
            <span className="eyebrow">{lang === 'es' ? 'Trabajos Reales en Texas' : 'Real Texas Job Site Experience'}</span>
            <h2 className="scenarios-title">
              {lang === 'es'
                ? 'Casos y Desafíos que Resolvemos en el Gran Houston'
                : 'Common Roofing Issues We Resolve Across Greater Houston'}
            </h2>
            <p className="scenarios-subtitle">
              {lang === 'es'
                ? 'Desde el calor extremo del verano en Houston hasta tormentas de viento y desgaste por humedad del golfo, conocemos las necesidades de cada vecindario.'
                : 'From intense summer heat indexes and high-velocity wind squalls to coastal humidity cycles, our 13 years of experience ensures your roof withstands the elements.'}
            </p>
          </div>

          <div className="scenarios-grid">
            {roofingScenarios.map((item, index) => (
              <div key={index} className="scenario-item">
                <div className="scenario-img-wrap">
                  <img src={item.image} alt={item.title[lang]} className="scenario-img" width="1376" height="768" loading="lazy" />
                </div>
                <div className="scenario-meta">
                  <h4>{item.title[lang]}</h4>
                  <p>{item.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: The 4-Step Roofing Process */}
      <section className="section-dark hp-process-timeline">
        <div className="container">
          <div className="timeline-header">
            <span className="eyebrow">{lang === 'es' ? 'Proceso Simple y Transparente' : 'Systematic Craftsmanship'}</span>
            <h2 className="timeline-title">
              {lang === 'es' ? 'Un Proceso Claro. Cuatro Pasos Sin Estrés.' : 'One Call. Four Focused Milestones.'}
            </h2>
            <p className="timeline-desc">
              {lang === 'es'
                ? 'Trabajamos con transparencia absoluta: sin sorpresas en el precio ni cobros ocultos.'
                : 'When maintaining or replacing your roof, you need direct communication and quality results without guesswork.'}
            </p>
          </div>

          <div className="timeline-steps">
            <div className="timeline-card">
              <span className="step-badge">Phase 01</span>
              <h3>{lang === 'es' ? 'Inspección Gratuita en el Sitio' : 'Free On-Site Evaluation'}</h3>
              <p>
                {lang === 'es'
                  ? 'Subimos a su techo, tomamos fotos claras del estado de sus tejas y le explicamos la situación honestamente en inglés o español.'
                  : 'We meet at your home, conduct a hands-on rooftop inspection, document shingle condition with photos, and discuss options in your preferred language.'}
              </p>
            </div>
            <div className="timeline-card">
              <span className="step-badge">Phase 02</span>
              <h3>{lang === 'es' ? 'Presupuesto Detallado por Escrito' : 'Clear Itemized Estimate'}</h3>
              <p>
                {lang === 'es'
                  ? 'Reciba un presupuesto claro que detalla materiales, madera, membrana sintética y costos exactos sin letras pequeñas.'
                  : 'You receive a straightforward, transparent proposal itemizing materials, underlayment, ventilation, and timeline with zero hidden fees.'}
              </p>
            </div>
            <div className="timeline-card">
              <span className="step-badge">Phase 03</span>
              <h3>{lang === 'es' ? 'Instalación de Alta Calidad' : 'Precision Trade Installation'}</h3>
              <p>
                {lang === 'es'
                  ? 'Nuestro equipo realiza el trabajo con clavado neumático de 6 puntos, tapajuntas de alta resistencia y protección de sus áreas verdes.'
                  : 'Our experienced crew executes the work with 6-nail pneumatic patterns, heavy synthetic underlayment, and complete perimeter protection.'}
              </p>
            </div>
            <div className="timeline-card">
              <span className="step-badge">Phase 04</span>
              <h3>{lang === 'es' ? 'Limpieza con Imán & Garantía' : 'Magnetic Cleanup & Walkthrough'}</h3>
              <p>
                {lang === 'es'
                  ? 'Pasamos rodillos magnéticos por todo el patio y la entrada para recoger hasta el último clavo, dejando su casa impecable.'
                  : 'We run high-strength magnetic sweepers across your lawn and driveway to collect every stray nail, followed by a final walkthrough.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Large-Format Interlude */}
      <section className="hp-interlude" aria-label="Craftsmanship Philosophy">
        <div className="hp-interlude-bg-wrap">
          <img
            src="/images/elikay/10.jpeg"
            alt="Pristine architectural roof installation by EliKay Roofing"
            className="hp-interlude-bg"
            width="1376"
            height="768"
            loading="lazy"
          />
          <div className="hp-interlude-overlay"></div>
        </div>
        <div className="container hp-interlude-content">
          <span className="eyebrow light">{lang === 'es' ? 'Nuestra Filosofía de Trabajo' : 'Our Trade Commitment'}</span>
          <h2 className="interlude-quote">
            {lang === 'es'
              ? '“Un trabajo bien hecho no necesita atajos. Construimos cada techo como si fuera para nuestra propia familia.”'
              : '“A job done right needs no shortcuts. We build every roof with the care we would give our own families.”'}
          </h2>
          <p className="interlude-author">
            EliKay Roofing LLC · 13 {lang === 'es' ? 'Años de Experiencia en Texas' : 'Years Experience Serving Texas'}
          </p>
        </div>
      </section>

      {/* SECTION 8: Coverage Locations */}
      <section className="section-dark hp-locations">
        <div className="container">
          <div className="locations-header">
            <span className="eyebrow">{lang === 'es' ? 'Cobertura Regional' : 'Texas Regional Footprint'}</span>
            <h2 className="locations-title">
              {lang === 'es' ? 'Servicio en Houston, Katy, Waller y Condados Vecinos' : 'Direct Roofing Crews Across Greater Houston & Surrounding Counties'}
            </h2>
            <p className="locations-desc">
              {lang === 'es'
                ? 'Con cuadrillas activas en Houston, Katy, Cypress y Waller, atendemos a propietarios residenciales con rapidez y puntualidad.'
                : 'With dispatch staging across Houston, Katy, Cypress, and Waller, our roofing specialists provide prompt estimates and reliable scheduling.'}
            </p>
          </div>

          <div className="locations-pills">
            {companyData.serviceAreas.map((city, idx) => (
              <span key={idx} className="city-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {city.name}
              </span>
            ))}
          </div>

          <div className="locations-action">
            <a
              href="/service-areas"
              onClick={(e) => handleNav('/service-areas', e)}
              className="btn-ghost-light"
            >
              {lang === 'es' ? 'Ver Información de Cada Ciudad →' : 'Explore Detailed City Coverage Profiles →'}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9: Frequently Asked Questions Accordion */}
      <section className="section-dark hp-faq">
        <div className="container-narrow">
          <div className="faq-header text-center">
            <span className="eyebrow">{lang === 'es' ? 'Preguntas Frecuentes' : 'Clear Information'}</span>
            <h2 className="faq-title">
              {lang === 'es' ? 'Preguntas Frecuentes sobre Techos' : 'Frequently Asked Questions'}
            </h2>
            <p className="faq-subtitle">
              {lang === 'es'
                ? 'Respuestas directas y claras a las inquietudes más comunes de los propietarios en Texas.'
                : 'Straightforward answers to the most common questions Texas homeowners have about roof repairs, replacements, and estimates.'}
            </p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <button
                  className="faq-question"
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q[lang]}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.a[lang]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Final Conversion Hero */}
      <section className="hp-final-cta" aria-label="Final Roof CTA">
        <div className="container final-cta-container">
          <span className="eyebrow">{lang === 'es' ? 'Presupuesto 100% Gratuito' : 'Free Estimates Available'}</span>
          <h2 className="final-title">{t.ctaSection.title[lang]}</h2>
          <p className="final-sub">
            {t.ctaSection.desc[lang]}
          </p>
          <div className="final-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              {t.ctaSection.buttonCall[lang]}
            </a>
            <a
              href="/contact-us"
              onClick={(e) => handleNav('/contact-us', e)}
              className="btn-ghost-light"
            >
              {t.ctaSection.buttonForm[lang]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
