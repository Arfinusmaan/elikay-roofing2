import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url, helmetContext = {}) {
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <App initialPath={url} />
    </HelmetProvider>
  );
  return { html };
}
