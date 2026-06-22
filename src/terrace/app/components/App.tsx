
import { Layout, Header } from './application';
import { Menu, useProducts } from './menu';
import { Order, useOrder } from './order';

export default function()
{
    const { products } = useProducts();
    const { order, addProduct, removeProduct, send } = useOrder('42');

    return <Layout
        header={<Header></Header>}
        main={<Menu products={products} onOrder={addProduct}></Menu>}
        aside={<Order order={order} onRemoveProduct={removeProduct} onSend={send}></Order>}>
    </Layout>
}
