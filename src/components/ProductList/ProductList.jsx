import { Sheet } from '@mui/joy';

import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.css';
import { Pagination, PaginationItem } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

const product = {
  id: 1,
  imageUrl:
    'https://s13emagst.akamaized.net/products/60453/60452176/images/res_391df89bcb38fcb051a48ba6877d78dc.jpg',
  name: 'Asternut igienic pentru pisici Miau Miau, Tofu Lavanda, 6L',
  price: 38.99,
  rating: 3,
};

export default function ProductList({ products, currentPage, totalPages }) {
  return (
    <Sheet
      variant="soft"
      color="primary"
      className={styles['product-list-container']}
    >
      <div className={styles['product-items-container']}>
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        className={styles['pagination']}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            href={`/products?page=${item.page}`}
            {...item}
          />
        )}
      />
    </Sheet>
  );
}
