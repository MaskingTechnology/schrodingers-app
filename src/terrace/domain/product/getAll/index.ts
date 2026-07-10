
import type { Product } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';

export default async function run(): Promise<Product[]>
{
    const list = await retrieve();

    return list.map(data => toModel(data));
}
