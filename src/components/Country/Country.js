import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { fetchCountryDetails } from '../../redux/configureStore';

// Import Styling
import styles from './Country.module.css';

const Country = ({
  id,
  commonName,
  continent,
  flag,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles['country-card']} key={id} data-testid="country-container">
      <div className={styles['country-flag']}>
        <img src={flag.png} alt="Country Flag" />
      </div>
      <div className={styles['country-info']}>
        <h2 className={styles['country-name']}>{commonName}</h2>
        <div>
          <p>
            Continent:
            {continent}
          </p>
        </div>
      </div>
      <div className={styles['details-btn']}>
        <Link to="/details" onClick={() => dispatch(fetchCountryDetails(commonName))}>
          <HiOutlineArrowCircleRight />
        </Link>
      </div>
    </div>
  );
};

Country.propTypes = {
  id: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
