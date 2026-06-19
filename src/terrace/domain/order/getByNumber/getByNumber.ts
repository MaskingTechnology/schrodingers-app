
import type { ViewModel } from '../types';

import _getByNumber from '../_getByNumber';
import _toView from '../_toView';

export default async function getByNumber(number: string): Promise<ViewModel>
{
    const data = await _getByNumber(number);

    return _toView(data);
}
