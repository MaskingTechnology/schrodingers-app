
import type { ViewModel } from '../types';

import toView from '../toView';

import retrieve from './retrieve';
import UnknownCode from './UnknownCode';

export default async function getByCode(code: string): Promise<ViewModel>
{
    const data = await retrieve(code);

    if (data === undefined)
    {
        throw new UnknownCode(code);
    }

    return toView(data);
}
