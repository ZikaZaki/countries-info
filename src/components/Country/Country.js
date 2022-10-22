import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { v4 as uuidv4 } from 'uuid';

// Import Styling
import styles from './Country.module.css';

const Country = ({
  id = uuidv4(),
  //   officialName,
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
    <div className={styles['country-card']} key={id}>
      <div className={styles['country-map']}>
        {/* <iframe

        src={map[0]} >
      </iframe> */}
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
  id: PropTypes.number.isRequired,
  //   officialName: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  //   map: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
