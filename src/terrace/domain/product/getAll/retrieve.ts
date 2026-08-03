
import { database } from '@schrodinger/common/integrations';

import { COLLECTION } from '../definitions';
import type { ProductData } from '../types';

export default async function retrieveAll(): Promise<ProductData[]>
{
    return database.find(COLLECTION, {}) as Promise<ProductData[]>;
}
