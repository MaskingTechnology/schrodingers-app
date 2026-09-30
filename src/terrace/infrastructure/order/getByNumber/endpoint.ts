
import { api } from '@schrodinger/common/infrastructure';

import { URL } from './definitions';
import getByNumber from '../../../domain/order/getByNumber';

api.get(URL, async (request, response) =>
{
    const number = String(request.query.number);

    const orderView = await getByNumber(number);

    return response.status(200).send(orderView);
});
