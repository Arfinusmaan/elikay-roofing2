import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import { useLanguage } from '../../context/LanguageContext';
import SEOHead from '../SEOHead';
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '../../utils/schemaGenerators';
import './ServicePage.css';

export default function ServicePage({ serviceSlug, onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);
  const { lang } = useLanguage();

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const service = companyData.services.find(s => s.slug === serviceSlug) || companyData.services[0];

  const getT = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[lang] || val.en || '';
  };

  const serviceKnowledge = {
    "roof-repairs": {
      tagline: {
        en: "Precision Residential Roofing Restoration",
        es: "Restauración Residencial de Techos de Alta Precisión"
      },
      headline: {
        en: "Expert Roof Repairs Across Houston & Greater Texas",
        es: "Reparación Experta de Techos en Houston y Todo Texas"
      },
      subtext: {
        en: "From missing shingles and damaged pipe collars to flashing leaks and cracked plywood, EliKay Roofing delivers fast, reliable repairs that restore full protection without unnecessary replacement costs.",
        es: "Desde tejas desprendidas y sellos de tubería cuarteados hasta fugas en tapajuntas y madera dañada, EliKay Roofing brinda reparaciones rápidas que devuelven la protección sin gastos excesivos."
      },
      heroBg: "/images/elikay/hero_residential.jpg",
      heroBadge: {
        en: "13+ Years Experience · Free Estimates",
        es: "13+ Años de Experiencia · Presupuestos Gratuitos"
      },
      introTitle: {
        en: "Targeted repairs engineered for Texas heat, wind, and torrential rains.",
        es: "Reparaciones exactas diseñadas para el calor, viento y tormentas de Texas."
      },
      introParagraph1: {
        en: "Texas weather places immense structural stress on asphalt shingles. Intense UV exposure breaks down protective granules, high-speed thunderstorm gusts loosen perimeter shingles, and sudden temperature shifts stress sealants around roof penetrations.",
        es: "El clima de Texas genera un desgaste intenso sobre las tejas asfálticas. La radiación solar desgasta los gránulos protectores, ráfagas de viento aflojan las orillas y los cambios de temperatura quiebran los sellos."
      },
      introParagraph2: {
        en: "At EliKay Roofing, we never push for costly full replacements when precision repairs can restore watertight integrity. We inspect the entire deck, replace rotted underlayment, install color-matched architectural shingles with certified nail patterns, and reseal all critical junctions.",
        es: "En EliKay Roofing nunca imponemos un reemplazo costoso cuando una reparación precisa puede devolver la protección. Revisamos la estructura, cambiamos madera dañada, colocamos tejas idénticas y resellamos cada unión."
      },
      visual1: "/images/elikay/16.jpeg",
      visual1Caption: {
        en: "EliKay Roofing technician inspecting shingle alignment and underlayment integrity.",
        es: "Técnico de EliKay Roofing revisando la alineación de tejas y el estado de la membrana."
      },
      visual2: "/images/elikay/10.jpeg",
      visual2Caption: {
        en: "Clean shingle installation on residential pitch with reinforced drip edge.",
        es: "Instalación limpia de tejas en techo residencial con goterón perimetral reforzado."
      },
      visual3: "/images/elikay/13.jpeg",
      visual3Caption: {
        en: "Re-nailing structural decking and synthetic vapor barrier before shingle application.",
        es: "Asegurando la madera estructural y barrera de vapor sintética antes de techar."
      },
      visual4: "/images/elikay/17.jpeg",
      visual4Caption: {
        en: "Finished architectural roof valley with watertight flashing seams.",
        es: "Limahoya arquitectónica terminada con uniones de tapajuntas 100% impermeables."
      },
      equipmentHighlights: [
        {
          name: { en: "ASTM D3462 Class A Shingles", es: "Tejas Clase A ASTM D3462" },
          desc: { en: "Highest fire, wind, and impact resistance ratings available.", es: "Máxima resistencia contra fuego, vientos huracanados e impacto." }
        },
        {
          name: { en: "Synthetic Polymer Underlayment", es: "Membrana Sintética de Polímero" },
          desc: { en: "Tear-resistant moisture barriers that outperform traditional organic felt.", es: "Barreras repelentes al agua que superan con creces al fieltro orgánico." }
        },
        {
          name: { en: "Galvanized Steel Flashing & Drip Edge", es: "Tapajuntas y Goterón Galvanizado" },
          desc: { en: "Corrosion-resistant custom bent metal safeguarding eves and rakes.", es: "Metal plegado anticorrosivo que protege aleros y esquinas del techo." }
        },
        {
          name: { en: "High-Elastomeric UV Sealants", es: "Selladores Elastoméricos Anti-UV" },
          desc: { en: "Flexible sealants that withstand 140°F Texas attic temperatures without cracking.", es: "Selladores elásticos que soportan más de 140°F en áticos sin cuartearse." }
        }
      ],
      scenarios: [
        {
          title: { en: "Blown-Off Shingles & Exposed Decking", es: "Tejas Arrancadas y Madera Expuesta" },
          desc: { en: "High storm gusts shear off adhesive seals, leaving plywood vulnerable to rot and indoor leaks.", es: "Fuertes ráfagas rompen el adhesivo, dejando el triplay expuesto a filtraciones." },
          solution: { en: "Emergency deck drying, synthetic underlayment patch, and 6-nail shingle weaving.", es: "Secado de base, parche sintético e instalación entrelazada con 6 clavos." }
        },
        {
          title: { en: "Cracked Plumbing Pipe Collars & Vent Boots", es: "Sellos de Tubería y Botas Cuarteadas" },
          desc: { en: "Sun dry-rot cracks rubber boots around bathroom vents within 5-8 years, trickling water into attics.", es: "El sol agrieta el hule de los respiraderos en 5 a 8 años, goteando dentro del ático." },
          solution: { en: "Heavy-duty lead or silicone flashing boots installed with lifetime weather warranties.", es: "Instalación de botas de plomo o silicón de alta durabilidad con garantía climática." }
        },
        {
          title: { en: "Chimney & Valley Water Channeling Leaks", es: "Fugas en Limahoyas y Base de Chimenea" },
          desc: { en: "Improper step flashing allows driving rains to channel behind siding and brick chimneys.", es: "Tapajuntas escalonados mal instalados dejan pasar la lluvia detrás del ladrillo." },
          solution: { en: "Custom counter-flashing cuts into mortar joints, sealed with polyurethane adhesive.", es: "Tapajuntas incrustados en juntas de mortero y sellados con poliuretano." }
        },
        {
          title: { en: "Rotted Fascia Boards & Eave Plywood", es: "Madera Podrida en Aleros y Fascia" },
          desc: { en: "Overflowing gutters soak sub-fascia framing, spreading soft rot into rafter tails.", es: "Canaletas desbordadas mojan la fascia, pudriendo las vigas estructurales." },
          solution: { en: "Wood replacement with treated lumber, drip-edge installation, and prime-painting.", es: "Cambio por madera tratada, colocación de goterón y pintura protectora." }
        }
      ],
      processPhases: [
        {
          phase: "01",
          name: { en: "Comprehensive On-Site Inspection", es: "Inspección Completa en el Techo" },
          detail: { en: "We climb your roof, walk valleys, probe penetrations, and evaluate plywood firmness.", es: "Subimos al techo, revisamos valles, respiraderos y la firmeza del triplay." }
        },
        {
          phase: "02",
          name: { en: "Transparent Written Estimate", es: "Presupuesto Claro por Escrito" },
          detail: { en: "Itemized scope detailing material specs, photos of damage, and exact pricing with no surprises.", es: "Detalle con fotos del daño, materiales exactos y precio cerrado sin cargos ocultos." }
        },
        {
          phase: "03",
          name: { en: "Precision Tear-Off & Repair", es: "Desmonte y Reparación de Precisión" },
          detail: { en: "Remove compromised shingles, replace degraded decking, and install leak-barrier membranes.", es: "Retiramos tejas dañadas, renovamos madera vencida y colocamos membrana impermeable." }
        },
        {
          phase: "04",
          name: { en: "Magnetic Sweep & Final Cleanup", es: "Limpieza y Barrido Magnético" },
          detail: { en: "Thorough ground magnet sweep for nails, gutter clearing, and final photographic review.", es: "Barrido magnético para recoger clavos del jardín y revisión fotográfica final." }
        }
      ],
      localCaseStudy: {
        location: "Katy, TX (Cinco Ranch)",
        situation: {
          en: "Homeowner experienced persistent water stains in master closet following heavy spring thunderstorms. Another roofer quoted an unnecessary $16,000 full replacement.",
          es: "El dueño notó manchas de agua en el clóset tras fuertes tormentas. Otra empresa le cotizó un cambio total de $16,000 innecesario."
        },
        action: {
          en: "EliKay Roofing diagnosed a decayed plumbing boot and two cracked shingles above the cricket valley. We rebuilt the valley flashing and replaced 12 shingles in 3 hours.",
          es: "EliKay Roofing detectó una bota de respiradero rota y tejas cuarteadas en la canaleta. Reconstruimos el tapajuntas y cambiamos 12 tejas en 3 horas."
        },
        result: {
          en: "100% watertight result at a fraction of the cost, saving the homeowner over $14,500.",
          es: "Protección 100% impermeable a una fracción del costo, ahorrando al cliente más de $14,500."
        }
      },
      faqs: [
        {
          q: {
            en: "Can I repair my roof instead of replacing the entire thing?",
            es: "¿Puedo reparar mi techo en vez de reemplazarlo por completo?"
          },
          a: {
            en: "Yes! If your roof is under 15-18 years old and the underlying decking is solid, localized repairs can add 5 to 10 more years of life to your roof for a fraction of the replacement cost.",
            es: "¡Sí! Si su techo tiene menos de 15 a 18 años y la madera está firme, reparaciones puntuales pueden darle de 5 a 10 años más de vida por una fracción del costo."
          }
        },
        {
          q: {
            en: "How quickly can EliKay Roofing arrive for an estimate?",
            es: "¿Qué tan rápido puede llegar EliKay Roofing para un presupuesto?"
          },
          a: {
            en: "We offer flexible scheduling across Houston, Katy, Cypress, Waller, and surrounding towns. In urgent leak situations, we provide prompt same-day or next-morning inspections.",
            es: "Ofrecemos citas flexibles en Houston, Katy, Cypress, Waller y alrededores. En fugas urgentes acudimos el mismo día o al día siguiente por la mañana."
          }
        },
        {
          q: {
            en: "Do you offer bilingual support in Spanish and English?",
            es: "¿Ofrecen atención bilingüe en español e inglés?"
          },
          a: {
            en: "Yes, our team is 100% bilingual. We communicate clearly in both English and Spanish throughout the entire project.",
            es: "Sí, nuestro equipo es 100% bilingüe. Brindamos asesoría clara y cordial tanto en inglés como en español de principio a fin."
          }
        }
      ]
    },
    "complete-roof-replacements": {
      tagline: {
        en: "Full Architectural Roof Replacement Systems",
        es: "Sistemas Completos de Reemplazo Arquitectónico"
      },
      headline: {
        en: "Complete Lifetime Roof Replacements in Houston & Surrounding Texas",
        es: "Reemplazo Completo de Techos con Garantía en Houston y Todo Texas"
      },
      subtext: {
        en: "From total tear-off down to clean decking, replacement of rotted plywood, heavy-duty synthetic underlayment, to certified 6-nail architectural shingles. Built to outlast Texas heat and hurricanes.",
        es: "Desde el desmonte total hasta triplay limpio, cambio de madera podrida, membrana sintética reforzada e instalación certificada con 6 clavos. Diseñado para resistir huracanes y el calor texano."
      },
      heroBg: "/images/elikay/hero_residential.jpg",
      heroBadge: {
        en: "Class A Fire Rated · 130 MPH Wind Warranty",
        es: "Clase A contra Fuego · Garantía de Viento 130 MPH"
      },
      introTitle: {
        en: "Why a complete roof replacement is an investment that protects your entire home.",
        es: "Por qué cambiar su techo es la inversión que resguarda todo su patrimonio."
      },
      introParagraph1: {
        en: "When an asphalt shingle roof reaches 18 to 25 years of age in Greater Texas, the organic and fiberglass binders cure and crack under the unrelenting sun. Surface granules wash into the gutters, exposing raw asphalt to UV oxidation and causing brittle tabs that snap in high winds.",
        es: "Cuando un techo supera los 18 a 25 años en Texas, los compuestos asfálticos se resecan bajo el sol abrasador. Los gránulos caen a las canaletas, exponiendo la base al sol y quebrando las tejas con el viento."
      },
      introParagraph2: {
        en: "EliKay Roofing delivers end-to-end roof replacement craftsmanship. We never shingle over old layers. We strip the roof down to bare decking, re-nail every plywood seam, install reinforced ice-and-water leak barriers in valleys, and nail dimensional shingles with precision pneumatic calibration.",
        es: "En EliKay Roofing aplicamos mano de obra de primer nivel. Nunca instalamos tejas sobre capas viejas. Retiramos todo hasta la madera, aseguramos cada unión, ponemos barreras contra agua en los valles y clavamos tejas con calibración milimétrica."
      },
      visual1: "/images/elikay/12.jpeg",
      visual1Caption: {
        en: "Clean shingle ridge capping and ventilation layout on residential home.",
        es: "Caballete ventilado y colocación limpia de tejas en residencia familiar."
      },
      visual2: "/images/elikay/13.jpeg",
      visual2Caption: {
        en: "Full deck preparation showing clean wood replacement and synthetic vapor barrier.",
        es: "Preparación de cubierta con madera nueva y membrana sintética impermeable."
      },
      visual3: "/images/elikay/18.jpeg",
      visual3Caption: {
        en: "Attic exhaust ventilation and turbine vents integrated seamlessly.",
        es: "Ventilación de ático y turbinas eólicas integradas perfectamente al techo."
      },
      visual4: "/images/elikay/19.jpeg",
      visual4Caption: {
        en: "Completed dimensional shingle roof with clean valley drainage.",
        es: "Techo de tejas arquitectónicas terminado con drenaje impecable en limahoyas."
      },
      equipmentHighlights: [
        {
          name: { en: "Lifetime Architectural Shingles", es: "Tejas Arquitectónicas de Por Vida" },
          desc: { en: "Heavy multi-layer laminate designed for dimensional depth and hurricane wind rating.", es: "Laminado multicapa resistente a vientos de huracán con acabado elegante." }
        },
        {
          name: { en: "Self-Adhering Ice & Water Shield", es: "Membrana Autoadherible contra Agua" },
          desc: { en: "Rubberized asphalt barrier that seals tightly around nails in valleys and penetrations.", es: "Barrera asfáltica vulcanizada que sella alrededor de los clavos en valles." }
        },
        {
          name: { en: "Continuous Ridge Ventilation", es: "Ventilación Continua de Cumbrera" },
          desc: { en: "Balances intake and exhaust airflow to lower attic temperatures by up to 30°F.", es: "Equilibra el flujo de aire y baja el calor del ático hasta 30°F en verano." }
        },
        {
          name: { en: "Hot-Dipped Ring-Shank Nails", es: "Clavos Anillados Galvanizados" },
          desc: { en: "Superior pull-out resistance that locks shingles tight against high wind uplift.", es: "Agarre mecánico superior contra la fuerza de succión del viento." }
        }
      ],
      scenarios: [
        {
          title: { en: "Severe Granule Loss & Curling Tabs", es: "Pérdida Severa de Gránulos y Tejas Dobladas" },
          desc: { en: "Roofs over 15 years old show black asphalt bleed-through, leaving wood exposed.", es: "Techos de más de 15 años muestran asfalto negro expuesto, filtrando calor y humedad." },
          solution: { en: "Complete removal, full deck inspection, and installation of modern Class A laminate shingles.", es: "Retiro total, revisión de triplay e instalación de tejas laminadas Clase A." }
        },
        {
          title: { en: "Multiple Leaks Across Multiple Rooms", es: "Goteras Múltiples en Varios Cuartos" },
          desc: { en: "Patching one area only causes water to find the next weak shingle seam weeks later.", es: "Parchar un área solo hace que el agua busque la siguiente teja débil semanas después." },
          solution: { en: "Total replacement provides a single unified waterproof barrier with full manufacturer warranty.", es: "El reemplazo total crea una barrera continua y garantizada en toda la casa." }
        },
        {
          title: { en: "Storm & Hail Insurance Claim Replacements", es: "Reemplazos por Reclamos de Tormenta y Granizo" },
          desc: { en: "Widespread hail impacts fracture fiberglass mats, requiring carrier claim approval.", es: "El granizo fractura la fibra de vidrio interior de las tejas, justificando reclamo." },
          solution: { en: "We provide detailed photo reports and adjusters documentation to ensure fair coverage.", es: "Proveemos reporte fotográfico claro para facilitar la aprobación con su aseguradora." }
        },
        {
          title: { en: "Home Sale & Appraisal Requirements", es: "Requisito para Venta o Avalúo de Casa" },
          desc: { en: "Buyers home inspectors red-flagging older roofs, stalling closing transactions.", es: "Inspectores de compradores rechazan techos viejos, frenando el cierre de la venta." },
          solution: { en: "Rapid professional roof replacement that boosts home value and ensures smooth closing.", es: "Instalación rápida que aumenta el valor de la propiedad y garantiza el cierre." }
        }
      ],
      processPhases: [
        {
          phase: "01",
          name: { en: "Property Protection & Tarp Staging", es: "Protección de Jardín y Lonas" },
          detail: { en: "Protect landscaping, driveways, siding, and HVAC units with heavy canvas tarps.", es: "Cubrimos plantas, pisos, paredes y el compresor de aire con lonas gruesas." }
        },
        {
          phase: "02",
          name: { en: "Full Tear-Off to Clean Decking", es: "Desmonte Total hasta Madera Limpia" },
          detail: { en: "Strip off all layers of old shingles and felt, inspecting every square foot of plywood.", es: "Removemos tejas viejas y fieltro, revisando cada pie cuadrado de madera." }
        },
        {
          phase: "03",
          name: { en: "Deck Replacement & Barrier System", es: "Cambio de Madera y Barreras" },
          detail: { en: "Replace water-damaged plywood, install drip edge, ice & water shield, and synthetic underlayment.", es: "Cambiamos madera podrida, ponemos goterón, barrera vulcanizada y papel sintético." }
        },
        {
          phase: "04",
          name: { en: "Pneumatic 6-Nail Shingle Installation", es: "Instalación Certificada con 6 Clavos" },
          detail: { en: "Install starter strips, dimensional shingles, hip & ridge caps, and magnetic cleanup.", es: "Colocamos tiras de inicio, tejas arquitectónicas, cumbreras y barrido magnético." }
        }
      ],
      localCaseStudy: {
        location: "Houston, TX (Spring Branch)",
        situation: {
          en: "22-year-old 3-tab shingle roof suffered chronic minor attic leaks and elevated cooling costs during 100°F heatwaves.",
          es: "Techo de 22 años con goteras crónicas en el ático y recibos de luz altísimos por el calor de 100°F."
        },
        action: {
          en: "EliKay Roofing replaced 6 rotted decking sheets, installed high-reflectance architectural shingles, and added a continuous ridge vent with intake soffit airflow.",
          es: "EliKay Roofing cambió 6 hojas de triplay, colocó tejas arquitectónicas resistentes y agregó cumbrera ventilada con flujo de aire en aleros."
        },
        result: {
          en: "Attic temperature dropped 24°F, cooling bills fell 18%, and the homeowner gained a 30-year manufacturer warranty.",
          es: "La temperatura del ático bajó 24°F, el recibo de luz cayó 18% y el dueño obtuvo 30 años de garantía."
        }
      },
      faqs: [
        {
          q: {
            en: "How long does a full roof replacement take?",
            es: "¿Cuánto tiempo toma reemplazar el techo completo?"
          },
          a: {
            en: "Most average residential roof replacements are completed in just 1 to 2 days by our experienced crews, weather permitting.",
            es: "La mayoría de los techos residenciales se completan en tan solo 1 a 2 días por nuestro equipo experimentado, si el clima lo permite."
          }
        },
        {
          q: {
            en: "Will my yard and driveway be protected from stray nails?",
            es: "¿Mi patio y entrada estarán protegidos de clavos sueltos?"
          },
          a: {
            en: "Absolutely. We lay protective tarps over landscaping and perform multiple passes with high-strength magnetic rollers across lawns, driveways, and flowerbeds before concluding the job.",
            es: "Totalmente. Colocamos lonas protectoras y pasamos rodillos magnéticos de alta potencia varias veces por jardines y entradas antes de retirarnos."
          }
        },
        {
          q: {
            en: "What warranty comes with my new roof?",
            es: "¿Qué garantía tiene mi techo nuevo?"
          },
          a: {
            en: "You receive both a manufacturer material warranty (up to Lifetime on premium architectural shingles) and EliKay Roofing's dedicated workmanship guarantee.",
            es: "Recibe tanto la garantía de material del fabricante (hasta de por vida en tejas de calidad) como la garantía de mano de obra de EliKay Roofing."
          }
        }
      ]
    },
    "shingle-roofing": {
      tagline: {
        en: "High-Performance Asphalt Shingles",
        es: "Tejas Asfálticas de Alto Desempeño"
      },
      headline: {
        en: "Architectural & Dimensional Shingle Roofing in Texas",
        es: "Tejas Arquitectónicas y Dimensionales en Texas"
      },
      subtext: {
        en: "Engineered to withstand 130 MPH winds, scorching Texas sun, and heavy rains. Beautiful dimensional aesthetics that elevate your property's curb appeal and market value.",
        es: "Diseñadas para soportar vientos de 130 MPH, sol ardiente y lluvias torrenciales. Estética tridimensional que eleva el valor y presencia de su hogar."
      },
      heroBg: "/images/elikay/8.jpeg",
      heroBadge: {
        en: "130 MPH Wind Rated · Algae Resistant",
        es: "Resistencia a Viento 130 MPH · Anti-Algas"
      },
      introTitle: {
        en: "The difference between basic 3-tab and premium architectural shingles.",
        es: "La gran diferencia entre tejas básicas y tejas arquitectónicas."
      },
      introParagraph1: {
        en: "Traditional 3-tab shingles are lightweight, single-layer asphalt strips with cutouts rated only up to 60-70 MPH winds. In Texas, where sudden spring supercells and tropical storms easily produce 80+ MPH gusts, standard 3-tab shingles frequently lift, crack, and tear away.",
        es: "Las tejas tradicionales de 3 lengüetas son de una sola capa y solo resisten vientos de 60-70 MPH. En Texas, donde las tormentas superan con facilidad 80 MPH, estas tejas tienden a levantarse y rasgarse."
      },
      introParagraph2: {
        en: "EliKay Roofing installs premium multi-layer laminated architectural shingles. Crafted with reinforced fiberglass mats, heavy-duty asphalt coating, and copper-infused granules that inhibit black algae streaks, these shingles provide superior wind resistance, thermal durability, and multi-tone shadows.",
        es: "En EliKay Roofing instalamos tejas arquitectónicas laminadas de doble capa. Tienen fibra de vidrio reforzada, asfalto de uso rudo y gránulos de cobre que evitan manchas negras por hongos, brindando alta resistencia al viento y sombra tridimensional."
      },
      visual1: "/images/elikay/8.jpeg",
      visual1Caption: {
        en: "Deep charcoal architectural shingle course installation.",
        es: "Instalación de tejas arquitectónicas color carbón oscuro."
      },
      visual2: "/images/elikay/9.jpeg",
      visual2Caption: {
        en: "Precision starter course and valley alignment on steep slope.",
        es: "Alineación precisa de tira de inicio y valles en pendiente inclinada."
      },
      visual3: "/images/elikay/17.jpeg",
      visual3Caption: {
        en: "Close-up of overlapping shingles with uniform exposed tabs.",
        es: "Acercamiento a las tejas traslapadas con espaciado uniforme."
      },
      visual4: "/images/elikay/14.jpeg",
      visual4Caption: {
        en: "Flashing and pipe boot sealed seamlessly into shingle pattern.",
        es: "Tapajuntas y bota de tubería sellados de manera impecable."
      },
      equipmentHighlights: [
        {
          name: { en: "Multi-Tone Granule Blends", es: "Mezcla de Gránulos Multitono" },
          desc: { en: "Rich natural colors matching any brick, stone, or siding exterior.", es: "Tonos elegantes que combinan con cualquier fachada de ladrillo o piedra." }
        },
        {
          name: { en: "StreakGuard™ Algae Defense", es: "Protección contra Algas y Manchas" },
          desc: { en: "Specially formulated granules prevent unsightly dark streaks in humid Texas air.", es: "Gránulos con cobre que evitan rayas negras provocadas por humedad." }
        },
        {
          name: { en: "Dura Grip™ High-Adhesion Sealant", es: "Adhesivo de Alta Fijación" },
          desc: { en: "Locks each shingle strip tight to resist wind uplift and blow-offs.", es: "Sella cada hilera con fuerza para evitar levantamientos por viento." }
        },
        {
          name: { en: "Class 4 Impact Resistance Options", es: "Opciones Clase 4 contra Granizo" },
          desc: { en: "Reinforced SBS modified asphalt that can earn discounts on homeowner insurance.", es: "Asfalto modificado que puede calificar para descuentos en seguro de casa." }
        }
      ],
      scenarios: [
        {
          title: { en: "Upgrading from Outdated 3-Tab Shingles", es: "Modernización de Tejas Viejas Planas" },
          desc: { en: "Flat shingles look tired, dated, and blow off during every thunderstorm season.", es: "Las tejas planas se ven anticuadas y se desprenden con cada tormenta." },
          solution: { en: "Upgrade to architectural shingles that transform your home's appearance and weather defense.", es: "Cambio a tejas arquitectónicas que renuevan la fachada y blindan la casa." }
        },
        {
          title: { en: "Black Streaking & Algae Staining", es: "Manchas Negras de Humedad y Moho" },
          desc: { en: "Gloeocapsa magma algae bacteria creates ugly dark stains across north-facing roof slopes.", es: "Bacterias de moho afean las caídas de techo orientadas al norte." },
          solution: { en: "Install algae-resistant architectural shingles guaranteed to stay clean and bright.", es: "Colocación de tejas con tecnología anti-algas garantizadas para verse limpias." }
        },
        {
          title: { en: "Wind-Creased Shingle Tabs", es: "Tejas Dobladas por Fuertes Vientos" },
          desc: { en: "Winds bend shingles upward, fracturing the fiberglass spine even if the shingle didn't blow off.", es: "El viento dobla las tejas, quebrando su columna interna aunque no se vuelen." },
          solution: { en: "Replacement of affected slopes with 130 MPH rated high-adhesion laminate shingles.", es: "Reemplazo con tejas laminadas certificadas para resistir 130 MPH." }
        },
        {
          title: { en: "Insurance Discounts for Impact Rating", es: "Descuento en Aseguranza por Teja Clase 4" },
          desc: { en: "Texas homeowners paying high premiums due to frequent hail claims in the region.", es: "Familias pagando pólizas caras por granizadas frecuentes en el área." },
          solution: { en: "Installation of Class 4 impact shingles eligible for significant insurance discounts.", es: "Instalación de tejas de impacto Clase 4 con descuento directo en su seguro." }
        }
      ],
      processPhases: [
        {
          phase: "01",
          name: { en: "Color & Material Consultation", es: "Asesoría de Color y Material" },
          detail: { en: "We bring real shingle sample boards to your home to find the perfect shade for your exterior.", es: "Llevamos muestras reales a su casa para elegir el color ideal para su fachada." }
        },
        {
          phase: "02",
          name: { en: "Deck Preparation & Underlayment", es: "Preparación de Base y Membrana" },
          detail: { en: "Install heavy synthetic barrier and metal drip edge to create a waterproof perimeter.", es: "Colocamos membrana sintética pesada y goterón metálico en todo el perímetro." }
        },
        {
          phase: "03",
          name: { en: "Precision Pattern Shingle Nailing", es: "Clavado con Patrón de Precisión" },
          detail: { en: "Every shingle is hand-placed and fastened with 6 galvanized nails directly in the nailing strip.", es: "Cada teja se coloca y clava con 6 clavos galvanizados en la zona correcta." }
        },
        {
          phase: "04",
          name: { en: "High-Profile Ridge Cap Finish", es: "Acabado con Caballete Decorativo" },
          detail: { en: "Crown the roof with matching dimensional hip and ridge shingles for a stunning look.", es: "Rematamos con cumbreras dimensionales que realzan el estilo arquitectónico." }
        }
      ],
      localCaseStudy: {
        location: "Cypress, TX (Bridgeland)",
        situation: {
          en: "Builder-grade 3-tab shingles were failing after 11 years, with frequent leaks during spring downpours.",
          es: "Tejas baratas de constructora fallaron tras 11 años, con goteras constantes en primavera."
        },
        action: {
          en: "EliKay Roofing stripped the worn roof and installed Owens Corning Duration architectural shingles in Estate Gray with ice & water shield in all valleys.",
          es: "EliKay Roofing retiró el material gastado e instaló tejas Owens Corning Duration en gris con barrera impermeable en valles."
        },
        result: {
          en: "Neighborhood HOA praised the property transformation, and the home easily weathered the next hurricane season with zero issues.",
          es: "La asociación de vecinos felicitó el cambio y el techo soportó la siguiente temporada de huracanes sin ningún detalle."
        }
      },
      faqs: [
        {
          q: {
            en: "What colors do architectural shingles come in?",
            es: "¿Qué colores de tejas arquitectónicas tienen disponibles?"
          },
          a: {
            en: "We offer an extensive palette: Weathered Wood, Charcoal, Estate Gray, Driftwood, Onyx Black, Barkwood, and Terra Cotta. We bring physical sample boards so you can see how each looks against your brick in natural daylight.",
            es: "Tenemos una amplia gama: Weathered Wood, Carbón, Gris, Driftwood, Negro Onyx, Barkwood y Terra Cotta. Llevamos muestras físicas a su domicilio para que las compare con su ladrillo."
          }
        },
        {
          q: {
            en: "Are architectural shingles worth the slight cost difference over 3-tab?",
            es: "¿Vale la pena la diferencia de precio entre tejas arquitectónicas y tejas normales?"
          },
          a: {
            en: "Yes, without question. Architectural shingles last 10 to 15 years longer, resist double the wind speed (130 MPH vs 60 MPH), and dramatically improve your home's curb appeal and resale value.",
            es: "Sí, sin duda alguna. Duran de 10 a 15 años más, soportan el doble de viento (130 MPH vs 60 MPH) y aumentan sustancialmente el valor y presencia de su vivienda."
          }
        }
      ]
    },
    "roof-leak-repairs": {
      tagline: {
        en: "Emergency Leak Detection & Repair",
        es: "Detección y Reparación Urgente de Fugas"
      },
      headline: {
        en: "Emergency Roof Leak Detection & Repair in Greater Houston",
        es: "Detección y Reparación Urgente de Goteras en Gran Houston"
      },
      subtext: {
        en: "Fast pinpointing of hidden water entry points before ceiling stains turn into dangerous drywall collapse and hidden mold growth. Serving Houston, Katy, Cypress, Waller & beyond.",
        es: "Localizamos rápidamente el punto exacto de entrada del agua antes de que dañe techos interiores, yeso y provoque moho. Servicio en Houston, Katy, Cypress, Waller y más."
      },
      heroBg: "/images/elikay/14.jpeg",
      heroBadge: {
        en: "Fast Response · Free Inspection",
        es: "Respuesta Rápida · Inspección Gratis"
      },
      introTitle: {
        en: "Water rarely leaks into your house directly below where it enters the roof.",
        es: "El agua rara vez gotea en la casa justo debajo de donde penetra en el techo."
      },
      introParagraph1: {
        en: "When a homeowner spots a brown water ring on their ceiling drywall, the actual roof breach is often 10 to 20 feet away. Water enters through a compromised shingle or cracked pipe boot, runs down sloping plywood rafter rafters, pools over ceiling joists, and finally breaks through at the lowest drywall seam.",
        es: "Cuando ve una mancha café en su cielorraso, la entrada real del agua suele estar a 10 o 20 pies de distancia. El agua entra por una teja rota, resbala por la madera del ático y cae en el punto más bajo."
      },
      introParagraph2: {
        en: "EliKay Roofing uses forensic leak tracing to locate the true point of water entry. We inspect attic rafters for water trails, examine valley flashing, verify pipe boot seals, and provide a lasting structural repair—not just a temporary smear of tar that fails in the next rain.",
        es: "En EliKay Roofing rastreamos la filtración hasta su origen real. Revisamos las vigas del ático, tapajuntas de valles y sellos de tubos, ofreciendo una reparación definitiva y no un parche de brea temporal."
      },
      visual1: "/images/elikay/14.jpeg",
      visual1Caption: {
        en: "Repairing flashing and resealing pipe jack collar on residential roof.",
        es: "Reparando tapajuntas y sellando bota de tubería en techo residencial."
      },
      visual2: "/images/elikay/15.jpeg",
      visual2Caption: {
        en: "Replacing cracked shingles around skylight flashing perimeter.",
        es: "Cambiando tejas quebradas alrededor del marco de un tragaluz."
      },
      visual3: "/images/elikay/19.jpeg",
      visual3Caption: {
        en: "Watertight valley repair preventing channel water intrusion.",
        es: "Reparación impermeable en canaleta para evitar filtración de agua."
      },
      visual4: "/images/elikay/11.jpeg",
      visual4Caption: {
        en: "Checking chimney counter-flashing and masonry step joints.",
        es: "Revisando tapajuntas de chimenea y uniones de ladrillo."
      },
      equipmentHighlights: [
        {
          name: { en: "Deep Moisture Probing", es: "Detección de Humedad en Madera" },
          desc: { en: "Tracing damp wood pathways inside dark attic spaces to pinpoint breaches.", es: "Rastreo de madera húmeda dentro del ático para dar con el punto exacto." }
        },
        {
          name: { en: "Custom Metal Brake Flashing", es: "Doblado de Tapajuntas a Medida" },
          desc: { en: "Fabricating custom galvanized and aluminum flashing on site for tight fits.", es: "Elaboración de tapajuntas de metal a la medida exacta de su techo." }
        },
        {
          name: { en: "Industrial Polyurethane Sealants", es: "Selladores de Poliuretano Industrial" },
          desc: { en: "Commercial adhesives that bond securely even in damp conditions.", es: "Adhesivos de máxima adherencia resistentes al agua y sol intenso." }
        },
        {
          name: { en: "Plywood Deck Restorations", es: "Restauración de Plywood Dañado" },
          desc: { en: "Cutting out soft, rotted decking and scabbing in new CDX exterior plywood.", es: "Corte de madera podrida e instalación de triplay exterior nuevo y firme." }
        }
      ],
      scenarios: [
        {
          title: { en: "Ceiling Water Stains During Wind-Driven Rain", es: "Manchas de Agua en Techo Interior con Lluvias" },
          desc: { en: "Leaks only appear when wind blows from a specific direction against the roof slope.", es: "La gotera solo aparece cuando el viento sopla de cierta dirección contra el techo." },
          solution: { en: "We locate lifted shingle tabs and defective side lap underlayments, re-bonding the seams.", es: "Detectamos tejas despegadas y traslapes deficientes, sellando las uniones." }
        },
        {
          title: { en: "Skylight & Sun Tunnel Perimeter Leaks", es: "Fugas en Tragaluces y Domos de Luz" },
          desc: { en: "Sun-degraded gaskets and clogged weeping channels directing water into sheetrock.", es: "Empaques resecos y canales tapados que desvían el agua hacia el yeso interior." },
          solution: { en: "Complete removal of surrounding shingles, new flashing kit, and ice & water membrane.", es: "Retiro de tejas alrededor, tapajuntas nuevo y membrana impermeable de protección." }
        },
        {
          title: { en: "Chimney Cricket & Saddle Failures", es: "Filtraciones Detrás de la Chimenea" },
          desc: { en: "Water ponding behind wide chimneys because no diverter saddle was installed.", es: "El agua se estanca detrás de la chimenea por falta de una caída adecuada." },
          solution: { en: "Framing a custom diverter cricket and installing new step and counter-flashing.", es: "Construcción de caballete desviador de agua y tapajuntas nuevos en el ladrillo." }
        },
        {
          title: { en: "Nail Pops & Backed-Out Fasteners", es: "Clavos Levantados que Perforan Tejas" },
          desc: { en: "Expansion and contraction causes decking nails to back out, puncturing upper shingles.", es: "El calor hace que los clavos suban y perforen la teja superior con el tiempo." },
          solution: { en: "Removing lifted nails, inserting new fasteners in solid wood, and sealing shingle tabs.", es: "Extracción de clavos salidos, re-clavado en madera firme y sellado de tejas." }
        }
      ],
      processPhases: [
        {
          phase: "01",
          name: { en: "Attic & Exterior Forensic Survey", es: "Inspección Forense Interior y Exterior" },
          detail: { en: "We cross-reference interior ceiling damage with exterior roof geometry and attic pathways.", es: "Cruzamos la ubicación de la mancha interior con el exterior y el ático." }
        },
        {
          phase: "02",
          name: { en: "Selective Shingle Unweaving", es: "Desmontaje Cuidadoso de Tejas" },
          detail: { en: "Carefully detach undamaged shingles around the leak site to expose the decking.", es: "Despegamos con cuidado las tejas alrededor para dejar la madera a la vista." }
        },
        {
          phase: "03",
          name: { en: "Underlayment & Flashing Repair", es: "Reparación de Tapajuntas y Membrana" },
          detail: { en: "Install rubberized leak barrier over repaired decking and replace corroded flashing.", es: "Colocamos barrera impermeable sobre la madera y cambiamos el metal oxidado." }
        },
        {
          phase: "04",
          name: { en: "Water Testing & Verification", es: "Prueba de Agua y Verificación" },
          detail: { en: "Reinstall color-matched shingles and verify total watertight seal.", es: "Reinstalamos tejas del mismo tono y comprobamos el sellado total hermético." }
        }
      ],
      localCaseStudy: {
        location: "Waller, TX",
        situation: {
          en: "Heavy downpours caused continuous dripping into a homeowner's kitchen lighting fixture, risking an electrical fire.",
          es: "Aguaceros intensos provocaron goteras continuas en la lámpara de la cocina, con riesgo eléctrico."
        },
        action: {
          en: "EliKay Roofing responded promptly, climbed into the attic, traced the leak to a split plumbing boot collar 15 feet away, and replaced the unit.",
          es: "EliKay Roofing acudió rápido, subió al ático, rastreó la gotera a un tubo roto a 15 pies y cambió el sello."
        },
        result: {
          en: "Leak completely stopped in 2 hours with no interior ceiling drywall replacement needed.",
          es: "Gotera detenida por completo en 2 horas, evitando tener que romper el techo de la cocina."
        }
      },
      faqs: [
        {
          q: {
            en: "What should I do inside my house while waiting for EliKay Roofing?",
            es: "¿Qué debo hacer dentro de mi casa mientras llega EliKay Roofing?"
          },
          a: {
            en: "Place a bucket under active drips. If water is pooling and making the drywall bulge, carefully poke a small hole in the center with a screwdriver to let water drain into a bucket. This relieves water weight and prevents the entire ceiling from collapsing.",
            es: "Ponga una cubeta bajo la gotera. Si el yeso se ve abombado por el agua, haga con cuidado un pequeño orificio al centro con un destornillador para que drene. Esto quita el peso y evita que caiga todo el techo."
          }
        },
        {
          q: {
            en: "Will a roof leak cause mold inside my home?",
            es: "¿Una gotera puede causar moho dentro de la casa?"
          },
          a: {
            en: "Yes. In warm Texas weather, damp attic insulation and drywall can begin growing mold in 24 to 48 hours. Stopping the leak immediately is critical to protecting your family's health and your property.",
            es: "Sí. Con el calor de Texas, el aislamiento y yeso húmedos pueden generar moho en 24 a 48 horas. Detener la fuga de inmediato es vital para la salud de su familia."
          }
        }
      ]
    },
    "storm-damage-repairs": {
      tagline: {
        en: "Texas Hail & Wind Damage Restoration",
        es: "Restauración por Viento y Granizo en Texas"
      },
      headline: {
        en: "Hail & Storm Damage Roof Restorations Across Greater Houston",
        es: "Reparación de Daños por Granizo y Tormentas en Gran Houston"
      },
      subtext: {
        en: "Comprehensive photographic assessments of hail bruising, granule loss, wind lift, and emergency tarping across the Greater Houston storm corridor. 13+ years of storm restoration experience.",
        es: "Evaluaciones fotográficas completas de impactos de granizo, pérdida de gránulos, viento y entoldado de emergencia. 13+ años de experiencia restaurando techos en Texas."
      },
      heroBg: "/images/elikay/storm_inspection.jpg",
      heroBadge: {
        en: "Free Storm Inspections · Emergency Tarping",
        es: "Inspección de Tormenta Gratis · Entoldado Rápido"
      },
      introTitle: {
        en: "Recognizing subtle hail damage before leaks start rotting your roof decking.",
        es: "Detecte el daño por granizo antes de que pudra la madera de su techo."
      },
      introParagraph1: {
        en: "Hail stones do not have to punch holes through shingles to destroy your roof's waterproofing ability. When hail strikes an asphalt shingle at high speed, it bruises the underlying fiberglass mat and knocks away the protective mineral granules in dark, circular impact craters.",
        es: "El granizo no necesita perforar la teja para arruinar su impermeabilidad. Al golpear con fuerza, fractura la fibra de vidrio interior y bota los gránulos minerales, dejando marcas circulares expuestas."
      },
      introParagraph2: {
        en: "Once granules are dislodged, the exposed asphalt quickly degrades under Texas sunlight, drying out, cracking, and leaking within 6 to 12 months. EliKay Roofing performs detailed storm evaluations, marking all hail hits and documenting the damage for homeowners and adjusters.",
        es: "Sin gránulos protectores, el asfalto se tuesta con el sol, se quiebra y filtra agua en 6 a 12 meses. En EliKay Roofing evaluamos los daños, marcamos los golpes y documentamos todo con fotos claras."
      },
      visual1: "/images/elikay/storm_inspection.jpg",
      visual1Caption: {
        en: "Roof inspection documenting hail impact bruising and granule loss.",
        es: "Inspección documentando impactos de granizo y pérdida de gránulos."
      },
      visual2: "/images/elikay/commercial_roofing.jpg",
      visual2Caption: {
        en: "Large-scale storm damage restoration and decking reinforcement.",
        es: "Restauración de techo tras tormenta y refuerzo de cubierta."
      },
      visual3: "/images/elikay/11.jpeg",
      visual3Caption: {
        en: "Repairing wind-lifted shingles and re-sealing metal flashings.",
        es: "Reparación de tejas levantadas por viento y sellado de metales."
      },
      visual4: "/images/elikay/16.jpeg",
      visual4Caption: {
        en: "Quality check of restored shingle courses after hurricane season.",
        es: "Control de calidad en techos restaurados tras temporada de tormentas."
      },
      equipmentHighlights: [
        {
          name: { en: "High-Resolution Photo Dossiers", es: "Reportes Fotográficos en Alta Resolución" },
          desc: { en: "Clear macro photos showing hail bruises, collateral gutter spatter, and creased shingles.", es: "Fotos nítidas de golpes de granizo, abolladuras en canaletas y tejas rotas." }
        },
        {
          name: { en: "Heavy-Duty Emergency Tarping", es: "Entoldado Reforzado de Emergencia" },
          desc: { en: "Sandbagged, furring-strip secured tarps that prevent water intrusion during severe weather.", es: "Lonas aseguradas con listones que resisten tormentas sin dañar el resto del techo." }
        },
        {
          name: { en: "Collateral Metal Inspection", es: "Revisión de Metales Aledaños" },
          desc: { en: "Checking soft metals, AC condenser fins, gutters, and siding for hail impact evidence.", es: "Revisión de canaletas, respiraderos y compresor de aire para verificar granizo." }
        },
        {
          name: { en: "Class 4 Replacement Upgrades", es: "Mejora a Tejas Clase 4 Antigranizo" },
          desc: { en: "Rebuilding roofs with impact-resistant shingles designed to survive future storms.", es: "Instalación de tejas de alta resistencia para soportar futuras granizadas." }
        }
      ],
      scenarios: [
        {
          title: { en: "Recent Hailstorm in Houston or Surrounding Counties", es: "Granizada Reciente en Houston o Alrededores" },
          desc: { en: "Hailstones larger than a quarter hit the neighborhood, denting cars and air conditioning units.", es: "Granizo del tamaño de una moneda golpeó la colonia, abollando carros y aparatos." },
          solution: { en: "We provide a 100% free roof inspection to assess whether shingles sustained functional damage.", es: "Brindamos inspección 100% gratis para evaluar si las tejas sufrieron daño real." }
        },
        {
          title: { en: "Hurricane & Tropical Storm Wind Lift", es: "Vientos de Tormenta Tropical o Huracán" },
          desc: { en: "Sustained 60-90 MPH winds tore shingles off the windward roof edges.", es: "Vientos de 60 a 90 MPH arrancaron tejas en las esquinas más expuestas." },
          solution: { en: "Immediate emergency tarping followed by permanent shingle replacement with 130 MPH rated materials.", es: "Entoldado inmediato y reemplazo permanente con tejas certificadas para 130 MPH." }
        },
        {
          title: { en: "Tree Branch & Debris Impacts", es: "Caída de Ramas y Árboles sobre el Techo" },
          desc: { en: "Fallen oak or pine limbs punctured decking and cracked structural rafters.", es: "Ramas pesadas perforaron el triplay y doblaron las vigas del techo." },
          solution: { en: "Debris removal, structural rafter sistering, new plywood decking, and fresh shingle courses.", es: "Retiro de ramas, refuerzo de vigas, madera nueva y colocación de tejas." }
        },
        {
          title: { en: "Denied or Underpaid Insurance Claims", es: "Reclamo de Aseguranza Rechazado o Incompleto" },
          desc: { en: "Insurance adjuster overlooked significant collateral damage or only offered a small patch.", es: "El ajustador no vio daños importantes o solo aprobó un parche mínimo." },
          solution: { en: "We meet with adjusters on-site to walk the roof and provide comprehensive photo proof.", es: "Subimos al techo con el ajustador para mostrarle cada daño con evidencia clara." }
        }
      ],
      processPhases: [
        {
          phase: "01",
          name: { en: "Zero-Cost Roof & Property Audit", es: "Inspección Sin Costo de la Propiedad" },
          detail: { en: "We inspect all slopes, valleys, gutters, vents, and siding, taking high-resolution photos.", es: "Revisamos caídas de agua, canaletas, ventilas y paredes con fotos detalladas." }
        },
        {
          phase: "02",
          name: { en: "Emergency Water Defense (If Needed)", es: "Protección contra Agua de Emergencia" },
          detail: { en: "If holes or missing shingles exist, we deploy storm tarps to safeguard your home immediately.", es: "Si hay huecos o faltan tejas, colocamos lonas seguras para evitar goteras." }
        },
        {
          phase: "03",
          name: { en: "Detailed Scope & Consultation", es: "Reporte Claro y Asesoría" },
          detail: { en: "We explain all findings in English or Spanish, detailing whether repair or replacement is best.", es: "Le explicamos todo en inglés o español, indicando si conviene reparar o cambiar." }
        },
        {
          phase: "04",
          name: { en: "Complete Restoration Execution", es: "Restauración Completa y Garantizada" },
          detail: { en: "Skilled installation with certified hurricane-rated materials and thorough site cleanup.", es: "Instalación profesional con materiales resistentes a tormentas y limpieza total." }
        }
      ],
      localCaseStudy: {
        location: "Houston, TX (Memorial)",
        situation: {
          en: "Severe thunderstorm with 1.75-inch hail battered residential subdivision. Homeowner noticed hundreds of granules in downspouts.",
          es: "Fuerte tormenta con granizo de casi 2 pulgadas azotó el vecindario. El dueño vio kilos de granos en las canaletas."
        },
        action: {
          en: "EliKay Roofing documented 28 distinct hail strikes per 100-sq-ft test square, plus dented metal box vents and gutter spatter.",
          es: "EliKay Roofing documentó 28 impactos de granizo por cuadrante de prueba, además de respiraderos y canaletas abolladas."
        },
        result: {
          en: "Full roof replacement approved by insurance carrier, restoring the home with upgraded architectural shingles and zero out-of-pocket surprise costs.",
          es: "La aseguradora aprobó el reemplazo total, renovando la casa con tejas arquitectónicas superiores sin gastos sorpresa."
        }
      },
      faqs: [
        {
          q: {
            en: "How do I know if my roof has hail damage if it isn't leaking yet?",
            es: "¿Cómo sé si mi techo tiene daño por granizo si todavía no gotea?"
          },
          a: {
            en: "Hail damage rarely leaks immediately. Check ground-level clues first: are your gutters dented? Are flowerpots or AC condensers dented? Are there piles of colored granules below downspouts? If so, call EliKay Roofing for a free, professional roof inspection.",
            es: "El daño por granizo rara vez gotea de inmediato. Revise señales a nivel del piso: ¿están abolladas sus canaletas o el compresor del aire? ¿hay montones de arenilla bajo las bajadas de agua? Si es así, llámenos para una revisión gratis."
          }
        },
        {
          q: {
            en: "Is there any cost for EliKay Roofing to inspect my storm-damaged roof?",
            es: "¿Tiene algún costo que EliKay Roofing revise mi techo tras una tormenta?"
          },
          a: {
            en: "No, our storm inspections and written repair assessments are completely free of charge with no obligation.",
            es: "No, nuestras inspecciones por tormenta y presupuestos por escrito son 100% gratuitos y sin ningún compromiso."
          }
        }
      ]
    },
    "attic-venting-installation": {
      tagline: {
        en: "Thermodynamic Attic Ventilation",
        es: "Ventilación Termodinámica de Áticos"
      },
      headline: {
        en: "Attic Ventilation & Turbine Vents in Greater Houston",
        es: "Ventilación de Áticos y Turbinas Eólicas en Gran Houston"
      },
      subtext: {
        en: "Lower electric cooling bills and prevent premature shingle baking with engineered balanced intake and exhaust: continuous ridge vents, wind turbines, and soffit channels.",
        es: "Baje el gasto de luz y evite que sus tejas se tuesten con ventilación equilibrada: ventilas de cumbrera, turbinas de viento y canales de sofito."
      },
      heroBg: "/images/elikay/18.jpeg",
      heroBadge: {
        en: "Lower Energy Bills · Extended Shingle Life",
        es: "Ahorro de Energía · Mayor Vida de Tejas"
      },
      introTitle: {
        en: "In Texas summers, an unventilated attic can reach a blistering 160°F.",
        es: "En los veranos de Texas, un ático sin ventilación puede alcanzar más de 160°F."
      },
      introParagraph1: {
        en: "When attic spaces trap superheated air, two severe problems occur. First, the heat bakes asphalt shingles from the underside, frying volatile oils and cutting their service life in half. Second, extreme heat radiates downward through ceiling joists, forcing your home's air conditioner to run constantly.",
        es: "Cuando el calor queda atrapado en el ático, surgen dos problemas graves: el calor tuesta las tejas desde abajo secando sus aceites y reduciendo su vida a la mitad, y se transfiere a las habitaciones haciendo que el aire acondicionado trabaje sin descanso."
      },
      introParagraph2: {
        en: "EliKay Roofing designs and installs balanced attic ventilation systems. By pairing low-eave soffit intake vents with high-point continuous ridge vents or wind-driven turbine ventilators, we create a continuous natural convection airflow that flushes superheated air out around the clock.",
        es: "En EliKay Roofing diseñamos sistemas de ventilación equilibrados. Combinamos entradas de aire fresco en los aleros con salidas en la parte alta mediante cumbrera ventilada o turbinas eólicas, creando un flujo natural constante que expulsa el calor."
      },
      visual1: "/images/elikay/18.jpeg",
      visual1Caption: {
        en: "Wind turbine vent and exhaust installation on residential ridge.",
        es: "Instalación de turbina de viento y ventilación de cumbrera en residencia."
      },
      visual2: "/images/elikay/15.jpeg",
      visual2Caption: {
        en: "Cutting precise exhaust channel for continuous shingle-over ridge vent.",
        es: "Corte preciso del canal de escape para cumbrera ventilada cubierta de tejas."
      },
      visual3: "/images/elikay/10.jpeg",
      visual3Caption: {
        en: "Clean finished roofline with integrated ventilation system.",
        es: "Línea de techo limpia con sistema de ventilación integrado."
      },
      visual4: "/images/elikay/hero_residential.jpg",
      visual4Caption: {
        en: "Modern energy-efficient roof assembly protecting Houston residence.",
        es: "Techo moderno de alta eficiencia energética protegiendo casa en Houston."
      },
      equipmentHighlights: [
        {
          name: { en: "Shingle-Over Ridge Vents", es: "Cumbrera Ventilada con Cubierta de Teja" },
          desc: { en: "Low-profile continuous exhaust with internal weather baffles that block driving rain and bugs.", es: "Escape continuo de perfil bajo con deflectores que impiden la entrada de lluvia e insectos." }
        },
        {
          name: { en: "Whirlybird Wind Turbines", es: "Turbinas Eólicas Whirlybird" },
          desc: { en: "Heavy-duty aluminum turbine vents with dual permanently lubricated ball bearings.", es: "Turbinas de aluminio con baleros sellados que giran con la menor brisa." }
        },
        {
          name: { en: "Continuous Perforated Soffits", es: "Sofitos Perforados Continuos" },
          desc: { en: "Maximum net free intake area along eaves to feed continuous upward airflow.", es: "Máxima entrada de aire fresco bajo los aleros para alimentar el flujo ascendente." }
        },
        {
          name: { en: "Low-Profile Static Box Vents", es: "Respiraderos Estáticos de Perfil Bajo" },
          desc: { en: "Corrosion-proof galvanized metal exhaust vents for complex hip roofs.", es: "Respiraderos metálicos galvanizados anticorrosión para techos de múltiples caídas." }
        }
      ],
      scenarios: [
        {
          title: { en: "High Summer Electricity & Air Conditioning Bills", es: "Recibos de Luz Excesivos en Verano" },
          desc: { en: "HVAC system struggles to cool the upper floor of your home during 95°F+ afternoons.", es: "El aire acondicionado no logra enfriar el segundo piso en tardes de más de 95°F." },
          solution: { en: "Install engineered ridge ventilation to reduce attic heat by 20°F to 35°F naturally.", es: "Instalar ventilación en cumbrera para bajar el calor del ático de 20°F a 35°F de forma natural." }
        },
        {
          title: { en: "Shingles Curling & Blistering Prematurely", es: "Tejas Deformadas y con Burbujas por el Calor" },
          desc: { en: "Roof is only 7-10 years old but shingles look brittle, cooked, and deformed.", es: "El techo tiene solo 7 a 10 años pero las tejas se ven resecas y deformadas." },
          solution: { en: "Add balanced intake and exhaust vents to stop heat from cooking shingles from below.", es: "Agregar ventilas de entrada y salida para evitar que el calor cocine las tejas por abajo." }
        },
        {
          title: { en: "Winter Moisture & Attic Mold Formation", es: "Humedad Invernal y Moho en el Ático" },
          desc: { en: "Warm bathroom and kitchen humidity rises into cold attics, condensing on roof plywood.", es: "El vapor de regaderas y cocina sube al ático frío y se condensa en la madera." },
          solution: { en: "Continuous airflow carries interior humidity out before condensation can feed mold.", es: "La ventilación continua expulsa el vapor antes de que genere hongos y pudrición." }
        },
        {
          title: { en: "Noisy or Squeaking Old Wind Turbines", es: "Turbinas de Viento Viejas y Ruidosas" },
          desc: { en: "Rusted turbine vents screeching loudly on windy nights and leaking rainwater.", es: "Turbinas oxidadas rechinando toda la noche con el viento y filtrando agua." },
          solution: { en: "Replace old units with silent, dual-bearing aluminum turbines or modern ridge vents.", es: "Cambio por turbinas de aluminio silenciosas con baleros sellados o cumbrera ventilada." }
        }
      ],
      processPhases: [
        {
          phase: "01",
          name: { en: "Ventilation Ratio Calculation", es: "Cálculo de Proporción de Ventilación" },
          detail: { en: "We calculate your attic's square footage and determine the optimal 1:300 balanced ventilation code ratio.", es: "Calculamos el área de su ático y determinamos la proporción óptima 1:300 de entrada y salida." }
        },
        {
          phase: "02",
          name: { en: "Ridge Opening & Deck Cutting", es: "Apertura de Cumbrera y Corte de Madera" },
          detail: { en: "Cut a precise 2-inch slot along the roof peak without compromising structural trusses.", es: "Cortamos una ranura de 2 pulgadas en la cúspide sin debilitar las vigas estructurales." }
        },
        {
          phase: "03",
          name: { en: "Baffled Vent Fastening", es: "Fijación de Ventila con Deflectores" },
          detail: { en: "Fasten heavy-duty ridge vents with ring-shank nails and seal end plugs with polyurethane.", es: "Fijamos la ventila con clavos anillados y sellamos los extremos con poliuretano." }
        },
        {
          phase: "04",
          name: { en: "Cap Shingle Installation & Airflow Check", es: "Colocación de Tejas de Cumbrera" },
          detail: { en: "Cover vents with matching architectural cap shingles and verify free intake airflow at eaves.", es: "Cubrimos con tejas a juego y comprobamos que el aire fluya libremente en los aleros." }
        }
      ],
      localCaseStudy: {
        location: "Katy, TX",
        situation: {
          en: "Two-story home with closed gable vents had upstairs bedrooms that remained 8°F hotter than downstairs all summer.",
          es: "Casa de dos pisos con ventilas cerradas donde las recámaras de arriba estaban 8°F más calientes en verano."
        },
        action: {
          en: "EliKay Roofing cut a 48-foot continuous ridge vent and replaced two seized rooftop turbines with silent aluminum ventilators.",
          es: "EliKay Roofing instaló 48 pies de cumbrera ventilada y cambió dos turbinas atoradas por turbinas de aluminio silenciosas."
        },
        result: {
          en: "Upstairs bedroom temperature equalized with downstairs, reducing central AC run-time by nearly 2 hours daily.",
          es: "La temperatura del segundo piso se igualó con la planta baja, reduciendo el uso del aire casi 2 horas diarias."
        }
      },
      faqs: [
        {
          q: {
            en: "Can rain blow into ridge vents or wind turbines during a storm?",
            es: "¿Puede meterse la lluvia por la cumbrera ventilada o turbinas en una tormenta?"
          },
          a: {
            en: "Quality ridge vents have internal weather baffles that deflect driving rain and snow downward, keeping water outside while letting warm air escape. Our turbines are engineered with overlapping aerodynamic louvers that spin water outward.",
            es: "Las cumbreras de calidad tienen deflectores internos que desvían la lluvia hacia afuera mientras dejan salir el aire caliente. Nuestras turbinas tienen aspas traslapadas que expulsan el agua al girar."
          }
        },
        {
          q: {
            en: "How much can proper attic ventilation save on my electricity bills?",
            es: "¿Cuánto puedo ahorrar en mi recibo de luz con buena ventilación en el ático?"
          },
          a: {
            en: "Studies and homeowner experience show that lowering attic temperatures by 20°F to 30°F can reduce central air conditioning costs by 10% to 15% during Texas summer months.",
            es: "Estudios y clientes demuestran que bajar de 20°F a 30°F la temperatura del ático puede reducir el consumo de aire acondicionado entre un 10% y 15% en verano."
          }
        }
      ]
    },
    "gutter-cleaning-drainage": {
      tagline: {
        en: "Rainwater Management & Foundation Defense",
        es: "Manejo Pluvial y Defensa de Cimientos"
      },
      headline: {
        en: "Seamless Gutters, Cleaning & Drainage in Greater Houston",
        es: "Canaletas sin Uniones, Limpieza y Drenaje en Gran Houston"
      },
      subtext: {
        en: "Protect your home's foundation, landscaping, and fascia boards with debris-free seamless aluminum gutters, leaf guards, and reinforced apron flashing.",
        es: "Proteja los cimientos de su casa, jardinería y madera perimetral con canaletas de aluminio sin uniones, protectores de hojas y tapajuntas reforzados."
      },
      heroBg: "/images/elikay/gutters_siding.jpg",
      heroBadge: {
        en: "Seamless Aluminum · Foundation Protection",
        es: "Aluminio sin Uniones · Protección de Cimientos"
      },
      introTitle: {
        en: "In Texas clay soils, uncontrolled roof runoff wrecks foundations.",
        es: "En los suelos arcillosos de Texas, el agua sin canaletas destruye los cimientos."
      },
      introParagraph1: {
        en: "Greater Houston and Central Texas sit on highly expansive clay soil. When heavy downpours drop thousands of gallons of rainwater directly off your roof edges without gutters, soil around your foundation expands dramatically. In dry summer months, that soil shrinks, causing foundation cracks, sticking doors, and uneven floors.",
        es: "Houston y Texas tienen suelo de arcilla expansiva. Cuando caen miles de galones de agua del techo sin canaletas, la tierra alrededor del cimiento se hincha. En verano se reseca y encoge, provocando grietas en la base y puertas que se atoran."
      },
      introParagraph2: {
        en: "EliKay Roofing provides custom seamless aluminum gutter installations, seasonal cleaning, and downspout extensions. We pitch every gutter run with precision laser levels so water flows swiftly away from your walls and slab, keeping your foundation stable year-round.",
        es: "En EliKay Roofing instalamos canaletas de aluminio sin uniones a la medida, limpieza profunda y extensiones de desagüe. Nivelamos cada tramo con precisión para que el agua corra lejos de sus muros y base."
      },
      visual1: "/images/elikay/gutters_siding.jpg",
      visual1Caption: {
        en: "Seamless aluminum gutter installation along residential fascia.",
        es: "Instalación de canaleta de aluminio sin uniones sobre fascia de madera."
      },
      visual2: "/images/elikay/11.jpeg",
      visual2Caption: {
        en: "Inspecting drip edge flashing and gutter clearance.",
        es: "Revisando el goterón metálico y la caída hacia la canaleta."
      },
      visual3: "/images/elikay/8.jpeg",
      visual3Caption: {
        en: "Clean roof valley feeding directly into reinforced corner downspout.",
        es: "Limahoya limpia encauzando el agua directo a la bajada reforzada."
      },
      visual4: "/images/elikay/16.jpeg",
      visual4Caption: {
        en: "Technician verifying downspout anchor stability and runoff distance.",
        es: "Técnico comprobando la fijación de la bajada de agua y distancia del desagüe."
      },
      equipmentHighlights: [
        {
          name: { en: "Seamless Heavy-Gauge Aluminum", es: "Aluminio Grueso sin Uniones" },
          desc: { en: "Continuous single-piece gutters extruded on site with no mid-run leak seams.", es: "Canaletas fabricadas de una sola pieza en el sitio sin uniones que goteen." }
        },
        {
          name: { en: "Hidden Screw-Lock Hangers", es: "Soportes Ocultos con Tornillo" },
          desc: { en: "Heavy-duty brackets screwed directly into rafter tails, not weak spikes that pull out.", es: "Abrazaderas de uso rudo atornilladas a las vigas, evitando que se cuelguen." }
        },
        {
          name: { en: "Micro-Mesh Gutter Guards", es: "Rejillas Protectoras Micro-Mesh" },
          desc: { en: "Stainless steel mesh that blocks pine needles, oak tassels, and leaves permanently.", es: "Malla de acero inoxidable que frena hojas, ramas y agujas de pino." }
        },
        {
          name: { en: "Oversized 3x4 Downspouts", es: "Bajadas de Agua Amplias de 3x4" },
          desc: { en: "Drains double the water volume of standard residential downspouts during cloudbursts.", es: "Desalojan el doble de agua que las bajadas comunes en tormentas fuertes." }
        }
      ],
      scenarios: [
        {
          title: { en: "Water Overflowing Gutters into Soffits & Fascia", es: "Agua Desbordada Podriendo Madera y Sofitos" },
          desc: { en: "Leaves clog downspout inlets, causing water to pool and rot wooden fascia boards.", es: "Hojas tapan las bajadas, estancando agua que pudre la madera del borde." },
          solution: { en: "Deep gutter cleaning, downspout flushing, and installation of clog-free leaf guards.", es: "Limpieza profunda, desazolve de bajadas e instalación de rejillas protectoras." }
        },
        {
          title: { en: "Soil Erosion & Trenching Around Foundation", es: "Zanjas de Tierra y Erosión en los Cimientos" },
          desc: { en: "Water cascading off roof valleys gouges deep trenches in flowerbeds and saturates foundation.", es: "Cascadas de agua desde el techo deslavan jardines y saturan el cimiento." },
          solution: { en: "Custom 6-inch seamless gutters with oversized downspouts directing water 6+ feet away.", es: "Canaletas de 6 pulgadas sin uniones con bajadas que alejan el agua más de 6 pies." }
        },
        {
          title: { en: "Sagging, Pulling-Away Gutters", es: "Canaletas Colgadas o Despegadas de la Pared" },
          desc: { en: "Old gutter spikes have backed out of wood, causing the gutter to tilt forward.", es: "Clavos viejos se salieron de la madera, inclinando la canaleta hacia el frente." },
          solution: { en: "Re-hanging with heavy internal screw brackets and replacing rotted fascia backing.", es: "Fijación con soportes internos de tornillo y cambio de madera podrida." }
        },
        {
          title: { en: "Leaking Miter Corners & Seams", es: "Goteras en las Esquinas y Uniones de Canaletas" },
          desc: { en: "Sectional gutters joined with silicone caulking leak continuously at every seam.", es: "Canaletas armadas por pedazos gotean constantemente en cada unión." },
          solution: { en: "Replacement with single continuous seamless runs sealed with self-leveling gutter sealant.", es: "Reemplazo por tramos continuos sin costuras con sellador de uretano impermeable." }
        }
      ],
      processPhases: [
        {
          phase: "01",
          name: { en: "Eave Measurement & Pitch Survey", es: "Medición de Aleros y Nivelación" },
          detail: { en: "Measure exact run lengths and calculate downward slope towards downspout positions.", es: "Medimos la longitud exacta y calculamos la pendiente de caída hacia las bajadas." }
        },
        {
          phase: "02",
          name: { en: "Fascia Board Inspection", es: "Revisión de Madera de Fascia" },
          detail: { en: "Inspect wood behind old gutters for rot, replacing damaged lumber before hanging new metal.", es: "Revisamos que la madera esté sana, cambiando cualquier pieza podrida antes de colgar metal nuevo." }
        },
        {
          phase: "03",
          name: { en: "On-Site Seamless Extrusion", es: "Fabricación de Canaleta en el Sitio" },
          detail: { en: "Custom-form seamless aluminum troughs directly from our mobile roll-forming machine.", es: "Moldeamos la canaleta a la medida exacta con nuestra máquina móvil sin cortes intermedios." }
        },
        {
          phase: "04",
          name: { en: "Mounting & Water Flow Testing", es: "Fijación y Prueba de Flujo de Agua" },
          detail: { en: "Fasten every 24 inches with hidden screw hangers and conduct full water flush test.", es: "Fijamos cada 24 pulgadas con soportes ocultos y hacemos prueba con manguera." }
        }
      ],
      localCaseStudy: {
        location: "Houston, TX (Heights)",
        situation: {
          en: "Historic bungalow had no gutters on the north side, causing heavy rains to pool near the pier-and-beam foundation.",
          es: "Casa histórica sin canaletas en el lado norte provocaba encharcamientos peligrosos cerca de la base de madera."
        },
        action: {
          en: "EliKay Roofing fabricated and installed 60 feet of custom seamless white aluminum gutters with two 3x4 downspouts routed to gravel drain basins.",
          es: "EliKay Roofing fabricó 60 pies de canaletas de aluminio blanco sin uniones con bajadas canalizadas a drenaje de grava."
        },
        result: {
          en: "Foundation perimeter remained completely dry during subsequent tropical storms with zero standing water.",
          es: "El perímetro del cimiento se mantuvo 100% seco durante las siguientes tormentas sin encharcamientos."
        }
      },
      faqs: [
        {
          q: {
            en: "Why are seamless gutters better than sectional gutters from big-box stores?",
            es: "¿Por qué las canaletas sin uniones son mejores que las de tramos armables?"
          },
          a: {
            en: "Sectional gutters have seams every 10 feet glued with caulk. With Texas thermal expansion, every joint eventually cracks and leaks. Seamless gutters are custom-extruded in one single piece from corner to corner, eliminating leak points completely.",
            es: "Las canaletas por tramos tienen uniones cada 10 pies pegadas con silicón que se agrietan con el calor. Las canaletas sin uniones son de una sola pieza de esquina a esquina, eliminando las fugas por completo."
          }
        },
        {
          q: {
            en: "How often should gutters be cleaned in Texas?",
            es: "¿Con qué frecuencia se deben limpiar las canaletas en Texas?"
          },
          a: {
            en: "We recommend cleaning at least twice a year: once in late spring after oak tassels drop, and once in late fall after leaves drop. If you have dense tree overhang, installing micro-mesh gutter guards eliminates the need for ongoing cleaning.",
            es: "Recomendamos limpiarlas al menos dos veces al año: en primavera tras la caída de polen y ramas de roble, y a finales de otoño. Si tiene muchos árboles, instalar rejillas protectoras elimina la necesidad de limpiarlas a mano."
          }
        }
      ]
    },
    "fascia-soffit-siding": {
      tagline: {
        en: "Exterior Wood, Soffit & Siding Craftsmanship",
        es: "Carpintería Exterior, Sofitos y Revestimiento"
      },
      headline: {
        en: "Fascia, Soffit & Exterior Siding Repairs in Houston & Surrounding Texas",
        es: "Reparación de Fascia, Sofitos y Revestimiento en Gran Houston"
      },
      subtext: {
        en: "Restore structural eave integrity, replace rotted exterior woodwork, install vented soffits, and repair James Hardie fiber cement siding. 13+ years of quality trade experience.",
        es: "Restaure la firmeza de sus aleros, cambie madera exterior podrida, coloque sofitos ventilados y repare revestimientos de fibrocemento. 13+ años de experiencia profesional."
      },
      heroBg: "/images/elikay/commercial_roofing.jpg",
      heroBadge: {
        en: "Rot-Resistant Materials · Precision Carpentry",
        es: "Materiales Resistentes a Humedad · Carpintería Fina"
      },
      introTitle: {
        en: "Eaves and fascia boards are your roof's first line of structural defense.",
        es: "Los aleros y la fascia son la primera defensa estructural de su techo."
      },
      introParagraph1: {
        en: "Fascia boards support your entire gutter system, while soffits enclose the underside of roof overhangs and supply crucial cooling air into your attic. When overflowing gutters or wind-driven rain seep behind metal drip edges, untreated wood rots quickly, inviting termites, carpenter bees, squirrels, and water into your walls.",
        es: "La fascia sostiene las canaletas y el sofito cubre la parte inferior del techo permitiendo la entrada de aire fresco al ático. Cuando el agua se filtra detrás del goterón, la madera se pudre y permite la entrada de plagas y humedad a las paredes."
      },
      introParagraph2: {
        en: "EliKay Roofing repairs and replaces rotted fascia and soffit assemblies with durable fiber cement (James Hardie) and moisture-resistant composite lumber. We ensure every rafter tail is structurally sound, prime and seal all cuts, and finish with weather-resistant exterior paint.",
        es: "En EliKay Roofing cambiamos madera podrida por materiales duraderos de fibrocemento (James Hardie) y madera tratada. Aseguramos las vigas, sellamos cada unión con primer impermeable y pintamos con pintura exterior de máxima duración."
      },
      visual1: "/images/elikay/commercial_roofing.jpg",
      visual1Caption: {
        en: "Completed exterior roofline carpentry and fascia alignment.",
        es: "Carpintería exterior y alineación de fascia terminadas con precisión."
      },
      visual2: "/images/elikay/16.jpeg",
      visual2Caption: {
        en: "Inspecting eave overhang and fascia board firmness.",
        es: "Revisión de firmeza en aleros y madera perimetral."
      },
      visual3: "/images/elikay/10.jpeg",
      visual3Caption: {
        en: "Clean metal drip edge safeguarding fresh fascia paint.",
        es: "Goterón metálico protegiendo la pintura fresca de la fascia."
      },
      visual4: "/images/elikay/17.jpeg",
      visual4Caption: {
        en: "Detail of exterior rafter junction and siding transition.",
        es: "Detalle de unión de vigas exteriores y terminación de revestimiento."
      },
      equipmentHighlights: [
        {
          name: { en: "James Hardie™ Fiber Cement", es: "Fibrocemento James Hardie™" },
          desc: { en: "Rot-proof, pest-proof, and fire-resistant siding and trim engineered for humid climates.", es: "Molduras y revestimientos resistentes a fuego, plagas y humedad extrema." }
        },
        {
          name: { en: "Rot-Treated Structural Framing", es: "Madera Estructural Tratada" },
          desc: { en: "Pressure-treated lumber that resists termite infestation and moisture fungal decay.", es: "Madera curada a presión contra termitas, hongos y pudrición." }
        },
        {
          name: { en: "Perforated Aluminum Soffit Panels", es: "Paneles de Sofito de Aluminio Ventilado" },
          desc: { en: "Never rust, never rot, and deliver maximum net free ventilation into attic spaces.", es: "Nunca se oxidan ni pudren, ofreciendo máxima entrada de aire al ático." }
        },
        {
          name: { en: "Elastomeric Exterior Sealants", es: "Selladores Elastoméricos de Exteriores" },
          desc: { en: "High-flex caulking that bridges wood-to-brick gaps through all seasonal expansion.", es: "Selladores flexibles que unen madera con ladrillo sin agrietarse con el frío y calor." }
        }
      ],
      scenarios: [
        {
          title: { en: "Soft, Crumbly Wood Behind Gutters", es: "Madera Suave y Desmoronada Detrás de Canaletas" },
          desc: { en: "Fascia has rotted so severely that gutter brackets are pulling out under water weight.", es: "La madera está tan podrida que los tornillos de la canaleta se desprenden con el agua." },
          solution: { en: "Detach gutters, replace rotted fascia with primed Hardie trim, install drip edge, and remount gutters.", es: "Bajar canaleta, cambiar madera por Hardie, colocar goterón y volver a montar." }
        },
        {
          title: { en: "Squirrel, Raccoon & Pest Attic Entry", es: "Entrada de Ardillas y Plagas al Ático" },
          desc: { en: "Animals chew through soft rotted soffits at roof corners to nest inside warm attics.", es: "Animales muerden el sofito podrido en las esquinas y anidan en el ático." },
          solution: { en: "Remove damaged sections, install chew-proof fiber cement soffits, and seal access points.", es: "Cambiar secciones por fibrocemento resistente a mordeduras y sellar accesos." }
        },
        {
          title: { en: "Peeling Paint & Mold on Eaves", es: "Pintura Descarapelada y Moho en Aleros" },
          desc: { en: "Moisture trapped under unvented eaves causes exterior latex paint to bubble and flake.", es: "Humedad atrapada bajo los aleros hace que la pintura se abombe y caiga." },
          solution: { en: "Scrape, sand, prime with moisture-lock primer, and install perforated soffit panels.", es: "Raspado, lijado, sellador contra humedad y paneles de sofito ventilados." }
        },
        {
          title: { en: "Loose or Storm-Damaged Exterior Siding", es: "Revestimiento Exterior Flojo o Dañado por Tormenta" },
          desc: { en: "High winds dislodge siding planks, exposing wall framing to driving rain.", es: "Vientos fuertes desprenden tablas de siding, exponiendo la pared a la lluvia." },
          solution: { en: "Re-fasten and replace damaged planks with color-matched fiber cement siding.", es: "Fijación y reemplazo de tablas dañadas con material James Hardie a juego." }
        }
      ],
      processPhases: [
        {
          phase: "01",
          name: { en: "Rotted Wood Probe & Assessment", es: "Sondeo y Diagnóstico de Madera Podrida" },
          detail: { en: "We physically probe all fascia boards and soffit corners to map the extent of moisture decay.", es: "Revisamos con punzón la madera perimetral para ver hasta dónde llegó la humedad." }
        },
        {
          phase: "02",
          name: { en: "Clean Surgical Removal", es: "Retiro Limpio de Piezas Dañadas" },
          detail: { en: "Remove decayed lumber back to solid structural rafter tails without disturbing roof shingles.", es: "Cortamos la madera podrida hasta llegar a viga sana sin maltratar las tejas del techo." }
        },
        {
          phase: "03",
          name: { en: "Reinforced Framing & Trim Fitting", es: "Refuerzo y Colocación de Molduras" },
          detail: { en: "Install pressure-treated backer boards and rot-proof James Hardie or treated pine fascia trim.", es: "Instalamos refuerzos tratados y fascia nueva de fibrocemento o pino curado." }
        },
        {
          phase: "04",
          name: { en: "Priming, Caulking & Finish Painting", es: "Sellado, Calafateo y Pintura Final" },
          detail: { en: "Caulk all seams with polyurethane, prime all joints, and apply matching exterior enamel.", es: "Sellamos uniones con poliuretano, aplicamos primer y pintura exterior a tono." }
        }
      ],
      localCaseStudy: {
        location: "Houston, TX (Memorial)",
        situation: {
          en: "Heavy rains caused gutters to pull away from a 40-foot run of rotted wood fascia, allowing raccoons into the attic.",
          es: "Lluvias torrenciales soltaron las canaletas por 40 pies de fascia podrida, dejando entrar mapaches al ático."
        },
        action: {
          en: "EliKay Roofing removed the failed wood, reinforced the rafter ends, installed James Hardie rot-proof trim with drip edge, and remounted the gutters.",
          es: "EliKay Roofing retiró la madera dañada, reforzó las vigas, instaló fascia de fibrocemento con goterón y montó las canaletas."
        },
        result: {
          en: "Permanent rot-proof eave assembly with clean exterior finish and zero animal access.",
          es: "Alero permanente a prueba de humedad con acabado impecable y cerrado a plagas."
        }
      },
      faqs: [
        {
          q: {
            en: "Can rotted fascia boards be repaired without replacing the roof?",
            es: "¿Se puede reparar la fascia podrida sin tener que cambiar el techo?"
          },
          a: {
            en: "Yes! In most cases, we can carefully detach the gutters, replace only the rotted fascia and soffit sections, install protective metal drip edge, and re-hang your gutters without disturbing your roof shingles.",
            es: "¡Sí! En la mayoría de los casos podemos bajar las canaletas, cambiar únicamente la madera podrida de fascia y sofito, colocar goterón y volver a montar todo sin tocar las tejas."
          }
        },
        {
          q: {
            en: "What material do you recommend to prevent fascia from rotting again?",
            es: "¿Qué material recomiendan para que la fascia no se vuelva a pudrir?"
          },
          a: {
            en: "We strongly recommend James Hardie fiber cement trim or pre-primed composite lumber. When paired with a proper metal drip edge, these materials are immune to wood rot, termites, and peeling paint.",
          }
        }
      ]
    },
    "skylight-repair-flashing": {
      tagline: {
        en: "Leak-Free Natural Daylighting",
        es: "Luz Natural sin Fugas ni Filtraciones"
      },
      headline: {
        en: "Precision Skylight Repair & Custom Flashing in Greater Houston",
        es: "Reparación y Sellado de Tragaluces en el Gran Houston"
      },
      subtext: {
        en: "Stop stubborn water drips and condensation around roof skylights and sun tunnels. We install custom curb step-flashing, vulcanized rubber underlayment, and UV-stabilized dome seals.",
        es: "Elimine goteras molestas y condensación alrededor de tragaluces y domos de luz. Instalamos tapajuntas a la medida, membrana vulcanizada y empaques resistentes al sol de Texas."
      },
      heroBg: "/images/elikay/14.jpeg",
      heroBadge: {
        en: "Watertight Guarantee · Free Inspection",
        es: "Garantía Impermeable · Inspección Gratis"
      },
      introTitle: {
        en: "Why skylight leaks are often flashing failures rather than glass issues.",
        es: "Por qué las fugas en tragaluces se deben casi siempre al tapajuntas y no al vidrio."
      },
      introParagraph1: {
        en: "In over 90% of leaking skylights across Houston, Katy, and Cypress, the glass or acrylic dome is completely intact. Water infiltrates because the thin aluminum step-flashing or dried-out mastic around the wooden curb has deteriorated under unrelenting Texas sun and thermal expansion.",
        es: "En más del 90% de los tragaluces con filtraciones en Houston, Katy y Cypress, el domo está en perfecto estado. El agua entra porque los tapajuntas de lámina o el sellador perimetral se resecaron y abrieron con el calor y la expansión térmica."
      },
      introParagraph2: {
        en: "EliKay Roofing unweaves surrounding shingles down to solid roof decking, wraps the curb in self-adhering rubberized ice & water barrier, fabricates custom heavy-gauge step flashing, and integrates matching shingles with precision counter-flashing that guarantees watertight performance.",
        es: "En EliKay Roofing despegamos las tejas alrededor hasta ver madera sana, envolvemos el marco con membrana vulcanizada autoadherible, fabricamos tapajuntas gruesos a la medida y reinstalamos tejas con sellado hermético permanente."
      },
      visual1: "/images/elikay/14.jpeg",
      visual1Caption: {
        en: "Inspecting curb apron flashing and rubber perimeter seal around residential skylight.",
        es: "Revisando el tapajuntas frontal y sello perimetral de hule en tragaluz residencial."
      },
      visual2: "/images/elikay/15.jpeg",
      visual2Caption: {
        en: "Cutting back shingles and installing continuous waterproof underlayment collar.",
        es: "Ajustando tejas y colocando collarín de membrana impermeable continua."
      },
      visual3: "/images/elikay/19.jpeg",
      visual3Caption: {
        en: "Clean finished valley channel directing rain safely past skylight frame.",
        es: "Canal de agua limpio que desvía la lluvia lejos del marco del tragaluz."
      },
      visual4: "/images/elikay/11.jpeg",
      visual4Caption: {
        en: "Final watertight inspection and counter-flashing seam verification.",
        es: "Inspección final de sellado hermético y comprobación de uniones."
      },
      equipmentHighlights: [
        {
          name: { en: "Self-Adhering Vulcanized Membrane", es: "Membrana Vulcanizada Autoadherible" },
          desc: { en: "Creates an elastic waterproof boot that seals tight around fasteners.", es: "Crea una bota elástica impermeable que sella alrededor de los clavos." }
        },
        {
          name: { en: "Custom-Bent Step Flashing", es: "Tapajuntas Escalonados a Medida" },
          desc: { en: "Heavy aluminum shingles woven directly into each roof shingle course.", es: "Láminas gruesas de metal entrelazadas en cada hilera de tejas." }
        },
        {
          name: { en: "UV-Resistant Polyurethane Mastic", es: "Sellador de Poliuretano Anti-UV" },
          desc: { en: "Industrial sealant that maintains flexibility in 150°F rooftop heat.", es: "Sellador industrial que no se quiebra con el calor extremo del techo." }
        },
        {
          name: { en: "Precision Curb Lumber Scabbing", es: "Renovación de Madera del Marco" },
          desc: { en: "Replacing rotted wood curb framing with pressure-treated dimensional lumber.", es: "Cambio de madera podrida del marco por madera curada a presión." }
        }
      ],
      scenarios: [
        {
          title: { en: "Dripping Around Ceiling Drywall Flare", es: "Goteo en la Orilla del Yeso del Tragaluz" },
          desc: { en: "Water stains appearing at the corner of ceiling skylight shafts during rain.", es: "Manchas de agua en las esquinas del pozo de luz durante lluvias fuertes." },
          solution: { en: "Strip surrounding shingles, replace rotted framing, and rebuild flashing with rubber membrane.", es: "Retirar tejas, cambiar madera húmeda y reconstruir tapajuntas con membrana vulcanizada." }
        },
        {
          title: { en: "Foggy Glass & Condensation Between Panes", es: "Vidrio Nublado y Condensación Interna" },
          desc: { en: "Failed thermal gas seal causing condensation between double-pane skylights.", es: "Falla en el sello de gas que provoca humedad atrapada entre los cristales." },
          solution: { en: "Install new energy-efficient Low-E glass skylight unit with factory flashing kit.", es: "Instalar unidad nueva de tragaluz con vidrio térmico Low-E y kit de sellado de fábrica." }
        },
        {
          title: { en: "Wind-Driven Rain Under Sunken Curbs", es: "Lluvia con Viento Bajo Marcos Hundidos" },
          desc: { en: "Skylight frame installed flush with roof plane instead of elevated, causing ponding water infiltration.", es: "Marco instalado al ras del techo en lugar de elevado, provocando estancamiento y filtración." },
          solution: { en: "Build custom 2x6 pressure-treated curb height extension, wrap in ice-and-water barrier, and install apron flashing.", es: "Construir elevación de marco con madera tratada 2x6, envolver con barrera impermeable e instalar goterón frontal." }
        },
        {
          title: { en: "Hail Impact Cracked Acrylic Domes", es: "Domo de Acrílico Estrellado por Granizo" },
          desc: { en: "Brittle aged plastic skylights shattered by Spring Texas thunderstorm hail stones.", es: "Plástico viejo y reseco fracturado por impactos de granizo durante tormentas en Texas." },
          solution: { en: "Replace aged brittle domes with impact-rated laminated tempered glass skylights.", es: "Reemplazar domos viejos por cristales templados laminados resistentes a impactos severos." }
        }
      ],
      processPhases: [
        { phase: "01", name: { en: "Damage & Curb Assessment", es: "Inspección de Domo y Marco" }, detail: { en: "Inspect dome acrylic, curb wood moisture, and existing step flashing.", es: "Revisamos el domo, humedad en la madera y estado del tapajuntas." } },
        { phase: "02", name: { en: "Deck Exposure & Framing Repair", es: "Despeje de Madera y Refuerzo" }, detail: { en: "Remove damaged shingles and rebuild deteriorated wood curb frame.", es: "Removemos tejas y cambiamos la madera podrida del marco." } },
        { phase: "03", name: { en: "Membrane Wrapping & Metal Brake", es: "Membrana Vulcanizada y Metal" }, detail: { en: "Wrap curb tightly in vulcanized ice shield and install custom bent flashing.", es: "Envolvemos con membrana vulcanizada y colocamos tapajuntas a la medida." } },
        { phase: "04", name: { en: "Shingle Weaving & Water Test", es: "Colocación de Tejas y Prueba" }, detail: { en: "Weave matching shingles and conduct hose water penetration test.", es: "Colocamos tejas iguales y comprobamos el sellado con agua a presión." } }
      ],
      localCaseStudy: {
        location: "Katy, TX (Grand Lakes)",
        situation: {
          en: "Heavy rains caused recurring ceiling leaks below two living room skylights. Another company wanted to replace the entire roof slope.",
          es: "Goteras constantes bajo dos tragaluces en la sala. Otra compañía quería cambiar todo el techo."
        },
        action: {
          en: "EliKay Roofing diagnosed failed step flashing. We rebuilt the flashing collar and installed vulcanized membrane in 4 hours.",
          es: "EliKay Roofing detectó tapajuntas vencidos. Reconstruimos el marco e instalamos membrana vulcanizada en 4 horas."
        },
        result: {
          en: "100% leak-free performance during subsequent hurricane season storms, saving the homeowner over $8,000.",
          es: "Cero goteras en la siguiente temporada de huracanes, ahorrando más de $8,000 al propietario."
        }
      },
      faqs: [
        {
          q: { en: "Do I have to replace the whole skylight if it leaks?", es: "¿Tengo que cambiar todo el tragaluz si tiene goteras?" },
          a: { en: "Not usually. In the vast majority of cases, the glass or dome is fine and only the exterior flashing and underlayment around the curb need rebuilding.", es: "Rara vez. Casi siempre el vidrio está sano y solo se necesita reconstruir los tapajuntas y la membrana impermeable del marco exterior." }
        },
        {
          q: { en: "How long does a professional skylight flashing repair take?", es: "¿Cuánto tiempo toma reparar el tapajuntas de un tragaluz?" },
          a: { en: "Most residential skylight flashing replacements and curb membrane sealing are completed in 3 to 5 hours, restoring full watertight protection the same day.", es: "La mayoría de las reparaciones de tapajuntas y sellado de membrana se completan en 3 a 5 horas, dejando el techo 100% impermeable el mismo día." }
        },
        {
          q: { en: "What causes water condensation on the inside of my skylight?", es: "¿Qué causa la condensación de agua en el interior de mi tragaluz?" },
          a: { en: "Interior condensation often occurs in humid kitchens or bathrooms when warm moist air contacts single-pane glass. We can install energy-efficient double-pane Low-E skylights with argon gas fills that eliminate sweating.", es: "La condensación interior ocurre en baños o cocinas húmedas cuando el vapor toca vidrios sencillos. Instalamos unidades térmicas Low-E con gas argón que eliminan el empañamiento por completo." }
        }
      ]
    },
    "fascia-repair-replacement": {
      tagline: {
        en: "Structural Gutter Anchor & Eave Woodwork",
        es: "Madera Estructural de Aleros y Soporte de Canaletas"
      },
      headline: {
        en: "Fascia Board Repair & Replacement Across Greater Houston",
        es: "Reparación y Reemplazo de Madera de Fascia en Todo Houston"
      },
      subtext: {
        en: "Replacing rotted wood behind gutters with factory-primed rot-resistant composite and fiber cement trim. Ensure gutters stay anchored securely through the strongest Texas storms.",
        es: "Cambiamos madera podrida detrás de canaletas por molduras de fibrocemento tratadas y selladas. Garantice que sus canaletas soporten el peso del agua en tormentas severas."
      },
      heroBg: "/images/elikay/commercial_roofing.jpg",
      heroBadge: {
        en: "Rot-Proof Materials · Free Estimate",
        es: "Materiales contra Humedad · Presupuesto Gratis"
      },
      introTitle: {
        en: "Why healthy fascia boards are critical for supporting your gutter system.",
        es: "Por qué una fascia sana es fundamental para sostener sus canaletas de desagüe."
      },
      introParagraph1: {
        en: "When gutters overflow due to leaf clogs or lack of a drip edge apron, rainwater wicks into the unfinished back of wooden fascia boards. Over time, wood fibers break down into soft, spongy dry-rot, causing gutter screws to pull out under heavy water weight.",
        es: "Cuando las canaletas se tapan con hojas o falta el goterón metálico, el agua moja la madera de la fascia. Con el tiempo se pudre, provocando que los tornillos de la canaleta se suelten por el peso del agua."
      },
      introParagraph2: {
        en: "EliKay Roofing replaces rotted fascia with durable James Hardie fiber cement or rot-treated pine. We reinforce rafter tails, install heavy metal drip edge aprons that channel water directly into gutters, and seal every joint with industrial exterior primer and paint.",
        es: "En EliKay Roofing cambiamos madera podrida por fibrocemento James Hardie o pino curado. Reforzamos las puntas de las vigas, colocamos goterones metálicos anchos y sellamos con primer y pintura de exterior de larga duración."
      },
      visual1: "/images/elikay/commercial_roofing.jpg",
      visual1Caption: { en: "Completed fascia board replacement and eave carpentry.", es: "Cambio de madera de fascia y carpintería exterior terminada." },
      visual2: "/images/elikay/16.jpeg",
      visual2Caption: { en: "Inspecting eave overhang and rafter tail stability.", es: "Revisando el alero y la firmeza de las puntas de las vigas." },
      visual3: "/images/elikay/10.jpeg",
      visual3Caption: { en: "Metal drip edge apron shielding freshly painted fascia board.", es: "Goterón metálico protegiendo la pintura fresca de la fascia." },
      visual4: "/images/elikay/gutters_siding.jpg",
      visual4Caption: { en: "Seamless aluminum gutter anchored tight with internal screw brackets.", es: "Canaleta de aluminio fijada con tornillos de uso rudo a la fascia nueva." },
      equipmentHighlights: [
        { name: { en: "James Hardie™ Fiber Cement Fascia", es: "Fascia de Fibrocemento James Hardie™" }, desc: { en: "Rot-proof and termite-proof exterior trim engineered for humid climates.", es: "Molduras resistentes a humedad y termitas diseñadas para el clima húmedo." } },
        { name: { en: "Heavy Galvanized Drip Edge", es: "Goterón Galvanizado Reforzado" }, desc: { en: "Channels roof runoff directly past the top edge of the fascia lumber.", es: "Desvía el agua del techo más allá del borde de la madera directo a la canaleta." } }
      ],
      scenarios: [
        { title: { en: "Gutters Pulling Away from the Roofline", es: "Canaletas Despegadas del Borde del Techo" }, desc: { en: "Screws have pulled out of soft rotted wood, causing gutters to sag and dump water.", es: "Tornillos salidos de madera podrida provocan que la canaleta se cuelgue y tire agua." }, solution: { en: "Take down gutters, replace rotted lumber with rot-proof trim, install drip edge, and remount.", es: "Bajar canaleta, cambiar madera por material resistente, poner goterón y reinstalar." } },
        { title: { en: "Water Spilling Behind Gutter Backwall", es: "Agua Resbalando por Detrás de la Canaleta" }, desc: { en: "Missing or damaged drip edge allows capillary suction to wick water behind the gutter apron into raw fascia lumber.", es: "La falta de goterón permite que el agua suba por tensión superficial detrás de la canaleta hacia la madera." }, solution: { en: "Retrofit wide aluminum drip edge apron slipped under roof felt and tucked directly inside gutter trough.", es: "Instalar goterón ancho de aluminio deslizado bajo el fieltro y canalizado directo al interior de la canaleta." } },
        { title: { en: "Rotted Rafter Tails at Eave Corners", es: "Puntas de Vigas Podridas en Esquinas de Aleros" }, desc: { en: "Long-term water leaks rot the tips of roof trusses, destroying fascia nail anchoring strength.", es: "Goteras prolongadas pudren la punta de las vigas del techo, destruyendo el agarre de los clavos de la fascia." }, solution: { en: "Sister new treated 2x6 framing lumber onto sound truss rafters and secure with structural galvanized lag bolts.", es: "Empalmar madera tratada 2x6 a vigas sanas y fijar con pernos estructurales galvanizados." } },
        { title: { en: "Woodpecker & Carpenter Bee Penetrations", es: "Agujeros de Pájaros Carpinteros y Abejas Carpinteras" }, desc: { en: "Pests bore cavities into soft decayed wood fascia, opening highway paths for rainwater into attic eaves.", es: "Plagas perforan madera blanda, creando entradas directas de agua hacia el interior del alero del ático." }, solution: { en: "Replace compromised wood sections with pest-immune James Hardie fiber cement trim boards.", es: "Cambiar secciones dañadas por molduras de fibrocemento James Hardie inmunes a plagas y barrenadores." } }
      ],
      processPhases: [
        { phase: "01", name: { en: "Rot Probing", es: "Diagnóstico de Madera" }, detail: { en: "Identify all soft or water-damaged fascia sections.", es: "Detectamos toda la madera podrida o dañada por humedad." } },
        { phase: "02", name: { en: "Surgical Removal", es: "Retiro Quirúrgico" }, detail: { en: "Cut out decayed wood back to solid structural rafters.", es: "Cortamos piezas dañadas hasta encontrar vigas sanas." } },
        { phase: "03", name: { en: "Rot-Proof Fitting", es: "Instalación de Madera Tratada" }, detail: { en: "Install primed fiber cement trim fastened with ring-shank nails.", es: "Colocamos molduras de fibrocemento con clavos anillados." } },
        { phase: "04", name: { en: "Seal & Paint", es: "Sellado y Pintura" }, detail: { en: "Polyurethane caulk seams and apply matching exterior finish.", es: "Sellamos juntas con poliuretano y pintamos al tono exacto." } }
      ],
      localCaseStudy: {
        location: "Houston, TX (Heights)",
        situation: { en: "50-foot run of rotted pine fascia caused heavy gutters to pull away during spring downpours.", es: "50 pies de fascia podrida hicieron que las canaletas se soltaran con las lluvias." },
        action: { en: "EliKay Roofing removed the rotten wood, sistered three rafter ends, installed James Hardie fascia, and re-hung the gutters with heavy screw brackets.", es: "EliKay Roofing quitó la madera dañada, reforzó tres vigas, puso fascia James Hardie y volvió a colgar canaletas con soportes de tornillo." },
        result: { en: "Spotless, rot-proof roofline that handles heavy tropical storms without budging.", es: "Borde de techo impecable y resistente que soporta tormentas tropicales sin moverse." }
      },
      faqs: [
        { q: { en: "Why does fascia wood rot so fast?", es: "¿Por qué se pudre tan rápido la madera de la fascia?" }, a: { en: "Because builders often skip metal drip edge flashing, allowing water surface tension to curl backward underneath shingles directly into the unfinished top grain of the wood.", es: "Porque constructores ahorran omitiendo el goterón metálico, haciendo que el agua resbale por debajo de las tejas directo a la madera sin pintar." } },
        { q: { en: "Can you replace fascia without taking down the entire gutter system?", es: "¿Se puede cambiar la fascia sin quitar todas las canaletas?" }, a: { en: "We carefully detach the affected gutter segments, replace the compromised lumber and install drip edge, then securely rehang and pitch the gutters for optimal drainage.", es: "Desmontamos cuidadosamente los tramos afectados, reemplazamos la madera podrida, colocamos goterón y volvemos a anclar las canaletas con la inclinación adecuada." } },
        { q: { en: "What type of paint do you use on new exterior fascia boards?", es: "¿Qué tipo de pintura usan en la fascia nueva?" }, a: { en: "We apply commercial 100% acrylic latex exterior enamel with mold and mildew resistance, custom matched to your home's exterior trim color.", es: "Aplicamos esmalte 100% acrílico de uso rudo para exterior con inhibidores de hongos y moho, igualado al color exacto de las molduras de su fachada." } }
      ]
    },
    "soffit-repair-ventilation": {
      tagline: {
        en: "Attic Intake Airflow & Pest Defense",
        es: "Flujo de Entrada al Ático y Defensa contra Plagas"
      },
      headline: {
        en: "Soffit Repair & Continuous Intake Venting in Greater Texas",
        es: "Reparación de Sofitos y Ventilación Continua en Texas"
      },
      subtext: {
        en: "Protect the underside of your roof eaves with perforated aluminum and fiber cement soffits. Prevent pest entry, stop moisture accumulation, and feed your attic with fresh cooling air.",
        es: "Proteja la parte inferior de sus aleros con sofitos perforados de aluminio y fibrocemento. Evite plagas, frene la humedad y alimente su ático con aire fresco continuo."
      },
      heroBg: "/images/elikay/18.jpeg",
      heroBadge: {
        en: "Perforated Aluminum & Hardie Soffits",
        es: "Sofitos Perforados de Aluminio y Hardie"
      },
      introTitle: {
        en: "Your roof's exhaust vents cannot work without open soffit intake vents.",
        es: "Las ventilas del techo no funcionan si los sofitos de entrada están tapados."
      },
      introParagraph1: {
        en: "Rooftop ridge vents and wind turbines rely on convective thermodynamics: they pull warm air out of the roof peak only when fresh air can enter through low-eave soffit vents. In older Texas homes, wooden soffits are often clogged with layers of paint or rotted by moisture, suffocating the attic.",
        es: "Las cumbreras y turbinas dependen de la termodinámica: solo sacan aire caliente de arriba si entra aire fresco por los sofitos de abajo. En casas de Texas, los sofitos suelen estar tapados por pintura vieja o podridos por humedad, ahogando el ático."
      },
      introParagraph2: {
        en: "EliKay Roofing repairs decayed eave overhangs and installs perforated aluminum or James Hardie vented soffits. These rot-proof panels provide continuous net-free ventilation area while creating an impenetrable barrier against squirrels, raccoons, and wasps.",
        es: "En EliKay Roofing reparamos aleros dañados e instalamos sofitos ventilados de aluminio o fibrocemento James Hardie. Estos paneles brindan flujo de aire continuo y forman una barrera impenetrable contra ardillas, mapaches y avispas."
      },
      visual1: "/images/elikay/18.jpeg",
      visual1Caption: { en: "Balanced intake and exhaust ventilation channels.", es: "Canales equilibrados de entrada y salida de aire." },
      visual2: "/images/elikay/15.jpeg",
      visual2Caption: { en: "Inspecting eave overhang ventilation gaps.", es: "Revisando ranuras de ventilación bajo los aleros." },
      visual3: "/images/elikay/10.jpeg",
      visual3Caption: { en: "Clean architectural eave line with new vented soffit.", es: "Línea de alero limpia con sofito ventilado nuevo." },
      visual4: "/images/elikay/commercial_roofing.jpg",
      visual4Caption: { en: "Completed rot-proof exterior eave assembly.", es: "Estructura exterior de alero terminada y protegida." },
      equipmentHighlights: [
        { name: { en: "Continuous Perforated Soffits", es: "Sofitos Perforados Continuos" }, desc: { en: "Maximum intake surface area without rusting or peeling.", es: "Máxima área de entrada de aire sin oxidarse ni descarapelarse." } },
        { name: { en: "Pest-Proof Micro Mesh", es: "Malla Fina contra Plagas" }, desc: { en: "Blocks insects and rodents from accessing warm attic cavities.", es: "Evita que insectos y roedores se metan al calor del ático." } }
      ],
      scenarios: [
        { title: { en: "Squirrels & Birds Nesting in the Attic", es: "Ardillas y Aves Anidando en el Ático" }, desc: { en: "Animals chewed through soft, rotted wood soffits at eave corners.", es: "Animales mordieron la madera podrida del sofito para meterse al ático." }, solution: { en: "Remove damaged wood, reinforce rafter bays, and install chew-proof fiber cement soffits.", es: "Quitar madera blanda, reforzar vigas y poner paneles de fibrocemento a prueba de mordeduras." } },
        { title: { en: "Soffit Holes Clogged with Heavy Paint Layers", es: "Orificios de Sofitos Tapados por Capas de Pintura" }, desc: { en: "Repeated exterior repainting over decades plugged intake perforation holes, suffocating ridge vents.", es: "Múltiples capas de pintura taparon los orificios de ventilación, impidiendo la salida de calor en la cumbrera." }, solution: { en: "Replace clogged wooden panels with factory-perforated aluminum continuous soffit vents.", es: "Reemplazar paneles tapados por sofitos continuos de aluminio con perforaciones de fábrica." } },
        { title: { en: "Eave Underside Water Staining & Delamination", es: "Aleros Descarapelados y Triplay Deformado" }, desc: { en: "Overflowing gutters or wind-driven rain soaking the bottom underside of roof eaves.", es: "Canaletas desbordadas o lluvia con viento humedeciendo la parte inferior del alero." }, solution: { en: "Surgically cut out delaminated plywood and install rot-resistant fiber cement vented soffit panels.", es: "Cortar triplay dañado e instalar paneles ventilados de fibrocemento resistentes a la humedad." } },
        { title: { en: "Blown Insulation Spilling into Eave Vents", es: "Aislamiento Soplado Tapando Aleros" }, desc: { en: "Loose attic insulation drifted into roof overhangs, blocking intake airflow completely.", es: "Aislamiento suelto del ático cayó a los aleros, bloqueando por completo la entrada de aire fresco." }, solution: { en: "Install rigid plastic insulation baffles (accuvents) in every rafter bay before securing soffits.", es: "Instalar deflectores plásticos rígidos en cada viga para garantizar flujo de aire permanente." } }
      ],
      processPhases: [
        { phase: "01", name: { en: "Airflow Audit", es: "Revisión de Flujo" }, detail: { en: "Verify net free intake ventilation area meets 1:300 code ratio.", es: "Verificamos que el área de ventilación cumpla con el código 1:300." } },
        { phase: "02", name: { en: "Decay Removal", es: "Retiro de Madera Dañada" }, detail: { en: "Strip rotted plywood and clear insulation away from intake bays.", es: "Retiramos triplay dañado y despejamos aislamiento de las entradas." } },
        { phase: "03", name: { en: "Vented Panel Fitting", es: "Colocación de Paneles" }, detail: { en: "Install perforated aluminum or Hardie soffits with galvanized fasteners.", es: "Colocamos sofitos ventilados con tornillería galvanizada." } },
        { phase: "04", name: { en: "Trim & Finish", es: "Molduras y Acabado" }, detail: { en: "Caulk and paint trim boards to match home exterior aesthetics.", es: "Sellamos con calafateo y pintamos al tono de la fachada." } }
      ],
      localCaseStudy: {
        location: "Spring, TX",
        situation: { en: "Unvented painted plywood soffits trapped heat in attic, causing upstairs rooms to reach 86°F with AC running.", es: "Sofitos de madera sin perforar atrapaban el calor, subiendo la temperatura interior a 86°F." },
        action: { en: "EliKay Roofing installed 80 linear feet of perforated aluminum soffits paired with ridge exhaust.", es: "EliKay Roofing instaló 80 pies de sofitos perforados de aluminio combinados con cumbrera." },
        result: { en: "Attic heat dropped 28°F, lowering electricity consumption by 14%.", es: "La temperatura del ático bajó 28°F, reduciendo el consumo eléctrico un 14%." }
      },
      faqs: [
        { q: { en: "Can insulation block my soffit vents?", es: "¿El aislamiento puede tapar los sofitos?" }, a: { en: "Yes. Blown-in fiberglass or cellulose insulation often spills into eave overhangs. We install cardboard or plastic insulation baffles to keep the air passage permanently open.", es: "Sí. El aislamiento soplado suele desbordarse a los aleros. Colocamos deflectores plásticos para mantener despejada la entrada de aire permanentemente." } },
        { q: { en: "How does proper soffit venting protect against roof mold?", es: "¿Cómo previene el moho la ventilación en sofitos?" }, a: { en: "By continuously drawing dry outdoor air through the attic, continuous soffit vents flush out humid vapor before it condenses on the cold underside of roof plywood in winter.", es: "Al introducir aire fresco constantemente, los sofitos expulsan el vapor húmedo antes de que se condense sobre la madera fría del techo en invierno." } },
        { q: { en: "Which is better: aluminum or fiber cement soffit panels?", es: "¿Qué es mejor: sofitos de aluminio o de fibrocemento?" }, a: { en: "Perforated aluminum panels provide maximum net free ventilation and zero maintenance. Fiber cement (Hardie) offers unmatched impact resistance and seamless architectural curb appeal.", es: "El aluminio perforado ofrece máxima ventilación libre y cero mantenimiento. El fibrocemento James Hardie brinda máxima resistencia a golpes y un acabado estético idéntico a la madera." } }
      ]
    },
    "siding-repair-protection": {
      tagline: {
        en: "Exterior Wall Weather Shell & Siding Defense",
        es: "Revestimiento Exterior y Blindaje de Fachadas"
      },
      headline: {
        en: "Siding Repair & Exterior Protection in Greater Houston",
        es: "Reparación de Siding y Revestimiento Exterior en Gran Houston"
      },
      subtext: {
        en: "Repair wind-damaged planks, warped siding, and moisture-penetrated wall assemblies with durable James Hardie fiber cement panels. Protect your home's framing from driving rain.",
        es: "Reparamos paneles de siding dañados por viento, pandeados o con humedad con fibrocemento James Hardie. Proteja la estructura de madera de su hogar contra lluvias torrenciales."
      },
      heroBg: "/images/elikay/gutters_siding.jpg",
      heroBadge: {
        en: "James Hardie™ Fiber Cement Certified",
        es: "Fibrocemento James Hardie™ Certificado"
      },
      introTitle: {
        en: "When high winds compromise exterior siding, framing rot follows quickly.",
        es: "Cuando el viento afloja el siding, la madera interior se pudre con rapidez."
      },
      introParagraph1: {
        en: "In Texas, severe thunderstorms and tropical storm squalls drive rain horizontally against exterior walls. If siding panels are cracked, buckled, or improperly caulked around windows and roof junctions, water penetrates behind the weather barrier into OSB sheathing and 2x4 studs.",
        es: "En Texas, las tormentas azotan la lluvia con fuerza horizontal contra las paredes. Si las tablas de siding están rotas o mal selladas en ventanas y uniones con el techo, el agua entra detrás del papel a la madera estructural."
      },
      introParagraph2: {
        en: "EliKay Roofing repairs and replaces compromised siding with genuine James Hardie fiber cement siding. Engineered specifically for humid coastal climates (HZ10 technology), Hardie siding is non-combustible, immune to termite damage, and will not warp, rot, or swell under intense Texas moisture.",
        es: "En EliKay Roofing reparamos y cambiamos paneles dañados con fibrocemento James Hardie. Diseñado para zonas costeras húmedas, es incombustible, inmune a termitas y no se deforma, pudre ni hincha con el agua."
      },
      visual1: "/images/elikay/gutters_siding.jpg",
      visual1Caption: { en: "Precision siding and trim alignment along exterior wall.", es: "Alineación precisa de tablas de siding y molduras en fachada." },
      visual2: "/images/elikay/16.jpeg",
      visual2Caption: { en: "Inspecting weather-barrier wrap and flashing junctions.", es: "Revisando la barrera contra agua y tapajuntas de unión." },
      visual3: "/images/elikay/14.jpeg",
      visual3Caption: { en: "Watertight flashing integration between roof slope and vertical wall.", es: "Sellado hermético entre la caída del techo y la pared vertical." },
      visual4: "/images/elikay/commercial_roofing.jpg",
      visual4Caption: { en: "Finished fiber cement exterior siding with weather-lock paint.", es: "Siding de fibrocemento terminado con pintura protectora de exterior." },
      equipmentHighlights: [
        { name: { en: "James Hardie™ HZ10 Siding", es: "Siding James Hardie™ HZ10" }, desc: { en: "Engineered specifically to resist humid southern weather, hurricanes, and UV fading.", es: "Formulado especialmente para resistir humedad, huracanes y sol texano." } },
        { name: { en: "HydroFlash™ Self-Adhesive Flashing", es: "Tapajuntas Autoadherible HydroFlash™" }, desc: { en: "Locks moisture out of window corners, door thresholds, and wall penetrations.", es: "Sella esquinas de ventanas, puertas y uniones contra filtraciones." } }
      ],
      scenarios: [
        { title: { en: "Warped or Swollen Particleboard Siding", es: "Tablas de Madera Prensada Infladas por Agua" }, desc: { en: "Builder-grade Masonite or LP siding has absorbed rainwater, turning soft and spongy.", es: "Material prensado absorbió lluvia, esponjándose y desmoronándose en las orillas." }, solution: { en: "Remove damaged sections, inspect framing, and install rot-proof James Hardie planks.", es: "Retirar material dañado, revisar triplay y colocar tablas de fibrocemento Hardie." } },
        { title: { en: "High Wind Gust Dislodged Vinyl Siding", es: "Siding de Vinil Arrancado por Vientos Fuertes" }, desc: { en: "Tropical storm gusts snapped vinyl siding locking tracks, exposing exterior wall sheathing to driving rain.", es: "Ráfagas de tormenta rompieron el canal del vinil, dejando la pared expuesta a lluvia directa." }, solution: { en: "Re-anchor perimeter mounting strips, replace cracked panels, and seal corner trims with elastomeric barrier.", es: "Volver a fijar tiras de anclaje, sustituir piezas rotas y sellar esquinas con membrana elástica." } },
        { title: { en: "Rotting Wall Junctions Below Roof Valleys", es: "Madera Podrida Bajo Limahoyas del Techo" }, desc: { en: "Missing kick-out flashing allowed roof valley runoff to dump gallons of water directly down exterior wall siding.", es: "La falta de tapajuntas de desvío provocó que el torrente del valle cayera directo sobre la pared exterior." }, solution: { en: "Install oversized heavy gauge kick-out flashing diverters and replace rotted wall sheathing.", es: "Instalar desviador de metal de gran calibre y cambiar la madera dañada de la pared." } },
        { title: { en: "Caulk Separation & Mold Behind Planks", es: "Grietas en Calafateo y Moho Tras las Tablas" }, desc: { en: "Dried out builder caulk allowed humid Gulf moisture to form dark mold colonies behind siding planks.", es: "Sellador resecado permitió la entrada de humedad del golfo, creando colonias de moho tras las tablas." }, solution: { en: "Strip failed mastic, apply antimicrobial treatment, and seal all seams with commercial polyurethane.", es: "Retirar sellador vencido, aplicar tratamiento antimicrobiano y sellar con poliuretano industrial." } }
      ],
      processPhases: [
        { phase: "01", name: { en: "Moisture Sheathing Survey", es: "Inspección de Humedad" }, detail: { en: "Inspect wall sheathing behind loose siding for hidden wood rot.", es: "Revisamos si la madera detrás del siding tiene daño o moho." } },
        { phase: "02", name: { en: "Barrier & Flashing Reset", es: "Colocación de Barrera" }, detail: { en: "Install breathable weather-resistive house wrap and metal kick-out flashings.", es: "Instalamos barrera permeable al vapor y tapajuntas de desvío." } },
        { phase: "03", name: { en: "Blind Nailing Installation", es: "Clavado Oculto de Precisión" }, detail: { en: "Fasten fiber cement planks with corrosion-resistant stainless or galvanized nails.", es: "Fijamos tablas de fibrocemento con clavos galvanizados ocultos." } },
        { phase: "04", name: { en: "Polyurethane Caulking", es: "Calafateo de Poliuretano" }, detail: { en: "Seal all butt joints, corner trims, and window perimeters with elastomeric caulk.", es: "Sellamos uniones, esquinas y marcos con calafateo flexible de por vida." } }
      ],
      localCaseStudy: {
        location: "Waller, TX",
        situation: { en: "High storm gusts tore away 18 feet of second-story siding, exposing plywood to driving rain.", es: "Fuertes ráfagas arrancaron tablas en el segundo piso, dejando la madera expuesta a la lluvia." },
        action: { en: "EliKay Roofing responded promptly, replaced damaged insulation, installed water-resistive wrap, and installed matching Hardie planks.", es: "EliKay Roofing acudió rápido, renovó aislamiento húmedo, puso barrera impermeable y colocó tablas Hardie a juego." },
        result: { en: "100% watertight exterior wall completed in 1 day with factory-primed finish.", es: "Pared exterior 100% hermética terminada en 1 día con acabado sellado." }
      },
      faqs: [
        { q: { en: "Can you match my home's existing siding color and texture?", es: "¿Pueden igualar el color y textura del siding de mi casa?" }, a: { en: "Yes! We match wood-grain (Cedarmill) or smooth textures, and apply custom-tinted premium exterior enamel to blend seamlessly with your existing walls.", es: "¡Sí! Igualamos textura de madera (Cedarmill) o lisa, y aplicamos pintura exterior entintada para que combine a la perfección con el resto de su fachada." } },
        { q: { en: "Why does fiber cement outperform wood or vinyl in Texas?", es: "¿Por qué el fibrocemento es superior a la madera o vinil en Texas?" }, a: { en: "Fiber cement is non-combustible (Class A fire rating), cannot be eaten by termites or woodpeckers, and does not expand or warp in 100°F+ Gulf Coast humidity.", es: "El fibrocemento es incombustible (Clase A contra fuego), inmune a termitas y no se deforma ni se pandea con el calor y humedad extrema de Texas." } },
        { q: { en: "Can you repair localized damaged siding boards without residing the whole house?", es: "¿Pueden cambiar tablas dañadas sin cambiar toda la casa?" }, a: { en: "Yes! We specialize in surgical siding repairs, carefully removing only the cracked or rotted planks and feathering in new matching fiber cement panels.", es: "¡Sí! Realizamos reparaciones puntuales, retirando únicamente las tablas dañadas o podridas y encajando paneles nuevos de fibrocemento idénticos." } }
      ]
    }
  };

  const currentKnowledge = serviceKnowledge[serviceSlug] || serviceKnowledge["roof-repairs"];

  const serviceBreadcrumbs = [
    { name: lang === 'es' ? "Inicio" : "Home", url: "/" },
    { name: lang === 'es' ? "Servicios" : "Services", url: "/#featured-services" },
    { name: getT(service.title), url: `/${service.slug}` }
  ];

  const faqsForSchema = currentKnowledge.faqs.map(f => ({
    q: getT(f.q),
    a: getT(f.a)
  }));

  const combinedServiceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getServiceSchema(service, service.slug),
      getBreadcrumbSchema(serviceBreadcrumbs),
      getFAQSchema(faqsForSchema)
    ]
  };

  const pageTitle = `${getT(service.title)} | ${companyData.name}`;
  const metaDesc = getT(service.summary);

  return (
    <div className="service-page-root">
      <SEOHead
        title={pageTitle}
        description={metaDesc}
        canonicalPath={`/${service.slug}`}
        ogType="article"
        ogImage={currentKnowledge.heroBg}
        schema={combinedServiceSchema}
      />

      {/* SERVICE HERO WITH PHOTOGRAPHIC BACKGROUND */}
      <section className="svc-hero">
        <div className="svc-hero-bg-wrap">
          <img
            src={currentKnowledge.heroBg}
            alt={getT(service.title)}
            className="svc-hero-bg"
            width="1536"
            height="1024"
            fetchpriority="high"
          />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <div className="svc-hero-badge-row">
            <span className="status-pill">
              <span className="pulse-dot"></span> {getT(currentKnowledge.heroBadge)}
            </span>
            <span className="svc-hub-tag">
              {lang === 'es' ? 'Bases en Houston, Katy, Cypress y Waller' : 'Dispatch Hubs in Houston, Katy, Cypress & Waller'}
            </span>
          </div>
          <span className="svc-eyebrow-sub">{getT(currentKnowledge.tagline)}</span>
          <h1 className="svc-hero-title">{getT(currentKnowledge.headline)}</h1>
          <p className="svc-hero-subtext">{getT(currentKnowledge.subtext)}</p>
          <div className="svc-hero-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{lang === 'es' ? 'Llamar: (970) 778-7951' : 'Call: (970) 778-7951'}</span>
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-secondary-outline">
              {lang === 'es' ? 'Presupuesto Gratuito →' : 'Request Free Estimate →'}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: Deep Technical & Local Context */}
      <section className="section-light svc-deep-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <span className="eyebrow">{lang === 'es' ? 'Protocolo Técnico' : 'Technical Craftsmanship'}</span>
            <h2>{getT(currentKnowledge.introTitle)}</h2>
            <p className="svc-p-lead">{getT(currentKnowledge.introParagraph1)}</p>
            <p className="svc-p-sub">{getT(currentKnowledge.introParagraph2)}</p>
            
            <div className="svc-equipment-box">
              <h3>{lang === 'es' ? 'Materiales y Tecnología de Grado Profesional' : 'Professional-Grade Materials & Technology'}</h3>
              <div className="equip-list">
                {currentKnowledge.equipmentHighlights.map((eq, i) => (
                  <div key={i} className="equip-item">
                    <strong>{getT(eq.name)}</strong>
                    <span>{getT(eq.desc)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="svc-intro-visuals">
            <div className="visual-card">
              <img src={currentKnowledge.visual1} alt={getT(currentKnowledge.visual1Caption)} className="visual-img" width="1536" height="1024" loading="lazy" />
              <p className="visual-caption">{getT(currentKnowledge.visual1Caption)}</p>
            </div>
            <div className="visual-card secondary-visual">
              <img src={currentKnowledge.visual2} alt={getT(currentKnowledge.visual2Caption)} className="visual-img" width="1376" height="768" loading="lazy" />
              <p className="visual-caption">{getT(currentKnowledge.visual2Caption)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Common Local Scenarios Grid */}
      <section className="section-dark svc-scenarios-section">
        <div className="container">
          <div className="svc-scenarios-header">
            <span className="eyebrow">{lang === 'es' ? 'Condiciones de Texas' : 'Texas Weather Conditions'}</span>
            <h2>
              {lang === 'es'
                ? 'Situaciones Comunes Resueltas en Houston y Alrededores'
                : 'Common Scenarios Resolved Across Greater Houston'}
            </h2>
            <p>
              {lang === 'es'
                ? 'Desde el calor abrasador y humedad del golfo hasta tormentas repentinas con granizo y vientos fuertes.'
                : 'From scorching summer heat and high humidity to severe thunderstorms, hail, and high winds.'}
            </p>
          </div>

          <div className="svc-scenarios-grid">
            {currentKnowledge.scenarios.map((sc, idx) => (
              <div key={idx} className="svc-scenario-card">
                <span className="scenario-num">
                  {lang === 'es' ? `CASO 0${idx + 1}` : `SCENARIO 0${idx + 1}`}
                </span>
                <h3>{getT(sc.title)}</h3>
                <p className="sc-desc">{getT(sc.desc)}</p>
                <div className="sc-solution">
                  <strong>{lang === 'es' ? 'Solución EliKay:' : 'EliKay Solution:'}</strong> {getT(sc.solution)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Dual Visual Proof Split */}
      <section className="section-light svc-dual-proof">
        <div className="container dual-proof-grid">
          <div className="dual-img-col">
            <img src={currentKnowledge.visual3} alt="Jobsite inspection" className="dual-img" width="1376" height="768" loading="lazy" />
            <span className="dual-caption">{getT(currentKnowledge.visual3Caption)}</span>
          </div>
          <div className="dual-img-col">
            <img src={currentKnowledge.visual4} alt="Active roofing progress" className="dual-img" width="1536" height="1024" loading="lazy" />
            <span className="dual-caption">{getT(currentKnowledge.visual4Caption)}</span>
          </div>
        </div>
      </section>

      {/* SECTION 5: Step-By-Step Mitigation Phases */}
      <section className="section-dark svc-phases-section">
        <div className="container">
          <div className="phases-header text-center">
            <span className="eyebrow">{lang === 'es' ? 'Ejecución Paso a Paso' : 'Structured Execution'}</span>
            <h2>{lang === 'es' ? 'El Proceso de 4 Fases de EliKay' : 'The 4-Phase EliKay Process'}</h2>
            <p>
              {lang === 'es'
                ? 'Cada proyecto sigue un método riguroso para asegurar acabados duraderos y limpios.'
                : 'Every project follows a disciplined process ensuring long-lasting durability.'}
            </p>
          </div>

          <div className="phases-grid">
            {currentKnowledge.processPhases.map((phase, idx) => (
              <div key={idx} className="phase-card">
                <div className="phase-top">
                  <span className="phase-badge">
                    {lang === 'es' ? `Fase ${phase.phase}` : `Phase ${phase.phase}`}
                  </span>
                </div>
                <h3>{getT(phase.name)}</h3>
                <p>{getT(phase.detail)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Local Case Study Spotlight */}
      <section className="section-light svc-case-study">
        <div className="container">
          <div className="case-study-box">
            <span className="eyebrow">{lang === 'es' ? 'Caso Real de Trabajo' : 'Jobsite Case Study'}</span>
            <h3>{currentKnowledge.localCaseStudy.location}</h3>
            <div className="case-study-columns">
              <div className="case-col">
                <strong>{lang === 'es' ? 'La Situación:' : 'The Situation:'}</strong>
                <p>{getT(currentKnowledge.localCaseStudy.situation)}</p>
              </div>
              <div className="case-col">
                <strong>{lang === 'es' ? 'Trabajo Realizado:' : 'EliKay Response:'}</strong>
                <p>{getT(currentKnowledge.localCaseStudy.action)}</p>
              </div>
              <div className="case-col highlight">
                <strong>{lang === 'es' ? 'Resultado Comprobado:' : 'Verifiable Outcome:'}</strong>
                <p>{getT(currentKnowledge.localCaseStudy.result)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Rich Visual Local Dispatch Hub */}
      <section className="section-dark svc-local-strip">
        <div className="container">
          <div className="strip-content text-center" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">{lang === 'es' ? 'Cobertura Local' : 'Local Texas Coverage'}</span>
            <h2>
              {lang === 'es'
                ? `Servicio Profesional de ${getT(service.shortTitle)} en Todo Houston y Alrededores`
                : `Professional ${getT(service.shortTitle)} Across Greater Houston`}
            </h2>
            <p>
              {lang === 'es'
                ? 'Con cuadrillas activas en Houston, Katy, Cypress, Waller, Hempstead, Spring, The Woodlands, Pearland y Galveston, respondemos rápido con presupuestos gratuitos.'
                : 'With crews operating across Houston, Katy, Cypress, Waller, Hempstead, Spring, The Woodlands, Pearland, and Galveston, we provide prompt estimates.'}
            </p>
          </div>

          <div className="svc-regional-tri-grid">
            <div className="regional-tri-card">
              <div className="tri-img-wrap">
                <img src="/images/elikay/12.jpeg" alt="Houston and Katy roofing" className="tri-img" width="1536" height="1024" loading="lazy" />
                <span className="tri-badge">
                  {lang === 'es' ? 'Centro Houston y Katy' : 'Houston & Katy Hub'}
                </span>
              </div>
              <div className="tri-info">
                <h4>Houston, Katy & Memorial</h4>
                <p>
                  {lang === 'es'
                    ? 'Atención a techos residenciales de teja arquitectónica, filtraciones y modernizaciones completas.'
                    : 'Residential architectural roof replacements, emergency leak fixes, and full restorations.'}
                </p>
                <div className="tri-meta">
                  {lang === 'es' ? 'Estimados Rápidos en Sitio' : 'Prompt On-Site Estimates'}
                </div>
              </div>
            </div>

            <div className="regional-tri-card">
              <div className="tri-img-wrap">
                <img src="/images/elikay/13.jpeg" alt="Cypress and Waller roofing" className="tri-img" width="1376" height="768" loading="lazy" />
                <span className="tri-badge">
                  {lang === 'es' ? 'Centro Cypress y Waller' : 'Cypress & Waller Hub'}
                </span>
              </div>
              <div className="tri-info">
                <h4>Cypress, Waller & Hempstead</h4>
                <p>
                  {lang === 'es'
                    ? 'Especialistas en daños por tormenta, viento, ventilación de áticos y canaletas de desagüe.'
                    : 'Storm damage repairs, wind restoration, attic ventilation turbines, and seamless gutters.'}
                </p>
                <div className="tri-meta">
                  {lang === 'es' ? 'Cuadrilla Local Directa' : 'Direct Local Crew Dispatch'}
                </div>
              </div>
            </div>

            <div className="regional-tri-card">
              <div className="tri-img-wrap">
                <img src="/images/elikay/16.jpeg" alt="Woodlands and Galveston roofing" className="tri-img" width="1376" height="768" loading="lazy" />
                <span className="tri-badge">
                  {lang === 'es' ? 'Norte y Costa' : 'North & Coastal Corridor'}
                </span>
              </div>
              <div className="tri-info">
                <h4>The Woodlands, Spring & Galveston</h4>
                <p>
                  {lang === 'es'
                    ? 'Instalaciones resistentes a vientos de huracán, aleros, fascia y revestimiento exterior.'
                    : 'Hurricane wind-rated shingles, fascia, soffit carpentry, and siding restorations.'}
                </p>
                <div className="tri-meta">
                  {lang === 'es' ? 'Citas Flexibles Disponibles' : 'Flexible Appointment Slots'}
                </div>
              </div>
            </div>
          </div>

          <div className="strip-buttons text-center" style={{ marginTop: '2.5rem' }}>
            <a href="/service-areas" onClick={(e) => handleNav('/service-areas', e)} className="btn-ghost-light">
              {lang === 'es' ? 'Ver Todas las Ciudades y Condados que Atendemos →' : 'Explore All Cities & Counties Served →'}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ Accordion */}
      <section className="section-light svc-faq-section">
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">{lang === 'es' ? 'Respuestas Claras' : 'Frequently Asked Questions'}</span>
            <h2>
              {lang === 'es'
                ? `Preguntas Frecuentes sobre ${getT(service.title)}`
                : `Frequently Asked Questions About ${getT(service.title)}`}
            </h2>
          </div>
          <div className="faq-accordion light-accordion">
            {currentKnowledge.faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item-light ${openFaq === index ? 'active' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <button className="faq-question-light" aria-expanded={openFaq === index}>
                  <span>{getT(faq.q)}</span>
                  <span className="faq-icon-light">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer-light">
                    <p>{getT(faq.a)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Immediate Estimate Conversion */}
      <section className="hp-final-cta">
        <div className="container final-cta-container">
          <span className="eyebrow">{lang === 'es' ? 'Presupuesto Gratuito' : 'Free On-Site Estimate'}</span>
          <h2 className="final-title">
            {lang === 'es'
              ? 'Hable con un Especialista de EliKay Roofing Hoy Mismo'
              : 'Speak With an EliKay Roofing Specialist Today'}
          </h2>
          <p className="final-sub">
            {lang === 'es'
              ? 'No deje que una gotera dañe el interior de su casa. Llámenos o solicite una visita sin costo con nuestro equipo 100% bilingüe.'
              : 'Don’t let a minor leak damage your ceilings or drywall. Call us or request your free on-site estimate with our 100% bilingual team.'}
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
