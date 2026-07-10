
import type { Order } from '../definitions';
import retrieveByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

export default async function run(number: string): Promise<Order>
{
    const data = await retrieveByNumber(number);

    return toModel(data);
}
