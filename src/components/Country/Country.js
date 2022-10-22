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
  //   officialName,
  commonName,
  continent,
  // capital,
  // area,
  // population,
  //   map,
  flag,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className={styles['country-card']} key={id}>
      <div className={styles['country-flag']}>
        <img src={flag.png} alt="Country Flag" />
      </div>
      <div className={styles['country-info']}>
        <h2 className={styles['country-name']}>{commonName}</h2>
        <div>
          <p>Continent: {continent}</p>
          {/* <p>
            Capital:
            {capital}
          </p>
          <p>
            Area:
            {area}
          </p>
          <p>
            Population:
            {population}
          </p> */}
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
  //   officialName: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
  // capital: PropTypes.string.isRequired,
  // area: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  //   map: PropTypes.string.isRequired,
  flag: PropTypes.object.isRequired,
};

export default Country;
