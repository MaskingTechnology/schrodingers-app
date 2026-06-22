
import { DesignSystem } from '@schrodinger/common/designsystem';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DesignSystem>
      <App></App>
    </DesignSystem>
  </React.StrictMode>
);
