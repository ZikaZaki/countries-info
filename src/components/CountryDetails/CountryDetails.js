import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


// Import Styling
import styles from './CountryDetails.module.css';

const CountryDetails = () => {
    const countryDetails = useSelector((state) => state.details);
    const dispatch = useDispatch();
    console.log('frommmmmmmmmm',countryDetails);
    return (
        <div className={styles['details-container']}>
          <h2>Country Details</h2>
          <div className={styles['country-details-info']}>
              {countryDetails.commonName}
          </div>
        </div>
      );
};

export default CountryDetails;