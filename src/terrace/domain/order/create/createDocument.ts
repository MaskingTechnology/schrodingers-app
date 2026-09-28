
import { generateId } from '@schrodinger/common/utilities';

import { type Document, type ProductOrder } from '../definitions';

import generateNumber from './generateNumber';

export default function (tableNumber: string): Document
{
    const _id = generateId();
    const createdAt = new Date();
    const number = generateNumber();
    const state = 'OPEN';
    const products: ProductOrder[] = [];
    const totalPrice = 0;

    return { _id, createdAt, number, tableNumber, state, products, totalPrice };
}
