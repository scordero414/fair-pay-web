import { combineReducers } from '@reduxjs/toolkit';
import alertInfoReducer from '../slices/alert-info-slice';
import loadingModalReducer from '../slices/loading-modal-slice';
import checksReducer from '../slices/checks-slice';
import { slicesNamesConstants } from '../constants/slices-names';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

const checksConfig = {
  key: slicesNamesConstants.checks,
  storage: sessionStorage,
};

export const rootReducer = combineReducers({
  alertInfo: alertInfoReducer,
  loadingModal: loadingModalReducer,
  checks: persistReducer(checksConfig, checksReducer)
});


