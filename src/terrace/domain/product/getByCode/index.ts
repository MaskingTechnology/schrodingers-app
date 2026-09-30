
import { type Product } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';
import UnknownCode from './UnknownCode';

export default async function (code: string): Promise<Product>
{
    const document = await retrieve(code);

    if (document === undefined)
    {
        throw new UnknownCode(code);
    }

    return toModel(document);
}
