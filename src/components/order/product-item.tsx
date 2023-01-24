import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { IProduct, OrderItem } from '../../types/order';
import { Product } from './product';

interface IProductItem {
  product: IProduct;
}

export const ProductItem = ({ product }: IProductItem) => {
  const [productTotal, setProductTotal] = useState<OrderItem>({
    product,
    quantity: 1,
    subtotal: product.price * 1,
  });

  const handleChangeQuantity = (quantity: number) => {
    setProductTotal((prev) => ({ ...prev, quantity, subtotal: quantity * prev.product.price }));
  };

  return (
    <>
      <Grid item container xs={9.5}>
        <Product product={product} subtotal={productTotal.subtotal} />
      </Grid>
      <Grid item xs={2}>
        <TextField
          fullWidth
          label='Quantity'
          color='primary'
          defaultValue={productTotal.quantity}
          variant='standard'
          type='number'
          onChange={(e) => {
            handleChangeQuantity(+e.target.value);
          }}
          sx={{
            input: { color: (theme) => theme.palette.primary.main },
          }}
          InputProps={{
            inputProps: { min: 1 },
          }}
        />
      </Grid>
    </>
  );
};
