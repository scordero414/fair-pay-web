import { Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IOrderItem } from '../../types/order';
import { Product } from './product/product';

interface IProductItem {
  orderItem: IOrderItem;
  onChangeSubtotal: (orderItem: IOrderItem) => void;
  readonly?: boolean;
}

export const OrderItem = ({
  orderItem,
  onChangeSubtotal,
  readonly = false,
}: IProductItem) => {
  const [subtotal, setSubtotal] = useState<IOrderItem>(orderItem);

  useEffect(() => {
    onChangeSubtotal(subtotal);
  }, [subtotal]);

  const handleChangeQuantity = (quantity: number) => {
    setSubtotal((prev) => {
      const newSubtotal = quantity * prev.product.price;
      return { ...prev, quantity, subtotal: newSubtotal };
    });
  };

  return (
    <>
      <Grid item container xs={9.5}>
        <Product product={orderItem.product} subtotal={subtotal.subtotal} />
      </Grid>
      <Grid item xs={2}>
        <TextField
          disabled={readonly}
          fullWidth
          label='Quantity'
          color='primary'
          defaultValue={orderItem.quantity}
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
