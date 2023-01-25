import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { slicesNamesConstants } from '../constants/slices-names';
import { ILoadingModalState } from '../types/loading-modal';

const initialState: ILoadingModalState = {
  isLoading: false,
  description: '',
};

/**
 * @desc Slice which controls the state of the loading modal data
 */
export const loadingModalSlice = createSlice({
  name: slicesNamesConstants.loadingModal,
  initialState,
  reducers: {
    resetLoadingModal: () => {
      return initialState;
    },
    setLoadingModal: (state, action: PayloadAction<ILoadingModalState>) => {
      const { isLoading, description } = action.payload;
      state.isLoading = isLoading;
      state.description = description;
    },
  },
});

export const { resetLoadingModal, setLoadingModal } = loadingModalSlice.actions;

export const selectLoadingModal = (state: RootState): ILoadingModalState =>
  state.loadingModal;

export default loadingModalSlice.reducer;
