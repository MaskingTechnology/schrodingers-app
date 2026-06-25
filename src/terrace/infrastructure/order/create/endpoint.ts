
import { api } from '@schrodinger/common/infrastructure';

import { URL } from './definitions';
import create from '../../../domain/order/create';

api.post(URL, async (request, response) =>
{
    const tableNumber = request.body.tableNumber;

    const orderView = await create(tableNumber);

    return response.status(200).send(orderView);
});
