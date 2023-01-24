import {
  Autocomplete,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { IProduct } from '../../types/order';
import { ProductList } from './product-list';

// interface INewOrderProps {}
// props: INewOrderProps


export const NewOrder = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const onSelectProduct = (product: IProduct) => {
    setProducts((prev) => [product, ...prev]);
  };

  return (
    <Grid
      item
      container
      md={12}
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
          Client #1
        </Typography>
      </Grid>
      <Grid item xs={10}>
        {/* <TextField
          fullWidth
          label='Product'
          color='primary'
          variant='standard'
          sx={{
            input: { color: (theme) => theme.palette.primary.main },
          }}
        /> */}
        <Autocomplete
          // {...defaultProps}
          options={[
            {
              id: 'dc873b03-7353-4ff8-9fb2-51720ba28586',
              name: 'Burger',
              image: '/products/burger.jpeg',
              price: 20.0
            },
          ] as IProduct[]}
          getOptionLabel={(option) => option.name}
          id='auto-complete'
          autoComplete
          includeInputInList
          onChange={(_,value)=> {value && onSelectProduct(value);}}
          PaperComponent={({ children }) => (
            <Paper style={{ color: 'black' }}>{children}</Paper>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label='autoComplete'
              variant='standard'
              sx={{
                input: { color: (theme) => theme.palette.primary.main },
              }}
            />
          )}
        />
        <ProductList products={products} />
        <TextField
          fullWidth
          label='Product'
          color='primary'
          variant='standard'
          type='number'
          sx={{
            input: { color: (theme) => theme.palette.primary.main },
          }}
          InputProps={{
            inputProps: { min: 1 },
          }}
        />
      </Grid>
    </Grid>
  );
};
