
import { Layout, Header } from './application';
import { Menu, useProducts } from './menu';
import { Order, useOrder } from './order';

type Props =
{
    readonly tableNumber: string;
};

export default function({ tableNumber }: Props)
{
    const { products } = useProducts();
    const { order, addProduct, removeProduct, send } = useOrder(tableNumber);

    return <Layout
        header={<Header tableNumber={tableNumber}></Header>}
        main={<Menu products={products} onOrder={addProduct}></Menu>}
        aside={<Order order={order} onRemoveProduct={removeProduct} onSend={send}></Order>}>
    </Layout>
}
