import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import Home from './HomePage/HomePage.js';

const Parent = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/ScreeningTest' element={<Home />} />
    </Routes>
  )
}

export default Parent