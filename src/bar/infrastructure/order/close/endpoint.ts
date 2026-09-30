
import { api } from '@schrodinger/common/infrastructure';

import close from '../../../domain/order/close';

import { URL } from './definitions';

api.post(URL, async (request, response) =>
{
    const number = request.body.number;

    await close(number);

    return response.status(201).send();
});
