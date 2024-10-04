import Layout from './comman/Layout'
import AboutUs from './page/AboutUs';
import CampusLife from './page/CampusLife';
import Contact from './page/Contact';
import Courses from './page/Courses';
import Home from './page/Home';


import { BrowserRouter, Routes, Route } from 'react-router-dom'


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




        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
