import { AlertColor } from '@mui/material';

export interface IAlertInfoState {
  message: string;
  isActive: boolean;
  alertType: AlertColor,
}

export interface ISetAlertInfoPayload {
  message: string,
  alertType: AlertColor,
}