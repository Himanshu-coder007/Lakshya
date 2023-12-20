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
import ViewResults from './ViewResult/Result.js';
import AddSubject from './AddSubject/AddSubject.js';
import UploadCSV from './UploadCSV/UploadCSV.js'

const Teacher = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/viewResult' element={<ViewResults />} />
        <Route path='/addContent' element={<AddContentPage />} />
        <Route path='/addSubject' element={<AddSubject />} />
        <Route path='/uploadCSV' element={<UploadCSV />} />
        <Route path='/generateAssessment' element={<GenerateAssessment />} />
      </Routes>
    </>
  )
}

export default Teacher