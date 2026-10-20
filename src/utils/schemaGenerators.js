import { companyData } from '../data/companyData';
import { SITE_URL } from '../components/SEOHead';

export function getLocalBusinessSchema() {
  const citiesServed = companyData.serviceAreas.map(a => typeof a === 'string' ? a : a.name);

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#organization`,
    "name": companyData.name,
    "legalName": companyData.legalName,
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/elikay/Elikay-Logo.jpeg`,
    "image": `${SITE_URL}/images/elikay/hero_residential.jpg`,
    "telephone": "+1-970-778-7951",
    "email": companyData.email,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "areaServed": citiesServed.map(city => ({
      "@type": "AdministrativeArea",
      "name": city
    })),
    "knowsAbout": [
      "Residential Roof Replacement",
      "Emergency Roof Leak Repair",
      "Architectural Shingle Roofing",
      "Storm & Hail Damage Roof Restoration",
      "Attic Ventilation & Ridge Vent Installation",
      "Seamless Gutters & Drainage Systems",
      "Fascia, Soffit & Exterior Siding",
      "Insurance Claim Roof Inspection"
    ]
  };
}

export function getServiceSchema(service, slug) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/${slug}#service`,
    "name": service.title,
    "description": service.summary,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#organization`,
      "name": companyData.name,
      "telephone": "+1-970-778-7951"
    },
    "serviceType": service.shortTitle || service.title,
    "areaServed": companyData.serviceAreas.map(a => ({
      "@type": "AdministrativeArea",
      "name": typeof a === 'string' ? a : a.name
    }))
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

export function getFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}
