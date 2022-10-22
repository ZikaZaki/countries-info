import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer, { fetchCountries } from './countries/countries';
import countryDetailsReducer, { fetchCountryDetails } from './countrydetails/countrydetails';

const rootReducer = combineReducers({
  countries: countriesReducer,
  details: countryDetailsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});

export { fetchCountries, fetchCountryDetails };

export default store;
