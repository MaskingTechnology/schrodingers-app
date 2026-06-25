
import { api } from '@schrodinger/common/infrastructure';

import { URL } from './definitions';
import getOpenByTable from '../../../domain/order/getOpenByTable';

api.get(URL, async (request, response) =>
{
    const tableNumber = String(request.query.tableNumber);

    const orderView = await getOpenByTable(tableNumber);

    if (orderView === undefined)
    {
        return response.status(404).send();
    }
    
    return response.status(200).send(orderView);
});
