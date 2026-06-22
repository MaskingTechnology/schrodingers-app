
import { Layout, Header } from './application';
import { OrderList, useOrders } from './order';

export default function()
{
    const { orders, productPrepared, close } = useOrders();

    return <Layout
        header={<Header></Header>}
        main={<OrderList orders={orders} onProductPrepared={productPrepared} onClose={close}></OrderList>}>
    </Layout>
}
