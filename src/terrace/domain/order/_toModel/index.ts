
import type { Data, Order } from '../definitions';

import extractModelData from './extractModelData';
import getProductModels from './getProductModels';
import mapProducts from './mapProducts';

export default async function run(data: Data): Promise<Order>
{
    const modelData = extractModelData(data);
    const productModels = await getProductModels(data);
    const products = mapProducts(data, productModels);

    return { ...modelData, products };
}
