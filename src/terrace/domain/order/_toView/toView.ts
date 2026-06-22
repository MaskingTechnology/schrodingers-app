
import type { OrderData, OrderView } from '../types';

import getProductByCode from '../../product/getByCode';

export default async function toView(data: OrderData): Promise<OrderView>
{
    const { _id: $0, productRefs: $1, ...viewData } = data;

    const productViews = await Promise.all(
        data.productRefs.map(ref => getProductByCode(ref.productCode))
    );

    const products = data.productRefs.map((ref, index) => {
        return { entryId: ref.entryId, ...productViews[index]};
    });

    return { ...viewData, products };
}
