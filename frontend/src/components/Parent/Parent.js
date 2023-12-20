import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import Home from './HomePage/HomePage.js';
import ScreeningTest from './ScreeningTest/ScreeningTest.js';
import ResultPage from './ResultPage/ResultPage.js';

const Parent = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/ScreeningTest' element={<ScreeningTest />} />
      <Route path='/result/:responses' element={<ResultPage />} />
    </Routes>
  )
}

export default Parent