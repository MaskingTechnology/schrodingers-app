
import { api } from '@schrodinger/common/infrastructure';

import getOpen from '../../../domain/order/getOpen';

import { URL } from './definitions';

api.get(URL, async (request, response) =>
{
    const orderView = await getOpen();

    return response.status(200).send(orderView);
});
