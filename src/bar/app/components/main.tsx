
import ReactDOM from 'react-dom/client';

import { DesignSystem } from '@schrodinger/common/designsystem';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DesignSystem>
    <App></App>
  </DesignSystem>
);
