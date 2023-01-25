import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import { NewOrder } from '../../../components/order/new-order';
import { IAddNewCheckPayload, ICheck, IOrder } from '../../../types/order';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewCheck,
  selectChecksState,
  updateCheck,
} from '../../../slices/checks-slice';
import { useRouter } from 'next/router';
import { ConfirmationDialog } from '../../../components/dialogs/confirmation-dialog';
import { useSnackbar } from '../../../hooks/use-snackbar';
import { routesConstants } from '../../../constants/routes-constants';

const CreateOrder = () => {
  const router = useRouter();

  const { checks } = useSelector(selectChecksState);

  const { checkId } = router.query;

  const [readonly, setReadonly] = useState<boolean>(false);

  useEffect(() => {
    if (router.isReady) {
      setReadonly(JSON.parse((router.query.readonly as string)));
    }
  }, [router.isReady]);

  const [checkUpdatedMessage, setCheckUpdatedMessage] = useState<string>('');

  const [tableNumber, setTableNumber] = useState<number>(1);

  const dispatch = useDispatch();
  const [orders, setOrders] = useState<IOrder[]>([]);

  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  useSnackbar(Boolean(checkUpdatedMessage), checkUpdatedMessage, 'success');

  useEffect(() => {
    if (checkId) {
      const loadedCheck = checks.find(
        (check) => check.id === checkId
      ) as ICheck;
      // setActiveCheck(loadedCheck);
      setTableNumber(loadedCheck.table);
      setOrders(loadedCheck.orders);
    }
  }, [checkId]);

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
  }, [router]);

  const onSaveCheck = () => {
    const newCheck: IAddNewCheckPayload = {
      check: {
        id: '',
        active: true,
        orders,
        table: tableNumber,
        total: orders.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.total;
        }, 0),
      },
    };

    if (checkId) {
      newCheck.check.id = checkId as string;
      dispatch(updateCheck(newCheck));
      setCheckUpdatedMessage('Check updated successfully!');
      router.replace(routesConstants.CHECKS);
      return;
    }

    const myuuid = uuidv4();
    newCheck.check.id = myuuid;
    dispatch(addNewCheck(newCheck));
    setCheckUpdatedMessage('Check added successfully!');
    router.replace(routesConstants.CHECKS);
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
              inputProps: { min: 1},
              readOnly: readonly
            }}
            onChange={(e) => setTableNumber(+e.target.value)}
          />
          <Typography variant='subtitle1' color='secondary' textAlign='initial'>
            Customers:
          </Typography>
          <Grid item container justifyContent='space-between' pb={3}>
            {!readonly ? (
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
                <AddIcon
                  sx={{ width: 30, height: 30, color: 'warning.main' }}
                />
                <Typography
                  sx={{
                    color: 'warning.main',
                    fontWeight: 900,
                  }}
                >
                  Add
                </Typography>
              </Grid>
            ) : null}
            {orders.map((order, index) => {
              return (
                <NewOrder
                  order={order}
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
                  readonly={readonly as unknown as boolean}
                />
              );
            })}
          </Grid>

          {!readonly ? (
            <Grid item pb={5}>
              <Button
                fullWidth
                variant='contained'
                color='secondary'
                onClick={onSaveCheck}
              >
                {checkId ? 'Update' : 'Save'}
              </Button>
            </Grid>
          ) : null}
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
        handleCancel={() => {
          router.replace(routesConstants.CHECKS);
        }}
        handleAccept={() => {
          onSaveCheck();
          router.replace(routesConstants.CHECKS);
        }}
      />
    </Grid>
  );
};
export default CreateOrder;
