import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// COUNTRY-DETAILS API
const countryURL = 'https://restcountries.com/v3.1/name/';

// Actions
const GET_DETAILS = 'countries-info/countries/getCountryDetails';

export const fetchCountryDetails = createAsyncThunk(
  GET_DETAILS,
  async (name) => {
    try {
      const response = await axios.get(countryURL + name);
      return response;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {};

export const countryDetailsSlice = createSlice({
  name: 'details',
  initialState,
//   reducers: {
//     deleteDetails: () => initialState,
//   },
  extraReducers: (builder) => {
    builder.addCase(fetchCountryDetails.fulfilled, (state, action) => {
      const country = action.payload.data[0];
      return {
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
      };
    });
  },
});

// export const { deleteDetails } = countryDetailsSlice.actions;
export default countryDetailsSlice.reducer;
