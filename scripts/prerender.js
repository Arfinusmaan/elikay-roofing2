import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const distSsrDir = path.join(rootDir, 'dist-ssr');

// List of all site routes to statically prerender
const routes = [
  // Core routes
  '/',
  '/about-us',
  '/service-areas',
  '/gallery',
  '/contact-us',
  '/blog',
  '/privacy-policy',
  '/terms',
  '/404',

  // 8 Primary Roofing Services
  '/roof-repairs',
  '/complete-roof-replacements',
  '/shingle-roofing',
  '/roof-leak-repairs',
  '/storm-damage-repairs',
  '/attic-venting-installation',
  '/gutter-cleaning-drainage',
  '/fascia-soffit-siding',

  // Service Areas
  '/roof-repair-houston',
  '/roof-replacement-katy',
  '/cypress-roofing-services',
  '/waller-roof-repairs',
  '/hempstead-roofing-services',
  '/spring-roof-repairs',
  '/woodlands-roofing-contractor',
  '/pearland-roof-restoration',
  '/galveston-roofing-repairs',

  // Blog Articles
  '/blog/signs-of-roof-leak-texas',
  '/blog/architectural-vs-3-tab-shingles',
  '/blog/texas-attic-ventilation-guide',
  '/blog/identifying-hail-damage-roof'
];

async function prerender() {
  console.log('[prerender] Starting SSR build bundle...');
  
  // 1. Build SSR bundle using Vite
  await build({
    root: rootDir,
    build: {
      ssr: path.join(rootDir, 'src/entry-server.jsx'),
      outDir: distSsrDir,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          format: 'esm'
        }
      }
    }
  });

  const ssrBundlePath = path.join(distSsrDir, 'entry-server.js');
  const { render } = await import(`file://${ssrBundlePath.replace(/\\/g, '/')}`);

  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  const siteUrl = (process.env.VITE_SITE_URL || 'https://elikay-roofing1.getmoreappts.com').replace(/\/$/, '');

  console.log(`[prerender] Rendering ${routes.length} routes with siteUrl: ${siteUrl}`);

  for (const url of routes) {
    const helmetContext = {};
    const { html: appHtml } = render(url, helmetContext);
    const { helmet } = helmetContext;

    let pageHtml = template;

    // Remove default template title and description cleanly (including multiline)
    pageHtml = pageHtml.replace(/<title[\s\S]*?<\/title>/i, '');
    pageHtml = pageHtml.replace(/<meta\s+name=["']description["'][\s\S]*?\/>/i, '');

    // Extract title, meta, canonical link, and JSON-LD scripts from appHtml
    let cleanedAppHtml = appHtml;
    const extractedHeadTags = [];

    // Extract <title>
    const titleMatch = cleanedAppHtml.match(/<title[^>]*>.*?<\/title>/i);
    if (titleMatch) {
      extractedHeadTags.push(titleMatch[0]);
      cleanedAppHtml = cleanedAppHtml.replace(titleMatch[0], '');
    }

    // Extract all <meta ... />
    const metaMatches = cleanedAppHtml.match(/<meta\s+[^>]*\/?>/gi) || [];
    for (const m of metaMatches) {
      extractedHeadTags.push(m);
      cleanedAppHtml = cleanedAppHtml.replace(m, '');
    }

    // Extract canonical <link rel="canonical" ... />
    const canonicalMatches = cleanedAppHtml.match(/<link\s+[^>]*rel=["']canonical["'][^>]*\/?>/gi) || [];
    for (const c of canonicalMatches) {
      extractedHeadTags.push(c);
      cleanedAppHtml = cleanedAppHtml.replace(c, '');
    }

    // Extract <script type="application/ld+json">...</script>
    const jsonLdMatches = cleanedAppHtml.match(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi) || [];
    for (const s of jsonLdMatches) {
      extractedHeadTags.push(s);
      cleanedAppHtml = cleanedAppHtml.replace(s, '');
    }

    // Inject extracted tags into <head>
    if (extractedHeadTags.length > 0) {
      const headString = extractedHeadTags.join('\n    ');
      pageHtml = pageHtml.replace('</head>', `    ${headString}\n  </head>`);
    }

    // Inject App HTML into #root
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${cleanedAppHtml}</div>`
    );

    // Determine output file path
    let filePath;
    if (url === '/') {
      filePath = path.join(distDir, 'index.html');
    } else if (url === '/404') {
      filePath = path.join(distDir, '404.html');
    } else {
      const routeDir = path.join(distDir, url.replace(/^\//, ''));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      filePath = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(filePath, pageHtml, 'utf-8');
    console.log(`  ✓ Rendered ${url} -> ${path.relative(distDir, filePath)}`);
  }

  // Generate sitemap.xml
  const sitemapRoutes = routes.filter(r => r !== '/404');
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes.map(r => `  <url>
    <loc>${siteUrl}${r === '/' ? '' : r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r === '/' ? 'daily' : r.startsWith('/blog') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r === '/' ? '1.0' : r.startsWith('/emergency') || r.includes('water-mitigation') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`[prerender] ✓ Generated dist/sitemap.xml with ${sitemapRoutes.length} URLs`);

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
  console.log(`[prerender] ✓ Generated dist/robots.txt with Sitemap reference`);

  // Clean up dist-ssr directory
  try {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
  } catch (e) {
    // ignore
  }

  console.log('[prerender] Static prerendering complete successfully!');
}

prerender().catch(err => {
  console.error('[prerender] Error during prerendering:', err);
  process.exit(1);
});
