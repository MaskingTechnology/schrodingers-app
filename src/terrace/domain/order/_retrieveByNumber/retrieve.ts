
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Data } from '../definitions';

export default async function retrieve(number: string): Promise<Data | undefined>
{
    return database.findOne<Data>(COLLECTION, { number });
}
