import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import Asia from '../../assets/images/Asia.svg';

// Import Styling
import styles from './Country.module.css';

const Country = ({
  officialName,
  commonName,
  capital,
  area,
  population,
//   map,
  flag,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className={styles['country-card']}>
      <div className={styles['country-map']}>
      {/* <iframe
      
        src={map[0]} >
      </iframe> */}
        {/* <img src={map} alt="Country Map" /> */}
        <img src={flag.svg} alt="Country Map" />
      </div>
      <div className={styles['country-info']}>
        <h2 className={styles.name}>{commonName}</h2>
        <div>
          <p>
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
          </p>
        </div>
      </div>
      <div className={styles['details-btn']}>
        {/* <Link to={"/details"}> */}
          <HiOutlineArrowCircleRight onClick={() => dispatch(handleClick())} />
        {/* </Link> */}
      </div>
    </div>
  );
};

Country.propTypes = {
  officialName: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
//   map: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
