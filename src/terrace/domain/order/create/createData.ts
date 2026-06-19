
import { generateId } from '@schrodinger/common/utilities';

import type { DataModel } from '../types';

import generateNumber from './generateNumber';

export default function createData(tableNumber: string): DataModel
{
    const _id = generateId();
    const createdAt = new Date();
    const number = generateNumber();
    const state = 'CREATED';
    const productCodes: string[] = [];
    const total = 0;

    return { _id, createdAt, number, tableNumber, state, productCodes, total };
}
