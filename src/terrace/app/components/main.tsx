
import { DesignSystem } from '@schrodinger/common/designsystem';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DesignSystem>
      <App tableNumber='42'></App>
    </DesignSystem>
  </React.StrictMode>
);
