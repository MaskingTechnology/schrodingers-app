
import { Column } from '@schrodinger/common/designsystem';

import type { Order } from '^/domain/order';

import ProductList from './components/ProductList';
import TotalAmount from './components/TotalAmount';
import SendButton from './components/SendButton';

type Props =
{
    readonly order: Order | undefined;
    readonly onRemoveProduct: (productCode: string) => void;
    readonly onSend: () => void;
};

export default function({ order, onRemoveProduct, onSend }: Props)
{
    if (order === undefined) return null;

    return <Column>
        <ProductList products={order.products} onRemove={onRemoveProduct}></ProductList>
        <TotalAmount amount={order.totalPrice}></TotalAmount>
        <SendButton disabled={order.products.length === 0} onSend={onSend}></SendButton>
    </Column>;
}
