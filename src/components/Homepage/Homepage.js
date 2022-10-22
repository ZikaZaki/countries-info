import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/configureStore';
import CountryList from '../CountryList/CountryList';
import world from '../../assets/images/World.svg';

// Import Styling
import styles from './Homepage.module.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [filter, setFilter] = useState('');
  const filterCountries = (e) => {
    if( e.target.value === 'All' ) {
      setFilter(countries);
    }else {
      setFilter(countries.filter((country) => country.continent === e.target.value));
    }
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className={styles['home-container']}>
      <div className={styles['world-map']}>
        <div className={styles.map}>
          <img src={world} alt="World Map" />
        </div>
        <div className={styles['map-info']}>
          <h2>WORLD MAP</h2>
          <p>
            8,000
            <br />
            countries
          </p>
        </div>
      </div>
      <div className={styles.headline}>
        <h2>STATS BY CONTINENTS</h2>
        <label htmlFor="continents">
          <select
            type="text"
            value="Select Continent"
            onChange={() => console.log('clicked')}
            placeholder="Select Your Continent"
            name="continent"
            className="button"
          >
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
          </select>
        </label>
      </div>
      <CountryList countries={countries} />
      {/* <CountryList countries={filter || countries} /> */}
    </div>
  );
};

export default Homepage;
