
import ProductList from './components/ProductList';
import TotalAmount from './components/TotalAmount';
import SendButton from './components/SendButton';

import useOrder from './hooks/useOrder';

export default function()
{
    const { order, removeProduct, send } = useOrder('12');

    if (order === undefined)
    {
        return null;
    }

    return <div className='column'>
        <ProductList products={order.products} onRemove={removeProduct}></ProductList>
        <TotalAmount amount={order.total}></TotalAmount>
        <SendButton onSend={send}></SendButton>
    </div>;
}
