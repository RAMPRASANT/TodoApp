import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const todoHeader = screen.getByText('Todo Items');
  expect(todoHeader).toBeInTheDocument();
});
