import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import Home from './HomePage/HomePage.js';
import ScreeningTest from './ScreeningTest/ScreeningTest.js';
import SeperateSubject from './SeperateSubject/SeperateSubject.js';
import ResultPage from './ResultPage/ResultPage.js';
import Quiz from './Quiz/Quiz.js';
import QuizFinal from './Quiz/QuizFinal.js'
import ContentPage from './ContentPage/ContentPage.js';

const Student = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/seperateSubject/:id' element={<SeperateSubject />} />
      <Route path='/screeningTest' element={<ScreeningTest />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/finalResult' element={<QuizFinal />} />
      <Route path='/contentPage/:id' element={<ContentPage />} />
      <Route path='/result/:responses' element={<ResultPage />} />
    </Routes>
  )
}

export default Student