
import { useState, useEffect } from 'react';

import type { OrderView } from '^/domain/order';
import getOpenOrders from '^/infrastructure/order/getOpen/request';
import prepareProduct from '^/infrastructure/order/prepareProduct/request';
import closeOrder from '^/infrastructure/order/close/request';

export default function useOrders()
{
    const [orders, setOrders] = useState<OrderView[]>([]);

    const refresh = async () =>
    {
        const openOrders = await getOpenOrders();

        setOrders(openOrders);
    };

    const productPrepared = async (orderNumber: string, entryId: string) =>
    {
        const updatedOrder = await prepareProduct(orderNumber, entryId);

        const orderIndex = orders.findIndex(order => order.number === orderNumber);
        const updatedOrders = orders.with(orderIndex, updatedOrder);

        setOrders(updatedOrders);
    };

    const close = async (orderNumber: string) =>
    {
        await closeOrder(orderNumber);

        const updatedOrders = orders.filter(order => order.number !== orderNumber);

        setOrders(updatedOrders);
    };

    useEffect(() => { refresh(); }, []);

    return { orders, refresh, productPrepared, close };
}
