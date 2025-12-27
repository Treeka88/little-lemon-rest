import { render, screen } from '@testing-library/react';
import App from './App';
import { initializeTimes, updateTimes } from './App';
import { fetchData } from './Api';

jest.mock('./Api', () => ({
  fetchData: jest.fn(),
}));

test('initializeTimes calls fetchData with today\'s date', () => {
  const today = new Date();
  const mockTimes = ['17:00', '18:00', '19:00'];
  fetchData.mockReturnValue(mockTimes);

  const times = initializeTimes();

  expect(fetchData).toHaveBeenCalledWith(today);
  expect(times).toBe(mockTimes);
}
);

test('updateTimes calls fetchData with the correct date', () => {
  const mockTimes = ['17:00', '18:00', '19:00'];
  fetchData.mockReturnValue(mockTimes);

  const action = { type: 'UPDATE_TIMES', date: '2024-12-30' };
  const expectedDate = new Date('2024-12-30');

  const times = updateTimes([], action);

  expect(fetchData).toHaveBeenCalledWith(expectedDate);
  expect(times).toBe(mockTimes);
}
);

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
