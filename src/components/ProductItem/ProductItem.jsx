/* eslint-disable @next/next/no-img-element */
import { AspectRatio, Box, Card, Skeleton, Typography } from '@mui/joy';

import styles from './ProductItem.module.css';
import { Rating } from '@mui/material';

export default function ProductItem({ product }) {
  return (
    <Card
      className={styles['product-item-container']}
      variant="soft"
      data-id={product._id}
    >
      <AspectRatio ratio="1/1">
        <a href={product && `http://localhost:3000/${product.id}`}>
          <img
            src={product.imageUrl}
            alt="product-image"
            className={styles['product-item-image']}
          />
        </a>
      </AspectRatio>
      <Typography className={styles['product-item-title']}>
        {product.name}
      </Typography>
      <Box>
        <Rating name="product-rating" value={product.rating} readOnly />
      </Box>

      <Typography className={styles['product-item-price']}>
        {`$${product.price}`}
      </Typography>
    </Card>
  );
}
