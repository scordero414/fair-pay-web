import {
  Autocomplete,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IOrder, IOrderItem, IProduct } from '../../types/order';
import { OrderItemList } from './order-item-list';
import { Tip } from './tip/tip';

interface INewOrderProps {
  order: IOrder;
  clientNumber: number;
  onSave: (check: IOrder) => void;
  readonly?: boolean;
}

export const NewOrder = ({
  order,
  clientNumber,
  onSave,
  readonly = false,
}: INewOrderProps) => {
  const [orderItems, setOrderItems] = useState<IOrderItem[]>(
    order.orderItems || []
  );

  const [total, setTotal] = useState<number>(0);
  const [tip, setTip] = useState<number>(order.tip || 0);

  useEffect(() => {
    setTotal(
      orderItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.subtotal;
      }, 0)
    );
  }, [orderItems]);

  useEffect(() => {
    if (total > 0 || tip > 0) {
      onSave({ orderItems, total: total + tip, tip });
    }
  }, [total, tip]);

  const onSelectProduct = (product: IProduct) => {
    setOrderItems((prev) => [
      {
        product,
        quantity: 1,
        subtotal: product.price * 1,
        id: new Date().getMilliseconds(),
      },
      ...prev,
    ]);
  };

  const onIncludeTip = (tip: number) => {
    setTip(tip);
  };

  return (
    <Grid
      item
      container
      md={12}
      mt={3}
      sx={{
        minHeight: 100,
        border: 2,
        borderColor: (theme) => theme.palette.primary.main,
        backgroundColor: (theme) => theme.palette.secondary.light,
        borderRadius: 2,
        borderStyle: 'dashed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid item xs={10}>
        <Typography
          sx={{
            width: '100%',
            color: 'primary.main',
            fontWeight: 900,
            pt: 2,
          }}
        >
          Client #{clientNumber}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        {!readonly ? (
          <Autocomplete
            options={
              [
                {
                  id: 'dc873b03-7353-4ff8-9fb2-51720ba28586',
                  name: 'Burger',
                  image: '/products/burger.jpeg',
                  price: 20.0,
                },
                {
                  id: 'dc873b03-7353-4ff8-9fb2-51720ba28589',
                  name: 'Coca Cola',
                  image: '/products/coca-cola.jpg',
                  price: 2.0,
                },
              ].filter(
                (value) =>
                  !orderItems.find((order) => order.product.id === value.id)
              ) as IProduct[]
            }
            getOptionLabel={(option) => option.name}
            id='auto-complete'
            autoComplete
            onChange={(_, value) => {
              value && onSelectProduct(value);
            }}
            PaperComponent={({ children }) => (
              <Paper style={{ color: 'black' }}>{children}</Paper>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Type the product'
                variant='standard'
                sx={{
                  input: { color: (theme) => theme.palette.primary.main },
                }}
              />
            )}
          />
        ) : null}
        <OrderItemList
          orderItems={orderItems}
          setOrderItems={setOrderItems}
          readonly={readonly}
        />

        <Tip tip={tip} onIncludeTip={onIncludeTip} readonly={readonly} />
        <Grid item xs={12} textAlign='center'>
          <Typography
            variant='h4'
            sx={{
              width: '100%',
              color: 'primary.main',
              fontWeight: 900,
              py: 2,
            }}
          >
            Total: ${total + tip}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
