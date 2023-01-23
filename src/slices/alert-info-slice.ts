import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { IAlertInfoState, ISetAlertInfoPayload } from '../types/alert-info';

const initialState: IAlertInfoState = {
  message: '',
  isActive: false,
  alertType: 'error'
};

export const alertInfoSlice = createSlice({
  name: 'alertInfo',
  initialState,
  reducers: {
    setAlertInfo: (state, action: PayloadAction<ISetAlertInfoPayload>) => {
      const { message, alertType } = action.payload;
      state.message = message;
      state.alertType = alertType;
      state.isActive = true;
    },
    clearAlert: (state) => {
      state.isActive = false;
    },
  },
});

export const { setAlertInfo, clearAlert } =
  alertInfoSlice.actions;

export const selectAlertState = (state: RootState) => state.alertInfo;

export default alertInfoSlice.reducer;
