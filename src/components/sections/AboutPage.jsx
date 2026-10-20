import React from 'react';
import { companyData } from '../../data/companyData';
import { useLanguage } from '../../context/LanguageContext';
import SEOHead from '../SEOHead';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../../utils/schemaGenerators';
import './AboutPage.css';

export default function AboutPage({ onNavigate }) {
  const { lang } = useLanguage();

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const milestones = [
    {
      year: "2013-2018",
      title: {
        en: "Hands-On Residential Trade Mastery",
        es: "Dominio Práctico en Techos Residenciales"
      },
      desc: {
        en: "Deep field apprenticeship across Houston and Southeast Texas, mastering architectural shingle patterns, rafter leveling, leak diagnostics, and precision valley flashing.",
        es: "Años de aprendizaje directo en Houston y el sureste de Texas, dominando tejas arquitectónicas, nivelación de vigas, diagnóstico de fugas y tapajuntas de limahoya."
      }
    },
    {
      year: "2018-2022",
      title: {
        en: "Specializing in Texas Storm & Heat Systems",
        es: "Especialización en Clima Extremo de Texas"
      },
      desc: {
        en: "Refining high-wind 6-nail shingle fastening methods, continuous ridge-to-soffit thermodynamic ventilation, and synthetic tear-resistant moisture barriers.",
        es: "Perfeccionamiento de clavado reforzado con 6 clavos contra viento, ventilación termodinámica de cumbrera y membranas sintéticas de uso rudo."
      }
    },
    {
      year: "2023",
      title: {
        en: "Establishment of EliKay Roofing LLC",
        es: "Fundación de EliKay Roofing LLC"
      },
      desc: {
        en: "Formalizing operations to deliver honest, contractor-grade roofing without sales commissions or inflated replacement scopes. 100% bilingual client support.",
        es: "Formalización de operaciones para brindar techos de calidad sin comisiones de vendedores ni precios inflados. Atención 100% bilingüe."
      }
    },
    {
      year: "Today",
      title: {
        en: "13+ Years of Quality Craftsmanship",
        es: "13+ Años de Excelencia y Garantía"
      },
      desc: {
        en: "Serving Houston, Katy, Cypress, Waller, Hempstead, Spring, The Woodlands, Pearland, and Galveston with durable roofs, honest pricing, and lasting protection.",
        es: "Sirviendo a Houston, Katy, Cypress, Waller, Hempstead, Spring, The Woodlands, Pearland y Galveston con techos duraderos, precios justos y protección duradera."
      }
    }
  ];

  const standards = [
    {
      metric: "13+",
      label: {
        en: "Years Trade Experience",
        es: "Años de Experiencia"
      },
      sub: {
        en: "Residential & storm roofing specialists",
        es: "Especialistas en techos residenciales"
      }
    },
    {
      metric: "100%",
      label: {
        en: "Bilingual Service",
        es: "Servicio Bilingüe"
      },
      sub: {
        en: "Fluent communication in English & Spanish",
        es: "Comunicación fluida en inglés y español"
      }
    },
    {
      metric: "130 MPH",
      label: {
        en: "Wind-Rated Shingles",
        es: "Resistencia a Viento"
      },
      sub: {
        en: "Certified 6-nail hurricane fastening",
        es: "Patrón de 6 clavos contra huracanes"
      }
    },
    {
      metric: "$0",
      label: {
        en: "Free On-Site Estimates",
        es: "Presupuestos Gratuitos"
      },
      sub: {
        en: "Written scopes with photo documentation",
        es: "Detalle por escrito con fotos reales"
      }
    }
  ];

  const teamValues = [
    {
      num: "01",
      title: {
        en: "Honest Scopes & No High-Pressure Sales",
        es: "Presupuestos Honestos sin Presión"
      },
      desc: {
        en: "We never push for an expensive full roof replacement when a targeted, quality repair will give you 5-10 more years of watertight performance. You receive transparent facts and photos.",
        es: "Nunca forzamos un reemplazo completo cuando una reparación de calidad puede darle de 5 a 10 años más de vida a su techo. Recibe datos y fotos transparentes."
      }
    },
    {
      num: "02",
      title: {
        en: "True 100% Bilingual Communication",
        es: "Comunicación 100% Bilingüe Real"
      },
      desc: {
        en: "Every member of our leadership and project team communicates fluently in both English and Spanish, ensuring every detail of your roof project is understood clearly from day one.",
        es: "Todo nuestro equipo habla inglés y español con fluidez, asegurando que cada detalle de su proyecto quede claro desde el primer día."
      }
    },
    {
      num: "03",
      title: {
        en: "Pneumatic Precision & Quality Materials",
        es: "Precisión y Materiales de Primera"
      },
      desc: {
        en: "We use heavy-gauge synthetic underlayment, ASTM Class A architectural shingles, galvanized drip edge, and calibrated pneumatic nail patterns that withstand Texas storms.",
        es: "Usamos papel sintético resistente, tejas arquitectónicas Clase A, goterones galvanizados y clavado neumático calibrado para resistir tormentas."
      }
    },
    {
      num: "04",
      title: {
        en: "Spotless Site Cleanup & Magnetic Sweeps",
        es: "Limpieza Impecable y Barrido Magnético"
      },
      desc: {
        en: "We protect your landscaping with tarps and perform multiple magnetic passes over grass, driveways, and flowerbeds so no stray nails threaten your tires, pets, or children.",
        es: "Protegemos sus plantas con lonas y pasamos rodillos magnéticos por el pasto y cocheras para evitar clavos que dañen llantas o a su familia."
      }
    }
  ];

  const breadcrumbs = [
    { name: lang === 'es' ? "Inicio" : "Home", url: "/" },
    { name: lang === 'es' ? "Nosotros" : "About Us", url: "/about-us" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  const getT = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[lang] || val.en || '';
  };

  return (
    <div className="about-page-root">
      <SEOHead
        title={lang === 'es' ? "Sobre EliKay Roofing LLC | Expertos en Techos" : "About EliKay Roofing LLC | 13+ Years Experience"}
        description={
          lang === 'es'
            ? "Conozca EliKay Roofing LLC: 13+ años de experiencia en techos residenciales en Houston, Katy, Cypress, Waller y Texas. 100% bilingüe inglés y español."
            : "Learn about EliKay Roofing LLC: 13+ years of roofing expertise in Houston, Katy, Cypress, Waller, and Greater Texas. 100% bilingual English & Spanish."
        }
        canonicalPath="/about-us"
        ogType="website"
        ogImage="/images/elikay/hero_residential.jpg"
        schema={schema}
      />

      {/* HERO WITH RICH BACKGROUND IMAGE */}
      <section className="about-hero">
        <div className="about-hero-bg-wrap">
          <img
            src="/images/elikay/hero_residential.jpg"
            alt="EliKay Roofing residential project in Texas"
            className="about-hero-bg"
            width="1536"
            height="1024"
            fetchpriority="high"
          />
          <div className="about-hero-overlay"></div>
        </div>

        <div className="container about-hero-container">
          <span className="status-pill">
            <span className="pulse-dot"></span> {lang === 'es' ? '13+ Años de Experiencia · Servicio 100% Bilingüe' : '13+ Years Experience · 100% Bilingual Service'}
          </span>
          <h1 className="about-title">
            {lang === 'es'
              ? 'Techos de Calidad, Protección Duradera y Trato Honesto en Todo Texas.'
              : 'Quality Roofs, Lasting Protection, and Honest Craftsmanship Across Texas.'}
          </h1>
          <p className="about-subtitle">
            {lang === 'es'
              ? 'Con más de 13 años de experiencia directa en el oficio, EliKay Roofing LLC protege hogares y familias con techos resistentes al calor texano, huracanes y tormentas. Hablamos su idioma y cuidamos su patrimonio.'
              : 'With over 13 years of direct trade experience, EliKay Roofing LLC protects homes and families with roofs engineered for Texas heat, hurricanes, and severe storms. We speak your language and safeguard your investment.'}
          </p>
          <div className="about-hero-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency">
              📞 {lang === 'es' ? 'Llamar: (970) 778-7951' : 'Call: (970) 778-7951'}
            </a>
            <a href="/service-areas" onClick={(e) => handleNav('/service-areas', e)} className="btn-secondary-outline">
              {lang === 'es' ? 'Ciudades que Atendemos →' : 'Explore Service Areas →'}
            </a>
          </div>
        </div>
      </section>

      {/* KEY STATS BAR */}
      <section className="about-stats-bar">
        <div className="container stats-bar-grid">
          {standards.map((std, i) => (
            <div key={i} className="stat-card">
              <span className="stat-metric">{std.metric}</span>
              <strong className="stat-label">{getT(std.label)}</strong>
              <span className="stat-sub">{getT(std.sub)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER & STORY SPLIT */}
      <section className="section-light about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-media">
            <div className="founder-frame">
              <img
                src="/images/elikay/12.jpeg"
                alt="EliKay Roofing team on Texas residential roof"
                className="about-owner-photo"
                width="1376"
                height="768"
                loading="lazy"
              />
              <div className="founder-badge">
                <span className="badge-title">EliKay Roofing LLC</span>
                <span className="badge-role">{lang === 'es' ? '13 Años de Experiencia en Techos' : '13 Years Trade Mastery · Houston & Greater Texas'}</span>
              </div>
            </div>
            <div className="founder-secondary-img">
              <img
                src="/images/elikay/16.jpeg"
                alt="EliKay Roofing craftsman checking roof flashing"
                className="founder-field-img"
                width="1536"
                height="1024"
                loading="lazy"
              />
              <span className="founder-field-caption">
                {lang === 'es'
                  ? 'Instalación de tejas arquitectónicas y sellos herméticos en limahoyas.'
                  : 'Architectural shingle installation and watertight valley flashing.'}
              </span>
            </div>
          </div>

          <div className="about-story-text">
            <span className="eyebrow">{lang === 'es' ? 'Nuestra Historia y Filosofía' : 'Our Story & Philosophy'}</span>
            <h2>
              {lang === 'es'
                ? 'El oficio del techador hecho con dedicación, transparencia y orgullo.'
                : 'Roofing craftsmanship delivered with dedication, transparency, and pride.'}
            </h2>
            <p className="lead-text">
              {lang === 'es'
                ? 'EliKay Roofing nació con un objetivo muy claro: ofrecer a los propietarios de Texas un servicio de techos directo, profesional y confiable, sin vendedores agresivos ni presupuestos inflados.'
                : 'EliKay Roofing was built on a simple principle: provide Texas homeowners with direct, professional, and reliable roofing craftsmanship without high-pressure sales reps or inflated replacement quotes.'}
            </p>
            <p>
              {lang === 'es'
                ? 'Con 13 años de experiencia directa trabajando en techos residenciales por todo Houston, Katy, Cypress, Waller y comunidades vecinas, conocemos de primera mano cómo el sol abrasador, la humedad del golfo y las tormentas repentinas desgastan los materiales. Sabemos exactamente qué funciona para que un techo dure décadas.'
                : 'With 13 years of hands-on experience on residential roofs throughout Houston, Katy, Cypress, Waller, and surrounding communities, we understand firsthand how scorching sun, gulf humidity, and sudden storms wear down materials. We know exactly what it takes to build a roof that lasts for decades.'}
            </p>
            <blockquote className="about-quote">
              {lang === 'es'
                ? '“Nuestra promesa es clara: tratar a cada cliente con respeto, hablar con la verdad sobre el estado de su techo y realizar cada trabajo con la más alta calidad posible.”'
                : '“Our promise is simple: treat every client with honesty and respect, deliver the unvarnished truth about their roof, and complete every installation with the highest quality possible.”'}
            </blockquote>
            <p>
              {lang === 'es'
                ? 'Además, nos enorgullece ser una empresa 100% bilingüe. Puede comunicarse con nosotros cómodamente en español o inglés; explicamos cada paso, cada material y cada garantía con total claridad.'
                : 'Additionally, we take immense pride in providing 100% bilingual service. You can communicate with us comfortably in English or Spanish; we explain every step, material spec, and warranty in plain language.'}
            </p>
            <div className="founder-signatures">
              <div className="sig-item">
                <strong>EliKay Roofing LLC</strong>
                <span>{lang === 'es' ? 'Calidad · Honestidad · Garantía' : 'Quality · Integrity · Warranty'}</span>
              </div>
              <div className="sig-item">
                <strong>(970) 778-7951</strong>
                <span>{lang === 'es' ? 'Atención Telefónica Directa' : 'Direct Consultation & Estimates'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE / JOURNEY SECTION */}
      <section className="section-dark about-milestones-section">
        <div className="container">
          <div className="text-center milestones-header">
            <span className="eyebrow">{lang === 'es' ? 'Nuestra Trayectoria' : 'Our Proven Journey'}</span>
            <h2>{lang === 'es' ? '13 Años Perfeccionando el Arte de Techar' : '13 Years Perfecting the Craft of Roofing'}</h2>
            <p>
              {lang === 'es'
                ? 'Los hitos que han forjado a EliKay Roofing como un referente de confianza en Texas.'
                : 'The key milestones that have established EliKay Roofing as a trusted regional roofing partner.'}
            </p>
          </div>

          <div className="milestones-grid">
            {milestones.map((item, idx) => (
              <div key={idx} className="milestone-card">
                <span className="milestone-year">{item.year}</span>
                <h3>{getT(item.title)}</h3>
                <p>{getT(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE OPERATIONAL VALUES */}
      <section className="section-light about-values-section">
        <div className="container">
          <div className="values-header text-center">
            <span className="eyebrow">{lang === 'es' ? 'Nuestros Valores' : 'Our Core Standards'}</span>
            <h2>{lang === 'es' ? 'Cómo Realizamos Cada Trabajo de Techo' : 'How We Deliver Every Roofing Project'}</h2>
            <p>
              {lang === 'es'
                ? 'Creemos que las familias merecen un servicio honesto, materiales duraderos y trato personalizado.'
                : 'We believe homeowners deserve honest assessments, top-tier materials, and personalized care.'}
            </p>
          </div>

          <div className="values-grid">
            {teamValues.map((val, idx) => (
              <div key={idx} className="value-box">
                <span className="value-num">{val.num}</span>
                <h3>{getT(val.title)}</h3>
                <p>{getT(val.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED TRADE CRAFTSMANSHIP & WARRANTY ASSURANCE */}
      <section className="section-dark about-craftsmanship-deep" style={{ padding: '6rem 0', borderTop: '1px solid var(--border-dark)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '850px', margin: '0 auto 3.5rem' }}>
            <span className="eyebrow">{lang === 'es' ? 'Garantía y Especificaciones' : 'Quality Specs & Warranty'}</span>
            <h2>{lang === 'es' ? 'Por Qué Nuestros Techos Resisten las Peores Tormentas de Texas' : 'Engineered to Survive Texas Heat, Hail & Hurricane Winds'}</h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {lang === 'es'
                ? 'No tomamos atajos. Cada componente — desde la madera base hasta el clavo superior — cumple con los códigos de construcción más estrictos del Golfo de Texas.'
                : 'We never cut corners. Every layer of our roofing system — from deck re-nailing to ridge caps — meets or exceeds Texas coastal building standards.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'var(--surface-charcoal-card)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ fontSize: '1.8rem', color: 'var(--brand-blue)', display: 'block', marginBottom: '0.8rem' }}>01</span>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
                {lang === 'es' ? 'Madera de Base 100% Firme' : 'Solid Decking Inspection'}
              </h4>
              <p style={{ color: 'var(--text-light-muted)', fontSize: '0.92rem', lineHeight: '1.65' }}>
                {lang === 'es'
                  ? 'Revisamos cada centímetro de madera. Sustituimos triplay húmedo o apolillado con triplay exterior CDX para asegurar un anclaje perfecto para los clavos.'
                  : 'We walk and probe every inch of decking. Rotted or sagging plywood is cut out and replaced with exterior CDX panels to ensure solid nail withdrawal resistance.'}
              </p>
            </div>

            <div style={{ background: 'var(--surface-charcoal-card)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ fontSize: '1.8rem', color: 'var(--brand-blue)', display: 'block', marginBottom: '0.8rem' }}>02</span>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
                {lang === 'es' ? 'Membrana Sintética TopShield' : 'Polymer Synthetic Barrier'}
              </h4>
              <p style={{ color: 'var(--text-light-muted)', fontSize: '0.92rem', lineHeight: '1.65' }}>
                {lang === 'es'
                  ? 'Diga adiós al papel de fieltro negro que se rompe con el viento. Usamos barreras sintéticas 25 veces más resistentes e impermeables.'
                  : 'We never use cheap organic felt paper that tears in high winds. We install tear-proof woven synthetic barriers that seal your home like an impermeable shell.'}
              </p>
            </div>

            <div style={{ background: 'var(--surface-charcoal-card)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ fontSize: '1.8rem', color: 'var(--brand-blue)', display: 'block', marginBottom: '0.8rem' }}>03</span>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
                {lang === 'es' ? 'Clavado de 6 Puntos Calibrado' : 'Pneumatic 6-Nail Fastening'}
              </h4>
              <p style={{ color: 'var(--text-light-muted)', fontSize: '0.92rem', lineHeight: '1.65' }}>
                {lang === 'es'
                  ? 'Aseguramos cada teja con 6 clavos galvanizados anillados directamente en la banda reforzada para soportar vientos de hasta 130 MPH.'
                  : 'Every shingle is secured with 6 hot-dipped ring-shank nails placed precisely in the manufacturer nailing zone, unlocking full 130 MPH hurricane wind coverage.'}
              </p>
            </div>

            <div style={{ background: 'var(--surface-charcoal-card)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ fontSize: '1.8rem', color: 'var(--brand-blue)', display: 'block', marginBottom: '0.8rem' }}>04</span>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
                {lang === 'es' ? 'Garantía Directa de Mano de Obra' : 'Workmanship & Material Warranty'}
              </h4>
              <p style={{ color: 'var(--text-light-muted)', fontSize: '0.92rem', lineHeight: '1.65' }}>
                {lang === 'es'
                  ? 'Respaldamos nuestro trabajo. Recibe la garantía de fábrica de las tejas más nuestra garantía directa de mano de obra local por escrito.'
                  : 'We stand behind our craft. Homeowners receive both manufacturer lifetime material warranties and EliKay Roofing’s dedicated local workmanship guarantee.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="hp-final-cta">
        <div className="container final-cta-container">
          <span className="eyebrow">{lang === 'es' ? 'Comuníquese Hoy Mismo' : 'Get In Touch Today'}</span>
          <h2 className="final-title">
            {lang === 'es'
              ? '¿Listo para Proteger su Casa con un Techo Seguro?'
              : 'Ready to Protect Your Home With a Quality Roof?'}
          </h2>
          <p className="final-sub">
            {lang === 'es'
              ? 'Llámenos para una inspección gratuita y presupuesto sin compromiso. Atendemos en inglés y español.'
              : 'Call us today for a free on-site roof inspection and written estimate. 100% bilingual support.'}
          </p>
          <div className="final-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              {lang === 'es' ? 'Llamar: (970) 778-7951' : 'Call: (970) 778-7951'}
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-light">
              {lang === 'es' ? 'Solicitar Presupuesto Gratuito' : 'Request Free Estimate'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
