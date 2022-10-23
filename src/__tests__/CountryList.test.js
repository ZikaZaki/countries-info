import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CountryList from '../components/CountryList/CountryList';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

const flag = {
  png: 'https://restcountries.eu/data/afg.png',
};

const countries = [
  {
    id: '1',
    commonName: 'Yemen',
    continent: 'Asia',
    png: 'https://restcountries.eu/data/yem.png',
    flag,
  },
  {
    id: '2',
    commonName: 'Yemen',
    continent: 'Asia',
    png: 'https://restcountries.eu/data/yem.png',
    flag,
  },
];

it('Check if the component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <CountryList countries={countries} />
        ,
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check if the component container is there', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CountryList countries={countries} />
      </BrowserRouter>
    </Provider>,
  );
  const container = await screen.findByTestId('countryList-container');
  expect(container).toBeInTheDocument();
});
