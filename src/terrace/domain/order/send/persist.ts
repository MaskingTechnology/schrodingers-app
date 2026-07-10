
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Data, type State } from '../definitions';

export default async function persist(_id: string, state: State): Promise<void>
{
    return database.updateOne<Data>(COLLECTION, { _id }, { state });
}
