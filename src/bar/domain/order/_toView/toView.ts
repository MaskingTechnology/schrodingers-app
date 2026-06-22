
import type { OrderData, OrderView } from '../types';

export default function toView(data: OrderData): OrderView
{
    const { _id: $0, products: $1, ...viewData } = data;

    const products = data.products.filter(product => product.prepared === false);

    return { ...viewData, products };
}
