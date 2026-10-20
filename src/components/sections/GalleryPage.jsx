import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import { useLanguage } from '../../context/LanguageContext';
import SEOHead from '../SEOHead';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../../utils/schemaGenerators';
import './GalleryPage.css';

export default function GalleryPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const { lang } = useLanguage();

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = lang === 'es'
    ? ['Todos', 'Reemplazos Completos', 'Reparación de Fugas', 'Ventilación y Áticos', 'Canaletas y Aleros']
    : ['All', 'Full Replacements', 'Leak Repairs', 'Attic & Ventilation', 'Gutters & Eaves'];

  const getT = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[lang] || val.en || '';
  };

  const galleryItems = [
    {
      title: {
        en: "Full Residential Roof Replacement & Clean Valley Seams",
        es: "Reemplazo Residencial Completo con Limahoyas Impecables"
      },
      category: {
        en: "Full Replacements",
        es: "Reemplazos Completos"
      },
      filterCat: "Full Replacements",
      filterCatEs: "Reemplazos Completos",
      image: "/images/elikay/12.jpeg",
      caption: {
        en: "Clean shingle installation on residential pitch featuring reinforced synthetic underlayment, drip edge, and neat ridge caps.",
        es: "Instalación limpia de tejas en residencia familiar con membrana sintética, goterón metálico y caballetes alineados."
      },
      location: "Katy, TX",
      techSpecs: {
        en: "Class A Architectural Shingles · 6-Nail Pattern",
        es: "Tejas Arquitectónicas Clase A · 6 Clavos por Teja"
      }
    },
    {
      title: {
        en: "Decking Plywood Inspection & Synthetic Vapor Barrier",
        es: "Inspección de Triplay y Membrana Sintética contra Agua"
      },
      category: {
        en: "Full Replacements",
        es: "Reemplazos Completos"
      },
      filterCat: "Full Replacements",
      filterCatEs: "Reemplazos Completos",
      image: "/images/elikay/13.jpeg",
      caption: {
        en: "Full tear-off down to bare wood, replacing water-softened decking sheets and securing tear-resistant synthetic underlayment.",
        es: "Desmonte total hasta la madera, reemplazando triplay dañado y colocando papel sintético impermeable de uso rudo."
      },
      location: "Houston, TX",
      techSpecs: {
        en: "CDX Exterior Plywood · Polymer Underlayment",
        es: "Triplay Exterior CDX · Membrana Polimérica"
      }
    },
    {
      title: {
        en: "Precision Pipe Jack Boot & Collar Resealing",
        es: "Resellado de Bota y Tapajuntas de Tubería"
      },
      category: {
        en: "Leak Repairs",
        es: "Reparación de Fugas"
      },
      filterCat: "Leak Repairs",
      filterCatEs: "Reparación de Fugas",
      image: "/images/elikay/14.jpeg",
      caption: {
        en: "Targeted leak intervention replacing a cracked UV-damaged rubber pipe boot with a heavy-duty collar and woven shingle course.",
        es: "Intervención de fuga cambiando una bota de hule cuarteada por el sol con collarín galvanizado y tejas entrelazadas."
      },
      location: "Cypress, TX",
      techSpecs: {
        en: "Heavy-Gauge Lead Boot · Polyurethane Seal",
        es: "Bota Galvanizada Gruesa · Sellador de Poliuretano"
      }
    },
    {
      title: {
        en: "Rooftop Turbine Vents & Thermodynamic Attic Flow",
        es: "Turbinas Eólicas y Flujo Termodinámico en Ático"
      },
      category: {
        en: "Attic & Ventilation",
        es: "Ventilación y Áticos"
      },
      filterCat: "Attic & Ventilation",
      filterCatEs: "Ventilación y Áticos",
      image: "/images/elikay/18.jpeg",
      caption: {
        en: "Installing silent dual-bearing wind turbines to pull superheated air out of the attic and reduce summer electricity consumption.",
        es: "Instalación de turbinas de aluminio con baleros sellados para expulsar el calor y bajar el recibo de luz en verano."
      },
      location: "Waller, TX",
      techSpecs: {
        en: "12-Inch Dual-Bearing Turbines · 1:300 Code Ventilation",
        es: "Turbinas de 12 Pulgadas · Proporción de Código 1:300"
      }
    },
    {
      title: {
        en: "Architectural Starter Course & Drip Edge Alignment",
        es: "Alineación de Tira de Inicio y Goterón Perimetral"
      },
      category: {
        en: "Full Replacements",
        es: "Reemplazos Completos"
      },
      filterCat: "Full Replacements",
      filterCatEs: "Reemplazos Completos",
      image: "/images/elikay/10.jpeg",
      caption: {
        en: "Fastening starter strip shingles along eave rake perimeters to lock the roof edge against strong hurricane wind uplift.",
        es: "Fijación de hilera de inicio a lo largo del alero para blindar la orilla contra la succión de vientos huracanados."
      },
      location: "Spring, TX",
      techSpecs: {
        en: "130 MPH Wind Uplift Sealant · Galvanized Flashing",
        es: "Sellador para Viento de 130 MPH · Metal Galvanizado"
      }
    },
    {
      title: {
        en: "Ridge Line Exhaust Channeling & Cap Course",
        es: "Canal de Cumbrera Ventilada y Tejas de Caballete"
      },
      category: {
        en: "Attic & Ventilation",
        es: "Ventilación y Áticos"
      },
      filterCat: "Attic & Ventilation",
      filterCatEs: "Ventilación y Áticos",
      image: "/images/elikay/15.jpeg",
      caption: {
        en: "Cutting clean ventilation slots along the roof apex before installing shingle-over baffled ridge vents.",
        es: "Corte limpio en la cúspide del techo antes de instalar cumbrera ventilada oculta bajo tejas."
      },
      location: "The Woodlands, TX",
      techSpecs: {
        en: "Internal Weather Baffles · Continuous Intake/Exhaust",
        es: "Deflectores contra Lluvia · Flujo Continuo"
      }
    },
    {
      title: {
        en: "Watertight Roof Valley Weaving & Step Flashing",
        es: "Limahoya Entrelazada 100% Hermética y Tapajuntas",
      },
      category: {
        en: "Leak Repairs",
        es: "Reparación de Fugas"
      },
      filterCat: "Leak Repairs",
      filterCatEs: "Reparación de Fugas",
      image: "/images/elikay/17.jpeg",
      caption: {
        en: "Heavy-duty ice and water barrier installed along roof valleys, directing intense rainfall runoff safely into gutters.",
        es: "Barrera vulcanizada autoadherible en limahoya que canaliza la lluvia torrencial directo a las canaletas sin fugas."
      },
      location: "Hempstead, TX",
      techSpecs: {
        en: "Self-Adhering Vulcanized Membrane · Closed Cut Valley",
        es: "Membrana Vulcanizada · Limahoya con Corte Cerrado"
      }
    },
    {
      title: {
        en: "Seamless Aluminum Gutters & Eave Woodwork Protection",
        es: "Canaletas de Aluminio sin Uniones y Cuidado de Aleros"
      },
      category: {
        en: "Gutters & Eaves",
        es: "Canaletas y Aleros"
      },
      filterCat: "Gutters & Eaves",
      filterCatEs: "Canaletas y Aleros",
      image: "/images/elikay/gutters_siding.jpg",
      caption: {
        en: "Custom-extruded seamless aluminum gutters with oversized downspouts protecting residential foundations from soil erosion.",
        es: "Canaletas de aluminio continuo fabricadas en el sitio con bajadas amplias que protegen cimientos de la erosión."
      },
      location: "Houston, TX",
      techSpecs: {
        en: "Heavy-Gauge 0.032 Aluminum · Hidden Screw Hangers",
        es: "Aluminio Calibre 0.032 · Soportes Internos con Tornillo"
      }
    },
    {
      title: {
        en: "Dimensional Shingle Curb Appeal Transformation",
        es: "Transformación Estética con Tejas Dimensionales"
      },
      category: {
        en: "Full Replacements",
        es: "Reemplazos Completos"
      },
      filterCat: "Full Replacements",
      filterCatEs: "Reemplazos Completos",
      image: "/images/elikay/19.jpeg",
      caption: {
        en: "Completed full roof replacement delivering dramatic dimensional beauty and 30-year manufacturer protection.",
        es: "Reemplazo completo terminado que brinda un realce estético notable y 30 años de garantía del fabricante."
      },
      location: "Pearland, TX",
      techSpecs: {
        en: "Multi-Tone Charcoal Blend · Lifetime Limited Warranty",
        es: "Tono Carbón Multitono · Garantía Limitada de Por Vida"
      }
    },
    {
      title: {
        en: "Post-Storm Roof Assessment & Hail Impact Mapping",
        es: "Evaluación Tras Tormenta y Marcaje de Granizo"
      },
      category: {
        en: "Leak Repairs",
        es: "Reparación de Fugas"
      },
      filterCat: "Leak Repairs",
      filterCatEs: "Reparación de Fugas",
      image: "/images/elikay/storm_inspection.jpg",
      caption: {
        en: "Field assessment documenting hail strikes, granule stripping, and creased shingles for property owners.",
        es: "Evaluación en sitio documentando impactos de granizo, pérdida de gránulos y tejas dobladas para el dueño."
      },
      location: "Memorial, Houston, TX",
      techSpecs: {
        en: "10x10 Test Square Audit · Digital Photographic Dossier",
        es: "Auditoría en Cuadrante 10x10 · Reporte Digital Completo"
      }
    }
  ];

  const filteredItems = (activeCategory === 'All' || activeCategory === 'Todos')
    ? galleryItems
    : galleryItems.filter(item => {
        if (lang === 'es') {
          return item.filterCatEs === activeCategory;
        }
        return item.filterCat === activeCategory;
      });

  const breadcrumbs = [
    { name: lang === 'es' ? "Inicio" : "Home", url: "/" },
    { name: lang === 'es' ? "Galería de Trabajos" : "Work Gallery", url: "/gallery" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="gallery-page-root">
      <SEOHead
        title={lang === 'es' ? "Galería de Trabajos Reales | EliKay Roofing LLC" : "Work Gallery & Proof of Quality | EliKay Roofing LLC"}
        description={
          lang === 'es'
            ? "Vea fotos auténticas de techos residenciales, reemplazos, reparación de goteras y canaletas instaladas por EliKay Roofing LLC en Texas."
            : "View authentic jobsite photos of residential roof replacements, leak repairs, attic ventilation, and gutters completed by EliKay Roofing LLC in Texas."
        }
        canonicalPath="/gallery"
        ogType="website"
        ogImage="/images/elikay/12.jpeg"
        schema={schema}
      />

      {/* HERO WITH BACKGROUND */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg-wrap">
          <img
            src="/images/elikay/gallery_hero_panoramic.jpg"
            alt="Panoramic view of Texas residential community with EliKay Roofing service truck and newly completed roofs"
            className="gallery-hero-bg"
            width="1536"
            height="1024"
            fetchpriority="high"
          />
          <div className="gallery-hero-overlay"></div>
        </div>

        <div className="container gallery-hero-content">
          <span className="status-pill">
            <span className="pulse-dot"></span> {lang === 'es' ? 'Fotografía Real de Nuestros Trabajos' : 'Authentic Jobsite Photography · Greater Texas'}
          </span>
          <h1 className="gallery-title">
            {lang === 'es'
              ? 'Trabajos reales, acabados limpios y techos duraderos.'
              : 'Real projects, spotless craftsmanship, and lasting roofs.'}
          </h1>
          <p className="gallery-subtitle">
            {lang === 'es'
              ? 'En EliKay Roofing mostramos con orgullo las fotos de nuestros proyectos reales. Vea nuestros reemplazos completos, sellado de goteras, turbinas de ventilación y canaletas instaladas por todo Texas.'
              : 'At EliKay Roofing we stand behind our workmanship with genuine photos from real Texas homes. Explore our complete shingle replacements, leak repairs, attic ventilation systems, and seamless gutters.'}
          </p>
          <div className="gallery-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency">
              📞 {lang === 'es' ? 'Llamar: (970) 778-7951' : 'Call: (970) 778-7951'}
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-secondary-outline">
              {lang === 'es' ? 'Solicitar Presupuesto Gratis →' : 'Request Free On-Site Estimate →'}
            </a>
          </div>
        </div>
      </section>

      {/* FILTER TABS & GALLERY GRID */}
      <section className="section-dark gallery-grid-section">
        <div className="container">
          <div className="gallery-header-row">
            <div>
              <span className="eyebrow">{lang === 'es' ? 'Portafolio de Proyectos' : 'Visual Case Portfolio'}</span>
              <h2>{lang === 'es' ? 'Proyectos Residenciales en Texas' : 'Authentic Texas Roof Deployments'}</h2>
            </div>
            {/* Filter Buttons */}
            <div className="gallery-filter-nav">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="gallery-card">
                <div className="gallery-img-wrap">
                  <img
                    src={item.image}
                    alt={getT(item.title)}
                    className="gallery-img"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <span className="gallery-category-pill">{getT(item.category)}</span>
                  <span className="gallery-loc-pill">{item.location}</span>
                </div>
                <div className="gallery-info">
                  <h3>{getT(item.title)}</h3>
                  <p className="gallery-caption">{getT(item.caption)}</p>
                  <div className="gallery-specs">
                    <strong>{lang === 'es' ? 'Especificaciones:' : 'Specs:'}</strong> {getT(item.techSpecs)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPMENT STANDARDS STRIP */}
      <section className="section-light gallery-equip-standards">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            <span className="eyebrow">{lang === 'es' ? 'Estándares de Calidad' : 'Quality Standards'}</span>
            <h2>{lang === 'es' ? 'Por Qué la Mano de Obra Importa Tanto' : 'Why Craftsmanship & Materials Matter'}</h2>
            <p>
              {lang === 'es'
                ? 'Un buen techo no solo depende de las tejas, sino de la madera, la membrana sintética y la precisión del clavado.'
                : 'A great roof depends on the entire assembly: solid decking, heavy synthetic vapor barriers, and precise pneumatic nailing.'}
            </p>
          </div>

          <div className="standards-grid">
            <div className="std-item">
              <span className="std-num">01</span>
              <h4>{lang === 'es' ? 'Clavado de 6 Puntos Certificado' : 'Certified 6-Nail Fastening'}</h4>
              <p>
                {lang === 'es'
                  ? 'Cada teja se asegura con 6 clavos galvanizados en la zona reforzada, garantizando resistencia contra vientos de hasta 130 MPH.'
                  : 'Every shingle is secured with 6 hot-dipped galvanized nails in the reinforced nailing strip, providing certified 130 MPH wind defense.'}
              </p>
            </div>
            <div className="std-item">
              <span className="std-num">02</span>
              <h4>{lang === 'es' ? 'Barrera Vulcanizada en Valles' : 'Vulcanized Valley Barriers'}</h4>
              <p>
                {lang === 'es'
                  ? 'Colocamos membrana de asfalto engomado en todas las limahoyas y respiraderos para sellar herméticamente alrededor de los clavos.'
                  : 'We install self-adhering rubberized asphalt membrane down all roof valleys and around penetrations, sealing tight around fasteners.'}
              </p>
            </div>
            <div className="std-item">
              <span className="std-num">03</span>
              <h4>{lang === 'es' ? 'Ventilación Termodinámica Activa' : 'Thermodynamic Attic Ventilation'}</h4>
              <p>
                {lang === 'es'
                  ? 'Diseñamos entradas y salidas de aire para bajar hasta 30°F la temperatura del ático, alargando la vida de las tejas y ahorrando luz.'
                  : 'We balance intake and exhaust airflow to lower attic heat by up to 30°F, stopping shingles from cooking and cutting cooling bills.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hp-final-cta">
        <div className="container final-cta-container">
          <span className="eyebrow">{lang === 'es' ? 'Presupuesto Gratuito' : 'Free Estimate'}</span>
          <h2 className="final-title">
            {lang === 'es'
              ? '¿Desea una inspección gratuita para su techo?'
              : 'Want a free on-site roof inspection for your home?'}
          </h2>
          <p className="final-sub">
            {lang === 'es'
              ? 'Subimos a su techo, tomamos fotos del estado actual y le entregamos un presupuesto claro por escrito sin ningún compromiso.'
              : 'We climb your roof, capture clear photos of all conditions, and deliver an honest written estimate with zero obligation.'}
          </p>
          <div className="final-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              {lang === 'es' ? 'Llamar: (970) 778-7951' : 'Call: (970) 778-7951'}
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-light">
              {lang === 'es' ? 'Solicitar Cita' : 'Request Appointment'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
