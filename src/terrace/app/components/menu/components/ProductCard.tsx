
import { Card, Row, Title, Text, Image, Button } from '@schrodinger/common/designsystem';

import { toCurrency } from '@schrodinger/common/utilities';

import type { ProductView } from '^/domain/product';

type Props =
{
    readonly product: ProductView;
    readonly onOrder: (productCode: string) => void;
};

export default function({ product, onOrder }: Props)
{
    return <Card>
        <Title type='sub'>{product.name}</Title>
        <Image src={product.imageUrl}></Image>
        <Row>
            <Text weight='bold'>{toCurrency(product.price)}</Text>
            <Button type='primary' onClick={() => onOrder(product.code)}>Add to order</Button>
        </Row>
    </Card>;
}
