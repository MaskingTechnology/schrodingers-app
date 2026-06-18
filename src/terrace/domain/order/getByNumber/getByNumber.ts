
import type { ViewModel } from '../types';

import _getByNumber from '../_getByNumber';
import toView from '../toView';

export default async function getByNumber(number: string): Promise<ViewModel>
{
    const data = await _getByNumber(number);

    return toView(data);
}
