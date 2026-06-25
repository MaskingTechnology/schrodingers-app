
import { api } from '@schrodinger/common/infrastructure';

import { URL } from './definitions';
import addProduct from '../../../domain/order/addProduct';

api.post(URL, async (request, response) =>
{
    const orderNumber = request.body.orderNumber;
    const productCode = request.body.productCode;

    const orderView = await addProduct(orderNumber, productCode);

    return response.status(200).send(orderView);
});
