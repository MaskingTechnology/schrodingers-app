
import type { Order } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';

export default async function run(): Promise<Order[]>
{
    const list = await retrieve();

    return list.map(data => toModel(data));
}
