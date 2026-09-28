
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Document } from '../definitions';

export default async function (document: Document): Promise<void>
{
    return database.insert<Document>(COLLECTION, document);
}
