import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContinents } from '../../redux/configureStore';
import world from '../../assets/images/World.svg';
import Continent from '../Continent/Continent';

// Import Styling
import styles from './Homepage.module.css';

const Homepage = () => {
  const countries = useSelector((state) => state.countries);
  const continents = useSelector((state) => state.continents);

  const dispatch = useDispatch();
  const filterContinents = (e) => {
    dispatch(getContinents(e.target.value));
  };

  console.log(countries);
  console.log(continents);

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
            onChange={filterContinents}
            placeholder="Select Your Continent"
            name="continent"
            className="button"
          >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
          </select>
        </label>
      </div>
      <div className={styles['continent-list']}>
        {continents.map((continent) => (
          <div
            key={continent.id}
            className={styles['list-item']}
          >
            <Continent
              name={continent.name}
              area={continent.area}
              countries={continent.countries}
              map={continent.map}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
