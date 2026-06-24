
import type { ProductView } from '../types';

import _toView from '../_toView';

import retrieve from './retrieve';

export default async function getByCode(): Promise<ProductView[]>
{
    const list = await retrieve();

    return list.map(data => _toView(data));
}
