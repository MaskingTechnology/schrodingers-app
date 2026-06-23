
import { generateId } from '@schrodinger/common/utilities';

import type { OrderData, ProductRef } from '../types';

import generateNumber from './generateNumber';

export default function createData(tableNumber: string): OrderData
{
    const _id = generateId();
    const createdAt = new Date();
    const number = generateNumber();
    const state = 'OPEN';
    const productRefs: ProductRef[] = [];
    const total = 0;

    return { _id, createdAt, number, tableNumber, state, productRefs, total };
}
