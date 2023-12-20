import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './HomePage/HomePage.js';
import Navbar from './Navbar/Navbar.js';
import ViewStudent from './ViewStudents/ViewStudent.js';
import AddContentPage from './AddContent/AddContent.js';
import GenerateAssessment from './GenerateAssessment/GenerateAssessment';

const Teacher = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route index path='/' element={<AddContentPage />} />
        <Route path='/viewStudent' element={<ViewStudent />} />
        <Route path='/addContent' element={<AddContentPage />} />
        <Route path='/generateAssessment' element={<GenerateAssessment />} />
      </Routes>
    </>
  )
}

export default Teacher