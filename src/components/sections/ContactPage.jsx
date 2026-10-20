import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import SEOHead from '../SEOHead';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../../utils/schemaGenerators';
import './ContactPage.css';

export default function ContactPage({ onNavigate: _onNavigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { lang } = useLanguage();
  const t = translations.contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Houston, TX',
    roofService: 'Roof Repair',
    urgency: 'Standard Scheduling',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(lang === 'es'
        ? 'Por favor ingrese su nombre y número de teléfono para que podamos contactarle.'
        : 'Please enter your name and phone number so our roofing specialist can contact you.');
      return;
    }
    setFormSubmitted(true);
  };

  const serviceCityNames = companyData.serviceAreas.map(a => a.name);

  const breadcrumbs = [
    { name: lang === 'es' ? "Inicio" : "Home", url: "/" },
    { name: lang === 'es' ? "Contacto" : "Contact Us", url: "/contact-us" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="contact-page-root">
      <SEOHead
        title={lang === 'es' ? "Contacto | EliKay Roofing LLC | Presupuesto Gratis" : "Contact EliKay Roofing LLC | Free Roof Estimate"}
        description={lang === 'es' ? "Presupuestos de techos 100% gratuitos en Houston, Katy, Cypress y Waller TX. Llame al (970) 778-7951 o solicite su cita en línea." : "Free on-site roof estimates in Houston, Katy, Cypress, and Waller TX. Call (970) 778-7951 or request your consultation online."}
        canonicalPath="/contact-us"
        ogType="website"
        ogImage="/images/elikay/hero_residential.jpg"
        schema={schema}
      />

      {/* HERO WITH BACKGROUND */}
      <section className="contact-hero">
        <div className="contact-hero-bg-wrap">
          <img
            src="/images/elikay/13.jpeg"
            alt="EliKay Roofing team on site in Texas"
            className="contact-hero-bg"
          />
          <div className="contact-hero-overlay"></div>
        </div>

        <div className="container contact-hero-content">
          <span className="status-pill">
            <span className="pulse-dot"></span> 100% {lang === 'es' ? 'Bilingüe · Se Habla Español' : 'Bilingual · Free Estimates'}
          </span>
          <h1 className="contact-title">{t.heroTitle[lang]}</h1>
          <p className="contact-subtitle">{t.heroSubtext[lang]}</p>
          <div className="contact-hero-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency">
              📞 {lang === 'es' ? 'Llamar al' : 'Call'} {companyData.phone}
            </a>
            <a href={`mailto:${companyData.email}`} className="btn-secondary-outline">
              ✉️ {companyData.email}
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT / INTAKE FORM */}
      <section className="section-light contact-main-section">
        <div className="container contact-grid">
          {/* Form Column */}
          <div className="contact-form-col">
            <div className="form-card">
              <span className="eyebrow">{lang === 'es' ? 'Presupuesto Gratuito' : 'Free Roof Consultation'}</span>
              <h2>{t.formTitle[lang]}</h2>
              <p className="form-desc">
                {lang === 'es'
                  ? 'Complete sus datos y un especialista de EliKay Roofing se comunicará rápidamente para confirmar su cita sin ningún compromiso.'
                  : 'Provide basic details regarding your home. An EliKay Roofing specialist will contact you promptly to schedule your complimentary on-site inspection.'}
              </p>

              {formSubmitted ? (
                <div className="form-success-box" role="alert">
                  <div className="success-icon">✓</div>
                  <h3>{lang === 'es' ? 'Solicitud Enviada con Éxito' : 'Estimate Request Received'}</h3>
                  <p>
                    {lang === 'es'
                      ? `Muchas gracias, ${formData.name}. Nos pondremos en contacto al ${formData.phone} para coordinar la visita en ${formData.city}.`
                      : `Thank you, ${formData.name}. We have received your request for ${formData.city} and will call you at ${formData.phone} shortly.`}
                  </p>
                  <p className="sub-note">
                    {lang === 'es'
                      ? `Para atención inmediata, llámenos directamente al ${companyData.phone}.`
                      : `For direct assistance, call us anytime at ${companyData.phone}.`}
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className="btn-ghost-dark" style={{ marginTop: '1rem' }}>
                    {lang === 'es' ? 'Enviar Otra Solicitud' : 'Submit Another Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="intake-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">{t.nameLabel[lang]} *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe / Juan Pérez"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">{t.phoneLabel[lang]} *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="(970) 778-7951"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">{t.emailLabel[lang]}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">{t.cityLabel[lang]} *</label>
                      <select id="city" name="city" value={formData.city} onChange={handleChange}>
                        {serviceCityNames.map((c, i) => (
                          <option key={i} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="roofService">{t.serviceLabel[lang]}</label>
                      <select id="roofService" name="roofService" value={formData.roofService} onChange={handleChange}>
                        {companyData.services.map(s => (
                          <option key={s.id} value={s.id}>{s.title[lang]}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="urgency">{t.urgencyLabel[lang]}</label>
                      <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange}>
                        <option value="Urgent">
                          {lang === 'es' ? 'Urgente (Gotera Activa o Daño de Tormenta)' : 'Urgent (Active Leak or Storm Damage)'}
                        </option>
                        <option value="This Week">
                          {lang === 'es' ? 'Esta Semana (Inspección Programada)' : 'This Week (Scheduled Inspection)'}
                        </option>
                        <option value="Planning Replacement">
                          {lang === 'es' ? 'Planificando Reemplazo de Techo' : 'Planning Upcoming Replacement'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">{t.notesLabel[lang]}</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="4"
                      placeholder={lang === 'es' ? 'Describa brevemente la situación de su techo (edad, fugas observadas, tormenta reciente)...' : 'Briefly describe your roof situation (approximate age, visible leaks, recent storm)...'}
                      value={formData.notes}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-emergency btn-large btn-block">
                    {t.submitButton[lang]}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information & Operational Details */}
          <div className="contact-info-col">
            <div className="info-block contact-methods-card">
              <h3>{lang === 'es' ? 'Contacto Directo con Techadores' : 'Direct Roofer Contact'}</h3>
              <p className="methods-intro">
                {lang === 'es'
                  ? 'En EliKay Roofing habla directamente con especialistas de techos con 13 años de experiencia en el oficio.'
                  : 'At EliKay Roofing, you speak directly with experienced roofing professionals who know local Texas construction.'}
              </p>

              <div className="method-item phone-highlight">
                <div className="method-icon">📞</div>
                <div>
                  <strong>{lang === 'es' ? 'Teléfono Directo' : 'Direct Phone Line'}</strong>
                  <a href={`tel:${companyData.phoneRaw}`} className="method-link">
                    {companyData.phone}
                  </a>
                  <span className="method-sub">{companyData.hours[lang]}</span>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon">✉️</div>
                <div>
                  <strong>{lang === 'es' ? 'Correo Electrónico' : 'Email Inquiries'}</strong>
                  <a href={`mailto:${companyData.email}`} className="method-link">
                    {companyData.email}
                  </a>
                  <span className="method-sub">{lang === 'es' ? 'Respuesta rápida en 24 horas' : 'Prompt response within 24 business hours'}</span>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon">📍</div>
                <div>
                  <strong>{lang === 'es' ? 'Bases de Servicio' : 'Primary Service Hubs'}</strong>
                  <span className="method-plain">Houston, Katy, Cypress, Waller & Hempstead, TX</span>
                  <span className="method-sub">{lang === 'es' ? 'Servicio a todo el sureste de Texas' : 'Serving Greater Houston & surrounding counties'}</span>
                </div>
              </div>
            </div>

            <div className="info-block expectations-card">
              <h3>{lang === 'es' ? 'Qué Puede Esperar de Nosotros' : 'What You Can Expect'}</h3>
              <ul className="expectations-list">
                <li>
                  <strong>{lang === 'es' ? 'Puntualidad & Respeto:' : 'On-Time Arrival:'}</strong> {lang === 'es' ? 'Llegamos a la hora acordada y cuidamos su propiedad con lonas de protección.' : 'We arrive promptly as scheduled, treat your family and home with utmost respect, and protect all landscape beds.'}
                </li>
                <li>
                  <strong>{lang === 'es' ? 'Fotos Reales del Techo:' : 'Transparent Job Photos:'}</strong> {lang === 'es' ? 'Le mostramos exactamente qué encontramos en sus tejas, valles y penetraciones.' : 'We present clear, high-resolution photographs of current shingle wear, flashing conditions, and flashing seals.'}
                </li>
                <li>
                  <strong>{lang === 'es' ? 'Sin Presión de Ventas:' : 'Zero Sales Pressure:'}</strong> {lang === 'es' ? 'Si su tejado solo necesita una reparación puntual, jamás le forzaremos a cambiar todo el techo.' : 'If a localized, honest repair gives you 5 to 10 more years of life, we recommend repair instead of pushing full replacement.'}
                </li>
                <li>
                  <strong>{lang === 'es' ? 'Atención 100% Bilingüe:' : '100% Bilingual Service:'}</strong> {lang === 'es' ? 'Hablamos inglés y español con fluidez para resolver cualquier duda técnica o de presupuesto.' : 'Seamless communication in English or Spanish so every scope item and estimate line is crystal clear.'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 4-STEP DISPATCH PROCESS */}
      <section className="section-dark contact-process-section">
        <div className="container">
          <div className="text-center contact-process-header">
            <span className="status-pill">
              <span className="pulse-dot"></span> {lang === 'es' ? 'Protocolo de Atención Rápida' : 'Rapid Response Protocol'}
            </span>
            <h2 className="contact-section-h2">
              {lang === 'es' ? 'Cómo Funciona el Proceso Cuando Nos Contacta' : 'What Happens When You Contact EliKay Roofing'}
            </h2>
            <p className="contact-section-sub">
              {lang === 'es'
                ? 'Desde su primera llamada hasta la revisión final en su tejado, garantizamos transparencia, puntualidad y comunicación directa sin intermediarios.'
                : 'From your initial phone call or form submission to final on-roof inspection, here is our straightforward 4-step workflow.'}
            </p>
          </div>

          <div className="contact-steps-grid">
            <div className="contact-step-card">
              <div className="step-num-badge">01</div>
              <h3>{lang === 'es' ? 'Contacto Directo Inmediato' : 'Immediate Direct Contact'}</h3>
              <p>
                {lang === 'es'
                  ? 'Su llamada o formulario es atendido de inmediato por un techador con experiencia real en el oficio de Texas, no por un centro de llamadas externo.'
                  : 'Your inquiry is handled directly by an experienced roofing trade professional who understands Texas construction, not a third-party call center.'}
              </p>
            </div>

            <div className="contact-step-card">
              <div className="step-num-badge">02</div>
              <h3>{lang === 'es' ? 'Inspección en Sitio Gratuita' : 'Free On-Site Inspection'}</h3>
              <p>
                {lang === 'es'
                  ? 'Coordinamos una visita a su propiedad para evaluar el estado de las tejas, valles, goterones, ventilación del ático y posibles filtraciones ocultas.'
                  : 'We schedule an on-site visit to inspect shingle integrity, flashing, pipe boots, decking, and attic ventilation without high-pressure sales.'}
              </p>
            </div>

            <div className="contact-step-card">
              <div className="step-num-badge">03</div>
              <h3>{lang === 'es' ? 'Presupuesto Detallado por Escrito' : 'Clear Written Estimate'}</h3>
              <p>
                {lang === 'es'
                  ? 'Recibe un desglose claro de materiales recomendados (papel sintético, tejas arquitectónicas Clase A) y mano de obra con precio garantizado.'
                  : 'You receive a transparent, itemized scope detailing premium synthetic underlayment, Class A shingles, flashing, and guaranteed pricing.'}
              </p>
            </div>

            <div className="contact-step-card">
              <div className="step-num-badge">04</div>
              <h3>{lang === 'es' ? 'Ejecución y Limpieza Impecable' : 'Pneumatic Install & Sweep'}</h3>
              <p>
                {lang === 'es'
                  ? 'Realizamos la instalación con clavado neumático de 6 clavos, protegemos su jardín con lonas y pasamos rodillos magnéticos para recoger todo clavo suelto.'
                  : 'We execute the project with 6-nail pneumatic fastening, safeguard flowerbeds with tarps, and perform multi-pass magnetic sweeps for stray nails.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: REGIONAL DISPATCH HUBS */}
      <section className="section-light contact-hubs-section">
        <div className="container">
          <div className="text-center contact-process-header">
            <span className="eyebrow">{lang === 'es' ? 'Presencia Local en Texas' : 'Texas Regional Presence'}</span>
            <h2 className="contact-section-h2" style={{ color: 'var(--text-dark)' }}>
              {lang === 'es' ? 'Bases de Servicio y Tiempo de Respuesta' : 'Service Hubs & Dispatch Zones'}
            </h2>
            <p className="contact-section-sub" style={{ color: '#555555' }}>
              {lang === 'es'
                ? 'Nuestras cuadrillas móviles recorren activamente el Gran Houston y condados aledaños para responder con rapidez a goteras y proyectos residenciales.'
                : 'Our mobile crews actively cover Greater Houston and surrounding Texas counties for fast inspection dispatch and storm mitigation.'}
            </p>
          </div>

          <div className="hubs-coverage-grid">
            <div className="hub-coverage-card">
              <div className="hub-cov-header">
                <h3>{lang === 'es' ? 'Houston Central & Katy' : 'Central Houston & Katy'}</h3>
                <span className="hub-status-pill">{lang === 'es' ? 'Base Principal' : 'Primary Hub'}</span>
              </div>
              <p className="hub-counties">{lang === 'es' ? 'Condados: Harris & Fort Bend' : 'Counties: Harris & Fort Bend'}</p>
              <ul className="hub-cities-list">
                <li>Downtown Houston & Heights</li>
                <li>Katy, Fulshear & Cinco Ranch</li>
                <li>Memorial, Spring Branch & Westchase</li>
                <li>Sugar Land, Missouri City & Richmond</li>
              </ul>
              <div className="hub-cov-footer">
                <span>{lang === 'es' ? 'Inspecciones en 24-48 hrs' : '24-48 hr On-Site Scheduling'}</span>
              </div>
            </div>

            <div className="hub-coverage-card">
              <div className="hub-cov-header">
                <h3>{lang === 'es' ? 'Cypress, Waller & Hempstead' : 'Cypress, Waller & Hempstead'}</h3>
                <span className="hub-status-pill">{lang === 'es' ? 'Base Noroeste' : 'Northwest Hub'}</span>
              </div>
              <p className="hub-counties">{lang === 'es' ? 'Condados: Waller & Harris Noroeste' : 'Counties: Waller & NW Harris'}</p>
              <ul className="hub-cities-list">
                <li>Cypress & Bridgeland</li>
                <li>Waller, Hempstead & Prairie View</li>
                <li>Tomball, Pinehurst & Magnolia</li>
                <li>Hockley & Jersey Village</li>
              </ul>
              <div className="hub-cov-footer">
                <span>{lang === 'es' ? 'Atención local inmediata' : 'Fast Local Dispatch'}</span>
              </div>
            </div>

            <div className="hub-coverage-card">
              <div className="hub-cov-header">
                <h3>{lang === 'es' ? 'The Woodlands, Spring & Conroe' : 'The Woodlands, Spring & Conroe'}</h3>
                <span className="hub-status-pill">{lang === 'es' ? 'Base Norte' : 'North Hub'}</span>
              </div>
              <p className="hub-counties">{lang === 'es' ? 'Condados: Montgomery & Harris Norte' : 'Counties: Montgomery & N Harris'}</p>
              <ul className="hub-cities-list">
                <li>The Woodlands & Shenandoah</li>
                <li>Spring & Klein Communities</li>
                <li>Conroe & Lake Conroe Area</li>
                <li>Humble, Atascocita & Kingwood</li>
              </ul>
              <div className="hub-cov-footer">
                <span>{lang === 'es' ? 'Cuadrillas para viento y granizo' : 'Hail & Wind Inspection Teams'}</span>
              </div>
            </div>

            <div className="hub-coverage-card">
              <div className="hub-cov-header">
                <h3>{lang === 'es' ? 'Pearland, League City & Galveston' : 'Pearland, League City & Galveston'}</h3>
                <span className="hub-status-pill">{lang === 'es' ? 'Base Costera' : 'Coastal Hub'}</span>
              </div>
              <p className="hub-counties">{lang === 'es' ? 'Condados: Brazoria & Galveston' : 'Counties: Brazoria & Galveston'}</p>
              <ul className="hub-cities-list">
                <li>Pearland, Manvel & Friendswood</li>
                <li>League City, Webster & Clear Lake</li>
                <li>Galveston Island & Tiki Island</li>
                <li>Alvin, Dickinson & Texas City</li>
              </ul>
              <div className="hub-cov-footer">
                <span>{lang === 'es' ? 'Especialistas en vientos costeros' : 'Coastal High-Wind Specialists'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT & ESTIMATE FREQUENT QUESTIONS */}
      <section className="section-dark contact-faq-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="text-center contact-process-header">
            <span className="status-pill">
              <span className="pulse-dot"></span> {lang === 'es' ? 'Preguntas Frecuentes' : 'Homeowner FAQs'}
            </span>
            <h2 className="contact-section-h2">
              {lang === 'es' ? 'Preguntas Comunes al Solicitar una Inspección' : 'Frequently Asked Questions About Inspections & Estimates'}
            </h2>
            <p className="contact-section-sub">
              {lang === 'es'
                ? 'Todo lo que necesita saber antes de agendar su visita con EliKay Roofing LLC.'
                : 'Clear answers on pricing, on-site procedures, warranties, and insurance claims.'}
            </p>
          </div>

          <div className="contact-faq-accordion">
            <div className="contact-faq-item">
              <h3 className="faq-question">
                {lang === 'es'
                  ? '¿La inspección y presupuesto de techo son verdaderamente gratuitos?'
                  : 'Is the on-site roof inspection and estimate truly 100% free?'}
              </h3>
              <p className="faq-answer">
                {lang === 'es'
                  ? 'Sí, absolutamente. Subimos a su tejado, tomamos fotografías de las zonas afectadas y le entregamos un presupuesto por escrito detallado sin ningún costo ni obligación de compra.'
                  : 'Yes, completely free. A seasoned roofer ascends your roof, photographs current shingle and flashing wear, and delivers an itemized written estimate with no purchase obligation.'}
              </p>
            </div>

            <div className="contact-faq-item">
              <h3 className="faq-question">
                {lang === 'es'
                  ? '¿Tengo que estar presente durante toda la inspección de mi tejado?'
                  : 'Do I need to be present at home during the roof inspection?'}
              </h3>
              <p className="faq-answer">
                {lang === 'es'
                  ? 'Es recomendable para mostrarle las fotografías y explicarle el diagnóstico en persona, pero si está trabajando podemos realizar la inspección exterior y enviarle el reporte fotográfico y presupuesto digital a su correo o por WhatsApp.'
                  : 'It is recommended so we can review photos and walk you through findings in person. However, if your schedule does not permit, we can conduct the exterior evaluation and email/text you a comprehensive digital photo report.'}
              </p>
            </div>

            <div className="contact-faq-item">
              <h3 className="faq-question">
                {lang === 'es'
                  ? '¿Cómo ayudan en reclamos de seguro por granizo o huracanes?'
                  : 'How do you assist with insurance claims for hail or storm wind damage?'}
              </h3>
              <p className="faq-answer">
                {lang === 'es'
                  ? 'Proporcionamos documentación fotográfica completa del impacto de granizo o tejas desprendidas por viento, y podemos estar presentes el día que el perito de su aseguradora visite su hogar para asegurar que todo el daño sea registrado con precisión.'
                  : 'We document all wind uplift, shingle tears, and hail bruising with photographic evidence. We can also meet your insurance adjuster on-site to verify all storm impacts are accounted for in their scope.'}
              </p>
            </div>

            <div className="contact-faq-item">
              <h3 className="faq-question">
                {lang === 'es'
                  ? '¿Hablan español en todas las llamadas y visitas?'
                  : 'Is bilingual Spanish/English assistance available for all calls?'}
              </h3>
              <p className="faq-answer">
                {lang === 'es'
                  ? 'Sí, 100%. Hablamos español con fluidez en la llamada inicial, durante la visita en su hogar y en la explicación detallada de cada partida del presupuesto.'
                  : 'Yes, 100%. Our leadership and crew are fluent in both English and Spanish, ensuring every homeowner has clear, comfortable communication without language barriers.'}
              </p>
            </div>
          </div>

          <div className="contact-cta-bar text-center" style={{ marginTop: '3.5rem' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.45rem', marginBottom: '1rem' }}>
              {lang === 'es' ? '¿Prefiere hablar directamente con un techador ahora mismo?' : 'Prefer to Speak Directly with a Texas Roofer Right Now?'}
            </h3>
            <div className="contact-hero-actions" style={{ justifyContent: 'center' }}>
              <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency">
                📞 {lang === 'es' ? 'Llamar: (970) 778-7951' : 'Call: (970) 778-7951'}
              </a>
              <a href="mailto:contact@elikayroofing.com" className="btn-secondary-outline">
                ✉️ contact@elikayroofing.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
