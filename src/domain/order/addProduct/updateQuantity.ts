
import { type ProductOrder } from '../definitions';

export default function (productOrder: ProductOrder): ProductOrder
{
    return { ...productOrder, quantity: productOrder.quantity + 1};
}
