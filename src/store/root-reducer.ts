import { combineReducers } from '@reduxjs/toolkit';
import alertInfoReducer from '../slices/alert-info-slice';
import loadingModalReducer from '../slices/loading-modal-slice';

export const rootReducer = combineReducers({
  alertInfo: alertInfoReducer,
  loadingModal: loadingModalReducer
});


