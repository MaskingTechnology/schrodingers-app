
import type { DataModel, ViewModel } from '../types';

import getProductByCode from '../../product/getByCode';

export default async function toView(data: DataModel): Promise<ViewModel>
{
    const products = await Promise.all(data.productCodes.map(code => getProductByCode(code)));

    const { _id: $0, productCodes: $1, ...viewData } = data;

    return { ...viewData, products };
}
