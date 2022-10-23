import store, { fetchCountries, fetchCountryDetails } from '../redux/configureStore';

const yemen = {
  officialName: 'Republic of Yemen',
  commonName: 'Yemen',
  continent: 'Asia',
  currency: undefined,
  flag: 'https://flagcdn.com/ye.svg',
  language: {
    ara: 'Arabic',
  },
  map: {
    googleMaps: 'https://goo.gl/maps/WCmE76HKcLideQQw7',
    openStreetMaps: 'https://www.openstreetmap.org/relation/305092',
  },
  capital: 'Sana\'a',
  area: 527968,
  population: 29825968,
  coatOfArms: {
    png: 'https://mainfacts.com/media/images/coats_of_arms/ye.png',
    svg: 'https://mainfacts.com/media/images/coats_of_arms/ye.svg',
  },
  timezone: 'UTC+03:00',
};

describe('test the store', () => {
  it('check if the store is initially empty array', () => {
    expect(store.getState().countries).toEqual([]);
  });

  it('check if the store is populated after getCountries action is dispatched ', async () => {
    await store.dispatch(fetchCountries());
    expect(store.getState().countries.length).toBeGreaterThan(10);
  });
  it('check if the store is populated after getCountries action is dispatched ', async () => {
    await store.dispatch(fetchCountryDetails('yemen'));
    expect(store.getState().details).toEqual(yemen);
  });
});
