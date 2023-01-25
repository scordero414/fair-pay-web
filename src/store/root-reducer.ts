import { combineReducers } from '@reduxjs/toolkit';
import alertInfoReducer from '../slices/alert-info-slice';
import loadingModalReducer from '../slices/loading-modal-slice';
import checksReducer from '../slices/checks-slice';
import { slicesNamesConstants } from '../constants/slices-names';
import { persistReducer } from 'redux-persist';
// import sessionStorage from 'redux-persist/lib/storage/session';
import localStorage from 'redux-persist/lib/storage';
import { checksApi } from '../slices/checks-api';

const checksConfig = {
  key: slicesNamesConstants.checks,
  storage: localStorage,
};

export const rootReducer = combineReducers({
  alertInfo: alertInfoReducer,
  loadingModal: loadingModalReducer,
  checks: persistReducer(checksConfig, checksReducer),
  [checksApi.reducerPath]: checksApi.reducer,
});


