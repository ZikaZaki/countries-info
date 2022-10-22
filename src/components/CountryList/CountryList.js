import React from 'react';
import PropTypes from 'prop-types';
import Country from '../Country/Country';

// Import Styling
import styles from './CountryList.module.css';

const CountryList = ({ countries }) => (
  <div className={styles['country-list']}>
    {countries.map((country) => (
      <Country
        key={country.id}
        commonName={country.commonName}
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
