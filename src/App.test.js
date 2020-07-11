import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/kontak/i);
  const linkElementabout = getByText(/tentang/i);

  expect(linkElement).toBeInTheDocument();
  expect(linkElementabout).toBeInTheDocument();

});
