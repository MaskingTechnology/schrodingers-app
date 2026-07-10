
import getProductByCode from '../../product/getByCode';

import type { Data, Order } from '../definitions';

export default async function run(data: Data): Promise<Order>
{
    const { _id: $0, productRefs: $1, ...viewData } = data;

    const productViews = await Promise.all(
        data.productRefs.map(ref => getProductByCode(ref.productCode))
    );

    const products = data.productRefs.map((ref, index) => 
    {
        return { entryId: ref.entryId, ...productViews[index]};
    });

    return { ...viewData, products };
}
