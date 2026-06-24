
import type { OrderView, State } from '../types';

import _getByNumber from '../_getByNumber';
import _toView from '../_toView';

import persist from './persist';

export default async function send(number: string): Promise<OrderView>
{
    const data = await _getByNumber(number);

    const state: State = 'SENT';

    await persist(data._id, state);

    return _toView({ ...data, state });
}
