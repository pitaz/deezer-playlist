import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import store from './store';

test('renders the Home component', () => {
  render(
    <Provider store={store}>
      <App />
      </Provider>
  );

  const textElement = screen.getByTestId('navbar');
  expect(textElement).toBeInTheDocument();
});
