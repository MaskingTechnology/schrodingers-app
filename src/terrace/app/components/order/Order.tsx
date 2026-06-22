
import { Column } from '@schrodinger/common/designsystem';

import type { ViewModel as OrderView } from '^/domain/order';

import ProductList from './components/ProductList';
import TotalAmount from './components/TotalAmount';
import SendButton from './components/SendButton';

type Props =
{
    readonly order: OrderView | undefined;
    readonly onRemoveProduct: (index: number) => void;
    readonly onSend: () => void;
};

export default function({ order, onRemoveProduct, onSend }: Props)
{
    if (order === undefined) return null;

    return <Column>
        <ProductList products={order.products} onRemove={onRemoveProduct}></ProductList>
        <TotalAmount amount={order.total}></TotalAmount>
        <SendButton disabled={order.products.length === 0} onSend={onSend}></SendButton>
    </Column>;
}
