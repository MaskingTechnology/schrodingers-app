
import { useState, useEffect } from 'react';

import type { OrderView } from '^/domain/order';
import getOrderByTable from '^/domain/order/getByTable';
import createOrder from '^/domain/order/create';
import addProductToOrder from '^/domain/order/addProduct';
import sendOrder from '^/domain/order/send';

export default function useOrder(tableNumber: string)
{
    const [order, setOrder] = useState<OrderView | undefined>(undefined);

    const initialize = async() =>
    {
        const currentOrder = await getOrderByTable(tableNumber);

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
        // Implement me
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
