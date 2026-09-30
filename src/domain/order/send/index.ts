
import { type Order, type State } from '../definitions';
import retrieveByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

import persist from './persist';

export default async function (number: string): Promise<Order>
{
    const document = await retrieveByNumber(number);

    const state: State = 'SENT';

    await persist(document._id, state);

    return toModel({ ...document, state });
}
