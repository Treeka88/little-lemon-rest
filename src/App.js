import React, { useState, useReducer } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Specials from './components/Specials';
import Nav from './components/Nav';
import LogIn from './components/LogIn';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchData } from './Api.js';

// const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00'];

// const updateTimes = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_TIMES':
//       return initializeTimes(); // For now, return the same available times regardless of date
//     default:
//       return state;
//   }
// };

const initializeTimes = () => {
  const today = new Date()
  return fetchData(today);
}
const updateTimes = (state, action) => {
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
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className='App'>
      <Router>
        <Nav/>
        <Routes className=''>
          <Route path='/' element={<Header name='Little Lemon' state='Chicago'/>}/>
          <Route path='/Specials' element={<Specials/>}/>
          <Route path='/BookingForm' element={<BookingForm date={date} setDate={setDate} time={time} setTime={setTime} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} availableTimes={availableTimes} dispatch={dispatch} />}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/LogIn' element={<LogIn/>}/>
        </Routes>
      </Router>
    </div>
  )
    }

export default App;
