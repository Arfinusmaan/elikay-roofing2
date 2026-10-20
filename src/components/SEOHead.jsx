import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyData } from '../data/companyData';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://elikay-roofing1.getmoreappts.com').replace(/\/$/, '');
export const NOINDEX = import.meta.env.VITE_NOINDEX === 'true';

export default function SEOHead({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  ogImage = '/images/brand/logo.png',
  schema,
  noindex = false
}) {
  const safeTitle = typeof title === 'string' ? title : (title?.en || companyData.name || '');
  const fullTitle = safeTitle.length <= 60 ? safeTitle : safeTitle.slice(0, 57) + '...';
  const cleanDesc = typeof description === 'string' ? description : (description?.en || '');
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;
  const safeOgImage = ogImage || '/images/elikay/Elikay-Logo.jpeg';
  const fullOgImage = safeOgImage.startsWith('http') ? safeOgImage : `${SITE_URL}${safeOgImage.startsWith('/') ? '' : '/'}${safeOgImage}`;

  const isNoIndex = NOINDEX || noindex;

  return (
    <Helmet>
      {/* Title & Description */}
      <title>{fullTitle}</title>
      <meta name="description" content={cleanDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots Directive */}
      {isNoIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={cleanDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={companyData.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={cleanDesc} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
