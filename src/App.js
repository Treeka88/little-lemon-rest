import React, { useState, useReducer } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Specials from './components/Specials';
import Nav from './components/Nav';
import LogIn from './components/LogIn';
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './components/ConfirmedBooking.js';
import { fetchData, submitAPI } from './Api.js';
// const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00'];

// const updateTimes = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_TIMES':
//       return initializeTimes(); // For now, return the same available times regardless of date
//     default:
//       return state;
//   }
// };

export const initializeTimes = () => {
  const today = new Date()
  return fetchData(today);
}
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchData(new Date(action.date));
    default:
      return state;
  }
}

function App() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
        navigate('/ConfirmedBooking');
    }
  };


  return (
    <div className='App'>
        <Nav/>
        <Routes className=''>
          <Route path='/' element={<Header name='Little Lemon' state='Chicago'/>}/>
          <Route path='/Specials' element={<Specials/>}/>
          <Route path='/BookingForm' element={<BookingForm date={date} setDate={setDate} time={time} setTime={setTime} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />}/>
          <Route path='/ConfirmedBooking' element={<ConfirmedBooking/>}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/LogIn' element={<LogIn/>}/>
        </Routes>
    </div>
  )
    }

export default App;
