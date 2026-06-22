
import { Grid } from '@schrodinger/common/designsystem';

import type { OrderView } from '^/domain/order';

import OrderCard from './components/OrderCard';

type Props =
{
    readonly orders: OrderView[];
    readonly onProductPrepared: (orderNumber: string, productId: string) => void;
    readonly onClose: (orderNumber: string) => void;
};

export default function({ orders, onProductPrepared, onClose }: Props)
{
    if (orders.length === 0)
    {
        return <span>(no orders)</span>;
    }

    return <Grid>
        {
            orders.map(order =>
                <OrderCard
                    order={order}
                    onProductPrepared={onProductPrepared}
                    onClose={onClose}
                    key={order.number}
                ></OrderCard>
            )
        }
    </Grid>;
}
