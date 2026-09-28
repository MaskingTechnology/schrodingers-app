
import { type Order } from '../definitions';
import retrieveByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

export default async function (number: string): Promise<Order>
{
    const document = await retrieveByNumber(number);

    return toModel(document);
}
