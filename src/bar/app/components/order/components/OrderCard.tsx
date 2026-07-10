
import { Card, Title, Button } from '@schrodinger/common/designsystem';

import type { Order } from '^/domain/order';

import ProductList from './ProductList';

type Props =
{
    readonly order: Order;
    readonly onProductPrepared: (orderNumber: string, entryId: string) => void;
    readonly onClose: (orderNumber: string) => void;
};

export default function({ order, onProductPrepared, onClose }: Props)
{
    const products = order.products.filter(product => product.prepared === false);

    return <Card>
        <Title type='sub'>Order #{order.number} | Table {order.tableNumber}</Title>
        <ProductList
            products={products}
            onPrepared={(entryId: string) => onProductPrepared(order.number, entryId)}>
        </ProductList>
        <Button type='primary' onClick={() => onClose(order.number)}>Close order</Button>
    </Card>;
}
