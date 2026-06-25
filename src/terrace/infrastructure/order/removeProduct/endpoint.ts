
import { api } from '@schrodinger/common/infrastructure';

import { URL } from './definitions';
import removeProduct from '../../../domain/order/removeProduct';

api.post(URL, async (request, response) =>
{
    const orderNumber = request.body.orderNumber;
    const entryId = request.body.entryId;

    const orderView = await removeProduct(orderNumber, entryId);

    return response.status(200).send(orderView);
});
