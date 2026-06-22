
import React from 'react';
import ReactDOM from 'react-dom/client';

import { DesignSystem } from '@schrodinger/common/designsystem';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DesignSystem>
        <App></App>
      </DesignSystem>
  </React.StrictMode>
);
