import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { IProduct } from '../../../types/order';

interface IProductProps {
  product: IProduct;
  subtotal: number;
}

export const Product = ({
  product: { name, image },
  subtotal,
}: IProductProps) => {
  return (
    <Grid item container justifyContent='space-between' alignItems='center'>
      <Grid item container xs={9}>
        <Grid item xs={6} md={4}>
          <Typography variant='subtitle1' color='primary' textAlign='initial'>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={3} md={7}>
          <Divider sx={{ borderStyle: 'dotted' }} component='li' />
        </Grid>
        <Grid item xs={1}>
          <Typography variant='subtitle1' color='primary' textAlign='initial'>
            ${subtotal}
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={2.5} md={3}>
        <Box
          sx={{
            position: 'relative',
            width: { xs: 50, md: 80 },
            height: { xs: 50, md: 80 },
          }}
        >
          <Image src={image} alt={'product-image'} fill style={{objectFit: 'contain'}} />
        </Box>
      </Grid>
    </Grid>
  );
};
