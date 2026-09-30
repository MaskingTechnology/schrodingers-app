
import { useState, useEffect } from 'react';

import { type Product } from '^/domain/product';
import getAllProducts from '^/infrastructure/product/getAll/request';

export default function ()
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
