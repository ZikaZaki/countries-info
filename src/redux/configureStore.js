import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer, { fetchCountries } from './countries/countries';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { fetchCountries };

export default store;
