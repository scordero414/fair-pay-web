import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useIsLoadingModal } from '../../hooks/use-is-loading-modal';
import { useSnackbar } from '../../hooks/use-snackbar';

const Checks = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isShowingAlert, setIsShowingAlert] = useState(false);

  useIsLoadingModal(isLoading, 'Loading...');
  useSnackbar(isShowingAlert,'Testing out the snackbar', 'success');
  return (
    <Box width='100%'>
      <Button color='secondary' onClick={()=> setIsLoading((prev) => !prev)}>Click here to show loading</Button>
      <Button color='secondary' onClick={()=> setIsShowingAlert((prev) => !prev)}>Click here to show Alert</Button>
    </Box>
  );
};
export default Checks;
