
import { type Document, type Product } from '../definitions';

export default function (document: Document): Product
{
    const { _id: $, ...product } = document;

    return product;
}
