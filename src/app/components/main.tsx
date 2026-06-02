
import React from 'react';
import ReactDOM from 'react-dom/client';

import ContactPage from './contact/Page';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContactPage />
  </React.StrictMode>
);
