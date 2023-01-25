import { AlertColor } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAlertInfo } from '../slices/alert-info-slice';

/**
 * @desc Hook used for showing the alerts in a snackbar
 * @param {isActive, message, type}
 */
export const useSnackbar = (
  isActive: boolean,
  message: string,
  type: AlertColor
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive) {
      dispatch(setAlertInfo({ message: message, alertType: type }));
    }
  }, [isActive]);
};
