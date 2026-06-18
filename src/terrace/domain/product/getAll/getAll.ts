
import type { ViewModel } from '../types';

import toView from '../toView';

import retrieveAll from './retrieveAll';

export default async function getByCode(): Promise<ViewModel[]>
{
    const list = await retrieveAll();

    return list.map(data => toView(data));
}
