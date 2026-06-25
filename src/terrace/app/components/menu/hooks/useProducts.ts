
import { useState, useEffect } from 'react';

import type { ProductView } from '^/domain/product';
import getAllProducts from '^/infrastructure/product/getAll/request';

export default function useProducts()
{
    const [products, setProducts] = useState<ProductView[]>([]);

    const refresh = async () =>
    {
        const allProducts = await getAllProducts();

        setProducts(allProducts);
    };

    useEffect(() => { refresh(); }, []);

    return { products, refresh };
}
