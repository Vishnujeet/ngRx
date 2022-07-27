import { createFeatureSelector } from '@ngrx/store';
import * as auth from './reducers/auth.reducer';
import * as carData from './reducers/car-data.reducer';


export interface IAppState {
  auth: auth.IState,
  carData:carData.IState
}

export const appReducers = {
  auth: auth.reducer,
  carData:carData.reducer
}

export const selectCarServiceState = createFeatureSelector<IAppState>('appReducers');