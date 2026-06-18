
import type { ViewModel, State } from '../types';

import _getByNumber from '../_getByNumber';
import toView from '../toView';

import persist from './persist';

export default async function send(number: string): Promise<ViewModel>
{
    const data = await _getByNumber(number);

    const state: State = 'SENT';

    await persist(data, state);

    const view = await toView({ ...data, state });

    return view;
}
