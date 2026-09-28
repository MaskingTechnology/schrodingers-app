
import { type Event } from '@schrodinger/common/domain/order/sent';
import { generateId } from '@schrodinger/common/utilities';

import { type Document } from '../definitions';

export default function (eventData: Event): Document
{
    const _id = generateId();
    const { number, tableNumber } = eventData;
    const openedAt = new Date();
    const state = 'OPEN';
    const products = eventData.products.map(product =>
    {
        const entryId = generateId();
        const { code, name, quantity } = product;
        const prepared = false;

        return { entryId, code, name, quantity, prepared };
    });

    return { _id, number, tableNumber, openedAt, state, products };
}
