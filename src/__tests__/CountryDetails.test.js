import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CountryDetails from '../components/CountryDetails/CountryDetails';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if the component has changed', async () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <CountryDetails />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check if the component container is there', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CountryDetails />
      </BrowserRouter>
    </Provider>,
  );
  const container = await screen.findByTestId('details-container');
  expect(container).toBeInTheDocument();
});
