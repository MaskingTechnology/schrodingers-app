
import { type Document } from '../definitions';

import retrieve from './retrieve';
import UnknownNumber from './UnknownNumber';

export default async function (number: string): Promise<Document>
{
    const document = await retrieve(number);

    if (document === undefined)
    {
        throw new UnknownNumber(number);
    }

    return document;
}
