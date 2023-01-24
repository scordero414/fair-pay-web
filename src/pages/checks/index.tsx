import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { routesConstants } from '../../constants/routes-constants';

const Checks = () => {
  const router = useRouter();

  // const [isLoading, setIsLoading] = useState(false);
  // const [isShowingAlert, setIsShowingAlert] = useState(false);

  // useIsLoadingModal(isLoading, 'Loading...');
  // useSnackbar(isShowingAlert, 'Testing out the snackbar', 'success');
  return (
    <Grid container justifyContent='center' pt={5}>
      <Grid xs={10} md={4}>
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
      {/* <Button
        color='secondary'
        onClick={() => setIsShowingAlert((prev) => !prev)}
      >
        Click here to show Alert
      </Button> */}
    </Grid>
  );
};
export default Checks;
