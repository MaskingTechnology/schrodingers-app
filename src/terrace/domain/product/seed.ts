
import { database } from '@schrodinger/common/integrations';

import type { DataModel } from './types';

const products: DataModel[] =
[
    { _id: '000001', code: 'BB-001', name: 'Bottle of beer', description: '...', image: '' },
    { _id: '000002', code: 'GB-001', name: 'Glass of beer', description: '...', image: '' },
    { _id: '000003', code: 'BW-001', name: 'Bottle of wine', description: '...', image: '' },
    { _id: '000004', code: 'GW-001', name: 'Glass of wine', description: '...', image: '' },
    { _id: '000005', code: 'CR-001', name: 'Regular coffee', description: '...', image: '' },
    { _id: '000006', code: 'TR-001', name: 'Regular thee', description: '...', image: '' }
]

products.forEach(product => database.insert('products', product));
