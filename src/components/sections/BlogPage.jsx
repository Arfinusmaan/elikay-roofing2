import React from 'react';
import { companyData } from '../../data/companyData';
import { useLanguage } from '../../context/LanguageContext';
import SEOHead, { SITE_URL } from '../SEOHead';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../../utils/schemaGenerators';
import './BlogPage.css';

export default function BlogPage({ articleSlug, onNavigate }) {
  const { lang } = useLanguage();

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getT = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[lang] || val.en || '';
  };

  const articles = [
    {
      slug: "signs-of-roof-leak-texas",
      category: {
        en: "Roof Leak Detection",
        es: "Detección de Goteras"
      },
      title: {
        en: "Hidden Signs of Roof Leaks in Texas Homes Before Ceiling Collapse",
        es: "Señales Ocultas de Fugas de Techo en Texas Antes de que Dañen su Casa"
      },
      readTime: {
        en: "5 min read",
        es: "Lectura de 5 min"
      },
      date: "Updated October 2026",
      image: "/images/elikay/14.jpeg",
      summary: {
        en: "How water travels down rafters, why cracked plumbing collars are the #1 hidden culprit, and how to spot moisture rings before drywall caves in.",
        es: "Cómo viaja el agua por las vigas, por qué las botas de tubería son la causa #1 de goteras y cómo detectar manchas antes de que caiga el yeso."
      },
      author: "EliKay Roofing Team · 13+ Years Trade Experience",
      content: [
        {
          en: "In Texas, roof leaks rarely begin with dramatic indoor waterfalls. Instead, they start as subtle trickles: water enters around a cracked rubber plumbing pipe boot, seep past a loosened shingle tab, or channels behind chimney flashing during a windy thunderstorm.",
          es: "En Texas, las goteras casi nunca empiezan como cascadas. Comienzan como pequeños goteos: agua que entra por una bota de hule rota en los respiraderos, tejas despegadas por el viento o filtraciones detrás de la chimenea."
        },
        {
          en: "Because water follows the slope of roof plywood rafters, it often travels 10 to 20 feet away from the initial roof breach before pooling over a low ceiling drywall seam. By the time a yellow or brown water stain appears on your ceiling, pounds of water may already be trapped inside your attic insulation.",
          es: "Dado que el agua sigue la inclinación de la madera del ático, suele recorrer de 10 a 20 pies antes de estancarse en una unión del cielorraso. Cuando aparece la mancha amarilla en el techo, ya hay litros de agua acumulados en el aislamiento."
        },
        {
          en: "At EliKay Roofing, our forensic leak inspection checks attic trusses, vent boots, flashing seals, and valley membranes. We pinpoint the exact point of entry and complete lasting structural repairs so your home stays safe through every season.",
          es: "En EliKay Roofing revisamos vigas, sellos de tubos, tapajuntas y valles. Encontramos la entrada exacta del agua y hacemos una reparación estructural duradera para proteger su hogar en cualquier temporada."
        }
      ],
      keyTakeaways: [
        {
          en: "Ceiling stains are often 10-20 feet away from the actual roof breach.",
          es: "Las manchas interiores suelen estar a 10-20 pies de la gotera real en el techo."
        },
        {
          en: "Plumbing pipe collars are the most common source of leaks in homes over 6 years old.",
          es: "Los respiraderos de tubería son la causa más común en casas de más de 6 años."
        },
        {
          en: "Prompt repairs prevent expensive ceiling sheetrock replacement and attic mold.",
          es: "Reparar a tiempo evita cambiar hojas de yeso y que se forme moho en el ático."
        }
      ]
    },
    {
      slug: "architectural-vs-3-tab-shingles",
      category: {
        en: "Roofing Materials",
        es: "Materiales de Techos"
      },
      title: {
        en: "Architectural vs. 3-Tab Shingles: Which Is Best for Texas Weather?",
        es: "Tejas Arquitectónicas vs. Tejas Planas: ¿Cuál Conviene en Texas?"
      },
      readTime: {
        en: "6 min read",
        es: "Lectura de 6 min"
      },
      date: "Updated October 2026",
      image: "/images/elikay/hero_residential.jpg",
      summary: {
        en: "Comparing wind ratings, life expectancy, heat resistance, and curb appeal between traditional 3-tab and modern multi-layer dimensional shingles.",
        es: "Comparativa de resistencia a huracanes, vida útil, tolerancia al calor y apariencia entre tejas tradicionales y tejas laminadas modernas."
      },
      author: "EliKay Roofing Team · 13+ Years Trade Experience",
      content: [
        {
          en: "When replacing a roof in Greater Houston or Central Texas, homeowners frequently ask whether modern architectural shingles are worth the investment over traditional 3-tab shingles. Looking at Texas weather conditions provides a clear answer.",
          es: "Al cambiar el techo en Houston o Texas, muchas familias se preguntan si vale la pena pagar la diferencia por tejas arquitectónicas en vez de tejas normales de 3 lengüetas. El clima de Texas nos da la respuesta."
        },
        {
          en: "Traditional 3-tab shingles are lightweight, single-layer strips rated only up to 60-70 MPH winds. In Texas thunderstorm and hurricane corridors, sudden gusts easily lift and crease 3-tab shingles. In contrast, architectural shingles are multi-layer laminated products rated up to 130 MPH with certified 6-nail patterns.",
          es: "Las tejas tradicionales son de una sola capa y resisten solo 60 a 70 MPH de viento. En Texas, las tormentas arrancan con facilidad estas tejas. En cambio, las tejas arquitectónicas son de doble capa laminada y resisten vientos de hasta 130 MPH con 6 clavos."
        },
        {
          en: "Additionally, architectural shingles last 25 to 30+ years compared to 15-18 years for 3-tab, feature copper-infused granules that resist black algae streaks, and dramatically elevate your home's appraisal and resale value.",
          es: "Además, las arquitectónicas duran de 25 a más de 30 años (frente a 15-18 de las básicas), tienen gránulos anti-algas que evitan manchas negras y elevan de inmediato el valor de avalúo de la propiedad."
        }
      ],
      keyTakeaways: [
        {
          en: "Architectural shingles withstand 130 MPH winds vs 60-70 MPH for 3-tab.",
          es: "Las arquitectónicas resisten 130 MPH frente a solo 60-70 MPH de las tejas comunes."
        },
        {
          en: "Laminated dimensional depth enhances home curb appeal and market value.",
          es: "El acabado tridimensional eleva la presencia y precio de reventa de la casa."
        },
        {
          en: "Algae-resistant granules prevent unsightly dark streaks in humid Texas weather.",
          es: "Gránulos con cobre evitan manchas oscuras de moho causadas por la humedad."
        }
      ]
    },
    {
      slug: "texas-attic-ventilation-guide",
      category: {
        en: "Energy Efficiency",
        es: "Eficiencia Energética"
      },
      title: {
        en: "How Attic Ventilation Lowers Texas Cooling Bills and Saves Your Shingles",
        es: "Cómo la Ventilación del Ático Reduce el Recibo de Luz y Cuida sus Tejas"
      },
      readTime: {
        en: "5 min read",
        es: "Lectura de 5 min"
      },
      date: "Updated October 2026",
      image: "/images/elikay/18.jpeg",
      summary: {
        en: "Why unventilated attics reach 160°F in summer, how superheated air bakes shingles from below, and how balanced intake and exhaust vents solve the problem.",
        es: "Por qué los áticos alcanzan 160°F en verano, cómo ese calor tuesta las tejas por debajo y cómo equilibrar entradas y salidas de aire para ahorrar."
      },
      author: "EliKay Roofing Team · 13+ Years Trade Experience",
      content: [
        {
          en: "During Texas summers with outdoor temperatures exceeding 100°F, radiant heat turns closed attics into thermal ovens, frequently reaching 150°F to 160°F. This intense heat trapped below your roof decking causes severe consequences.",
          es: "En los veranos de Texas con calor de más de 100°F, los áticos cerrados se convierten en hornos que alcanzan entre 150°F y 160°F. Este calor atrapado bajo la madera tiene consecuencias muy caras."
        },
        {
          en: "First, extreme attic heat bakes asphalt shingles from the underside, evaporating volatile binding oils and causing shingles to blister, curl, and crack years before their warranty expiration. Second, that heat radiates into living spaces, forcing your air conditioner to run continuously.",
          es: "Primero, el calor cocina las tejas desde abajo, secando sus aceites y haciendo que se agrieten años antes de su tiempo. Segundo, ese calor traspasa al interior de la casa, haciendo que el aire acondicionado trabaje sin parar."
        },
        {
          en: "EliKay Roofing installs balanced ventilation systems: continuous shingle-over ridge vents or dual-bearing wind turbines at the roof peak, paired with open soffit intake vents along the eaves. This creates a natural airflow that flushes superheated air out around the clock.",
          es: "En EliKay Roofing instalamos ventilación equilibrada: cumbreras ventiladas o turbinas eólicas en la parte alta combinadas con sofitos en los aleros. Esto genera un flujo natural que expulsa el calor las 24 horas del día."
        }
      ],
      keyTakeaways: [
        {
          en: "Unvented attics reach 160°F, cutting shingle service life nearly in half.",
          es: "Áticos sin ventilación llegan a 160°F, reduciendo la vida de las tejas a la mitad."
        },
        {
          en: "Balanced continuous airflow can lower attic temperatures by 20°F to 35°F.",
          es: "El flujo de aire continuo baja la temperatura del ático entre 20°F y 35°F."
        },
        {
          en: "Proper ventilation reduces central air conditioning strain and monthly electric bills.",
          es: "Una buena ventilación reduce el esfuerzo del aire acondicionado y baja el recibo de luz."
        }
      ]
    },
    {
      slug: "identifying-hail-damage-roof",
      category: {
        en: "Storm Recovery",
        es: "Daños por Tormenta"
      },
      title: {
        en: "How to Identify Hail Damage on Asphalt Shingles After a Storm",
        es: "Cómo Identificar Daño por Granizo en Tejas Después de una Tormenta"
      },
      readTime: {
        en: "6 min read",
        es: "Lectura de 6 min"
      },
      date: "Updated October 2026",
      image: "/images/elikay/storm_inspection.jpg",
      summary: {
        en: "What hail bruises look like on asphalt shingles, why functional damage doesn't leak immediately, and how to protect your property rights.",
        es: "Cómo se ven los golpes de granizo en las tejas, por qué no gotean de inmediato y cómo respaldar su reclamo con inspecciones fotográficas."
      },
      author: "EliKay Roofing Team · 13+ Years Trade Experience",
      content: [
        {
          en: "Hailstorms across Greater Houston and Central Texas can inflict severe damage on residential roofs without leaving obvious holes. When hail strikes shingles at terminal velocity, it fractures the internal fiberglass mat while knocking away protective mineral granules.",
          es: "Las granizadas en Houston y Texas pueden dañar gravemente un techo sin dejar hoyos visibles a simple vista. Al golpear a gran velocidad, fracturan la fibra interna y desprenden los gránulos protectores."
        },
        {
          en: "These bruised impact craters expose raw asphalt to harsh ultraviolet radiation. Over the following 6 to 18 months, the exposed asphalt dries out, develops hairline fractures, and begins leaking into roof decking. By the time indoor leaks appear, insurance claim filing deadlines may have passed.",
          es: "Estos golpes dejan asfalto negro expuesto al sol. En los siguientes 6 a 18 meses, el material se reseca, se fisura y empieza a filtrar agua. Para cuando ve goteras adentro, puede haber vencido el plazo para reclamar a la aseguradora."
        },
        {
          en: "EliKay Roofing provides 100% free on-site hail inspections. We photograph collateral evidence on metal gutters, window screens, and AC units, compile test squares, and deliver an honest written assessment of your roof's condition.",
          es: "En EliKay Roofing realizamos inspecciones de granizo 100% gratis. Tomamos fotos de canaletas abolladas, compresores de aire y cuadrantes de tejas, entregándole un reporte honesto y por escrito."
        },
        {
          en: "Furthermore, improper DIY repairs such as slathering roofing tar or silicone over damaged shingles often voids manufacturer warranties and accelerates wood rot by trapping moisture inside the roof deck. Professional repairs require matching the architectural shingle profile, pulling damaged nails, replacing torn underlayment with high-polymer membrane, and renailing with pneumatic 6-nail patterns.",
          es: "Además, reparaciones caseras incorrectas como untar brea o silicón anulan las garantías de fábrica y pudren la madera al atrapar agua adentro. Reparar profesionalmente exige igualar la teja, extraer clavos dañados, colocar membrana de polímero y volver a clavar con patrón calibrado de 6 clavos."
        }
      ],
      keyTakeaways: [
        {
          en: "Hail bruises fracture the internal mat even when no hole is immediately visible.",
          es: "El granizo fractura la estructura interna aunque no se vea un agujero abierto."
        },
        {
          en: "Granule loss leads to asphalt dry-rot and widespread leaks within months.",
          es: "La pérdida de gránulos reseca el asfalto y causa goteras meses después."
        },
        {
          en: "Free professional inspections provide clear photo proof before claim deadlines pass.",
          es: "Inspecciones gratuitas le dan fotos claras antes de que venzan los plazos del seguro."
        }
      ]
    },
    {
      slug: "synthetic-underlayment-vs-felt-paper",
      category: {
        en: "Decking & Moisture Barriers",
        es: "Madera y Barreras contra Agua"
      },
      title: {
        en: "Why Synthetic Underlayment Outperforms Traditional Felt Paper in Texas",
        es: "Por Qué la Membrana Sintética Supera al Fieltro Tradicional en Texas"
      },
      readTime: {
        en: "7 min read",
        es: "Lectura de 7 min"
      },
      date: "Updated October 2026",
      image: "/images/elikay/synthetic_underlayment_prep.jpg",
      summary: {
        en: "An empirical comparison between organic 15# asphalt felt and modern woven synthetic polymer barriers under extreme wind-driven rains and 105°F heat.",
        es: "Comparativa técnica entre el fieltro asfáltico orgánico y las membranas de polímero sintético bajo lluvias torrenciales y calor extremo en Texas."
      },
      author: "EliKay Roofing Team · 13+ Years Trade Experience",
      content: [
        {
          en: "For decades, traditional #15 and #30 organic asphalt-saturated felt was the standard underlayment for residential shingle roofs. However, in Texas climates characterized by high ambient humidity, intense UV index, and sudden tropical downpours, asphalt felt exhibits critical vulnerabilities.",
          es: "Durante décadas, el fieltro asfáltico #15 y #30 fue el estándar en techos residenciales. Sin embargo, en Texas, con humedad extrema, radiación solar implacable y tormentas tropicales repentinas, el fieltro tradicional presenta fallas graves."
        },
        {
          en: "Asphalt felt absorbs moisture from the air, causing it to wrinkle, buckle, and tear before shingles can even be installed. Once wrinkled, it prevents shingles from lying flat, creating gaps where high winds can pry edges loose. In high attic heat, organic felt dries out, turns brittle, and tears away cleanly around nail shanks during storms.",
          es: "El fieltro absorbe humedad del ambiente, arrugándose y rompiéndose antes de poner las tejas. Esas arrugas impiden que las tejas asienten planas, dejando ranuras donde el viento se mete. Con el calor del ático, el fieltro se tuesta y se desprende de los clavos."
        },
        {
          en: "EliKay Roofing exclusively installs heavy-duty woven synthetic polymer underlayments (such as TopShield 85). Synthetic barriers are up to 25 times stronger than felt, completely impervious to water absorption, UV resistant for up to 6 months of exposure, and non-skid for superior crew safety on steep roof pitches.",
          es: "En EliKay Roofing instalamos exclusivamente membranas sintéticas de polímero trenzado (como TopShield 85). Son hasta 25 veces más resistentes que el fieltro, 100% impermeables, resisten rayos UV hasta por 6 meses y son antiderrapantes para máxima seguridad."
        },
        {
          en: "Paired with self-adhering vulcanized rubber ice & water shields along all roof valleys, around chimneys, and beside plumbing vents, synthetic underlayment provides an impermeable secondary roof shell that guarantees your home stays bone-dry even if shingles are blown away during a Category 2 hurricane.",
          es: "Combinada con barreras vulcanizadas autoadheribles en valles, chimeneas y respiraderos, la membrana sintética crea un segundo escudo impermeable que garantiza que su casa no sufra filtraciones aun si el viento llega a levantar tejas en una tormenta."
        }
      ],
      keyTakeaways: [
        {
          en: "Synthetic underlayment is 25x stronger than organic felt and will not tear in high winds.",
          es: "La membrana sintética es 25 veces más resistente que el fieltro y no se rasga con viento."
        },
        {
          en: "Impervious to water absorption, preventing wrinkles that disrupt shingle flatness.",
          es: "No absorbe agua, evitando arrugas que impiden que las tejas queden perfectamente planas."
        },
        {
          en: "Acts as a full secondary waterproof roof shell during severe tropical storms.",
          es: "Actúa como un segundo techo impermeable que protege su casa ante tormentas severas."
        }
      ]
    },
    {
      slug: "fascia-gutters-foundation-protection",
      category: {
        en: "Exterior Drainage & Framing",
        es: "Drenaje Exterior y Cimientos"
      },
      title: {
        en: "How Seamless Gutters and Rot-Free Fascia Protect Texas Home Foundations",
        es: "Cómo las Canaletas sin Uniones y la Fascia Protegen los Cimientos en Texas"
      },
      readTime: {
        en: "6 min read",
        es: "Lectura de 6 min"
      },
      date: "Updated October 2026",
      image: "/images/elikay/gutters_siding.jpg",
      summary: {
        en: "Why unmanaged roof runoff causes severe foundation differential settlement in Texas clay soils, and how seamless aluminum gutters and drip edge flashing save your home.",
        es: "Por qué el agua sin canaletas destruye cimientos en suelos arcillosos de Texas y cómo canaletas de aluminio y goterones protegen toda la estructura."
      },
      author: "EliKay Roofing Team · 13+ Years Trade Experience",
      content: [
        {
          en: "A standard 2,000-square-foot roof sheds approximately 1,200 gallons of water for every one inch of rainfall. In Greater Houston and Southeast Texas, where tropical storm systems regularly drop 4 to 8 inches in an afternoon, an un-guttered home dumps thousands of gallons of high-velocity runoff directly against foundation walls.",
          es: "Un techo promedio de 2,000 pies cuadrados desaloja cerca de 1,200 galones de agua por cada pulgada de lluvia. En Houston y Texas, donde caen de 4 a 8 pulgadas en una tarde, una casa sin canaletas arroja miles de galones directo a la base de la casa."
        },
        {
          en: "Southeast Texas rests on expansive clay soil, which swells dramatically when soaked and contracts aggressively during dry summer droughts. Concentrated water cascading off valleys excavates trenches, saturates foundation soil unevenly, and causes foundation slab shifting, cracked drywall, and sticking doors.",
          es: "Texas tiene suelo de arcilla expansiva, que se hincha con el agua y se encoge en sequía. La cascada de agua del techo socava jardines, satura desigualmente el cimiento y provoca cuarteaduras en losas, paredes y puertas que ya no cierran."
        },
        {
          en: "EliKay Roofing fabricates seamless heavy-gauge aluminum gutters custom-extruded on site to fit your home's rooflines perfectly. We pair these runs with rot-proof James Hardie fiber cement fascia boards, metal drip edge aprons, and oversized downspouts routed safely away from foundation footings.",
          es: "En EliKay Roofing fabricamos canaletas de aluminio grueso continuo en el sitio a la medida exacta de su casa. Las combinamos con madera de fascia de fibrocemento James Hardie, goterones metálicos y bajadas de agua que desvían el agua lejos del cimiento."
        }
      ],
      keyTakeaways: [
        {
          en: "1 inch of rain dumps 1,200+ gallons of concentrated water around home perimeters.",
          es: "1 pulgada de lluvia arroja más de 1,200 galones de agua alrededor de su casa."
        },
        {
          en: "Texas clay soil shifts dramatically, making gutter runoff management essential for slabs.",
          es: "La arcilla de Texas se deforma fácilmente, haciendo vital desviar el agua de los cimientos."
        },
        {
          en: "Seamless aluminum systems eliminate joint leaks and preserve exterior fascia lumber.",
          es: "Canaletas de una sola pieza eliminan fugas en uniones y cuidan la madera de los aleros."
        }
      ]
    }
  ];

  // If viewing single article
  if (articleSlug) {
    const article = articles.find(a => a.slug === articleSlug) || articles[0];

    const breadcrumbs = [
      { name: lang === 'es' ? "Inicio" : "Home", url: "/" },
      { name: lang === 'es' ? "Guías" : "Guides", url: "/blog" },
      { name: getT(article.title), url: `/blog/${article.slug}` }
    ];

    const articleSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${SITE_URL}/blog/${article.slug}#article`,
          "headline": getT(article.title),
          "description": getT(article.summary),
          "image": `${SITE_URL}${article.image}`,
          "author": {
            "@type": "Organization",
            "name": companyData.name
          },
          "publisher": {
            "@type": "Organization",
            "name": companyData.name,
            "logo": {
              "@type": "ImageObject",
              "url": `${SITE_URL}/images/elikay/Elikay-Logo.jpeg`
            }
          },
          "mainEntityOfPage": `${SITE_URL}/blog/${article.slug}`
        },
        getBreadcrumbSchema(breadcrumbs)
      ]
    };

    return (
      <div className="blog-article-root">
        <SEOHead
          title={`${getT(article.title)} | ${companyData.name}`}
          description={getT(article.summary).slice(0, 155)}
          canonicalPath={`/blog/${article.slug}`}
          ogType="article"
          ogImage={article.image}
          schema={articleSchema}
        />

        {/* ARTICLE HERO WITH BACKGROUND */}
        <section className="article-hero">
          <div className="article-hero-bg-wrap">
            <img
              src={article.image}
              alt={getT(article.title)}
              className="article-hero-bg"
              width="1536"
              height="1024"
              fetchpriority="high"
            />
            <div className="article-hero-overlay"></div>
          </div>

          <div className="container-narrow article-hero-content">
            <div className="article-nav-back">
              <a href="/blog" onClick={(e) => handleNav('/blog', e)} className="back-link">
                {lang === 'es' ? '← Volver a Todas las Guías' : '← Back to All Roofing Guides'}
              </a>
            </div>
            <span className="eyebrow">{getT(article.category)}</span>
            <h1 className="article-title">{getT(article.title)}</h1>
            <div className="article-meta">
              <span>{article.date}</span> · <span>{getT(article.readTime)}</span> · <span>{article.author}</span>
            </div>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <section className="section-light article-body-section">
          <div className="container-narrow">
            <div className="article-featured-img-wrap">
              <img
                src={article.image}
                alt={getT(article.title)}
                className="article-featured-img"
                width="1536"
                height="1024"
                loading="lazy"
              />
              <span className="article-img-caption">
                {lang === 'es'
                  ? 'Inspección profesional y mantenimiento de techos en Texas por EliKay Roofing.'
                  : 'Professional roofing craftsmanship and maintenance in Texas by EliKay Roofing.'}
              </span>
            </div>

            {/* Key takeaways callout */}
            <div className="article-takeaways-box">
              <h3>{lang === 'es' ? 'Puntos Clave del Artículo' : 'Key Takeaways'}</h3>
              <ul>
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx}>{getT(point)}</li>
                ))}
              </ul>
            </div>

            <div className="article-content">
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="article-paragraph">{getT(paragraph)}</p>
              ))}
            </div>

            <div className="article-author-card">
              <img
                src="/images/elikay/Elikay-Logo.jpeg"
                alt="EliKay Roofing LLC Logo"
                className="author-avatar"
                width="80"
                height="80"
                loading="lazy"
              />
              <div className="author-info">
                <strong>EliKay Roofing LLC</strong>
                <span className="author-role">
                  {lang === 'es' ? '13 Años de Experiencia · Servicio 100% Bilingüe' : '13+ Years Roofing Trade Mastery · 100% Bilingual'}
                </span>
                <p>
                  {lang === 'es'
                    ? 'Especialistas en techos residenciales, reemplazos completos, reparación de goteras, ventilación de áticos y canaletas en Houston y Texas.'
                    : 'Specializing in residential roof replacements, leak repairs, storm restorations, attic venting, and seamless gutters across Greater Texas.'}
                </p>
              </div>
            </div>

            <div className="article-cta-box">
              <h3>
                {lang === 'es'
                  ? '¿Tiene Dudas Sobre el Estado de su Techo?'
                  : 'Have Questions About Your Roof or Facing an Active Leak?'}
              </h3>
              <p>
                {lang === 'es'
                  ? 'No espere a que una pequeña gotera dañe sus cielorrasos o estructura. Llámenos hoy mismo para una inspección gratuita y presupuesto sin compromiso.'
                  : 'Don’t wait for water to rot roof decking or stain your ceilings. Call EliKay Roofing today for a free on-site roof inspection and clear written estimate.'}
              </p>
              <div className="article-cta-buttons">
                <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
                  {lang === 'es' ? 'Llamar: (970) 778-7951' : 'Call: (970) 778-7951'}
                </a>
                <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-dark">
                  {lang === 'es' ? 'Solicitar Inspección Gratuita →' : 'Request Free Estimate →'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const indexBreadcrumbs = [
    { name: lang === 'es' ? "Inicio" : "Home", url: "/" },
    { name: lang === 'es' ? "Guías" : "Guides", url: "/blog" }
  ];

  const indexSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getBreadcrumbSchema(indexBreadcrumbs)
    ]
  };

  // Blog Index
  return (
    <div className="blog-page-root">
      <SEOHead
        title={lang === 'es' ? "Guías de Techos y Consejos Prácticos | EliKay Roofing" : "Roofing Guides & Expert Advice | EliKay Roofing"}
        description={
          lang === 'es'
            ? "Aprenda sobre detección de goteras, tejas arquitectónicas, ventilación de áticos y daños por tormenta con los expertos de EliKay Roofing en Texas."
            : "Learn how to detect roof leaks, choose architectural shingles, lower attic heat, and assess storm damage with EliKay Roofing in Texas."
        }
        canonicalPath="/blog"
        ogType="website"
        ogImage="/images/elikay/14.jpeg"
        schema={indexSchema}
      />

      {/* HERO WITH BACKGROUND */}
      <section className="blog-hero">
        <div className="blog-hero-bg-wrap">
          <img
            src="/images/elikay/14.jpeg"
            alt="Roofing technician inspecting roof flashing in Texas"
            className="blog-hero-bg"
            width="1536"
            height="1024"
            fetchpriority="high"
          />
          <div className="blog-hero-overlay"></div>
        </div>

        <div className="container blog-hero-content">
          <span className="status-pill">
            <span className="pulse-dot"></span> {lang === 'es' ? 'Guías Prácticas y Consejos Expertos' : 'Property Knowledge & Roofing Guides'}
          </span>
          <h1 className="blog-title">
            {lang === 'es'
              ? 'Consejos prácticos de techos para propietarios en Texas.'
              : 'Practical roofing guides for Texas homeowners.'}
          </h1>
          <p className="blog-subtitle">
            {lang === 'es'
              ? 'Conozca cómo detectar filtraciones a tiempo, los beneficios de las tejas arquitectónicas y cómo ventilar su ático para bajar el gasto de luz en verano.'
              : 'Empirical insights into leak detection, architectural shingles, attic ventilation, and storm recovery written by 13-year roofing professionals.'}
          </p>
          <div className="blog-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              {lang === 'es' ? 'Llamar: (970) 778-7951' : 'Call: (970) 778-7951'}
            </a>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="section-light blog-grid-section">
        <div className="container">
          <div className="blog-section-header text-center">
            <span className="eyebrow">{lang === 'es' ? 'Artículos Especializados' : 'Technical Guides'}</span>
            <h2>{lang === 'es' ? 'Conocimiento Práctico para Proteger su Casa' : 'Practical Knowledge for Texas Properties'}</h2>
            <p>
              {lang === 'es'
                ? 'Información clara y transparente para tomar las mejores decisiones para su techo y su bolsillo.'
                : 'Learn how to detect hidden roof issues, choose durable materials, and protect your home investment.'}
            </p>
          </div>

          <div className="blog-grid">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="blog-card"
                onClick={(e) => handleNav(`/blog/${art.slug}`, e)}
              >
                <div className="blog-img-wrap">
                  <img
                    src={art.image}
                    alt={getT(art.title)}
                    className="blog-img"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <span className="blog-category-badge">{getT(art.category)}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-read-time">{getT(art.readTime)}</span>
                    <span>·</span>
                    <span className="blog-date">{art.date}</span>
                  </div>
                  <h3>{getT(art.title)}</h3>
                  <p>{getT(art.summary)}</p>
                  <div className="blog-card-footer">
                    <span className="blog-read-more">
                      {lang === 'es' ? 'Leer Guía Completa →' : 'Read Full Guide →'}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hp-final-cta">
        <div className="container final-cta-container">
          <span className="eyebrow">{lang === 'es' ? 'Asesoría Profesional' : 'Professional Roofing Help'}</span>
          <h2 className="final-title">
            {lang === 'es'
              ? '¿Tiene dudas o desea cotizar el mantenimiento de su techo?'
              : 'Have questions or want a free estimate for your roof?'}
          </h2>
          <p className="final-sub">
            {lang === 'es'
              ? 'Hable directamente con el equipo de EliKay Roofing LLC. Respondemos de lunes a sábado con atención cordial en inglés y español.'
              : 'Speak directly with the EliKay Roofing LLC team. We provide prompt on-site estimates across Greater Houston with 100% bilingual support.'}
          </p>
          <div className="final-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              {lang === 'es' ? 'Llamar: (970) 778-7951' : 'Call: (970) 778-7951'}
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-light">
              {lang === 'es' ? 'Solicitar Presupuesto' : 'Request Free Estimate'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
