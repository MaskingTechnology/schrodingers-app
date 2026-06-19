
import type { ViewModel as ProductView } from '^/domain/product';

type Props =
{
    readonly product: ProductView;
    readonly onRemove: () => void;
};

export default function({ product, onRemove }: Props)
{
    return <div className='row'>
        <span>{product.name}</span>
        <button onClick={onRemove}>Remove</button>
    </div>;
}
