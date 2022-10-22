import React from 'react';
import PropTypes from 'prop-types';
import Country from '../Country/Country';
import { v4 as uuidv4 } from 'uuid';

// Import Styling
import styles from './CountryList.module.css';

const CountryList = ({ countries }) => (
  <div className={styles['country-list']}>
    {countries.map((country) => (
      <Country
        id={uuidv4()}
        commonName={country.commonName}
        continent={country.continent}
        officialName={country.officialName}
        capital={country.capital}
        area={country.area}
        population={country.population}
            // map={country.map}
        flag={country.flag}
      />
    ))}
  </div>
);

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default CountryList;
