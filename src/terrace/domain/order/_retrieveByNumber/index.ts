
import type { Data } from '../definitions';

import retrieve from './retrieve';
import UnknownNumber from './UnknownNumber';

export default async function run(number: string): Promise<Data>
{
    const data = await retrieve(number);

    if (data === undefined)
    {
        throw new UnknownNumber(number);
    }

    return data;
}
