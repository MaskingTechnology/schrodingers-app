
import { Grid, Text } from '@schrodinger/common/designsystem';

import type { Order } from '^/domain/order';

import OrderCard from './components/OrderCard';

type Props =
{
    readonly orders: Order[];
    readonly onProductPrepared: (orderNumber: string, productId: string) => void;
    readonly onClose: (orderNumber: string) => void;
};

export default function({ orders, onProductPrepared, onClose }: Props)
{
    if (orders.length === 0)
    {
        return <Text type='secondary'>(no orders)</Text>;
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
