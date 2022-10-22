import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import continentsReducer, { getContinents } from './continents/continents';
import countriesReducer, { fetchCountries } from './countries/countries';

const rootReducer = combineReducers({
  continents: continentsReducer,
  countries: countriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { getContinents, fetchCountries };

export default store;
