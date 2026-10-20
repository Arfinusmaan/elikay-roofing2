import React from 'react';
import { companyData } from '../../data/companyData';
import { useLanguage } from '../../context/LanguageContext';
import SEOHead from '../SEOHead';
import { getBreadcrumbSchema } from '../../utils/schemaGenerators';

export default function LegalPage({ pageType, onNavigate: _onNavigate }) {
  const { lang } = useLanguage();
  const isPrivacy = pageType === 'privacy';

  const pageTitle = isPrivacy
    ? (lang === 'es' ? `Política de Privacidad | ${companyData.name}` : `Privacy Policy | ${companyData.name}`)
    : (lang === 'es' ? `Términos de Servicio | ${companyData.name}` : `Terms of Service | ${companyData.name}`);

  const metaDesc = isPrivacy
    ? (lang === 'es'
        ? `Política de Privacidad de ${companyData.legalName}. Conozca cómo protegemos los datos de nuestros clientes en Texas.`
        : `Privacy Policy for ${companyData.legalName}. Learn how customer information is collected and protected during roofing estimates.`)
    : (lang === 'es'
        ? `Términos de Servicio de ${companyData.legalName}. Acuerdos de trabajo, presupuestos de techos y estándares de garantía.`
        : `Terms of Service for ${companyData.legalName}. Roofing project agreements, estimates, and workmanship standards in Texas.`);

  const canonical = isPrivacy ? '/privacy-policy' : '/terms';

  const breadcrumbs = [
    { name: lang === 'es' ? "Inicio" : "Home", url: "/" },
    { name: isPrivacy ? (lang === 'es' ? "Privacidad" : "Privacy Policy") : (lang === 'es' ? "Términos" : "Terms of Service"), url: canonical }
  ];

  return (
    <div className="legal-page-root" style={{ backgroundColor: 'var(--surface-charcoal)', minHeight: '80vh' }}>
      <SEOHead
        title={pageTitle}
        description={metaDesc}
        canonicalPath={canonical}
        ogType="website"
        ogImage="/images/elikay/Elikay-Logo.jpeg"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />

      <section style={{ padding: '6rem 0 3rem', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container-narrow">
          <span className="status-pill">
            {lang === 'es' ? 'Documentación Oficial' : 'Official Documentation'}
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', color: '#FFFFFF', margin: '1rem 0' }}>
            {isPrivacy
              ? (lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy')
              : (lang === 'es' ? 'Términos de Servicio' : 'Terms of Service')}
          </h1>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem' }}>
            {lang === 'es' ? 'Fecha de Vigencia: Octubre 2026 · ' : 'Effective Date: October 2026 · '}
            {companyData.legalName}
          </p>
        </div>
      </section>

      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-narrow" style={{ color: '#333333', fontSize: '1.05rem', lineHeight: '1.75' }}>
          {isPrivacy ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>
                  {lang === 'es' ? '1. Información que Recopilamos' : '1. Information We Collect'}
                </h2>
                <p>
                  {lang === 'es'
                    ? `${companyData.legalName} recopila únicamente los datos necesarios para programar presupuestos gratuitos, realizar inspecciones en el techo y comunicarnos con los propietarios de viviendas. Esto incluye nombre, dirección de la propiedad, número telefónico, correo electrónico y fotografías de las áreas a reparar.`
                    : `${companyData.legalName} collects only the information necessary to schedule free on-site estimates, conduct roof inspections, and communicate with property owners. This includes contact names, physical site addresses, phone numbers, email addresses, and roof inspection photos.`}
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>
                  {lang === 'es' ? '2. Uso de la Información' : '2. Use of Information'}
                </h2>
                <p>
                  {lang === 'es'
                    ? 'Utilizamos su información estrictamente para:'
                    : 'We use your personal and property data strictly to:'}
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <li>{lang === 'es' ? 'Coordinar visitas de inspección y presupuestos sin costo en su domicilio.' : 'Coordinate free on-site roof inspections and estimates.'}</li>
                  <li>{lang === 'es' ? 'Elaborar presupuestos detallados por escrito con especificaciones de material.' : 'Compile detailed written scopes with exact material specifications.'}</li>
                  <li>{lang === 'es' ? 'Facilitar la comunicación directa con nuestro equipo bilingüe.' : 'Facilitate direct communication with our bilingual project crew.'}</li>
                </ul>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>
                  {lang === 'es' ? '3. No Vendemos sus Datos' : '3. No Sale of Personal Data'}
                </h2>
                <p>
                  {lang === 'es'
                    ? 'Nunca vendemos, alquilamos ni compartimos su número de teléfono o datos personales con agencias de publicidad o terceros.'
                    : 'We never sell, rent, or lease customer contact information to third-party marketing brokers or lead generation aggregators.'}
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>
                  {lang === 'es' ? '4. Contacto de Privacidad' : '4. Privacy Contact'}
                </h2>
                <p>
                  {lang === 'es'
                    ? `Para cualquier duda sobre su información, escríbanos a `
                    : `For any privacy inquiries, email our office directly at `}
                  <strong>{companyData.email}</strong> {lang === 'es' ? 'o llame al ' : 'or call '}
                  <strong>{companyData.phone}</strong>.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>
                  {lang === 'es' ? '1. Alcance de los Servicios de Techos' : '1. Scope of Roofing Services'}
                </h2>
                <p>
                  {lang === 'es'
                    ? `${companyData.legalName} brinda servicios profesionales de reemplazo de techos residenciales, reparación de fugas, tejas arquitectónicas, ventilación de áticos, canaletas de aluminio y carpintería de aleros y sofito en el Estado de Texas.`
                    : `${companyData.legalName} provides professional residential roof replacements, leak repairs, architectural shingles, attic ventilation, seamless gutters, and eave fascia carpentry across the State of Texas.`}
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>
                  {lang === 'es' ? '2. Presupuestos y Acuerdos de Trabajo' : '2. Written Estimates & Scope Agreements'}
                </h2>
                <p>
                  {lang === 'es'
                    ? 'Todos los trabajos se especifican por escrito indicando los materiales, tipo de tejas, garantía y costo total acordado antes de iniciar cualquier labor de desmonte o instalación.'
                    : 'All roofing projects are specified in detailed written proposals defining materials, shingle warranties, and total agreed pricing prior to commencement.'}
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>
                  {lang === 'es' ? '3. Seguridad y Acceso a la Propiedad' : '3. Property Access & Safety'}
                </h2>
                <p>
                  {lang === 'es'
                    ? 'El propietario autoriza el acceso razonable al perímetro de la vivienda y techo para la cuadrilla y materiales. Nuestro equipo protege el jardín con lonas y realiza barridos magnéticos para recoger clavos.'
                    : 'Property owners agree to provide safe perimeter and roof access for crews and material deliveries. Our crew protects landscaping with tarps and executes magnetic nail sweeps.'}
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>
                  {lang === 'es' ? '4. Ley Aplicable' : '4. Governing Law'}
                </h2>
                <p>
                  {lang === 'es'
                    ? `Estos términos se rigen por las leyes del Estado de Texas. Para cualquier consulta, comuníquese al `
                    : `These terms are governed by the laws of the State of Texas. For inquiries, contact `}
                  <strong>{companyData.email}</strong>.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
