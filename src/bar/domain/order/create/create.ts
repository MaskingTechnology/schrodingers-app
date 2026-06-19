
import { ViewModel as TerraceViewModel } from '@schrodinger/terrace/domain/order';

import createData from './createData';
import persist from './persist';

export default async function create(terraceOrder: TerraceViewModel): Promise<void>
{
    const data = createData(terraceOrder);

    return persist(data);
}
