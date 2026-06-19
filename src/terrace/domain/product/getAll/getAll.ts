
import type { ViewModel } from '../types';

import _toView from '../_toView';

import retrieveAll from './retrieveAll';

export default async function getByCode(): Promise<ViewModel[]>
{
    const list = await retrieveAll();

    return list.map(data => _toView(data));
}
