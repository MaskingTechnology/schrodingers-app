
import type { OrderData } from '../types';

import retrieve from './retrieve';
import UnknownNumber from './UnknownNumber';

export default async function getByNumber(number: string): Promise<OrderData>
{
    const data = await retrieve(number);

    if (data === undefined)
    {
        throw new UnknownNumber(number);
    }

    return data;
}
