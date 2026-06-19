
import { generateId } from '@schrodinger/common/utilities';

import { ViewModel as TerraceViewModel } from '@schrodinger/terrace/domain/order';

import { DataModel } from '../types';

export default function createData(terraceOrder: TerraceViewModel): DataModel
{
    const _id = generateId();
    const { number, tableNumber } = terraceOrder;
    const openedAt = new Date();
    const state = 'OPEN';
    const products = terraceOrder.products.map(product =>
    {
        const { code, name } = product;
        const prepared = false;

        return { code, name, prepared };
    });

    return { _id, number, tableNumber, openedAt, state, products };
}
