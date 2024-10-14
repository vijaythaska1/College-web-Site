import { useEffect } from 'react';

import Layout from './comman/Layout'
import AboutUs from './page/AboutUs';
import CampusLife from './page/CampusLife';
import Contact from './page/Contact';
import Courses from './page/Courses';
import Home from './page/Home';


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VirtualTour from './page/VirtualTour';
import ScheduleCampusVisit from './page/ScheduleCampusVisit';
import SingleCourseView from './page/SingleCourseView';


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/CampusLife' element={<CampusLife />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/VirtualTour' element={<VirtualTour />} />
          <Route path='/ScheduleCampusVisit' element={<ScheduleCampusVisit />} />
          <Route path='/SingleCourseView' element={<SingleCourseView />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
