
import type { State } from '../types';

import _getByNumber from '../_getByNumber';

import persist from './persist';

export default async function close(number: string): Promise<void>
{
    const data = await _getByNumber(number);

    const state: State = 'CLOSED';

    await persist(data, state);
}
