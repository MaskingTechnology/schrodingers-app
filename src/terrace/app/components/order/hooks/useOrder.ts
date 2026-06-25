
import { useState, useEffect } from 'react';

import type { OrderView } from '^/domain/order';
import getOpenOrderByTable from '^/infrastructure/order/getOpenByTable/request';
import createOrder from '^/infrastructure/order/create/request';
import addProductToOrder from '^/infrastructure/order/addProduct/request';
import removeProductFromOrder from '^/infrastructure/order/removeProduct/request';
import sendOrder from '^/infrastructure/order/send/request';

export default function useOrder(tableNumber: string)
{
    const [order, setOrder] = useState<OrderView | undefined>(undefined);

    const initialize = async () =>
    {
        const currentOrder = await getOpenOrderByTable(tableNumber);

        if (currentOrder === undefined)
        {
            return create();
        }

        setOrder(currentOrder);
    };

    const create = async () =>
    {
        const createdOrder = await createOrder(tableNumber);

        setOrder(createdOrder);
    };

    const addProduct = async (productCode: string) =>
    {
        if (order === undefined) return;

        const updatedOrder = await addProductToOrder(order.number, productCode);

        setOrder(updatedOrder);
    };

    const removeProduct = async (entryId: string) =>
    {
        if (order === undefined) return;

        const updatedOrder = await removeProductFromOrder(order.number, entryId);

        setOrder(updatedOrder);
    };

    const send = async () =>
    {
        if (order === undefined) return;

        await sendOrder(order.number);

        create();
    };

    useEffect(() => { initialize(); }, []);

    return { order, create, addProduct, removeProduct, send };
}
