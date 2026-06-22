
import { database } from '@schrodinger/common/integrations';

import { COLLECTION } from '../definitions';
import type { ProductData } from '../types';

export default async function retrieve(code: string): Promise<ProductData | undefined>
{
    return database.findOne<ProductData>(COLLECTION, { code });
}
