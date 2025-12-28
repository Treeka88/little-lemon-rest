import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { initializeTimes, updateTimes } from './App';
import { fetchData } from './Api';
import BookingForm from './components/BookingForm';


// testing the initializeTimes and updateTimes functions
// jest.mock('./Api', () => ({
//   fetchData: jest.fn(),
// }));

// test('initializeTimes calls fetchData with today\'s date', () => {
//   const today = new Date();
//   const mockTimes = ['17:00', '18:00', '19:00'];
//   fetchData.mockReturnValue(mockTimes);

//   const times = initializeTimes();

//   expect(fetchData).toHaveBeenCalledWith(today);
//   expect(times).toBe(mockTimes);
// }
// );

// test('updateTimes calls fetchData with the correct date', () => {
//   const mockTimes = ['17:00', '18:00', '19:00'];
//   fetchData.mockReturnValue(mockTimes);

//   const action = { type: 'UPDATE_TIMES', date: '2024-12-30' };
//   const expectedDate = new Date('2024-12-30');

//   const times = updateTimes([], action);

//   expect(fetchData).toHaveBeenCalledWith(expectedDate);
//   expect(times).toBe(mockTimes);
// }
// );


// testing the BookingForm component
const mockProps = {
  date: '1-12-2025',
  setDate: jest.fn(),
  time: '10:00',
  setTime: jest.fn(),
  guests: '3',
  setGuests: jest.fn(),
  occasion: 'casual meeting',
  setOccasion: jest.fn(),
  availableTimes: ['17:00', '18:00', '19:00'],
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};

   // testing the button is disabled when required fields are empty
    // test('submit button is disabled when required fields are empty', () => {
    //   render(<BookingForm{...mockProps}
    //     guests={'how many guests?'}/>)
    //   const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    //   expect(submitButton).toBeDisabled();
    // })



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
