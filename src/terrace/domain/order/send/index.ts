
import { publish } from '@schrodinger/common/domain/order/sent';

import type { Order, State } from '../definitions';
import retrieveByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

import persist from './persist';

export default async function run(number: string): Promise<Order>
{
    const data = await retrieveByNumber(number);

    const state: State = 'SENT';

    await persist(data._id, state);

    const view = await toModel({ ...data, state });

    await publish(view);

    return view;
}
