import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { slicesNamesConstants } from '../constants/slices-names';
import { IAddNewCheckPayload, IChecksState } from '../types/order';

const initialState: IChecksState = {
  checks: [],
};

export const checksSlice = createSlice({
  name: slicesNamesConstants.checks,
  initialState,
  reducers: {
    addNewCheck: (state, action: PayloadAction<IAddNewCheckPayload>) => {
      const { check } = action.payload;
      state.checks.push(check);
    },
  },
});

export const { addNewCheck } = checksSlice.actions;

export const selectChecksState = (state: RootState) => state.checks;

export default checksSlice.reducer;
