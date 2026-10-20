import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import { useLanguage } from '../../context/LanguageContext';
import SEOHead from '../SEOHead';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../../utils/schemaGenerators';
import './CityServiceAreaPage.css';

export default function CityServiceAreaPage({ areaSlug, onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    service: 'Roof Inspection & Estimate',
    address: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { lang } = useLanguage();

  const handleNav = (path, e) => {
    if (e) e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Find area data
  const area = companyData.serviceAreas.find(a => a.slug === areaSlug) || companyData.serviceAreas[0];

  const cityDataMap = {
    "roof-repair-houston": {
      cityName: "Houston",
      fullTitle: {
        en: "Houston Roof Repair & Replacement Contractor | EliKay Roofing LLC",
        es: "Contratista de Reparación y Reemplazo de Techos en Houston | EliKay Roofing"
      },
      metaDesc: {
        en: "Premier residential roof repair and architectural shingle replacements in Houston, TX. Heights, Memorial, Spring Branch, River Oaks. Call (970) 778-7951.",
        es: "Reparación residencial experta y cambio de techos en Houston, TX. Heights, Memorial, Spring Branch, River Oaks. Presupuesto gratis al (970) 778-7951."
      },
      heroImage: "/images/elikay/houston_landmark.jpg",
      introTitle: {
        en: "Top-Tier Residential Roofing Built for Houston's Harsh Climate",
        es: "Techado Residencial de Primer Nivel Diseñado para el Clima de Houston"
      },
      introText1: {
        en: "Houston homeowners know that intense summer heat reaching 100°F+, prolonged Gulf Coast humidity, and torrential thunderstorm downpours create extreme wear on residential roofing. Shingle granules bake under direct UV radiation, attic temperatures soar above 140°F, and sudden microburst winds compromise roof perimeters. EliKay Roofing brings over 13 years of field-tested roofing craftsmanship directly to Greater Houston neighborhoods.",
        es: "Los propietarios en Houston saben que el calor sofocante superior a 100°F, la humedad constante del Golfo y las lluvias torrenciales generan un desgaste brutal en los techos residenciales. Los gránulos de las tejas se degradan con los rayos UV, la temperatura en áticos supera los 140°F y vientos repentinos aflojan las orillas. EliKay Roofing ofrece más de 13 años de experiencia en techado en los vecindarios del Gran Houston."
      },
      introText2: {
        en: "Whether your roof has suffered blown-off shingles along the ridge in Memorial, chimney flashing leaks in Spring Branch, or hail impact across the Heights, our certified crews deliver honest evaluations, transparent estimates, and lifetime architectural shingle installations backed by manufacturer warranties.",
        es: "Ya sea que su techo haya perdido tejas por viento en Memorial, sufra goteras de chimenea en Spring Branch o impacto de granizo en Heights, nuestro equipo certificado brinda inspecciones honestas, estimados claros e instalaciones garantizadas de tejas arquitectónicas."
      },
      zipCodes: ["77002", "77007", "77008", "77019", "77024", "77055", "77056", "77079", "77098"],
      neighborhoodList: [
        "Houston Heights & Greater Heights",
        "Memorial & Energy Corridor",
        "Spring Branch (East & West)",
        "River Oaks & Montrose",
        "Westchase & Briargrove",
        "Midtown & Downtown Houston",
        "Garden Oaks & Oak Forest",
        "Rice Military & Washington Corridor"
      ],
      weatherThreats: [
        {
          title: { en: "Thermal Shingle Splitting", es: "Cuarteaduras por Calor Extremo" },
          desc: { en: "100°F+ ambient heat and 140°F attic heat causes asphalt substrate drying and brittle shingles.", es: "El calor continuo seca el asfalto de las tejas, volviéndolas frágiles y quebradizas." }
        },
        {
          title: { en: "Tropical Storm Wind Sheer", es: "Ráfagas de Tormentas Tropicales" },
          desc: { en: "High gusting winds lift unsealed perimeter tabs, breaking manufacturer sealant bonds.", es: "Vientos intensos levantan los bordes de tejas, desprendiendo el sello adhesivo." }
        },
        {
          title: { en: "Algae & Moss Staining", es: "Manchas de Moho y Humedad" },
          desc: { en: "High humidity fosters gloeocapsa magma black algae streaks that consume shingle limestone filler.", es: "La humedad del Golfo alimenta el moho negro que daña la capa protectora del techo." }
        }
      ],
      faqs: [
        {
          q: { en: "How fast can EliKay Roofing inspect my roof in Houston?", es: "¿Qué tan rápido puede EliKay Roofing inspeccionar mi techo en Houston?" },
          a: { en: "We offer prompt scheduling throughout Houston and can frequently accommodate same-day or next-day roof inspections. Call (970) 778-7951 for priority dispatch.", es: "Ofrecemos citas rápidas en todo Houston y frecuentemente atendemos el mismo día o al día siguiente. Llame al (970) 778-7951 para atención prioritaria." }
        },
        {
          q: { en: "Do you assist with insurance claims for storm damage in Houston?", es: "¿Ayudan con reclamos de seguro por tormentas en Houston?" },
          a: { en: "Yes! We document every damaged shingle, punctured valley, and lifted ridge vent with high-resolution photo reports for your insurance adjuster to ensure complete coverage.", es: "¡Sí! Documentamos cada teja dañada, limahoya perforada y caballete desprendido con fotos nítidas para su ajustador de seguros." }
        },
        {
          q: { en: "What shingle brands do you install for Houston homes?", es: "¿Qué marcas de tejas instalan para casas en Houston?" },
          a: { en: "We install premium architectural shingles from GAF, Owens Corning, and CertainTeed featuring Class A fire ratings and 130 MPH wind resistance.", es: "Instalamos tejas arquitectónicas de primera de GAF, Owens Corning y CertainTeed con resistencia a vientos de hasta 130 MPH." }
        }
      ]
    },
    "roof-replacement-katy": {
      cityName: "Katy",
      fullTitle: {
        en: "Katy Roof Replacement & Repair Specialist | EliKay Roofing LLC",
        es: "Especialista en Reemplazo y Reparación de Techos en Katy | EliKay Roofing"
      },
      metaDesc: {
        en: "Trusted residential roof replacement and leak repairs in Katy, TX. Cinco Ranch, Grand Lakes, Elyson, Cane Island. Call (970) 778-7951 for a free inspection.",
        es: "Reemplazo de techos y reparación de filtraciones en Katy, TX. Cinco Ranch, Grand Lakes, Elyson, Cane Island. Llame al (970) 778-7951 para inspección gratuita."
      },
      heroImage: "/images/elikay/katy_landmark.jpg",
      introTitle: {
        en: "HOA-Compliant Architectural Roof Replacements in Katy, TX",
        es: "Reemplazo de Techos Cumpliendo Normas HOA en Katy, TX"
      },
      introText1: {
        en: "Katy, Texas is renowned for beautiful master-planned communities like Cinco Ranch, Grand Lakes, Cane Island, and Elyson. These neighborhoods feature architectural guidelines that require premium dimensional shingles, uniform color palettes, and certified ventilation systems. EliKay Roofing specializes in full tear-offs and replacements tailored specifically to Katy HOA requirements.",
        es: "Katy, Texas es conocida por sus hermosas comunidades planificadas como Cinco Ranch, Grand Lakes, Cane Island y Elyson. Estas colonias exigen tejas arquitectónicas dimensionales de alta calidad, colores aprobados y ventilación certificada. EliKay Roofing se especializa en reemplazos completos conforme a las normas HOA de Katy."
      },
      introText2: {
        en: "From spring hail impacts along Westheimer Parkway to severe summer thunderstorms rolling down I-10, our local roofing crew protects your largest investment with high-tensile synthetic underlayment, ice & water shield in all valleys, and 6-nail shingle fasteners.",
        es: "Desde tormentas de granizo por Westheimer Parkway hasta ráfagas severas a lo largo de la I-10, nuestra cuadrilla local protege su patrimonio con membrana sintética impermeable, barrera en limahoyas y clavado certificado de 6 puntos."
      },
      zipCodes: ["77449", "77450", "77493", "77494"],
      neighborhoodList: [
        "Cinco Ranch (North & Southwest)",
        "Grand Lakes & Seven Meadows",
        "Elyson & Cane Island",
        "Firethorne & Silver Ranch",
        "Old Katy & Katy Heritage Park",
        "Pine Mill Ranch & Cross Creek Ranch border"
      ],
      weatherThreats: [
        {
          title: { en: "Severe Hail Impact", es: "Impacto Severo de Granizo" },
          desc: { en: "Spring convective storms produce hail stones that bruise shingle mats and fracture fiberglass cores.", es: "Tormentas de primavera con granizo que fracturan el núcleo de fibra de vidrio de las tejas." }
        },
        {
          title: { en: "Attic Overheating", es: "Sobrecalentamiento de Áticos" },
          desc: { en: "Inadequate soffit intake air bakes shingles from below, drastically shortening roof lifespan.", es: "La falta de ventilación en aleros calienta las tejas por abajo, acortando su vida útil." }
        },
        {
          title: { en: "Roof Valley Tree Debris", es: "Acumulación de Hojas en Limahoyas" },
          desc: { en: "Mature live oaks dump heavy leaf piles that trap water and cause rot beneath flashing.", es: "Hojas atrapadas en valles del techo retienen agua y pudren la madera bajo el metal." }
        }
      ],
      faqs: [
        {
          q: { en: "Are your roof installations approved by Katy HOAs?", es: "¿Sus instalaciones están aprobadas por las asociaciones HOA de Katy?" },
          a: { en: "Absolutely. We supply complete HOA architectural packets including shingle sample colors, manufacturer specs, and liability insurance certificates for rapid approval.", es: "Totalmente. Proveemos muestras de color, fichas técnicas y certificados de seguro para que su comité HOA apruebe el proyecto sin demoras." }
        },
        {
          q: { en: "How long does a roof replacement take in Katy?", es: "¿Cuánto tiempo toma un cambio de techo en Katy?" },
          a: { en: "Most residential roof replacements in Katy are completed in just 1 to 2 days, including complete tear-off, decking repairs, magnetic nail cleanup, and final inspection.", es: "La mayoría de los techos en Katy se instalan en 1 a 2 días, incluyendo desmonte, cambio de madera dañada, barrido magnético de clavos y revisión final." }
        },
        {
          q: { en: "What shingle colors match Cinco Ranch and Grand Lakes requirements?", es: "¿Qué colores de tejas cumplen con los requisitos de Cinco Ranch y Grand Lakes?" },
          a: { en: "Earth-tone architectural shingles like Weathered Wood, Pewter Gray, and Driftwood are popular and widely pre-approved. We bring physical manufacturer sample boards to your home.", es: "Tonos tierra como Weathered Wood, Pewter Gray y Driftwood son muy populares y están preaprobados. Llevamos muestras físicas a su domicilio." }
        },
        {
          q: { en: "How do you protect landscaping and driveways during a Katy roof replacement?", es: "¿Cómo protegen jardines y cocheras durante el reemplazo en Katy?" },
          a: { en: "We drape protective tarps over delicate shrubs and flowerbeds, position heavy plywood over AC units, and perform multiple rolling magnet sweeps across driveways and grass to collect all nails.", es: "Cubrimos arbustos con lonas resistentes, protegemos los aires acondicionados con triplay y pasamos imanes rodantes repetidas veces por el césped y la entrada de autos." }
        }
      ]
    },
    "cypress-roofing-services": {
      cityName: "Cypress",
      fullTitle: {
        en: "Cypress Roofing Services & Leak Repair | EliKay Roofing LLC",
        es: "Servicios de Techos y Fugas en Cypress | EliKay Roofing"
      },
      metaDesc: {
        en: "Expert residential roofing services in Cypress, TX. Bridgeland, Towne Lake, Fairfield, Coles Crossing. Free inspections, call (970) 778-7951.",
        es: "Servicios residenciales de techos en Cypress, TX. Bridgeland, Towne Lake, Fairfield, Coles Crossing. Inspecciones gratis al (970) 778-7951."
      },
      heroImage: "/images/elikay/cypress_landmark.jpg",
      introTitle: {
        en: "High-Wind Resistant Roofing for Cypress Subdivisions",
        es: "Techos Resistentes a Fuertes Vientos en Cypress, TX"
      },
      introText1: {
        en: "Cypress is among the fastest growing communities in Northwest Harris County. From the expansive waterfront homes of Towne Lake and Bridgeland to established tree-lined streets in Coles Crossing and Fairfield, homes here endure open prairie winds and intense summer sun. EliKay Roofing provides dependable leak repairs and complete re-roofing.",
        es: "Cypress es una de las áreas de mayor crecimiento en el noroeste de Harris. Desde las casas frente al lago en Towne Lake y Bridgeland hasta Coles Crossing y Fairfield, las viviendas soportan vientos de planicie y sol intenso. EliKay Roofing ofrece reparaciones de fugas y cambio completo de techos."
      },
      introText2: {
        en: "Our roofing specialists focus on leak-prone failure points: dried-out rubber plumbing pipe boots, loose chimney step flashing, and deteriorating valley metal. We replace aging components with bulletproof lead collars and heavy-gauge galvanized flashings.",
        es: "Nuestros especialistas se enfocan en los puntos críticos de filtración: sellos de tubería resecados por el sol, tapajuntas de chimeneas flojos y valles desgastados, cambiándolos por piezas de plomo y acero galvanizado de alto calibre."
      },
      zipCodes: ["77429", "77433"],
      neighborhoodList: [
        "Bridgeland (Water Haven, Lakeland)",
        "Towne Lake & Cypress Creek Lakes",
        "Fairfield & Fairfield Chappell Ridge",
        "Coles Crossing & Rock Creek",
        "Copperfield & Longwood Golf Community",
        "Blackhorse Ranch & Cypress Mill"
      ],
      weatherThreats: [
        {
          title: { en: "Prairie Wind Uplift", es: "Empuje de Viento de Planicie" },
          desc: { en: "Flat geographic terrain creates high aerodynamic lift on two-story residential roof planes.", es: "El terreno plano genera fuertes corrientes de aire que empujan los techos de 2 pisos." }
        },
        {
          title: { en: "Pipe Jack Sun Rot", es: "Sellos de Tubería Resecados" },
          desc: { en: "Standard neoprene boots crack after 5 to 7 years in Cypress sun, allowing water down wall cavities.", es: "Las gomas tradicionales se agrietan a los 5 años bajo el sol, dejando pasar agua a los muros." }
        }
      ],
      faqs: [
        {
          q: { en: "Can you fix a roof leak without replacing the entire roof in Cypress?", es: "¿Pueden reparar una gotera sin cambiar todo el techo en Cypress?" },
          a: { en: "Yes! If the rest of your roofing system is structurally sound, we isolate the exact leak entry point, repair the decking, and blend matching shingles seamlessly.", es: "¡Sí! Si el resto del techo está en buen estado, aislamos el punto exacto de la filtración, cambiamos la madera dañada e instalamos tejas del mismo color." }
        },
        {
          q: { en: "What shingle wind rating is recommended for open Cypress prairie subdivisions?", es: "¿Qué resistencia al viento se recomienda para subdivisiones en Cypress?" },
          a: { en: "We recommend architectural laminate shingles with ASTM D7158 Class H wind ratings (certified up to 130 MPH) installed with a reinforced 6-nail fastener pattern.", es: "Recomendamos tejas arquitectónicas laminadas con clasificación Clase H ASTM D7158 (hasta 130 MPH) clavadas con patrón reforzado de 6 clavos." }
        },
        {
          q: { en: "How often should plumbing pipe boots be inspected in Cypress, TX?", es: "¿Con qué frecuencia deben revisarse los sellos de tubería en Cypress?" },
          a: { en: "Standard rubber boots dry-rot within 5 to 7 years under the hot Texas sun. We inspect them during every visit and install heavy-duty lead collars that last a lifetime.", es: "Las gomas tradicionales se resecan en 5 a 7 años bajo el sol de Texas. Las revisamos en cada visita e instalamos sellos de plomo duraderos de por vida." }
        }
      ]
    },
    "waller-roof-repairs": {
      cityName: "Waller",
      fullTitle: {
        en: "Waller Roof Repairs & Reroofing Contractor | EliKay Roofing LLC",
        es: "Reparación y Cambio de Techos en Waller, TX | EliKay Roofing"
      },
      metaDesc: {
        en: "Local residential and acreage roofing experts in Waller, TX. Prompt inspection, honest estimates, quality shingles. Call (970) 778-7951 today.",
        es: "Expertos en techado residencial y propiedades campestres en Waller, TX. Inspección rápida y tejas de alta resistencia. Llame al (970) 778-7951."
      },
      heroImage: "/images/elikay/waller_landmark.jpg",
      introTitle: {
        en: "Durable Roofing for Waller Homes, Ranches & Acreage",
        es: "Techado Resistente para Casas, Ranchos y Parcelas en Waller"
      },
      introText1: {
        en: "Waller, TX combines historic town charm with sprawling country acreage and ranch homes along the US-290 corridor. Unobstructed rural winds, intense open-field sun exposure, and heavy rainstorms require durable roofing assemblies that stand up to the elements without constant maintenance.",
        es: "Waller combina el encanto de su centro histórico con ranchos y parcelas a lo largo de la US-290. Los vientos libres de obstáculos, el sol directo y las tormentas exigen cubiertas de techo robustas que no requieran reparaciones continuas."
      },
      introText2: {
        en: "With an active operational base in the Waller area, EliKay Roofing provides rapid dispatch for emergency storm tarping, missing shingle repairs, fascia board replacements, and lifetime re-roofing projects.",
        es: "Con base operativa en la zona de Waller, EliKay Roofing ofrece atención rápida para lonas de emergencia tras tormentas, cambio de tejas desprendidas, reparación de madera de fascia y techos nuevos de por vida."
      },
      zipCodes: ["77484"],
      neighborhoodList: [
        "Historic Waller Town Center",
        "Field Store Road acreage communities",
        "Prairie View perimeter neighborhoods",
        "US-290 Corridor properties",
        "Penick Road & Kickapoo Road areas"
      ],
      weatherThreats: [
        {
          title: { en: "High Wind Sheer", es: "Fuerza Directa del Viento" },
          desc: { en: "Rural homes without windbreaks take the full brunt of 60+ MPH thunderstorm gusts.", es: "Las propiedades sin barreras de árboles reciben ráfagas directas superiores a 60 MPH." }
        },
        {
          title: { en: "Critter & Rodent Intrusion", es: "Intrusión de Fauna en Aleros" },
          desc: { en: "Country properties frequently suffer rotted fascia boards where squirrels and raccoons enter attics.", es: "Maderas podridas en la fascia permiten la entrada de animales al ático." }
        }
      ],
      faqs: [
        {
          q: { en: "Do you service rural acreage properties outside Waller city limits?", es: "¿Atienden propiedades campestres y ranchos fuera de Waller?" },
          a: { en: "Yes! We regularly service ranches, acreage properties, and country homes throughout Waller County and surrounding roads.", es: "¡Sí! Trabajamos habitualmente en fincas, ranchos y casas de campo en todo el condado de Waller." }
        },
        {
          q: { en: "How fast can you dispatch a crew for storm damage in Waller?", es: "¿Qué tan rápido despachan una cuadrilla por tormenta en Waller?" },
          a: { en: "Because our operations hub is located right here in the Waller / US-290 corridor, our crews can respond within hours for tarping and emergency repairs.", es: "Como nuestra base de operaciones está en el corredor de Waller / US-290, respondemos en cuestión de horas con lonas y reparaciones de urgencia." }
        },
        {
          q: { en: "Can you repair metal and shingle transitions on ranch homes?", es: "¿Reparan uniones entre metal y tejas en casas de campo?" },
          a: { en: "Yes. Many Waller area ranch homes feature mixed porch metal roofing and shingle main pitches. We custom bend flashing to ensure watertight transitions.", es: "Sí. Muchas casas de campo en Waller combinan porches metálicos con tejas. Doblamos tapajuntas a la medida para sellar uniones 100% herméticas." }
        }
      ]
    },
    "hempstead-roofing-services": {
      cityName: "Hempstead",
      fullTitle: {
        en: "Hempstead Roofing Services & Replacement | EliKay Roofing LLC",
        es: "Servicios y Reemplazo de Techos en Hempstead | EliKay Roofing"
      },
      metaDesc: {
        en: "Quality residential roofing in Hempstead, TX. Historic homes, modern ranches, Highway 6 corridor. Free estimates, call (970) 778-7951.",
        es: "Tejados residenciales de calidad en Hempstead, TX. Casas históricas y ranchos en Highway 6. Presupuestos gratis al (970) 778-7951."
      },
      heroImage: "/images/elikay/hempstead_landmark.jpg",
      introTitle: {
        en: "Reliable Roof Replacements & Repairs in Hempstead, TX",
        es: "Reemplazo y Reparación de Techos en Hempstead, TX"
      },
      introText1: {
        en: "As the county seat of Waller County, Hempstead is home to historic residences, expansive farm acreage, and new residential developments. Aging roof decking, brittle 3-tab shingles, and worn chimney flashings are common issues facing local homeowners.",
        es: "Como cabecera del condado de Waller, Hempstead cuenta con casas históricas, fincas y nuevos fraccionamientos. La madera envejecida en cubiertas y tejas desgastadas son problemas frecuentes en la zona."
      },
      introText2: {
        en: "EliKay Roofing provides comprehensive roof inspections, replacing damaged plywood sheets with exterior-grade CDX decking, installing continuous ridge vents for superior attic air circulation, and laying premium dimensional shingles.",
        es: "EliKay Roofing ofrece revisiones integrales, cambiando triplay dañado por madera tratada exterior, instalando caballetes con ventilación continua y tejas de alta resistencia."
      },
      zipCodes: ["77445"],
      neighborhoodList: [
        "Downtown Hempstead Historic District",
        "Highway 6 & Austin Street corridor",
        "Clear Creek & Monaville rural roads",
        "FM 1887 & Brazos River basin properties"
      ],
      weatherThreats: [
        {
          title: { en: "Decking Moisture Rot", es: "Humedad y Pudrición en Madera" },
          desc: { en: "Older homes with worn organic felt underlayment suffer hidden plywood rot beneath shingles.", es: "Casas con fieltro viejo acumulan humedad que pudre la madera estructural del techo." }
        }
      ],
      faqs: [
        {
          q: { en: "How do I know if my Hempstead home needs a repair or replacement?", es: "¿Cómo sé si mi casa en Hempstead necesita reparación o cambio completo?" },
          a: { en: "We conduct an honest, 18-point inspection checking shingle granule loss, deck deflection, and flashing integrity, giving you honest options.", es: "Realizamos una revisión detallada de 18 puntos evaluando pérdida de gránulos, firmeza de la madera y tapajuntas para brindarle opciones claras." }
        },
        {
          q: { en: "Do you replace rotten decking and fascia in older Hempstead homes?", es: "¿Cambian madera podrida y molduras de fascia en casas antiguas de Hempstead?" },
          a: { en: "Yes. We replace rotted plywood with CDX exterior plywood and install factory-primed rot-resistant trim before installing new shingles.", es: "Sí. Cambiamos triplay dañado por madera CDX tratada y colocamos molduras resistentes a la humedad antes de instalar tejas nuevas." }
        }
      ]
    },
    "spring-roof-repairs": {
      cityName: "Spring",
      fullTitle: {
        en: "Spring TX Roof Repairs & Shingle Replacements | EliKay Roofing",
        es: "Reparación de Techos y Tejas en Spring, TX | EliKay Roofing"
      },
      metaDesc: {
        en: "Professional roof leak repairs and replacement in Spring, TX. Gleannloch Farms, Windrose, Spring Trails. Call (970) 778-7951 for a free estimate.",
        es: "Reparación de goteras y cambio de techos en Spring, TX. Gleannloch Farms, Windrose, Spring Trails. Presupuestos sin costo al (970) 778-7951."
      },
      heroImage: "/images/elikay/spring_landmark.jpg",
      introTitle: {
        en: "Restoring Watertight Protection for Spring, Texas Homes",
        es: "Protección Impermeable para Hogares en Spring, Texas"
      },
      introText1: {
        en: "Spring, TX is characterized by lush pine canopies and family-oriented neighborhoods like Gleannloch Farms, Windrose, and Spring Trails. Heavy tree coverage creates unique roofing challenges: falling limbs, pine needle damming in valleys, and green algae growth.",
        es: "Spring, TX destaca por sus frondosos pinos y comunidades familiares como Gleannloch Farms, Windrose y Spring Trails. La densa vegetación crea retos específicos: ramas caídas, hojas acumuladas en limahoyas y formación de moho."
      },
      introText2: {
        en: "EliKay Roofing installs algae-resistant shingles infused with copper granules that prevent dark staining, while sealing all eaves with heavy-duty metal drip edges and gutter apron flashings.",
        es: "EliKay Roofing instala tejas resistentes al moho con gránulos de cobre que evitan manchas oscuras, protegiendo todos los aleros con goterones metálicos reforzados."
      },
      zipCodes: ["77373", "77379", "77386", "77388", "77389"],
      neighborhoodList: [
        "Gleannloch Farms & Champions Area",
        "Windrose & Augusta Pines",
        "Spring Trails & Harmony",
        "Old Town Spring area",
        "Kleinwood & Cypresswood"
      ],
      weatherThreats: [
        {
          title: { en: "Tree Canopy Shade & Algae", es: "Sombra de Árboles y Algas" },
          desc: { en: "Lack of direct sunlight keeps morning dew trapped on shingles, accelerating organic growth.", es: "La sombra continua retiene la humedad matutina, acelerando el crecimiento de musgo." }
        }
      ],
      faqs: [
        {
          q: { en: "Can you remove dark black stains on my roof in Spring?", es: "¿Pueden evitar las manchas negras en mi techo en Spring?" },
          a: { en: "Yes! Our new shingle installations feature Scotchgard or StreakGuard algae-resistant copper granules backed by 15-25 year algae warranties.", es: "¡Sí! Nuestras nuevas tejas cuentan con tecnología de gránulos de cobre con garantía de 15 a 25 años contra manchas de algas." }
        },
        {
          q: { en: "How do falling pine needles affect roofs in Spring, TX?", es: "¿Cómo afectan las acículas de pino a los techos en Spring?" },
          a: { en: "Pine needles trap moisture in roof valleys and behind chimneys, causing accelerated shingle granule deterioration and premature wood rot. We clean valleys and install smooth metal valley linings.", es: "Las acículas atrapan humedad en limahoyas y chimeneas, acelerando la pérdida de gránulos y pudrición de madera. Limpiamos valles e instalamos valles de metal liso." }
        },
        {
          q: { en: "Do you install gutter leaf guards to prevent clogs in Spring?", es: "¿Instalan protectores de hojas en canaletas en Spring?" },
          a: { en: "Yes, we install stainless micro-mesh gutter guards that keep pine needles and oak blossoms out while handling heavy Texas downpours.", es: "Sí, instalamos mallas protectoras de acero inoxidable que impiden la entrada de hojas de pino y soportan fuertes aguaceros." }
        }
      ]
    },
    "woodlands-roofing-contractor": {
      cityName: "The Woodlands",
      fullTitle: {
        en: "The Woodlands Roofing Contractor & Replacements | EliKay Roofing",
        es: "Contratista de Techos en The Woodlands, TX | EliKay Roofing"
      },
      metaDesc: {
        en: "Premium architectural shingle roofing in The Woodlands, TX. Grogan's Mill, Cochran's Crossing, Sterling Ridge. Call (970) 778-7951 for expert service.",
        es: "Techos arquitectónicos de primera en The Woodlands, TX. Grogan's Mill, Sterling Ridge, Cochran's Crossing. Llame al (970) 778-7951."
      },
      heroImage: "/images/elikay/woodlands_landmark.jpg",
      introTitle: {
        en: "Luxury Architectural Roofing in The Woodlands, Texas",
        es: "Techado Arquitectónico de Alta Gama en The Woodlands, Texas"
      },
      introText1: {
        en: "The Woodlands is renowned for its world-class master-planned beauty, towering pine trees, and strict architectural standards. Preserving the aesthetic value and structural safety of homes in Grogan's Mill, Cochran's Crossing, Sterling Ridge, and Alden Bridge requires meticulous roofing standards.",
        es: "The Woodlands es famosa por sus estándares arquitectónicos de primer nivel y su entorno boscoso. Cuidar la estética y seguridad de las residencias en Grogan's Mill, Cochran's Crossing, Sterling Ridge y Alden Bridge exige una instalación impecable."
      },
      introText2: {
        en: "EliKay Roofing provides seamless HOA compliance, high-profile ridge cap shingles, leak-proof skylight flashing installations, and thorough daily magnet sweeps of your driveway and landscaping.",
        es: "EliKay Roofing asegura el cumplimiento total con las normativas de la comunidad, caballetes de alto perfil, sellado perfecto de tragaluces y limpieza magnética rigurosa de jardines y entradas de autos."
      },
      zipCodes: ["77380", "77381", "77382", "77384", "77385"],
      neighborhoodList: [
        "Grogan's Mill & Town Center",
        "Panther Creek & Lake Woodlands",
        "Cochran's Crossing & Palmer Course",
        "Sterling Ridge & Carlton Woods perimeter",
        "Alden Bridge & Indian Springs",
        "Creekside Park"
      ],
      weatherThreats: [
        {
          title: { en: "Skylight & Chimney Leaks", es: "Fugas en Tragaluces y Chimeneas" },
          desc: { en: "High tree debris and heavy pine needle packs rot step flashing around complex roof penetrations.", es: "Hojas y acículas acumuladas dañan los tapajuntas de tragaluces y chimeneas." }
        }
      ],
      faqs: [
        {
          q: { en: "Do you repair leaking skylights in The Woodlands?", es: "¿Reparan filtraciones en tragaluces en The Woodlands?" },
          a: { en: "Yes! We specialize in re-flashing and sealing Velux skylights, ensuring watertight integration with your roof shingles.", es: "¡Sí! Nos especializamos en cambio de sellos y tapajuntas de tragaluces para una integración totalmente impermeable." }
        },
        {
          q: { en: "Which luxury shingles comply with The Woodlands Township architectural guidelines?", es: "¿Qué tejas de lujo cumplen con los reglamentos de The Woodlands Township?" },
          a: { en: "We install heavy-weight designer shingles like CertainTeed Landmark Pro, GAF Timberline HDZ, and Owens Corning Duration in approved dark architectural tones.", es: "Instalamos tejas de diseño de alta resistencia como CertainTeed Landmark Pro, GAF Timberline HDZ y Owens Corning Duration en tonos autorizados." }
        },
        {
          q: { en: "Can EliKay Roofing inspect attic ventilation efficiency in The Woodlands?", es: "¿Puede EliKay Roofing revisar la ventilación del ático en The Woodlands?" },
          a: { en: "Yes. In forested neighborhoods, balanced intake and exhaust ventilation is critical to keep attic temperatures under control and prevent premature shingle blister.", es: "Sí. En áreas boscosas, el equilibrio entre entrada y salida de aire es vital para evitar el sobrecalentamiento y la formación de burbujas en tejas." }
        }
      ]
    },
    "pearland-roof-restoration": {
      cityName: "Pearland",
      fullTitle: {
        en: "Pearland Roof Restoration & Repair | EliKay Roofing LLC",
        es: "Restauración y Reparación de Techos en Pearland | EliKay Roofing"
      },
      metaDesc: {
        en: "Trusted residential roof repair and replacements in Pearland, TX. Silverlake, Shadow Creek Ranch, Green Tee. Free estimates, call (970) 778-7951.",
        es: "Reparación y reemplazo de techos residenciales en Pearland, TX. Silverlake, Shadow Creek Ranch. Presupuestos sin costo al (970) 778-7951."
      },
      heroImage: "/images/elikay/pearland_landmark.jpg",
      introTitle: {
        en: "Gulf Coast Storm & Wind-Rated Roofing in Pearland, TX",
        es: "Techos con Calificación de Viento y Tormenta en Pearland, TX"
      },
      introText1: {
        en: "Located in northern Brazoria County, Pearland sits directly in the path of Gulf Coast tropical weather patterns and rapid humidity swings. Neighborhoods such as Shadow Creek Ranch and Silverlake require impact-resistant shingles and robust attic ventilation to endure summer storms.",
        es: "Situada en el norte de Brazoria, Pearland recibe de frente los patrones de clima tropical del Golfo. Comunidades como Shadow Creek Ranch y Silverlake necesitan tejas de alto impacto y ventilación eficiente para resistir tormentas."
      },
      introText2: {
        en: "EliKay Roofing provides rapid damage assessments, replacing storm-compromised shingles, resetting displaced ridge vents, and re-securing loose fascia boards before moisture penetrates your interior ceilings.",
        es: "EliKay Roofing ofrece evaluaciones rápidas de daños, cambiando tejas dañadas por tormenta, ajustando caballetes y asegurando molduras de fascia antes de que el agua llegue al interior."
      },
      zipCodes: ["77581", "77584", "77588"],
      neighborhoodList: [
        "Shadow Creek Ranch",
        "Silverlake & Southlake",
        "Green Tee Terrace & Golfcrest",
        "Old Town Pearland & Corrigan",
        "Sunrise Lakes & Southern Trails"
      ],
      weatherThreats: [
        {
          title: { en: "Severe Rain Infiltration", es: "Infiltración por Tormentas Tropicales" },
          desc: { en: "Wind-driven rains push water horizontally beneath lifted shingle tabs.", es: "Lluvias con viento horizontal empujan agua bajo tejas despegadas." }
        }
      ],
      faqs: [
        {
          q: { en: "How quickly can you tarp an emergency roof leak in Pearland?", es: "¿Qué tan rápido pueden colocar una lona de emergencia en Pearland?" },
          a: { en: "We offer emergency roof tarping and rapid leak containment across Pearland to protect your home interior from water damage.", es: "Ofrecemos colocación de lonas de emergencia y contención de fugas en Pearland para proteger su hogar de daños por agua." }
        },
        {
          q: { en: "Do Pearland homes require special wind-rated underlayment?", es: "¿Las casas en Pearland requieren membranas con resistencia a vientos?" },
          a: { en: "Yes. Due to Brazoria County's proximity to coastal storms, we install puncture-resistant synthetic underlayment that provides secondary moisture defense even if shingles lift.", es: "Sí. Por la cercanía con tormentas costeras, instalamos membrana sintética antidesgarro que retiene el agua incluso si el viento levanta tejas." }
        }
      ]
    },
    "galveston-roofing-repairs": {
      cityName: "Galveston",
      fullTitle: {
        en: "Galveston Island Coastal Roofing & Windstorm Repairs | EliKay Roofing",
        es: "Reparación de Techos Costeros en Galveston Island | EliKay Roofing"
      },
      metaDesc: {
        en: "Coastal roofing specialists in Galveston, TX. High-wind rated shingles, stainless fasteners, salt air protection. Call (970) 778-7951 for a free estimate.",
        es: "Especialistas en techos costeros en Galveston, TX. Tejas contra vientos huracanados, clavos resistentes al salitre. Llame al (970) 778-7951."
      },
      heroImage: "/images/elikay/galveston_landmark.jpg",
      introTitle: {
        en: "Hurricane-Grade Coastal Roofing on Galveston Island",
        es: "Techado Costero de Grado Huracán en Galveston Island"
      },
      introText1: {
        en: "Galveston Island presents some of the toughest roofing environments in North America: corrosive airborne sea salt, wind uplifts reaching 130+ MPH during tropical storms, and intense coastal solar radiation. Whether protecting historic homes along the Strand or raised stilt vacation properties in Jamaica Beach and Pirate's Cove, your roof demands specialized coastal craftsmanship.",
        es: "Galveston Island tiene uno de los entornos más exigentes para techos: salitre corrosivo, vientos de más de 130 MPH en tormentas tropicales y sol costero implacable. Ya sea para casas históricas en Strand o residencias sobre pilotes en Jamaica Beach y Pirate's Cove, su techo requiere instalación costera especializada."
      },
      introText2: {
        en: "EliKay Roofing utilizes non-corrosive stainless ring-shank nails, high-temperature peel-and-stick underlayments, and Class 4 impact architectural shingles engineered specifically for Texas Department of Insurance (TDI) coastal windstorm standards.",
        es: "EliKay Roofing utiliza clavos de acero inoxidable anticorrosivos, membranas autoadheribles para altas temperaturas y tejas arquitectónicas Clase 4 diseñadas para resistir las normas de vientos costeros de Texas."
      },
      zipCodes: ["77550", "77551", "77554"],
      neighborhoodList: [
        "Historic Strand & Downtown Galveston",
        "East End Historic District & Silk Stocking",
        "Pirate's Cove & Lafitte's Cove",
        "Jamaica Beach & Galveston West End",
        "Sea Isle & San Luis Pass communities"
      ],
      weatherThreats: [
        {
          title: { en: "Salt Air Fastener Corrosion", es: "Corrosión por Salitre en Clavos" },
          desc: { en: "Standard steel nails rust through within years, causing shingles to blow off in moderate winds.", es: "Los clavos comunes se oxidan con la brisa marina, causando desprendimiento de tejas con vientos leves." }
        },
        {
          title: { en: "130+ MPH Coastal Wind Uplift", es: "Fuerza de Vientos de Más de 130 MPH" },
          desc: { en: "Island homes face direct unobstructed ocean gusts that tear off standard 3-tab roofing.", es: "Las casas de la isla enfrentan ráfagas del mar sin barreras que arrancan tejas comunes." }
        }
      ],
      faqs: [
        {
          q: { en: "Do you install windstorm-certified roofs for Galveston insurance compliance?", es: "¿Instalan techos certificados contra tormentas para el seguro en Galveston?" },
          a: { en: "Yes! We build to strict coastal windstorm standards utilizing certified 6-nail fastening patterns and approved synthetic underlayments.", es: "¡Sí! Construimos bajo las normas más rigurosas de vientos costeros con 6 clavos por teja y membranas sintéticas aprobadas." }
        },
        {
          q: { en: "Why are stainless steel nails essential on Galveston Island?", es: "¿Por qué son indispensables los clavos de acero inoxidable en Galveston?" },
          a: { en: "Salt air rusts standard electro-galvanized nails in just 3-5 years, causing nail heads to sheer off. Stainless ring-shank nails resist saltwater corrosion permanently.", es: "El salitre corroe clavos galvanizados comunes en 3 a 5 años haciendo que se decapiten. Los clavos estriados de acero inoxidable resisten el salitre indefinidamente." }
        },
        {
          q: { en: "Can you re-roof beach houses and stilt properties in West End?", es: "¿Pueden cambiar techos en casas de playa sobre pilotes en West End?" },
          a: { en: "Yes. Our crews are equipped with specialized safety gear and lifts to handle high-pitch, elevated coastal stilt homes across Jamaica Beach and Pirate's Cove.", es: "Sí. Contamos con equipo y arneses especializados para trabajar con seguridad en casas elevadas de playa en Jamaica Beach y Pirate's Cove." }
        }
      ]
    }
  };

  const city = cityDataMap[area.slug] || cityDataMap["roof-repair-houston"];

  const breadcrumbs = [
    { name: lang === 'es' ? "Inicio" : "Home", url: "/" },
    { name: lang === 'es' ? "Áreas de Servicio" : "Service Areas", url: "/service-areas" },
    { name: area.name, url: `/${area.slug}` }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getBreadcrumbSchema(breadcrumbs),
      {
        "@type": "RoofingContractor",
        "name": `EliKay Roofing LLC - ${city.cityName}`,
        "description": city.metaDesc[lang] || city.metaDesc.en,
        "telephone": companyData.phoneRaw,
        "areaServed": {
          "@type": "City",
          "name": city.cityName,
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
          }
        },
        "url": `https://24hr-floodmasters.getmoreappts.com/${area.slug}`
      }
    ]
  };

  return (
    <div className="city-area-root">
      <SEOHead
        title={city.fullTitle[lang] || city.fullTitle.en}
        description={city.metaDesc[lang] || city.metaDesc.en}
        canonicalPath={`/${area.slug}`}
        ogType="article"
        ogImage={city.heroImage}
        schema={schema}
      />

      {/* CITY HERO BANNER */}
      <section className="city-hero">
        <div className="city-hero-bg-wrap">
          <img
            src={city.heroImage}
            alt={`${city.cityName} Texas landmark residential roofing`}
            className="city-hero-bg"
            width="1376"
            height="768"
            fetchpriority="high"
          />
          <div className="city-hero-overlay"></div>
        </div>

        <div className="container city-hero-content">
          <div className="city-hero-badges">
            <span className="status-pill">
              <span className="pulse-dot"></span> {area.county} · {area.dispatchTime}
            </span>
            <span className="city-pop-badge">
              {lang === 'es' ? 'Población:' : 'Pop:'} {area.population}
            </span>
          </div>

          <h1 className="city-hero-title">
            {lang === 'es'
              ? `Servicio Profesional de Techos en ${area.name}`
              : `Professional Roofing Services in ${area.name}`}
          </h1>

          <p className="city-hero-subtitle">
            {lang === 'es'
              ? `EliKay Roofing LLC brinda reemplazo de techos residenciales, tejas arquitectónicas, reparación de goteras y presupuestos gratuitos en ${city.cityName} y vecindarios aledaños.`
              : `EliKay Roofing LLC provides honest roof replacements, architectural shingle upgrades, emergency leak repairs, and free on-site inspections throughout ${city.cityName} and surrounding communities.`}
          </p>

          <div className="city-hero-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency">
              📞 {lang === 'es' ? 'Llamar a Despacho:' : 'Call Dispatch:'} {companyData.phone}
            </a>
            <a href="#quote-form" className="btn-secondary-outline">
              {lang === 'es' ? 'Solicitar Presupuesto Gratuito →' : 'Get Free Local Estimate →'}
            </a>
          </div>

          <div className="city-trust-strip">
            <span>✓ {lang === 'es' ? '13+ Años de Experiencia' : '13+ Years Local Experience'}</span>
            <span>✓ {lang === 'es' ? 'Atención Bilingüe en Español' : 'Bilingual Crew English/Español'}</span>
            <span>✓ {lang === 'es' ? 'Garantía en Mano de Obra' : 'Workmanship Guaranteed'}</span>
            <span>✓ {lang === 'es' ? 'Presupuestos 100% Sin Costo' : 'Free Detailed Estimates'}</span>
          </div>
        </div>
      </section>

      {/* CORE CITY INFORMATION & WEATHER PROFILE */}
      <section className="section-light city-details-section">
        <div className="container">
          <div className="city-grid-layout">
            <div className="city-main-content">
              <span className="eyebrow">{lang === 'es' ? 'Experiencia Local en Texas' : 'Local Texas Craftsmanship'}</span>
              <h2 className="city-section-heading">
                {city.introTitle[lang] || city.introTitle.en}
              </h2>
              <p className="city-p">
                {city.introText1[lang] || city.introText1.en}
              </p>
              <p className="city-p">
                {city.introText2[lang] || city.introText2.en}
              </p>

              {/* LOCAL CLIMATE MATRIX */}
              <div className="city-threats-card">
                <h3>{lang === 'es' ? `Riesgos Climáticos del Techo en ${city.cityName}` : `${city.cityName} Roofing Environmental Challenges`}</h3>
                <div className="threats-grid">
                  {city.weatherThreats.map((threat, idx) => (
                    <div key={idx} className="threat-item">
                      <div className="threat-dot">!</div>
                      <div>
                        <strong>{threat.title[lang] || threat.title.en}</strong>
                        <p>{threat.desc[lang] || threat.desc.en}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SERVICES OFFERED IN THIS CITY */}
              <div className="city-services-block">
                <h3>{lang === 'es' ? `Servicios de Techado en ${city.cityName}` : `Comprehensive Roofing Services in ${city.cityName}`}</h3>
                <div className="city-services-pills">
                  {companyData.services.map((svc, idx) => (
                    <a
                      key={idx}
                      href={`/${svc.slug}`}
                      onClick={(e) => handleNav(`/${svc.slug}`, e)}
                      className="city-service-chip"
                    >
                      <span className="chip-arrow">→</span> {svc.title[lang] || svc.title.en}
                    </a>
                  ))}
                </div>
              </div>

              {/* NEIGHBORHOODS COVERED */}
              <div className="city-neighborhoods-box">
                <h3>{lang === 'es' ? `Comunidades y Colonias Atendidas en ${city.cityName}` : `Neighborhoods & Communities Served in ${city.cityName}`}</h3>
                <div className="neighborhoods-tags">
                  {city.neighborhoodList.map((nh, idx) => (
                    <span key={idx} className="nh-tag">📍 {nh}</span>
                  ))}
                </div>
                {city.zipCodes && city.zipCodes.length > 0 && (
                  <p className="zip-list">
                    <strong>{lang === 'es' ? 'Códigos Postales Principales:' : 'Primary ZIP Codes:'}</strong>{' '}
                    {city.zipCodes.join(', ')}
                  </p>
                )}
              </div>
            </div>

            {/* ESTIMATE SIDEBAR FORM */}
            <div className="city-sidebar">
              <div className="city-form-card" id="quote-form">
                <div className="form-card-badge">{city.cityName} Priority Dispatch</div>
                <h3>{lang === 'es' ? 'Solicite Presupuesto Gratuito' : 'Request Local Estimate'}</h3>
                <p>{lang === 'es' ? 'Inspección profesional de techo sin ningún compromiso.' : 'Free on-site evaluation by an EliKay roofing specialist.'}</p>

                {formSubmitted ? (
                  <div className="form-success-box">
                    <h4>{lang === 'es' ? '¡Solicitud Recibida!' : 'Request Received!'}</h4>
                    <p>{lang === 'es' ? 'Un especialista de EliKay Roofing se comunicará en breve con usted.' : 'An EliKay Roofing specialist will contact you shortly to schedule your inspection.'}</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="city-quote-form">
                    <div className="form-group">
                      <label>{lang === 'es' ? 'Nombre Completo' : 'Full Name'}</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. John Miller"
                      />
                    </div>
                    <div className="form-group">
                      <label>{lang === 'es' ? 'Teléfono de Contacto' : 'Phone Number'}</label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="(713) 000-0000"
                      />
                    </div>
                    <div className="form-group">
                      <label>{lang === 'es' ? 'Servicio Requerido' : 'Service Needed'}</label>
                      <select
                        value={contactForm.service}
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      >
                        <option value="Complete Roof Replacement">Complete Roof Replacement</option>
                        <option value="Emergency Roof Leak Repair">Emergency Roof Leak Repair</option>
                        <option value="Hail & Wind Storm Inspection">Hail & Wind Storm Inspection</option>
                        <option value="Shingle Repair & Matching">Shingle Repair & Matching</option>
                        <option value="Skylight / Flashing Repair">Skylight / Flashing Repair</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>{lang === 'es' ? `Dirección en ${city.cityName}` : `${city.cityName} Street Address`}</label>
                      <input
                        type="text"
                        value={contactForm.address}
                        onChange={(e) => setContactForm({ ...contactForm, address: e.target.value })}
                        placeholder="Street address or subdivision"
                      />
                    </div>
                    <button type="submit" className="btn-emergency btn-block">
                      {lang === 'es' ? 'Enviar y Agendar Inspección' : 'Submit & Schedule Inspection'}
                    </button>
                    <span className="privacy-micro">
                      🔒 {lang === 'es' ? 'Información 100% protegida y confidencial.' : 'Zero spam. Direct local roofing estimates only.'}
                    </span>
                  </form>
                )}

                <div className="sidebar-call-box">
                  <span>{lang === 'es' ? '¿Prefiere hablar directamente?' : 'Prefer to speak directly?'}</span>
                  <a href={`tel:${companyData.phoneRaw}`} className="sidebar-tel">
                    {companyData.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CRAFTSMANSHIP & PHOTO PROOF GALLERY */}
      <section className="section-dark city-gallery-strip">
        <div className="container">
          <div className="city-gallery-header text-center">
            <span className="eyebrow">{lang === 'es' ? 'Evidencia Real en Sitio' : 'On-Site Craftsmanship'}</span>
            <h2>{lang === 'es' ? `Proyectos Recientes de Techado en ${city.cityName}` : `Recent Roofing Projects in ${city.cityName}, TX`}</h2>
            <p>
              {lang === 'es'
                ? `Fotos reales de reparaciones de filtraciones, cambio de madera dañada e instalación de tejas arquitectónicas realizadas en ${city.cityName} y comunidades cercanas.`
                : `Authentic jobsite photography documenting structural decking repairs, synthetic barrier placement, and certified architectural shingle installations throughout ${city.cityName}.`}
            </p>
          </div>

          <div className="city-photo-grid">
            <div className="city-photo-card">
              <div className="city-photo-wrap">
                <img
                  src="/images/elikay/10.jpeg"
                  alt={`Roofing installation on home in ${city.cityName} TX`}
                  className="city-photo-img"
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <span className="city-photo-tag">{city.cityName} Residential</span>
              </div>
              <div className="city-photo-caption">
                <strong>{lang === 'es' ? 'Instalación de Teja Arquitectónica' : 'Architectural Shingle Application'}</strong>
                <p>{lang === 'es' ? 'Clavado de precisión de 6 puntos con goterón metálico perimetral anti-viento.' : 'Certified 6-nail fastening pattern with reinforced perimeter drip edge.'}</p>
              </div>
            </div>

            <div className="city-photo-card">
              <div className="city-photo-wrap">
                <img
                  src="/images/elikay/13.jpeg"
                  alt={`Roof decking and underlayment preparation in ${city.cityName}`}
                  className="city-photo-img"
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <span className="city-photo-tag">{city.cityName} Deck Repair</span>
              </div>
              <div className="city-photo-caption">
                <strong>{lang === 'es' ? 'Reemplazo de Base de Madera Podrida' : 'Structural Decking Replacement'}</strong>
                <p>{lang === 'es' ? 'Sustitución de triplay dañado por madera tratada exterior CDX y barrera sintética.' : 'Removing moisture-rotted plywood and installing heavy-duty synthetic moisture barrier.'}</p>
              </div>
            </div>

            <div className="city-photo-card">
              <div className="city-photo-wrap">
                <img
                  src="/images/elikay/17.jpeg"
                  alt={`Finished watertight roof valley in ${city.cityName}`}
                  className="city-photo-img"
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <span className="city-photo-tag">{city.cityName} Valley Seal</span>
              </div>
              <div className="city-photo-caption">
                <strong>{lang === 'es' ? 'Sellado de Limahoyas y Tapajuntas' : 'Watertight Flashing & Valleys'}</strong>
                <p>{lang === 'es' ? 'Membrana vulcanizada en canales de desagüe para resistir lluvias torrenciales de Texas.' : 'Ice & water leak barrier installed in high-volume valleys before shingle weaving.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-PHASE LOCAL EXECUTION PROCESS */}
      <section className="section-light city-process-section">
        <div className="container">
          <div className="city-process-header text-center">
            <span className="eyebrow">{lang === 'es' ? 'Protocolo Profesional' : 'Step-by-Step Excellence'}</span>
            <h2>{lang === 'es' ? `Cómo Ejecutamos su Proyecto de Techo en ${city.cityName}` : `Our 4-Phase Roofing Execution in ${city.cityName}`}</h2>
            <p>
              {lang === 'es'
                ? 'Garantizamos máxima limpieza, supervisión directa del dueño y materiales de primera calidad en cada fase.'
                : 'From initial inspection to magnetic nail sweep, every project is managed with total precision.'}
            </p>
          </div>

          <div className="city-process-grid">
            <div className="process-card">
              <span className="process-number">01</span>
              <h3>{lang === 'es' ? 'Inspección Gratuita de 18 Puntos' : '18-Point Roof Evaluation'}</h3>
              <p>
                {lang === 'es'
                  ? `Subimos a su techo en ${city.cityName} para inspeccionar pérdida de gránulos, sellos de tuberías, chimeneas y firmeza de la madera estructural.`
                  : `We perform an in-depth physical inspection of shingles, flashing, pipe jacks, and structural decking throughout your ${city.cityName} property.`}
              </p>
            </div>

            <div className="process-card">
              <span className="process-number">02</span>
              <h3>{lang === 'es' ? 'Presupuesto Honesto y Paquete HOA' : 'Transparent Estimate & HOA Packet'}</h3>
              <p>
                {lang === 'es'
                  ? 'Entregamos un presupuesto por escrito con opciones claras de reparación o reemplazo, sin costos ocultos ni presión comercial.'
                  : 'Receive an itemized quote with clear material choices, manufacturer specs, and HOA architectural documentation ready for instant submission.'}
              </p>
            </div>

            <div className="process-card">
              <span className="process-number">03</span>
              <h3>{lang === 'es' ? 'Instalación Certificada en 1 a 2 Días' : 'Precision 1-2 Day Installation'}</h3>
              <p>
                {lang === 'es'
                  ? 'Desmonte limpio, cambio de madera dañada, barrera de vapor sintética y clavado de tejas con patrón certificado de 6 clavos.'
                  : 'Fast, efficient tear-off to bare wood, replacement of deteriorated plywood, synthetic moisture defense, and 130 MPH wind-rated shingle nailing.'}
              </p>
            </div>

            <div className="process-card">
              <span className="process-number">04</span>
              <h3>{lang === 'es' ? 'Barrido Magnético y Garantía' : 'Magnetic Sweep & Warranty Hand-Off'}</h3>
              <p>
                {lang === 'es'
                  ? 'Pasamos rodillos magnéticos por jardines y cocheras para retirar clavos, revisamos cada detalle y entregamos la garantía por escrito.'
                  : 'Multiple magnet sweeps across your driveway and lawn to protect pets and car tires, followed by a final walkthrough and warranty packet.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL FAQS */}
      <section className="section-dark city-faq-section">
        <div className="container">
          <div className="city-faq-header text-center">
            <span className="eyebrow">{lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}</span>
            <h2>{lang === 'es' ? `Dudas Frecuentes sobre Techos en ${city.cityName}` : `Common Roofing Questions in ${city.cityName}, TX`}</h2>
          </div>

          <div className="city-faqs-accordion">
            {city.faqs.map((faq, idx) => (
              <div key={idx} className={`faq-card ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-toggle-btn"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span>{faq.q[lang] || faq.q.en}</span>
                  <span className="faq-icon">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="faq-answer-body">
                    <p>{faq.a[lang] || faq.a.en}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM OTHER CITIES STRIP */}
      <section className="section-light other-cities-strip">
        <div className="container">
          <h3>{lang === 'es' ? 'Otras Comunidades de Texas que Atendemos' : 'Other Greater Houston Communities We Serve'}</h3>
          <div className="cities-links-row">
            {companyData.serviceAreas.filter(a => a.slug !== area.slug).map((other, idx) => (
              <a
                key={idx}
                href={`/${other.slug}`}
                onClick={(e) => handleNav(`/${other.slug}`, e)}
                className="other-city-link"
              >
                {other.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
