
import { Card } from '@schrodinger/common/designsystem';

import type { ViewModel as OrderView } from '^/domain/order';

import ProductList from './ProductList';
import CloseButton from './CloseButton';

type Props =
{
    readonly order: OrderView;
    readonly onProductPrepared: (orderNumber: string, productIndex: number) => void;
    readonly onClose: (orderNumber: string) => void;
};

export default function({ order, onProductPrepared, onClose }: Props)
{
    return <Card>
        <header>Order #{order.number}</header>
        <main>
            <ProductList
                products={order.products}
                onPrepared={(productIndex: number) => onProductPrepared(order.number, productIndex)}>
            </ProductList>
        </main>
        <footer>
            <CloseButton onClose={() => onClose(order.number)}></CloseButton>
        </footer>
    </Card>;
}
