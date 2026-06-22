
import { Card } from '@schrodinger/common/designsystem';

import type { OrderView } from '^/domain/order';

import ProductList from './ProductList';
import CloseButton from './CloseButton';

type Props =
{
    readonly order: OrderView;
    readonly onProductPrepared: (orderNumber: string, entryId: string) => void;
    readonly onClose: (orderNumber: string) => void;
};

export default function({ order, onProductPrepared, onClose }: Props)
{
    return <Card>
        <header>Order #{order.number}</header>
        <main>
            <ProductList
                products={order.products}
                onPrepared={(entryId: string) => onProductPrepared(order.number, entryId)}>
            </ProductList>
        </main>
        <footer>
            <CloseButton onClose={() => onClose(order.number)}></CloseButton>
        </footer>
    </Card>;
}
