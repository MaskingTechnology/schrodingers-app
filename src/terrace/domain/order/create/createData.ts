
import { generateId } from '@schrodinger/common/utilities';

import type { DataModel } from '../types';

import generateNumber from './generateNumber';

export default function createData(): DataModel
{
    const _id = generateId();
    const createdAt = new Date();
    const number = generateNumber();
    const state = 'CREATED';
    const productCodes: string[] = [];

    return { _id, createdAt, number, state, productCodes };
}
