"use client";

import { Product } from '../../../types/products';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { allProducts, four } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const Products = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts)
      setProduct(fetchedProduct);
    }
    fetchproduct();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <div key={product._id} className="border rounded-lg shadow-md hover:shadow-lg transition duration-200">
            {product.productImage && (
              <img
                src={urlFor(product.productImage).url()}
                alt={product.title}
                className="w-full h-48 object-contain p-4"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-500 mt-1">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;