
import { DesignSystem } from '@schrodinger/common/designsystem';

import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DesignSystem>
    <App tableNumber='42'></App>
  </DesignSystem>
);
