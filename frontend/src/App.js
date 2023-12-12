import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import ScrollToTop from "./includes/ScrollToTop/ScrollToTop.js"

import Login from './components/Login/Login.js';
import Student from './components/Student/Student';
import Teacher from './components/Teacher/Teacher';
import Admin from './components/Admin/Admin';
import Parent from './components/Parent/Parent';
import MOE from './components/MOE/MOE';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/student/*' element={<Student />} />
          <Route path='/teacher/*' element={<Teacher />} />
          <Route path='/admin/*' element={<Admin />} />
          <Route path='/parent/*' element={<Parent />} />
          <Route path='/moe/*' element={<MOE />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
