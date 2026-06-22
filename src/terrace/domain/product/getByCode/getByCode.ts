
import type { ProductView } from '../types';

import _toView from '../_toView';

import retrieve from './retrieve';
import UnknownCode from './UnknownCode';

export default async function getByCode(code: string): Promise<ProductView>
{
    const data = await retrieve(code);

    if (data === undefined)
    {
        throw new UnknownCode(code);
    }

    return _toView(data);
}
