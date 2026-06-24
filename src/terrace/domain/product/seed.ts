
import { database } from '@schrodinger/common/integrations';

import { COLLECTION } from './definitions';
import type { ProductData } from './types';

const products: ProductData[] =
[
    { _id: '000001', code: 'BB-001', name: 'Bottle of beer', price: 4.25, imageUrl: '' },
    { _id: '000002', code: 'GB-001', name: 'Glass of beer', price: 3.50, imageUrl: '' },
    { _id: '000003', code: 'BW-001', name: 'Bottle of wine', price: 15.00, imageUrl: '' },
    { _id: '000004', code: 'GW-001', name: 'Glass of wine', price: 3.50, imageUrl: '' },
    { _id: '000005', code: 'CR-001', name: 'Regular coffee', price: 2.75, imageUrl: '' },
    { _id: '000006', code: 'TR-001', name: 'Regular thee', price: 2.75, imageUrl: '' }
];

products.forEach(product => database.insert(COLLECTION, product));
