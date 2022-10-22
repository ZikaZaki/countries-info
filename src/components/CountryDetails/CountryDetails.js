import React from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

// Import Styling
import styles from './CountryDetails.module.css';

const CountryDetails = () => {
  const countryDetails = useSelector((state) => state.details);

  return (
    <div className={styles['details-container']}>
      <div className={styles['country-map']}>
        <img src={countryDetails.flag} alt="Country Map" />
      </div>
      <div className={styles.headline}>
        <h2>
          {countryDetails.continent}
          /
          {countryDetails.commonName}
          {' '}
          Details
        </h2>
      </div>
      <div className={styles['details-list']}>
        <div className={styles['list-item']}>
          <h2>
            Common Name:
            {countryDetails.commonName}
          </h2>
          <HiOutlineArrowCircleRight />
        </div>
        <div className={styles['list-item']}>
          <h2>
            Official Name:
            {countryDetails.officialName}
          </h2>
          <HiOutlineArrowCircleRight />
        </div>
        <div className={styles['list-item']}>
          <h2>
            Capital:
            {countryDetails.capital}
          </h2>
          <HiOutlineArrowCircleRight />
        </div>
        <div className={styles['list-item']}>
          <h2>
            Population:
            {countryDetails.population}
          </h2>
          <HiOutlineArrowCircleRight />
        </div>
        <div className={styles['list-item']}>
          <h2>
            Area:
            {countryDetails.area}
          </h2>
          <HiOutlineArrowCircleRight />
        </div>
        <div className={styles['list-item']}>
          <h2>
            Timezone:
            {countryDetails.timezone}
          </h2>
          <HiOutlineArrowCircleRight />
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
