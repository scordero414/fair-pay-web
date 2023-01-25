import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import { NewOrder } from '../../../components/order/new-order';
import { IAddNewCheckPayload, IOrder } from '../../../types/order';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewCheck } from '../../../slices/checks-slice';
import { useRouter } from 'next/router';
import { ConfirmationDialog } from '../../../components/dialogs/confirmation-dialog';

const CreateOrder = () => {
  const [tableNumber, setTableNumber] = useState<number>(1);

  const dispatch = useDispatch();
  const [orders, setOrders] = useState<IOrder[]>([]);

  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const router = useRouter();

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        handleClickOpenModal();
        return false;
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]); // Add any state variables to dependencies array if needed.

  const onSaveCheck = () => {
    const myuuid = uuidv4();
    const newCheck: IAddNewCheckPayload = {
      check: {
        id: myuuid,
        active: true,
        orders,
        table: tableNumber,
        total: orders.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.total;
        }, 0),
      },
    };
    dispatch(addNewCheck(newCheck));
  };

  const onAddNewOrder = () => {
    const myuuid = uuidv4();
    setOrders((prev) => [
      { id: myuuid, orderItems: [], total: 0, tip: 0 },
      ...prev,
    ]);
  };

  return (
    <Grid container justifyContent='center' pt={5}>
      <Grid item xs={11} md={8} textAlign='center'>
        <Typography variant='h3' color='secondary'>
          New Order
        </Typography>
        <Stack spacing={2} pt={2}>
          <TextField
            fullWidth
            value={tableNumber}
            label='Table'
            color='secondary'
            variant='outlined'
            type='number'
            InputProps={{
              inputProps: { min: 1 },
            }}
            onChange={(e) => setTableNumber(+e.target.value)}
          />
          <Typography variant='subtitle1' color='secondary' textAlign='initial'>
            Customers:
          </Typography>
          <Grid item container justifyContent='space-between'>
            {orders.map((order, index) => {
              return (
                <NewOrder
                  clientNumber={index + 1}
                  key={`order-${order.id}`}
                  onSave={(check) => {
                    setOrders((prev) => {
                      const clone = [...prev];
                      clone[index] = {
                        ...clone[index],
                        ...check,
                      };
                      return clone;
                    });
                  }}
                />
              );
            })}
            <Grid
              item
              xs={12}
              mt={2}
              sx={{
                height: 100,
                border: 2,
                borderColor: (theme) => theme.palette.warning.main,
                borderRadius: 2,
                borderStyle: 'dashed',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={onAddNewOrder}
            >
              <AddIcon sx={{ width: 30, height: 30, color: 'warning.main' }} />
              <Typography
                sx={{
                  color: 'warning.main',
                  fontWeight: 900,
                }}
              >
                Add
              </Typography>
            </Grid>
          </Grid>

          <Grid item pb={5} pt={3}>
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              onClick={onSaveCheck}
            >
              Save
            </Button>
          </Grid>
        </Stack>
      </Grid>
      <ConfirmationDialog
        open={openModal}
        title={'Do you want to exit without saving?'}
        description={
          'If you do not save now you will lose everything you have done in your order'
        }
        cancelMessage={'Quit anyway'}
        acceptMessage={'Save'}
        handleCancel={() => router.back()}
        handleAccept={() => {
          onSaveCheck();
          router.back();
        }}
      />
    </Grid>
  );
};
export default CreateOrder;
