import { act, render, screen } from '@testing-library/react';
import App from './App';
import Pagination from './components/Pagination';
test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});

