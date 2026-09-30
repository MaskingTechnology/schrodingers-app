
import { type Product } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';

export default async function (): Promise<Product[]>
{
    const documents = await retrieve();

    return documents.map(document => toModel(document));
}
