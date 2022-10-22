import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// COUNTRIES API
const countriesURL = 'https://restcountries.com/v3.1/all';

// Actions
const GET_COUNTRIES = 'countries-info/countries/getCountries';

// Initial State
const initialState = [];

// Creating the thunk for all actions
export const fetchCountries = createAsyncThunk(
  GET_COUNTRIES,
  async () => {
    try {
      const response = await axios.get(countriesURL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

// Creating the slice
export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        const countries = action.payload.map((country) => ({
          continent: country.region,
          commonName: country.name.common,
          officialName: country.name.official,
          capital: country.capital,
          language: country.languages,
          timezone: country.timezones,
          currency: country.currencies,
          area: country.area,
          population: country.population,
          flag: country.flags,
          coatOfArms: country.coatOfArms,
          map: country.maps,
        }));
        return countries;
      });
  },
});

// Exporting the reducer
export default countriesSlice.reducer;
