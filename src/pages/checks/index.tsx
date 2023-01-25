import { Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { routesConstants } from '../../constants/routes-constants';
import { selectChecksState } from '../../slices/checks-slice';
import { ICheck } from '../../types/order';

import { useGetChecksQuery } from '../../slices/checks-api';
import { useIsLoadingModal } from '../../hooks/use-is-loading-modal';
import { useSnackbar } from '../../hooks/use-snackbar';
import { Check } from '../../components/order/check/check';

const Checks = () => {
  const router = useRouter();

  // const [isLoading, setIsLoading] = useState(false);
  // const [isShowingAlert, setIsShowingAlert] = useState(false);

  const { checks } = useSelector(selectChecksState);

  const [activeChecks, setActiveChecks] = useState<ICheck[]>([]);
  const [checksFromBE, setChecksFromBE] = useState<ICheck[]>([]);

  const {
    data: checksData,
    isLoading: isLoadingChecksQuery,
    isSuccess: isSuccessChecksQuery,
  } = useGetChecksQuery();

  useIsLoadingModal(isLoadingChecksQuery, 'Loading...');
  useSnackbar(isSuccessChecksQuery, 'Retrieved data successfully!', 'success');

  useEffect(() => {
    if (isSuccessChecksQuery) {
      setChecksFromBE(checksData.checks);
    }
  }, [checksData]);

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
            fontWeight: 900,
          }}
        >
          Active checks
        </Typography>
      </Grid>
      <Grid item container justifyContent='space-around'>
        {activeChecks.length > 0
          ? activeChecks.map((check) => {
            return <Check key={check.id} check={check} />;
          })
          : null}
      </Grid>

      <Grid item xs={10} md={10} mt={5} textAlign='center'>
        <Typography
          variant='h4'
          sx={{
            color: 'secondary.main',
            fontWeight: 900,
          }}
        >
          Checks made:
        </Typography>
      </Grid>
      <Grid item container justifyContent='space-around'>
        {checksFromBE.length > 0
          ? checksFromBE.map((check) => {
            return <Check key={check.id} check={check} />;
          })
          : null}
      </Grid>
    </Grid>
  );
};
export default Checks;
