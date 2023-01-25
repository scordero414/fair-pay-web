import { Box, styled } from '@mui/material';
import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert, selectAlertState } from '../../slices/alert-info-slice';
import { selectLoadingModal } from '../../slices/loading-modal-slice';
import LoadingModal from '../loading-modal';
import { Navbar } from '../navbar/navbar';
import SnackbarInfo from '../snackbar-info';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  backgroundColor: theme.palette.primary.main,
}));

interface IMainLayoutProps {
  children?: ReactNode;
}

const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;

  const dispatch = useDispatch();

  const {
    isLoading,
    description: loadingModalDescription,
  } = useSelector(selectLoadingModal);

  const { message, isActive, alertType } = useSelector(selectAlertState);

  const onCloseErrorSnackbar = (
    event?: Event | React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(clearAlert());
  };


  return (
    <MainLayoutRoot>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box justifyContent='center' width='90%'>
          {children}
        </Box>
        <SnackbarInfo
          title={message}
          open={isActive}
          alertType={alertType}
          onClose={onCloseErrorSnackbar}
        />

        <LoadingModal
          isLoading={isLoading}
          description={loadingModalDescription}
        />
      </Box>
    </MainLayoutRoot>
  );
};

export default MainLayout;
