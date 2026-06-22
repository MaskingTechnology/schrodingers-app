
import { useState, useEffect } from 'react';

import { ViewModel as OrderView } from '^/domain/order';
import getOpenOrders from '^/domain/order/getOpen';
import preparedProduct from '^/domain/order/preparedProduct';
import closeOrder from '^/domain/order/close';

export default function useOrders()
{
    const [orders, setOrders] = useState<OrderView[]>([]);

    const refresh = async () =>
    {
        const openOrders = await getOpenOrders();

        setOrders(openOrders);
    };

    const productPrepared = async (orderNumber: string, productIndex: number) =>
    {
        await preparedProduct(orderNumber, productIndex);

        refresh();
    };

    const close = async (orderNumber: string) =>
    {
        await closeOrder(orderNumber);

        refresh();
    };

    useEffect(() => { refresh(); }, []);

    return { orders, productPrepared, close };
}
