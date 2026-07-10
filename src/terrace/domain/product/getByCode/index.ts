
import type { Product } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';
import UnknownCode from './UnknownCode';

export default async function run(code: string): Promise<Product>
{
    const data = await retrieve(code);

    if (data === undefined)
    {
        throw new UnknownCode(code);
    }

    return toModel(data);
}

export { UnknownCode };
