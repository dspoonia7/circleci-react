import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello CircleCi', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello CircleCi/i);
  expect(linkElement).toBeInTheDocument();
});
