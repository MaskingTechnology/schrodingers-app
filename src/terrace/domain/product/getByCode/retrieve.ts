
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Document } from '../definitions';

export default async function (code: string): Promise<Document | undefined>
{
    return database.findOne<Document>(COLLECTION, { code });
}
