import { Alert, AlertColor, Snackbar, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface ISnackbarAlertProps {
  alertType: AlertColor;
}

const SnackbarIcon = ({ alertType }: ISnackbarAlertProps) => {
  switch (alertType) {
  case 'success':
    return <CheckCircleOutlineIcon color='secondary' />;
  case 'error':
  default:
    return <ErrorOutlineIcon color='info' />;
  }
};

interface ISnackbarInfoProps {
  title: string;
  open: boolean;
  onClose: (event?: Event | React.SyntheticEvent, reason?: string) => void;
  alertType: AlertColor;
}

/**
 * Snackbar used to show an error in the bottom right side of the screen
 *
 * @param title message to show in the snackbar
 * @param open determines if the snackbar is open
 * @param onClose the method that triggers when the snackbar is closed
 * @param alertType variation of the alert
 *
 * @return {Component JSX}
 */
const SnackbarInfo = ({
  title,
  open,
  onClose,
  alertType,
}: ISnackbarInfoProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={+(process.env.NEXT_PUBLIC_SHOW_ALERT_SECONDS as string)}
      onClose={onClose}
    >
      <Alert
        variant='filled'
        onClose={onClose}
        severity={alertType}
        icon={<SnackbarIcon alertType={alertType} />}
      >
        <Typography variant='body1'>{title}</Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarInfo;
