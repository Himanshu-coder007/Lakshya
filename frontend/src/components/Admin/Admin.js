import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './HomePage/HomePage.js';

const Admin = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
    </Routes>
  )
}

export default Admin