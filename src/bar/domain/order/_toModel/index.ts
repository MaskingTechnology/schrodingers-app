
import type { Data, Order } from '../definitions';

export default function run(data: Data): Order
{
    const { _id: $, ...viewData } = data;

    return viewData;
}
