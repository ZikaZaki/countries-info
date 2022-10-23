import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Country from '../components/Country/Country';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if Item component has changed', () => {
  const flag = {
    png: 'https://restcountries.eu/data/afg.png',
  };
  const country = {
    id: '1',
    commonName: 'Yemen',
    continent: 'Asia',
    png: 'https://restcountries.eu/data/yem.png',
    flag,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Country country={country} flag={flag} />
        ,
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check if the component container is there', async () => {
  const flag = {
    png: 'https://restcountries.eu/data/afg.png',
  };
  const country = {
    id: '1',
    commonName: 'Yemen',
    continent: 'Asia',
    png: 'https://restcountries.eu/data/afg.png',
    flag: {
      png: 'https://restcountries.eu/data/afg.png',
      svg: 'https://restcountries.eu/data/afg.svg',
    },
  };
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Country country={country} flag={flag} />
      </BrowserRouter>
    </Provider>,
  );
  const container = await screen.findByTestId('country-container');
  expect(container).toBeInTheDocument();
});
