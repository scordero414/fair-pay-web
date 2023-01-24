import {
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import { NewOrder } from '../../../components/order/new-order';

const CreateOrder = () => {
  
  return (
    <Grid container justifyContent='center' pt={5}>
      <Grid item xs={10} md={8} textAlign='center'>
        <Typography variant='h3' color='secondary'>
          New Order
        </Typography>
        <Stack spacing={2} pt={2}>
          <TextField
            fullWidth
            label='Table'
            color='secondary'
            variant='outlined'
            type='number'
            InputProps={{
              inputProps: { min: 1 },
            }}
          />
          <Typography variant='subtitle1' color='secondary' textAlign='initial'>
            Customers:
          </Typography>
          <Grid item container justifyContent='space-between'>
            <NewOrder />
            <Grid
              item
              md={12}
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
          {/* <TextField
            fullWidth
            label='Table'
            color='secondary'
            variant='outlined'
          /> */}
        </Stack>
      </Grid>
      {/* <Button
    color='secondary'
    onClick={() => setIsShowingAlert((prev) => !prev)}
  >
    Click here to show Alert
  </Button> */}
    </Grid>
  );
};
export default CreateOrder;
