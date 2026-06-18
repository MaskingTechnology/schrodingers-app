
import type { ViewModel } from '../types';

import toView from '../toView';

import createData from './createData';
import persist from './persist';

export default async function create(): Promise<ViewModel>
{
    const data = createData();

    await persist(data);

    return toView(data);
}
