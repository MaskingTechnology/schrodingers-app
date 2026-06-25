
import { api } from '@schrodinger/common/infrastructure';

import { URL } from './definitions';
import send from '../../../domain/order/send';

api.post(URL, async (request, response) =>
{
    const number = request.body.number;

    const orderView = await send(number);

    return response.status(200).send(orderView);
});
