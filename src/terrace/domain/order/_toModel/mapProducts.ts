
import type { Product as ProductModel } from '~/product';

import type { Product, Data } from '../definitions';

export default function mapProducts(data: Data, productModels: ProductModel[]): Product[]
{
    return productModels.map((productModel, index) =>
    {
        const productData = data.products[index];

        const code = productModel.code;
        const name = productModel.name;
        const price = productModel.price;
        const quantity = productData.quantity;

        return { code, name, price, quantity };
    });
}
