
import type { OrderData, OrderView } from '../types';

export default function toView(data: OrderData): OrderView
{
    const { _id: $, ...viewData } = data;

    return viewData;
}
