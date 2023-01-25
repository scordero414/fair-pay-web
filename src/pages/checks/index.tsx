import { Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { routesConstants } from '../../constants/routes-constants';
import { selectChecksState } from '../../slices/checks-slice';
import { ICheck } from '../../types/order';
import image from '../../img/postit.png';

const Checks = () => {
  const router = useRouter();

  // const [isLoading, setIsLoading] = useState(false);
  // const [isShowingAlert, setIsShowingAlert] = useState(false);

  // useIsLoadingModal(isLoading, 'Loading...');
  // useSnackbar(isShowingAlert, 'Testing out the snackbar', 'success');

  const { checks } = useSelector(selectChecksState);

  const [activeChecks, setActiveChecks] = useState<ICheck[]>([]);

  useEffect(() => {
    setActiveChecks(checks.filter((check) => check.active));
  }, []);

  return (
    <Grid container justifyContent='center' pt={5}>
      <Grid item xs={10} md={4}>
        <Button
          fullWidth
          variant='contained'
          color='secondary'
          onClick={() => {
            router.push(routesConstants.CREATE_ORDER);
          }}
        >
          Create new Order
        </Button>
      </Grid>
      <Grid item xs={10} md={10} mt={5} textAlign='center'>
        <Typography
          variant='h4'
        
          sx={{
            color: 'secondary.main',
            fontWeight: 900
          }}
        >
        Active checks
        </Typography>
      </Grid>
      <Grid item container justifyContent='space-around' >
        {activeChecks.length > 0
          ? activeChecks.map((check) => {
            return (
              <Grid
                key={check.id}
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
                onClick={() => {router.push({
                  pathname: routesConstants.CREATE_ORDER,
                  query: {
                    checkId: check.id
                  }
                });}}
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
          })
          : null}
      </Grid>
    </Grid>
  );
};
export default Checks;
