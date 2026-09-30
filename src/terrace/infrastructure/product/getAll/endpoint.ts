
import { api } from '@schrodinger/common/infrastructure';

import getAll from '../../../domain/product/getAll';

import { URL } from './definitions';

api.get(URL, async (request, response) =>
{
    const productViews = await getAll();

    return response.status(200).send(productViews);
});
