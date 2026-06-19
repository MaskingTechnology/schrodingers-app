
import type { ViewModel as ProductView } from '^/domain/product';

type Props =
{
    readonly product: ProductView;
    readonly onOrder: (code: string) => void;
};

export default function({ product, onOrder }: Props)
{
    return <div className='card'>
        <header>
            {product.name}
        </header>
        <main>
            <img src={product.imageUrl} />
        </main>
        <footer>
            <span>{product.price}</span>
            <button onClick={() => onOrder(product.code)}>Order</button>
        </footer>
    </div>;
}
