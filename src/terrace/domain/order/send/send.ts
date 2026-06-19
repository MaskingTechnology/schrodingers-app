
import type { ViewModel, State } from '../types';

import _getByNumber from '../_getByNumber';
import _toView from '../_toView';

import persist from './persist';
import publish from './publish';

export default async function send(number: string): Promise<ViewModel>
{
    const data = await _getByNumber(number);

    const state: State = 'SENT';

    await persist(data, state);

    const view = await _toView({ ...data, state });

    await publish(view);

    return view;
}
