import { Grid, Typography } from '@mui/material';
import React from 'react';
import { ICheck } from '../../../types/order';
import image from '../../../img/postit.png';
import { useRouter } from 'next/router';
import { routesConstants } from '../../../constants/routes-constants';

interface ICheckProps {
  check: ICheck;
}

export const Check = ({ check }: ICheckProps) => {

  const router = useRouter();

  return (
    <Grid
      item
      container
      xs={10}
      md={2.9}
      xl={2}
      mt={4}
      sx={{
        height: 320,
        backgroundImage: `url(${image.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={() => {
        router.push({
          pathname: routesConstants.CREATE_ORDER,
          query: {
            checkId: check.id,
          },
        });
      }}
    >
      <Grid item xs={10} textAlign='center'>
        <Typography
          variant='subtitle2'
          sx={{
            color: 'primary.main',
          }}
        >
          Order ID: <br /> {check.id}
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: 'primary.main',
            fontWeight: 900,
          }}
        >
          Table # {check.table}
        </Typography>
        <Typography
          variant='h4'
          mt={5}
          sx={{
            color: 'primary.main',
            fontWeight: 900,
          }}
        >
          Total: $ {check.total}
        </Typography>
      </Grid>
    </Grid>
  );
};
