
import { api } from '@schrodinger/common/infrastructure';

import getByCode from '../../../domain/product/getByCode';

import { URL } from './definitions';

api.get(URL, async (request, response) =>
{
    const code = String(request.query.code);

    const productView = await getByCode(code);

    return response.status(200).send(productView);
});
