
import { useState, useEffect } from 'react';

import type { Product } from '^/domain/product';
import getAllProducts from '^/domain/product/getAll';

export default function useProducts()
{
    const [products, setProducts] = useState<Product[]>([]);

    const refresh = async () =>
    {
        const allProducts = await getAllProducts();

        setProducts(allProducts);
    };

    useEffect(() => { refresh(); }, []);

    return { products, refresh };
}
