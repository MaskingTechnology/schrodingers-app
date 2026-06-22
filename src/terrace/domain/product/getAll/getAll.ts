
import type { ProductView } from '../types';

import _toView from '../_toView';

import retrieveAll from './retrieveAll';

export default async function getByCode(): Promise<ProductView[]>
{
    const list = await retrieveAll();

    return list.map(data => _toView(data));
}
