
import { publish as publishEvent, type EventData } from '@schrodinger/common/domain/order/sent';

export default async function publish(data: EventData): Promise<void>
{
    return publishEvent(data);
}
