
import type { SentEvent } from '@schrodinger/common/domain/order';
import { generateId } from '@schrodinger/common/utilities';

import { DataModel } from '../types';

export default function createData(eventData: SentEvent): DataModel
{
    const _id = generateId();
    const { number, tableNumber } = eventData;
    const openedAt = new Date();
    const state = 'OPEN';
    const products = eventData.products.map(product =>
    {
        const { code, name } = product;
        const prepared = false;

        return { code, name, prepared };
    });

    return { _id, number, tableNumber, openedAt, state, products };
}
