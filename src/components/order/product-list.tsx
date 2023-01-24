import { Grid, Typography } from '@mui/material';
import React from 'react';
import { IProduct } from '../../types/order';
import { ProductItem } from './product-item';

interface IProductListProps {
  products: IProduct[];
}

export const ProductList = ({ products }: IProductListProps) => {
  return (
    <>
      <Typography
        variant='subtitle1'
        color='primary'
        textAlign='initial'
        pt={2}
        fontWeight={900}
      >
        Products:
      </Typography>
      <Grid
        item
        container
        justifyContent='space-between'
        alignItems='center'
        pt={2}
      >
        {products.map((product, index) => {
          return (
            <ProductItem key={`${product.id}-${index}`} product={product} />
          );
        })}
      </Grid>
    </>
  );
};
