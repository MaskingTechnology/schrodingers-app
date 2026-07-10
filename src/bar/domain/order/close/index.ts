
import type { State } from '../definitions';
import retrieveByNumber from '../_retrieveByNumber';

import persist from './persist';

export default async function run(number: string): Promise<void>
{
    const data = await retrieveByNumber(number);

    const state: State = 'CLOSED';

    await persist(data._id, state);
}
