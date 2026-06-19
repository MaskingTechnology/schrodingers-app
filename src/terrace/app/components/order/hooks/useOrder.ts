
import { useState, useEffect } from 'react';

import type { ViewModel as OrderView } from '^/domain/order';
import createOrder from '^/domain/order/create';
import addProductToOrder from '^/domain/order/addProduct';
import sendOrder from '^/domain/order/send';

export default function useOrder(tableNumber: string)
{
    const [order, setOrder] = useState<OrderView | undefined>(undefined);

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

    const removeProduct = async (index: number) =>
    {
        // Implement me
    };

    const send = async () =>
    {
        if (order === undefined) return;

        const updatedOrder = await sendOrder(order.number);

        setOrder(updatedOrder);
    };

    useEffect(() => { create(); }, []);

    return { order, create, addProduct, removeProduct, send };
}
