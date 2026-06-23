
import { Layout, Header } from './application';
import { OrderList, useOrders } from './order';

export default function()
{
    const { orders, refresh, productPrepared, close } = useOrders();

    return <Layout
        header={<Header onRefresh={refresh}></Header>}
        main={<OrderList orders={orders} onProductPrepared={productPrepared} onClose={close}></OrderList>}>
    </Layout>
}
