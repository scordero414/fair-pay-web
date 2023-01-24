import { Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { IProduct } from '../../types/order';

interface IProductProps {
  product: IProduct;
  subtotal: number;
}

export const Product = ({ product: { name, image }, subtotal }: IProductProps) => {
  return (
    <Grid item container justifyContent='space-between' alignItems='center'>
      <Grid item container xs={9}>
        <Grid item xs={2}>
          <Typography variant='subtitle1' color='primary' textAlign='initial'>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Divider
            sx={{borderStyle: 'dotted'}}
            component='li'
          />
        </Grid>
        <Grid item xs={1}>
          <Typography variant='subtitle1' color='primary' textAlign='initial'>
            ${subtotal}
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={3}>
        <Image src={image} alt={'product-image'} width={80} height={80} />
      </Grid>
    </Grid>
  );
};
