import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

// Import Styling
import styles from './CountryDetails.module.css';

const CountryDetails = () => {
  const countryDetails = useSelector((state) => state.details);
  const dispatch = useDispatch();
  console.log(countryDetails);
console.log(countryDetails.continent);
console.log(countryDetails.commonName);
console.log(countryDetails.officialName);
console.log(countryDetails.population);
console.log(countryDetails.area);
console.log(countryDetails.flag);
console.log(countryDetails.capital);
console.log(countryDetails.timezone);
console.log(countryDetails.language);
  return (

    <div className={styles['details-container']}>
      <div className={styles['country-map']}>
          <img src={countryDetails.flag} alt="Country Map" />
      </div>
      <div className={styles.headline}>
        <h2>{countryDetails.continent}/{countryDetails.commonName} Details</h2>
      </div>
      <div className={styles['details-list']}>
        <div className={styles['list-item']}>
          <h2>Common Name: {countryDetails.commonName}</h2>
          <HiOutlineArrowCircleRight />
        </div>
        <div className={styles['list-item']}>
          <h2>Official Name: {countryDetails.officialName}</h2>
          <HiOutlineArrowCircleRight />
        </div>
        <div className={styles['list-item']}>
          <h2><strong>Capital: </strong>{countryDetails.capital}</h2>
          <HiOutlineArrowCircleRight />
        </div>
        <div className={styles['list-item']}>
          <h2>Population: {countryDetails.population}</h2>
          <HiOutlineArrowCircleRight />
        </div>
        <div className={styles['list-item']}>
          <h2>Area: {countryDetails.area}</h2>
          <HiOutlineArrowCircleRight />
        </div>
        <div className={styles['list-item']}>
          <h2>Timezone: {countryDetails.timezone}</h2>
          <HiOutlineArrowCircleRight />
        </div>
      </div>
    </div>
    // /////////////////
    // <div className={styles['details-container']}>
    //   <h2>Country Details</h2>
    //   <div className={styles['country-details-info']}>
    //     {countryDetails.commonName}
    //   </div>
    // </div>
  );
};

export default CountryDetails;
