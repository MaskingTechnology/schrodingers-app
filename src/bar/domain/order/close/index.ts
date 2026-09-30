
import { type State } from '../definitions';
import retrieveByNumber from '../_retrieveByNumber';

import persist from './persist';

export default async function (number: string): Promise<void>
{
    const document = await retrieveByNumber(number);

    const state: State = 'CLOSED';

    await persist(document._id, state);
}
