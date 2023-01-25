import { Grid, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { IOrderItem } from '../../types/order';
import { OrderItem } from './order-item';

interface IProductListProps {
  orderItems: IOrderItem[];
  setOrderItems: Dispatch<SetStateAction<IOrderItem[]>>;
  readonly?: boolean;
}

export const OrderItemList = ({
  orderItems,
  setOrderItems,
  readonly = false,
}: IProductListProps) => {
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
        {orderItems.map((orderItem, index) => {
          return (
            <OrderItem
              readonly={readonly}
              key={`${orderItem.product.id}-${index}`}
              orderItem={orderItem}
              onChangeSubtotal={(order) => {
                setOrderItems((prev) => {
                  const clone = [...prev];
                  clone[index] = {
                    ...clone[index],
                    quantity: order.quantity,
                    subtotal: order.subtotal,
                  };
                  return clone;
                });
              }}
            />
          );
        })}
      </Grid>
    </>
  );
};
