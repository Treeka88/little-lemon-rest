import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Specials from './components/Specials';
import Nav from './components/Nav';
import LogIn from './components/LogIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Router>
        <Nav/>
        <Routes className=''>
          <Route path='/' element={<Header name='Little Lemon' state='Chicago'/>}></Route>
          <Route path='/Specials' element={<Specials/>}></Route>
          <Route path='/Footer' element={<Footer/>}></Route>
          <Route path='/LogIn' element={<LogIn/>}></Route>
        </Routes>
      </Router>
    </div>
  )
    }

export default App;
