
import { subscribe } from '@schrodinger/common/domain/order/sent';

import create from './create';

export default async function execute(): Promise<void>
{
    return subscribe(create);
}

execute();
