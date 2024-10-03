import Layout from './comman/Layout'
import HomePage from './page/Home';


import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<Layout />} >
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
