
import { api } from '@schrodinger/common/infrastructure';

import prepareProduct from '../../../domain/order/prepareProduct';

import { URL } from './definitions';

api.post(URL, async (request, response) =>
{
    const orderNumber = request.body.orderNumber;
    const entryId = request.body.entryId;

    const orderView = await prepareProduct(orderNumber, entryId);

    return response.status(200).send(orderView);
});
