
import { Grid } from '@schrodinger/common/designsystem';

import type { ViewModel as OrderView } from '^/domain/order';

import Order from './components/OrderCard';

type Props =
{
    readonly orders: OrderView[];
    readonly onProductPrepared: (orderNumber: string, productIndex: number) => void;
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
                <Order
                    order={order}
                    onProductPrepared={onProductPrepared}
                    onClose={onClose}
                    key={order.number}
                ></Order>
            )
        }
    </Grid>;
}
