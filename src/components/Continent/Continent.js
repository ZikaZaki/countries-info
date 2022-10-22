import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { toggleContinent } from '../../redux/continents/continents';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

// Import Styling
import styles from './Continent.module.css';

const Continent = ({
  id,
  name,
  area,
  countries,
  map,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className={styles['continent-card']}>
      <div className={styles['continent-map']}>
        <img src={map} alt="Continent Map" />
      </div>
      <div className={styles['continent-info']}>
        <h2 className={styles.name}>{name}</h2>
        <div>
          <p>
            countries:
            {countries}
          </p>
          <p>
            area:
            {area}
          </p>
        </div>
      </div>
      <div className={styles['details-btn']}>
        <Link to={`/continents/${id}`}>
          <HiOutlineArrowCircleRight onClick={() => dispatch(handleClick())} />
        </Link>
      </div>
    </div>
  );
};

Continent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  countries: PropTypes.number.isRequired,
  map: PropTypes.string.isRequired,
};

export default Continent;
