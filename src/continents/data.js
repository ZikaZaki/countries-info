import { v4 as uuidv4 } from 'uuid';
import Aisa from '../assets/images/Asia.svg';
import Africa from '../assets/images/Africa.svg';
import Antarctica from '../assets/images/Antarctica.svg';
import Europe from '../assets/images/Europe.svg';
import Oceania from '../assets/images/Oceania.svg';
import NorthAmerica from '../assets/images/North-America.svg';
import SouthAmerica from '../assets/images/South-America.svg';

const continents = [
  {
    id: uuidv4(),
    name: 'Europe',
    area: 10180000,
    countries: 50,
    map: Aisa,
  },
  {
    id: uuidv4(),
    name: 'Africa',
    area: 30370000,
    countries: 54,
    map: Africa,
  },
  {
    id: uuidv4(),
    name: 'Antarctica',
    area: 14000000,
    countries: 0,
    map: Antarctica,
  },
  {
    id: uuidv4(),
    name: 'Asia',
    area: 44579000,
    countries: 49,
    map: Europe,
  },
  {
    id: uuidv4(),
    name: 'North America',
    area: 24709000,
    countries: 23,
    map: NorthAmerica,
  },
  {
    id: uuidv4(),
    name: 'Oceania',
    area: 8525989,
    countries: 14,
    map: Oceania,
  },
  {
    id: uuidv4(),
    name: 'South America',
    area: 17840000,
    countries: 12,
    map: SouthAmerica,
  },
];

export default continents;
