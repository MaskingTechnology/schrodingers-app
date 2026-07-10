
import { Data, ProductData } from '../definitions';

export default function updateProductEntry(data: Data, entry: ProductData): ProductData[]
{
    const products = [...data.products];
    const product = { ...entry, quantity: entry.quantity + 1 };
    const index = products.findIndex(product => product.code === entry.code);

    products.splice(index, 1, product);

    return products;
}
