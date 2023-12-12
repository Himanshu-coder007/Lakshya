import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './HomePage/HomePage.js';
import Navbar from './Navbar/Navbar.js';
import ViewStudent from './ViewStudents/ViewStudent.js';

const Teacher = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/viewStudent' element={<ViewStudent />} />
      </Routes>
    </>
  )
}

export default Teacher